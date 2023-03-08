<script>
import { reactive, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const work_list = reactive({
      works: [
        {
          name: "作品集網站",
          category: "網頁設計",
          category_id: 1,
          work_id: "1-1",
          description: `將自己過往的作品集整理後露出，使用 vue 框架作為製作。`,
          responsible: `
        Vue3、切版 (html/css/Javascript)、UI/UX 設計`,
          gitHub: "https://github.com/Yanhuabcd820/portfolio2023",
          demo: "https://yanhuabcd820.github.io/portfolio2023/",
          image: "https://tome20.com/yh/images/works1-1-cover.jpg",
          content_images: [],
          content_description: "",
        },
        {
          name: "Simple Twitter",
          category: "網頁設計",
          category_id: 1,
          work_id: "1-2",
          description: `Simple Twitter 是我們在 Alpha Camp 的畢業專案，是類似於 Twitter 的簡易社群平台，共由 2 位前端及 2 位後端共同遠端協作完成開發，採前後端分離的開發方式，並於 14 天內完成。`,
          responsible: `
        Vue.js、Vuex、Axios、切版 (html/css/Javascript)`,
          gitHub: "https://github.com/Yanhuabcd820/twitter2022",
          demo: "https://bunreal.github.io/Twitter2022/",
          image: "https://tome20.com/yh/images/works1-2-cover.jpg",
          content_images: [],
          content_description: "",
        },
        {
          name: "自在老，輕鬆顧 - 屏基高齡照顧服務專區",
          category: "網頁設計",
          category_id: 1,
          work_id: "1-3",
          description:
            "自在老為屏基地區高齡照顧單位，與客戶討論後，針對版面重新做配置，風格上則使用暖色調性與插畫輔助，使單位更符合溫暖、貼近人群的形象。",
          responsible: `
        前端切版 (html/css/Javascript)、UX 設計`,
          gitHub: "",
          demo: "https://happyaging.org.tw/",
          image: "https://tome20.com/yh/images/works1-3-cover.jpg",
          content_images: [],
          content_description: "",
        },
        {
          name: "API 套用練習",
          category: "網頁設計",
          category_id: 1,
          work_id: "1-4",
          description: `練習串接環保署開放資料API，使用chart.js套件將資料圖表露出。(API 來源：環保署環境資料開放平台)`,
          responsible: `
        Vue3、切版 (html/css/Javascript)`,
          gitHub: "#",
          demo: "#",
          image: "https://tome20.com/yh/images/works1-4-cover.jpg",
          content_images: [],
          content_description: "",
        },
        {
          name: "畢嘉士基金會 - 募一台不載人的車 募款網頁",
          category: "網頁設計",
          category_id: 1,
          work_id: "1-5",
          description: `
        畢嘉士基金會長年致力於屏東偏鄉老人服務，根據客戶需求，本網頁使用到 HTML5+Animate CC 製作動畫，讓畫面更生動活潑。`,
          responsible: `
        前端切版 (html/css/Javascript)、UI/UX 設計`,
          gitHub: "",
          demo: "https://homebath.bjorgaas.org.tw/",
          image: "https://tome20.com/yh/images/works1-5-cover.jpg",
          content_images: [],
          content_description: "",
        },
        {
          name: "頂好 - 自有品牌商品包裝全面升級工程",
          category: "平面設計 / 包裝",
          category_id: 2,
          work_id: "2-1",
          description: ``,
          responsible: ``,
          gitHub: "",
          demo: "/#/worksPage/2-1",
          image: "https://tome20.com/yh/images/works2-1-cover.jpg",
          content_images: [
            "https://tome20.com/yh/images/works2-1-1.jpg",
            "https://tome20.com/yh/images/works2-1-2.jpg",
            "https://tome20.com/yh/images/works2-1-3.jpg",
            "https://tome20.com/yh/images/works2-1-4.jpg",
          ],
          content_description: `經過整理及調查，發現過去的設計，因過於放大Logo，產品名稱反而過小或大小不一，且用色沒有規劃，導致頂好的產品視覺感受不好，進而影響消費者的不信任感，於是在與客戶討論過後，將整個版型做了大調動，並統一所有產品的圖塊比例，放大產品名稱，表示重視消費者的感受，而非品牌本身。色彩計畫上，全系列都使用高明度的色系，提升整體的新鮮感與消費者印象，藉由這次的改造，進而全面升級品牌的識別好感度及信任度。`,
        },
        {
          name: "全家 - 內部溝通品牌視覺化設計",
          category: "平面設計 / CIS",
          category_id: 2,
          work_id: "2-2",
          description: ``,
          responsible: ``,
          gitHub: "",
          demo: "/#/worksPage/2-2",
          image: "https://tome20.com/yh/images/works2-2-cover.jpg",
          content_images: [
            "https://tome20.com/yh/images/works2-2-1.jpg",
            "https://tome20.com/yh/images/works2-2-2.jpg",
            "https://tome20.com/yh/images/works2-2-3.jpg",
          ],
          content_description: "",
        },
        {
          name: "中華奧會 - 國際體育事務人才培訓營 主視覺",
          category: "平面設計 / 活動主視覺",
          category_id: 2,
          work_id: "2-3",
          description: ``,
          responsible: ``,
          gitHub: "",
          demo: "/#/worksPage/2-3",
          image: "https://tome20.com/yh/images/works2-3-cover.jpg",
          content_images: [
            "https://tome20.com/yh/images/works2-3-1.jpg",
            "https://tome20.com/yh/images/works2-3-2.jpg",
            "https://tome20.com/yh/images/works2-3-3.jpg",
            "https://tome20.com/yh/images/works2-3-4.jpg",
          ],
          content_description:
            "利用幾何線條表現「圓融」、「聚焦目標」、「勇往直前」，這些是國際體育事務人才在經過專業的培訓營後所獲得的軟、硬實力，它們提供了強大的後盾，讓體育選手更無拘無束地勇往直前！",
        },
        {
          name: "南山人壽 - 年度形象雙月曆 (提案)",
          category: "平面設計 / 主視覺",
          category_id: 2,
          work_id: "2-4",
          description: ``,
          responsible: ``,
          gitHub: "",
          demo: "/#/worksPage/2-4",
          image: "https://tome20.com/yh/images/works2-4-cover.jpg",
          content_images: [
            "https://tome20.com/yh/images/works2-4-1.jpg",
            "https://tome20.com/yh/images/works2-4-2.jpg",
            "https://tome20.com/yh/images/works2-4-3.jpg",
          ],
          content_description:
            "勇於挑戰就能成長並成為無限自我的養分，月曆內頁中，亦呈現不同極限運動的意象和勉勵金句，時時激勵同仁無論何時都要積極面對挑戰。",
        },
      ],
    });

    const id = route.params.id;
    console.log("id", id);
    const work_data = reactive({ data: [] });
    work_data.data = work_list.works.filter((item) => {
      return item.work_id === id;
    });

    return { work_data };
  },
};
</script>
<template>
  <div>
    <div class="works">
      <div class="wrap-inner works-inner">
        <h1 class="title">WORKS</h1>

        <!-- <div class="reply-title" @click="$router.back()">回上一頁</div>
        <div @click="$router.back()" class="category-btn">網頁前端</div> -->
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
