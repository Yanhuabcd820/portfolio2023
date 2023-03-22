<script>
import { useStore } from "vuex";
import { onMounted, computed, watch, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const ifDone = computed(() => store.getters.ifDone);
    console.log('ifDone-loadingVue', ifDone.value)
    return {
      ifDone
    };
  },
};
</script>
<template>
   <div class="loading-show" v-show="!ifDone" >
      <div class="loading-img">
        <img class="loading" src="@/assets/images/loading.gif" alt="">

      </div>
    </div>
</template>
<style scoped>

.loading-show{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0px;
  left:0px;
  z-index: 999999;
  top: 0%;
  left: 0%;
  background: #fff;
}
.loading-img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:100px;
  height: 100px;
  margin: 0 auto;
}
.loading{
  width: 100%;
}
</style>
