<script>
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
export default {
  setup() {
    const store = useStore()
    store.dispatch('ifDoneYet')

    const work_list = computed(()=> store.getters.work_list)
    // const work_filter = {...work_list }
    // const work_filter = ref({})
    // watch(() => work_list.value, (idx) => {
    //   work_filter.value = JSON.parse(JSON.stringify(idx))
    // });
    const work_filter = ref({})
    watch(() => work_list.value, (idx) => {
        work_filter.value = { ...idx }
    });
    console.log('work_filter', work_filter.value)
    const category_id = ref();
    const filterWorks = (category) => {
      category_id.value = category;
      if (category === 3) {
        work_filter.value = work_list.value;
        return;
      }
      work_filter.value = work_list.value.filter((item) => {
        return item.category_id === category;
      }); 

    };
    filterWorks(1);

    setTimeout(() => {
      store.dispatch('ifDoneYes')
    }, 1000)
    return { work_list, filterWorks, work_filter, category_id  };
  },
};
</script>
<template>
  <div class="category">
    <a
      href="javascript:;"
      @click.prevent.stop="filterWorks(1)"
      class="category-btn"
      :class="{ select: category_id === 1 }"
      >網頁前端</a
    >
    <a
      href="javascript:;"
      @click.prevent.stop="filterWorks(2)"
      class="category-btn"
      :class="{ select: category_id === 2 }"
      >平面設計</a
    >
    <a
      href="javascript:;"
      @click.prevent.stop="filterWorks(3)"
      class="category-btn"
      :class="{ select: category_id === 3 }"
      >全部</a
    >
  </div>
  <div class="works-item-wrap">
    <div class="works-item" v-for="item in work_filter" :key="item.image">
      <div class="works-image">
        <img :src="item.image" :alt="item.name" />
      </div>
      <div class="works-content">
        <div class="works-category">{{ item.category }}</div>
        <div class="works-catch">
          {{ item.name }}
        </div>
        <div class="works-describe" v-if="item.description">
          {{ item.description }}
          <br /><br />
          <span v-if="item.responsible">於本專案負責</span>
          {{ item.responsible }}
        </div>
        <div class="works-btn-wrap">
          <a
            :href="item.gitHub"
            v-if="item.gitHub"
            target="_blank"
            class="works-btn"
          >
            Github<font-awesome-icon
              icon="fa-arrow-right"
              class="font-awesome-icon"
            />
          </a>
          <a
            :href="item.demo"
            v-if="item.demo"
            target="_blank"
            class="works-btn"
          >
            <span>DEMO</span>
            <font-awesome-icon
              icon="fa-arrow-right"
              class="font-awesome-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

.category {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
}
.category-btn {
  padding: 12px 20px;
  margin: 0px 10px 10px 0px;
  background-color: #fff;
  border: 1px solid var(--grayDark);
  transition: 0.5s;
  font-weight: 300;
}
@media screen and (min-width: 540px) {
  .category-btn {
    padding: 12px 30px;
    margin: 0px 20px;
  }
}
@media screen and (min-width: 640px) {
  .category-btn {
    margin: 0px 30px;
  }
}

.category-btn:hover,
.category-btn.select {
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  color: #fff;
}
.works-item-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.works-item {
  width: 100%;
  margin-bottom: 120px;
}
@media screen and (min-width: 768px) {
  .works-item {
    width: 47%;
    margin-bottom: 120px;
  }
}
.works-category {
  font-weight: 700;
  margin-bottom: 25px;
  margin-top: 20px;
}
.works-catch {
  font-size: 32px;
  line-height: 40px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--grayDark);
  position: relative;
  /* z-index: 1; */
}
.works-catch::after {
  content: "";
  width: 20%;
  min-width: 300px;
  height: 8px;
  background-color: #fff;
  position: absolute;
  bottom: -4px;
  right: 0;
  /* z-index: 333; */
}
.works-describe {
  margin-bottom: 35px;
}
.works-btn-wrap {
  display: flex;
}
.works-btn {
  display: block;
  padding: 12px 30px;
  margin-right: 10px;
  background-color: #fff;
  transform-origin: left bottom;
  border: 1px solid var(--grayDark);
  position: relative;
  z-index: 1;
}

.works-btn:hover {
  color: #fff;
}
.works-btn::before {
  content: "";
  display: block;
  width: 0%;
  height: 100%;
  background-color: var(--grayDark);
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.5s;
  z-index: -1;
}
.works-btn:hover::before {
  width: 100%;
}

.works-btn:hover > .font-awesome-icon {
  margin-left: 10px;
  transform: rotate(-45deg);
  color: #fff;
}
.works-btn > .font-awesome-icon {
  margin-left: 5px;
  transition: 0.8s;
  color: #888;
}
</style>
