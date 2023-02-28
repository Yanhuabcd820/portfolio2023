<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const work_filter = reactive();
    const work_list = reactive([
      {
        name: "作品集網站",
        category: "網頁設計",
        category_id: 1,
        description: `將自己過往的作品集整理後露出，使用 vue 框架作為製作。`,
        responsible: `
        Vue3、切版 (html/css/Javascript)、UI/UX 設計`,
        gitHub: "#",
        demo: "#",
        image: "https://tome20.com/yh/images/works1-1-cover.jpg",
        content_images: [],
      },
      {
        name: "Simple Twitter",
        category: "網頁設計",
        category_id: 1,
        description: `Simple Twitter 是我們在 Alpha Camp 的畢業專案，是類似於 Twitter 的簡易社群平台，共由 2 位前端及 2 位後端共同遠端協作完成開發，採前後端分離的開發方式，並於 14 天內完成。`,
        responsible: `
        Vue.js、Vuex、Axios、切版 (html/css/Javascript)`,
        gitHub: "https://github.com/Yanhuabcd820/twitter2022",
        demo: "https://bunreal.github.io/Twitter2022/",
        image: "https://tome20.com/yh/images/works1-2-cover.jpg",
        content_images: [],
      },
      {
        name: "自在老，輕鬆顧 - 屏基高齡照顧服務專區",
        category: "網頁設計",
        category_id: 1,
        description:
          "自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。",
        responsible: `
            Front-end: 切版 (html/css/Javascript)、Vue.js、Vuex、Axios`,
        gitHub: "",
        demo: "https://happyaging.org.tw/",
        image: "https://tome20.com/yh/images/works1-3-cover.jpg",
        content_images: [],
      },
      {
        name: "API 套用練習",
        category: "網頁設計",
        category_id: 1,
        description: `練習串接環保署開放資料API，使用chart.js套件將資料圖表露出。(API 來源：環保署環境資料開放平台)`,
        responsible: `
        Vue3、切版 (html/css/Javascript)`,
        gitHub: "#",
        demo: "#",
        image: "https://tome20.com/yh/images/works1-4-cover.jpg",
        content_images: [],
      },
      {
        name: "畢嘉士基金會 - 募一台不載人的車 募款網頁",
        category: "網頁設計",
        category_id: 1,
        description: `
        畢嘉士基金會長年致力於屏東偏鄉老人服務，根據客戶需求，本網頁使用到 HTML5+Animate CC 製作動畫，讓畫面更生動活潑。`,
        responsible: `
        前端切版 (html/css/Javascript)、UI/UX 設計`,
        gitHub: "",
        demo: "https://homebath.bjorgaas.org.tw/",
        image: "https://tome20.com/yh/images/works1-5-cover.jpg",
        content_images: [],
      },
      {
        name: "頂好 - 自有品牌商品包裝全面升級工程",
        category: "平面設計 / 包裝",
        category_id: 2,
        description: ``,
        responsible: ``,
        gitHub: "",
        demo: "works2-1",
        image: "https://tome20.com/yh/images/works2-1-cover.jpg",
        content_images: [
          "https://tome20.com/yh/images/works2-1-1.jpg",
          "https://tome20.com/yh/images/works2-1-2.jpg",
          "https://tome20.com/yh/images/works2-1-3.jpg",
          "https://tome20.com/yh/images/works2-1-4.jpg",
        ],
      },
      {
        name: "全家 - 內部溝通品牌視覺化設計",
        category: "平面設計 / CIS",
        category_id: 2,
        description: ``,
        responsible: ``,
        gitHub: "",
        demo: "works2-2",
        image: "https://tome20.com/yh/images/works2-2-cover.jpg",
        content_images: [
          "https://tome20.com/yh/images/works2-2-1.jpg",
          "https://tome20.com/yh/images/works2-2-2.jpg",
          "https://tome20.com/yh/images/works2-2-3.jpg",
        ],
      },
      {
        name: "中華奧會 - 國際體育事務人才培訓營 主視覺",
        category: "平面設計 / 活動主視覺",
        category_id: 2,
        description: ``,
        responsible: ``,
        gitHub: "",
        demo: "works2-3",
        image: "https://tome20.com/yh/images/works2-3-cover.jpg",
        content_images: [
          "https://tome20.com/yh/images/works2-3-1.jpg",
          "https://tome20.com/yh/images/works2-3-2.jpg",
          "https://tome20.com/yh/images/works2-3-3.jpg",
          "https://tome20.com/yh/images/works2-3-4.jpg",
        ],
      },
      {
        name: "南山人壽 - 年度形象雙月曆 (提案)",
        category: "平面設計 / 主視覺",
        category_id: 2,
        description: ``,
        responsible: ``,
        gitHub: "",
        demo: "works2-3",
        image: "https://tome20.com/yh/images/works2-4-cover.jpg",
        content_images: [
          "https://tome20.com/yh/images/works2-4-1.jpg",
          "https://tome20.com/yh/images/works2-4-2.jpg",
          "https://tome20.com/yh/images/works2-4-3.jpg",
        ],
      },
    ]);
    return { work_list, work_filter };
  },
};
</script>
<template>
  <div>
    <div class="works">
      <div class="wrap-inner works-inner">
        <h1 class="title">WORKS</h1>
        <div class="category">
          <router-link
            :to="{ name: 'Works', query: { categoryId: 1 } }"
            class="category-btn"
            >網頁設計</router-link
          >
          <router-link
            :to="{ name: 'Works', query: { categoryId: 2 } }"
            class="category-btn"
            >平面設計
          </router-link>
          <router-link
            :to="{ name: 'Works', query: { categoryId: 3 } }"
            class="category-btn"
            >全部
          </router-link>
        </div>
        <div class="works-item-wrap">
          <div class="works-item" v-for="item in work_list" :key="item.image">
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
                <span v-if="item.responsible">主要負責：</span>
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
          <!-- <div class="works-item">
            <div class="works-image">
              <img src="images/works-1-1.jpg" alt="" />
            </div>
            <div class="works-content">
              <div class="works-category">網頁設計</div>
              <div class="works-catch">
                自在老，輕鬆顧 - 屏基高齡照顧服務專區
              </div>
              <div class="works-describe">
                自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。
                <br /><br />
                負責項目：網頁設計、切版
              </div>
              <div class="works-btn-wrap">
                <a href="#" target="_blank" class="works-btn">
                  Github<i class="fal fa-arrow-right"></i>
                </a>
                <a href="#" target="_blank" class="works-btn">
                  <span>DEMO</span> <i class="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="works-item">
            <div class="works-image">
              <img src="images/works-1-1.jpg" alt="" />
            </div>
            <div class="works-content">
              <div class="works-category">網頁設計</div>
              <div class="works-catch">
                自在老，輕鬆顧 - 屏基高齡照顧服務專區
              </div>
              <div class="works-describe">
                自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。
                <br /><br />
                負責項目：網頁設計、切版
              </div>
              <div class="works-btn-wrap">
                <a href="#" target="_blank" class="works-btn">
                  Github<i class="fal fa-arrow-right"></i>
                </a>
                <a href="#" target="_blank" class="works-btn">
                  <span>DEMO</span> <i class="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="works-item">
            <div class="works-image">
              <img src="images/works-1-1.jpg" alt="" />
            </div>
            <div class="works-content">
              <div class="works-category">網頁設計</div>
              <div class="works-catch">
                自在老，輕鬆顧 - 屏基高齡照顧服務專區
              </div>
              <div class="works-describe">
                自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。
                <br /><br />
                負責項目：網頁設計、切版
              </div>
              <div class="works-btn-wrap">
                <a href="#" target="_blank" class="works-btn">
                  Github<i class="fal fa-arrow-right"></i>
                </a>
                <a href="#" target="_blank" class="works-btn">
                  <span>DEMO</span> <i class="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="works-item">
            <div class="works-image">
              <img src="images/works-1-1.jpg" alt="" />
            </div>
            <div class="works-content">
              <div class="works-category">網頁設計</div>
              <div class="works-catch">
                自在老，輕鬆顧 - 屏基高齡照顧服務專區
              </div>
              <div class="works-describe">
                自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。
                <br /><br />
                負責項目：網頁設計、切版
              </div>
              <div class="works-btn-wrap">
                <a href="#" target="_blank" class="works-btn">
                  Github<i class="fal fa-arrow-right"></i>
                </a>
                <a href="#" target="_blank" class="works-btn">
                  <span>DEMO</span> <i class="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.works-inner {
  margin: 140px auto 40px auto;
}
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

.category-btn:hover {
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
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
}
.works-btn > .font-awesome-icon {
  margin-left: 5px;
  transition: 0.8s;
  color: #888;
}
</style>
