<script>
// import { useRoute } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { useWindowSize } from "@vueuse/core";
import { onMounted, watch, ref, reactive } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Footer2 from "@/components/Footer2.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import "@/assets/css/reset.css";
export default {
  components: {
    Header,
    Footer,
    Footer2,
    ScrollParallax,
  },
  setup() {
    const { width } = useWindowSize();
    console.log("widthwidth", width.value);
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      await router.isReady();
      // console.log("route.path ==", route.path == "/contact");
    });
    return { route, width };
  },
};
</script>
<template>
  <body class="body">
    <Header :width="width" />
    <router-view :width="width" />
    <Footer2 v-if="route.path === '/contact'" />
    <Footer v-else />
  </body>
</template>

<style>
html {
  height: 100%;
}
div#app {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Noto Sans TC", sans-serif;
  color: var(--grayDark);
  font-size: 17px;
  font-weight: 300;
  line-height: 26px;
}
.body {
  /* overflow-x: hidden; */
}
a {
  color: var(--grayDark);
  text-decoration: none;
  font-weight: 300;
}
h1.title,
h1.name {
  font-size: 40px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 50px;
}
@media screen and (min-width: 540px) {
  h1.title,
  h1.name {
    font-size: 50px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 90px;
  }
}
h1.name {
  margin-bottom: 0px;
}

.deco-font {
  font-family: "Saira Condensed", sans-serif;
}
.deco-line {
  width: 80px;
  height: 1px;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
}
@media screen and (min-width: 540px) {
  .deco-line {
    width: 180px;
  }
}
.deco-word-wrap {
  width: 100%;
  height: 240px;
  margin-top: -40px;
  overflow: hidden;
}
.deco-word {
  font-family: "Saira Condensed", sans-serif;
  color: var(--gray);
}
@media screen and (min-width: 768px) {
  .deco-word {
    font-family: "Saira Condensed", sans-serif;
    color: var(--gray);
  }
}
.wrap-inner {
  width: 95%;
  max-width: 1110px;
  margin: 0px auto;
}
.router-link-active {
  font-weight: 700;
}
</style>
