<script>
import { onMounted, computed,watch, ref } from "vue";
export default {
  name: "Header",
  props: ["width"],
  setup(props) {
    let widthData = ref(props.width); //偵測螢幕寬度
    watch(
      () => props.width,
      (newWidth, oldWidth) => {
        widthData.value = newWidth;
        menuSwitch();
      }
    );
    const isOpen = ref(false);
    const menuSwitch = () => {
      //螢幕寬度有變動就先將click mobile關閉
      isOpen.value = false;
    };
    const menuClick = () => {
      isOpen.value = !isOpen.value;
    };

    const target = ref();
    const sticking = ref(false);
    let options = {
      rootMargin: "100px",//
      threshold: 0,//觸發的比例門檻
    };
    const observer = new IntersectionObserver(([entry]) => {
      sticking.value = !entry.isIntersecting;
    }, options);

    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      target,
      sticking,
      menuClick,
      menuSwitch,
      isOpen,
    };
  },
};
</script>
<template>
  <div id="nav" ref="target"></div>
  <div class="menuBack" :class="{ open: isOpen }"></div>
  <nav id="nav-wrap" class="nav sticky-menu" :class="{ sticking }">
    <div class="nav-inner" :class="{ open: isOpen }">
      <div id="menu" :class="{ menuClose: isOpen }" @click="menuClick">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <div class="menu-bg"></div>
      </div>
      <div class="logo-main">
        <router-link to="/">
          <img src="@/assets/images/logoB.svg" alt="" />
        </router-link>
      </div>
      <div class="navigation">
        <ul>
          <li class="nav-li" @click="menuSwitch">
            <router-link to="/" class="nav-li-inner"
              >About</router-link
            >
          </li>
          /
          <li class="nav-li" @click="menuSwitch">
            <router-link to="/works" class="nav-li-inner"
              >Works</router-link
            >
          </li>
          /
          <li class="nav-li" @click="menuSwitch">
            <a href="./doc/resume.pdf"
              class="nav-li-inner"
              target="_blank"
              >Resume</a
            >
          </li>
          /
          <li class="nav-li" @click="menuSwitch">
            <router-link to="/contact" class="nav-li-inner"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.body.menuStock {
  overflow: hidden;
}
.menuBack.open {
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 55555;
}
nav,
.sticky-menu {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
}

.sticky,
.sticky-menu.sticking {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}
.sticky-menu.sticking .nav-li {
  padding: 15px 0px;
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.nav-inner > .logo-main {
  margin: 35px 0px 35px 5%;
  width: 160px;
}
@media screen and (min-width: 540px) {
  .nav-inner > .logo-main {
    margin: 12px 0px 12px 5%;
  }
}

.navigation {
  font-weight: 300;
  margin-right: 5%;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  width: 100%;
  display: none;
}

@media screen and (min-width: 540px) {
  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    width: auto;
    background-color: initial;
    top: 75.11px;
    margin-top: 0px;
  }
}
.open > .navigation {
  display: flex;
}
.nav-inner > .navigation > ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}

@media screen and (min-width: 540px) {
  .nav-inner > .navigation > ul {
    flex-direction: row;
    margin-top: 0px;
  }
}
.nav-inner > .navigation > ul > li {
  margin: 0px;
  font-size: 16px;
  color: #707070;
  transition: 0.5s;
  padding: 18px 0px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  position: relative;
}

@media screen and (min-width: 540px) {
  .nav-inner > .navigation > ul > li {
    margin: 0px 13px;
    padding: 30px 0px;
    text-align: center;
    width: auto;
  }
}
@media screen and (min-width: 1280px) {
  .nav-inner > .navigation > ul > li {
    margin: 0px 25px;
  }
}
.nav-inner > .navigation > ul > li > a {
  transition: 1s;
}
.nav-inner > .navigation > ul > li:hover > a,
.nav-inner > .navigation > ul > li.active > a {
  font-weight: 500;
}

#menu {
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-right: 10px;
  position: absolute;
  top: 7px;
  right: 2px;
  z-index: 555;
  display: block;
  background-color: var(--main-color);
}
@media screen and (min-width: 540px) {
  #menu {
    z-index: -555;
    display: none;
  }
}
#menu:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: -2000;
  width: 45px;
  height: 45px;
  border: 2px solid #fff;
}
#menu > span.bar {
  background-color: #fff;
  width: 27px;
  height: 3px;
  position: absolute;
  top: 28.5px;
  left: 16px;
  border-radius: 50px;
  transition: 0.5s;
}
#menu > span.bar1 {
  top: 19px;
}

#menu > span.bar3 {
  top: 39px;
}

#menu:hover > span.bar1 {
  top: 22px;
}

#menu:hover > span.bar3 {
  top: 36px;
}

#menu.menuClose > span.bar2 {
  display: none;
}

#menu.menuClose > span.bar1 {
  transform: rotate(45deg);
  top: 28px;
}

#menu.menuClose > span.bar3 {
  transform: rotate(-45deg);
  top: 28px;
}

.proclamation {
  width: 100%;
  height: 100%;
  background-color: #deeeee;
  position: fixed;
  z-index: 55555555555555;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.proclamation.nonBg {
  background-color: rgba(0, 0, 0, 0.6);
}
.proclamation.close {
  display: none;
}
.proclamation::before {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.proclamation-wrap {
  width: 98%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 30px;
}

.proclamation-wrap > .proclamation-content {
  max-width: 300px;
  width: 90%;
  min-height: 100px;
  margin: 0px auto;
  background-color: #fff;
  border: 6px solid #198686;
  box-sizing: border-box;
  position: relative;
  padding: 30px;
}

@media screen and (min-width: 640px) {
  .proclamation-wrap > .proclamation-content {
    max-width: initial;
    width: 500px;
    padding: 30px;
  }
}

.proclamation-wrap > .proclamation-content > p {
  font-size: 16px;
  line-height: 26px;
  color: #000;
  overflow-y: auto;
  word-wrap: break-word;
  word-break: break-all;
}

.proclamation-wrap > .proclamation-content > p > .info-content {
  display: flex;
  flex-wrap: wrap;
}
.info-content > span:nth-child(1) {
  width: 100%;
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
.info-content > span:nth-child(2) {
  width: 64px;
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
.info-content > span:nth-child(3) {
  width: calc(100% - 69px);
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: top;
}

.proclamation-content.cancelWin {
  width: 290px;
  line-height: 32px;
}
.proclamation-content.cancelWin > p {
  /* display: flex; */
  /* 	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column; */
  word-wrap: break-word;
  word-break: break-all;
}
.proclamation-content.cancelWin > p > span {
  text-align: center;
  margin-bottom: 20px;
  /* outline: 1px solid #F00; */
}
.proclamation-close {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0px;
  right: -6px;
  padding-right: 10px;
  background-color: #198686;
  z-index: 99999999999999;
  cursor: pointer;
}
.proclamation-close {
  width: 40px;
  height: 40px;
  padding-right: 0px;
  top: -41px;
}

.proclamation-close:before {
  content: "";
  width: 28px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 14px;
  left: 0;
  transform: rotate(45deg);
}
.proclamation-close:before {
  top: 20px;
  left: 5px;
}

.proclamation-close:after {
  content: "";
  width: 28px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 14px;
  left: 0;
  transform: rotate(-45deg);
}
.proclamation-close:after {
  top: 20px;
  left: 5px;
}
</style>
