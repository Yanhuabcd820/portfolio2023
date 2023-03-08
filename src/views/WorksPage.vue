<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  props: ["workData"],
  setup(props) {
    const route = useRoute();
    const id = route.params.id; //讀取作品id

    const work_list = props.workData;
    const work_data = reactive({ data: [] });
    work_data.data = work_list.works.filter((item) => {
      return item.work_id === id;
    });

    return { work_data };
  },
};
</script>
<template>
  <div class="works-page">
    <div class="works-page-tag">{{ work_data.data[0].name }}</div>
    <div class="works-page-title">{{ work_data.data[0].name }}</div>
    <div class="works-page-describe">
      {{ work_data.data[0].content_description }}
    </div>
    <div
      class="works-images-wrap"
      v-for="img in work_data.data[0].content_images"
      :key="img"
    >
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
.works-images > img {
  width: 100%;
}
</style>
