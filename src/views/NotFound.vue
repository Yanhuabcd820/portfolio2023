<script></script>
<template>
  <div class="content-contact">
    <div class="contact">
      <div class="wrap-inner contact-inner">
        <div class="contact-describe">
          <h1>抱歉，這裡沒有你要的資訊</h1>
          <div class="works-btn-wrap notFount-wrap">
            <router-link to="/" class="works-btn notFount-btn"
              >回到首頁</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.content-contact {
  flex-grow: 1;
}
.content-contact-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

content.content-contact {
  width: 100%;
  display: flex;
  height: 100%;
}
.contact {
  width: 100%;
}
.contact-inner {
  margin: 140px auto 80px auto;
}

.contact-describe {
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 45px;
  text-align: center;
  width: 100%;
}
.contact-content-wrap {
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
}
.contact-content {
  margin-bottom: 5px;
  transition: 0.5s;
}
.contact-content:hover {
  margin-left: 7px;
}
.contact-content > i {
  margin-right: 15px;
  font-size: 20px;
}
.font-awesome-icon {
  margin-right: 15px;
  font-size: 20px;
}
.link-out {
  font-size: 15px;
  margin-left: 6px;
}

.notFount-wrap {
  justify-content: center;
  margin-top: 30px;
}
.notFount-btn {
  padding: 8px 18px;
}
</style>
