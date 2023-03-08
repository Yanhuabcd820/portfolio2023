<script></script>
<template>
  <content>
    <div class="wrap-1" id="option1">
      <div class="wrap-inner wrap-1-inner">
        <div class="sec1">
          <div class="avatar">
            <img alt="" src="@/assets/images/avatar.png" />
            <div class="deco-line line1"></div>
          </div>
        </div>
        <div class="sec2">
          <h1 class="title name">黃彥華</h1>
          <ul>
            <li>目前正在尋找前端工程師的職缺。</li>
            <li>
              擁有 4 年網頁設計經驗，熟悉
              Html、CSS、Javascript，具備獨立切版能力。
            </li>
            <li>擁有 6 年平面設計經驗，具設計思維與美感。</li>
            <li>使用 Vue3 前端框架與 Git 版本控制進行多人協作。</li>
            <li>具備與後端人員溝通能力。</li>
            <li>擅與同儕討論問題，進而找出解方。</li>
          </ul>
          <div class="deco-line line2"></div>
        </div>
      </div>

      <div class="wrap1-deco">
        <scroll-parallax :speed="0.5" :left="true" direction="x">
          <div class="wrap1-deco-inner">
            <div class="deco-font intro">
              Hi, I am Yan Hua. Hi, I am Yan Hua. Hi, I am Yan Hua. Hi, I am Yan
              Hua. Hi, I am Yan Hua.
            </div>
          </div>
        </scroll-parallax>
      </div>
    </div>
    <div class="wrap-2" id="option2">
      <div class="wrap-inner wrap-2-inner">
        <h1 class="title">專業技能</h1>
        <div class="skill-wrap">
          <div class="skill skill-1">
            <div class="skill-item">
              <div class="skill-img">
                <img alt="" src="@/assets/images/skill-icon1.png" />
              </div>
              <div class="skill-word">
                <div class="skill-catch">網頁前端</div>
                <div class="skill-software">
                  HTML / CSS / Javascript, RWD, VUE3, Git
                  <div class="skill-line"></div>
                </div>
                <ol class="skill-describe">
                  <li>熟悉 html / CSS / JavaScript</li>
                  <li>熟悉 RWD 跨平台響應式網頁設計</li>
                  <li>使用 Vue3 前端框架</li>
                  <li>前後端分離開發</li>
                  <li>串接 API 資料</li>
                  <li>使用 Git 版本控制進行多人協作</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="skill skill-2">
            <div class="skill-item">
              <div class="skill-img">
                <img alt="" src="@/assets/images/skill-icon2.png" />
              </div>
              <div class="skill-word">
                <div class="skill-catch">UI/UX 網頁設計</div>
                <div class="skill-software">
                  Wireframe, Figma, Adobe XD, Sketch
                  <div class="skill-line"></div>
                </div>
                <ol class="skill-describe">
                  <li>製作 wireframe 並與客戶溝通討論最佳解決方案</li>
                  <li>為客戶的形象網站或購物平台網站進行設計</li>
                  <li>使用軟體： Figma、XD、Sketch</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="skill skill-3">
            <div class="skill-item">
              <div class="skill-img">
                <img alt="" src="@/assets/images/skill-icon3.png" />
              </div>
              <div class="skill-word">
                <div class="skill-catch">平面設計</div>
                <div class="skill-software">
                  illustrator, Photoshop, InDesign, Animate
                  <div class="skill-line"></div>
                </div>
                <ol class="skill-describe">
                  <li>品牌識別視覺設計</li>
                  <li>獨立製作大型活動視覺、周邊製作物</li>
                  <li>社群媒體行銷圖文排版</li>
                  <li>使用軟體：Illustrator、Photoshop、Indesign、Animate</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="deco-word-wrap">
        <scroll-parallax :speed="-0.5" :left="true" direction="x">
          <div class="deco-word deco-word-1">CREATIVE &</div>
        </scroll-parallax>

        <scroll-parallax :speed="0.5" :left="true" direction="x">
          <div class="deco-word deco-word-2">COORDINATION</div>
        </scroll-parallax>
      </div>
    </div>
    <div class="wrap-3" id="option3">
      <div class="wrap-inner wrap-3-inner">
        <h1 class="title">工作經歷</h1>
        <div class="experience-sec-wrap">
          <div class="experience-sec1">2018/02 - 2022/09</div>
          <div class="experience-sec2">
            <div class="job-title">
              網頁設計師 <span>/ 伯納廣告設計工作室</span>
            </div>
            <ol>
              <li>設計網頁 UI/UX</li>
              <li>RWD 網頁開發（html/css/Javascript）</li>
              <li>與後端工程師溝通後台內容與協調製作時程</li>
              <li>製作電子報</li>
              <li>WordPress 網站建置</li>
              <li>
                服務客戶：Ansys 安矽思科技股份有限公司、Teradata
                天睿資訊公司、屏東基督教醫院、畢嘉士基金會、財團法人多層次傳銷保護基金會
              </li>
            </ol>
          </div>
        </div>
        <div class="experience-sec-wrap">
          <div class="experience-sec1">2016/02 - 2018/02</div>
          <div class="experience-sec2">
            <div class="job-title">
              資深平面設計師 <span>/ 伯納廣告設計工作室</span>
            </div>
            <ol>
              <li>與客戶溝通討論平面設計內容</li>
              <li>製作各式平面設計，例如：CIS、活動主視覺、手冊...等</li>
              <li>發包平面製作物</li>
              <li>協助活動進場</li>
              <li>
                服務客戶：全家便利商店、台灣微軟、Yahoo 雅虎、Ansys
                安矽思科技股份有限公司、中華奧林匹克委員會、關島觀光局
              </li>
            </ol>
          </div>
        </div>
        <div class="experience-sec-wrap">
          <div class="experience-sec1">2010/09 - 2015/11</div>
          <div class="experience-sec2">
            <div class="job-title">
              平面設計師 <span>/ 促動行銷有限公司</span>
            </div>
            <ol>
              <li>
                製作各式平面設計，例如：CIS
                品牌識別、大型活動主視覺、社群媒體行銷圖文排版、手冊...等/li&gt;
              </li>
              <li>發包平面製作物</li>
              <li>協助活動進場</li>
              <li>
                服務客戶：台大醫院、國立清華大學、高雄美術館、聯米企業（中興米）、聯米文化基金會、瑞恩國際股份有限公司
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="deco-word-wrap">
        <scroll-parallax :speed="-0.2" :left="true" direction="x">
          <div class="deco-word deco-word-3">PASSION &</div>
        </scroll-parallax>
        <scroll-parallax :speed="0.2" :left="true" direction="x">
          <div class="deco-word deco-word-4">PURPOSE</div>
        </scroll-parallax>
      </div>
    </div>
    <div class="wrap-4" id="option4">
      <div class="wrap-inner wrap-4-inner">
        <h1 class="title">教育程度</h1>
        <div class="experience-sec-wrap">
          <div class="experience-sec1">2022/01 - 2022/05</div>
          <div class="experience-sec2">
            <div class="edu-title">
              <div class="edu-icon">
                <img src="@/assets/images/edu-icon1.jpg" alt="" />
              </div>
              Alpha Camp <span>/ 前端開發課程</span>
            </div>
            <p>
              2022 年於 Alpha Camp 線上學院完成前端課程，並通過 Twitter 挑戰賽。
            </p>
          </div>
        </div>
        <div class="experience-sec-wrap">
          <div class="experience-sec1">2005/09 - 2009/06</div>
          <div class="experience-sec2">
            <div class="edu-title">
              <div class="edu-icon">
                <img src="@/assets/images/edu-icon2.jpg" alt="" />
              </div>
              實踐大學 <span>/ 資訊模擬與設計學系 學士</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </content>
</template>
<style scoped>
.wrap-1 {
  background-color: var(--main-color);
  padding-top: 80px;
  padding-bottom: 50px;
  position: relative;
  z-index: -1;
  overflow-x: hidden;
}
@media screen and (min-width: 540px) {
  .wrap-1 {
    padding-top: 160px;
  }
}
.wrap-inner.wrap-1-inner {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
.wrap-inner.wrap-1-inner > .sec1 {
  width: 100%;
}
@media screen and (min-width: 768px) {
  .wrap-inner.wrap-1-inner > .sec1 {
    width: 300px;
    margin-right: 60px;
    box-sizing: border-box;
  }
}
.wrap-inner.wrap-1-inner > .sec1 > .avatar {
  width: 200px;
  position: relative;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .wrap-inner.wrap-1-inner > .sec1 > .avatar {
    width: 300px;
    padding: 0px 80px 0px 17px;
  }
}
.deco-line.line1 {
  bottom: 40px;
  left: -30px;
}
@media screen and (min-width: 540px) {
  .deco-line.line1 {
    bottom: 40px;
    left: -80px;
  }
}
.wrap-inner.wrap-1-inner > .sec2 {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}
@media screen and (min-width: 768px) {
  .wrap-inner.wrap-1-inner > .sec2 {
    max-width: calc(100% - 360px);
    margin-top: 0px;
  }
}
.wrap-inner.wrap-1-inner > .sec2 > ul {
  font-weight: 300;
  padding-top: 40px;
  line-height: 30px;
}
.deco-line.line2 {
  top: 50px;
  right: -40px;
  width: 150px;
  position: absolute;
  z-index: -1;
}
@media screen and (min-width: 540px) {
  .deco-line.line2 {
    /* top: 30px;
    right: -300px; */
    width: 250px;
  }
}
.wrap1-deco {
  width: 100%;
  height: 120px;
  margin-top: 60px;
  overflow: hidden;
}
@media screen and (min-width: 540px) {
  .wrap1-deco {
    margin-top: 170px;
  }
}
.wrap1-deco-inner {
  width: 100%;
  height: 120px;
  font-size: 70px;
  padding-left: 130px;
  color: #fff;
  overflow: hidden;
}
@media screen and (min-width: 540px) {
  .wrap1-deco-inner {
    font-size: 114px;
    padding-left: 300px;
  }
}
.deco-font.intro {
  margin-top: 35px;
  width: 4000px;
}
.fa-chevron-down {
  width: 100%;
  display: block;
  font-size: 50px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
}
.wrap-2 {
  width: 100%;
  margin-bottom: 150px;
}
.wrap-2-inner {
  margin: 140px auto 40px auto;
}
@media screen and (min-width: 540px) {
  .wrap-2-inner {
    margin: 140px auto;
  }
}
.skill-wrap {
  display: flex;
  flex-wrap: wrap;
}
.skill {
  width: 100%;
}
@media screen and (min-width: 768px) {
  .skill {
    width: 50%;
  }
  .skill.skill-1 {
    width: 100%;
  }
}
@media screen and (min-width: 991px) {
  .skill.skill-1,
  .skill.skill-2,
  .skill.skill-3 {
    width: 33.33333%;
  }
}
.skill.skill-1 {
  background-color: var(--grayLight);
}
.skill.skill-2 {
  background-color: #fff;
}
.skill.skill-3 {
  background-color: var(--red);
}
.skill-item {
  padding: 55px 50px;
}
.skill-img {
  width: 70px;
}
.skill-word {
  margin-top: 20px;
}
.skill-catch {
  font-size: 26px;
  font-weight: 500;
}
.skill-software {
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 25px;
  position: relative;
}
.skill-line {
  width: 90px;
  border-top: 1px solid var(--grayDark);
  position: absolute;
  bottom: -25px;
  left: 0;
}
ol.skill-describe {
  font-weight: 300;
  padding-top: 25px;
  list-style-position: inside;
}

ol.skill-describe > li::before {
  content: "-";
  display: inline-block;
  width: 1em;
}
.deco-word.deco-word-1,
.deco-word.deco-word-3 {
  font-size: 86px;
  line-height: 86px;
  font-weight: 600;
  padding-left: 300px;
  width: 350px;
}
@media screen and (min-width: 991px) {
  .deco-word.deco-word-1,
  .deco-word.deco-word-3 {
    font-size: 156px;
    line-height: 80px;
    padding-left: 500px;
    width: 650px;
  }
}
.deco-word.deco-word-2,
.deco-word.deco-word-4 {
  font-weight: 100;
  display: flex;
  justify-content: flex-end;
  font-size: 56px;
  line-height: 56px;
  padding-right: 300px;
}

@media screen and (min-width: 991px) {
  .deco-word.deco-word-2,
  .deco-word.deco-word-4 {
    font-size: 156px;
    line-height: 156px;
    padding-right: 200px;
  }
}
.deco-word.deco-word-3 {
  width: 350px;
  padding-left: 400px;
}
@media screen and (min-width: 991px) {
  .deco-word.deco-word-3 {
    width: 600px;
    padding-left: 500px;
  }
}
.deco-word.deco-word-4 {
  margin-right: 500px;
}
@media screen and (min-width: 991px) {
  .deco-word.deco-word-4 {
    margin-right: 200px;
  }
}
.wrap-3 {
  padding-top: 30px;
  padding-bottom: 170px;
}
@media screen and (min-width: 991px) {
  .wrap-3 {
    padding-top: 130px;
  }
}
.job-title,
.edu-title {
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
}
.job-title > span,
.edu-title > span {
  font-size: 17px;
  line-height: 26px;
  font-weight: 700;
}
.experience-sec2 > ol {
  margin-top: 20px;
  margin-left: 1.5rem;
  list-style: square;
}
.experience-sec-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 65px;
}
.experience-sec1 {
  width: 95%;
  font-weight: 700;
  margin-bottom: 5px;
}
@media screen and (min-width: 768px) {
  .experience-sec1 {
    min-width: 190px;
    width: 100%;
    font-weight: 300;
    margin-bottom: 0px;
  }
}
.experience-sec2 > p {
  margin-left: 0px;
}
@media screen and (min-width: 768px) {
  .experience-sec2 > p {
    margin-left: 50px;
  }
}
.edu-title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: 6px;
}
.edu-title > span {
  display: block;
  margin-left: 10px;
}
.edu-icon {
  box-sizing: border-box;
  width: 40px;
  margin-right: 10px;
  position: relative;
  top: -3px;
}

.wrap-4 {
  padding-bottom: 100px;
}
</style>
