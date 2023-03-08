<script>
export default {
  setup() {},
};
</script>
<template>
  <div class="content-contact">
    <div class="contact">
      <div class="wrap-inner contact-inner">
        <h1 class="title">CONTACT</h1>
        <div class="contact-describe">
          謝謝您的瀏覽，若有任何指教，請隨時與我聯繫
        </div>
        <div class="contact-content-wrap">
          <div class="contact-content">
            <font-awesome-icon
              icon="phone-alt"
              class="font-awesome-icon"
            />0952423200
          </div>
          <div class="contact-content">
            <font-awesome-icon icon="fa-envelope" class="font-awesome-icon" /><a
              href="mailto:margaret0820@yahoo.com.tw"
              target="_blank"
              >margaret0820@yahoo.com.tw
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="contact-content">
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="font-awesome-icon"
            />
            <a href="https://www.linkedin.com/in/yanhua-huang" target="_blank"
              >www.linkedin.com/in/yanhua-huang
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="contact-content">
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="font-awesome-icon"
            />
            <a
              href="https://instagram.com/haha.huang?igshid=YmMyMTA2M2Y="
              target="_blank"
              >yanhua1987
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-contact-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-contact {
  width: 100%;
  display: flex;
  height: 100%;
  flex-flow: 1;
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
</style>
