<script>
import { onMounted,computed, watch, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore()
    store.dispatch('ifDoneYet')
    const route = useRoute();
    const id = route.params.id; //讀取作品id
    const work_list = computed(() => store.getters.work_list)
    const work_data = ref({})
    watch(() => work_list.value, (idx) => {
      work_data.value = idx.filter((item) => {
        return item.work_id === id;
      });
      getWork(work_data.value[0])
    });
    const work_data_final = ref([])
    const getWork = (val) => {
      work_data_final.value = work_data.value[0]
    }
    onMounted(() => {
      setTimeout(() => {
        store.dispatch('ifDoneYes')
      }, 800)
    })
    return { work_data_final };
  },
};
</script>
<template>
  <div class="works-page">
    <div class="works-page-tag">{{ work_data_final.category }}</div>
    <div class="works-page-title">{{ work_data_final.name }}</div>
    <div class="works-page-describe">
      {{ work_data_final.content_description }}
    </div>
    <div class="works-images-wrap" v-for="img in work_data_final.content_images" :key="img">
      <div class="works-images">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.works-page {
  display: flex;
  flex-direction: column;
}

.works-page-tag {
  font-weight: 700;
  margin-bottom: 25px;
}

.works-page-title {
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 60px;
}

.works-page-describe {
  margin-bottom: 90px;
  text-align: left;
}

.works-images {
  margin-bottom: 70px;
}

.works-images>img {
  width: 100%;
}
</style>