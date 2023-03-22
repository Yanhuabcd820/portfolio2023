<script>
// import { onMounted, reactive, ref, computed } from "vue";
export default {
  setup() {
    return {  };
  },
};
</script>
<template>
    <div class="works">
      <div class="wrap-inner works-inner">
        <h1 class="title">WORKS</h1>
        <router-view></router-view>
      </div>
    </div>

</template>
<style>
.works-inner {
  margin: 140px auto 40px auto;
}
</style>
