<template>
  <body class="body">
    <Header />
    <router-view />
    <Footer />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import "@/assets/css/reset.css";
export default {
  components: {
    Header,
    Footer,
    ScrollParallax,
  },
};
</script>
<style>
body {
  font-family: "Noto Sans TC", sans-serif;
  color: var(--grayDark);
  font-size: 17px;
  font-weight: 300;
  line-height: 26px;
}
.body {
  overflow: hidden;
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
  height: 140px;
  margin-top: -40px;
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
