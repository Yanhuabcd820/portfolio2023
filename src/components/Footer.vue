<script></script>
<template>
  <footer class="footer">
    <div class="footer-inner">
      <h1>與我聯繫</h1>
      <div class="footer-content-wrap">
        <div class="footer-content-wrap1">
          <div class="footer-content">
            <font-awesome-icon
              icon="phone-alt"
              class="font-awesome-icon"
            />0952423200
          </div>

          <div class="footer-content">
            <font-awesome-icon icon="fa-envelope" class="font-awesome-icon" /><a
              href="mailto:margaret0820@yahoo.com.tw"
              target="_blank"
              >margaret0820@yahoo.com.tw
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="footer-content">
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="font-awesome-icon"
            />
            <a href="https://www.linkedin.com/in/yanhua-huang" target="_blank"
              >www.linkedin.com/in/yanhua-huang
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="footer-content">
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
        <div class="footer-content-wrap2">
          Copyright © 2023 All rights reserved by Yanhua Huang
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: var(--main-color);
  padding: 70px 0px;
}
.footer-inner {
  width: 95%;
  max-width: 1110px;
  margin: 0px auto;
}
.footer-inner > h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 30px;
}
.footer-content-wrap {
  display: flex;
  flex-wrap: wrap;
}
.footer-content-wrap1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.footer-content-wrap2 {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .footer-content-wrap2 {
    margin-top: 0;
  }
}
.footer-content {
  line-height: 30px;
  display: flex;
  align-items: center;
  flex-grow: 0;
}
.footer-content > .font-awesome-icon {
  margin-right: 15px;
  font-size: 20px;
}
.footer-content .link-out {
  font-size: 15px;
  margin-left: 6px;
}

.footer-inner-contact {
  width: 95%;
  max-width: 1110px;
  margin: 0px auto;
}
.footer-contact-content-wrap {
  font-size: 12px;
  display: flex;
  justify-content: center;
  /* align-self: flex-end; */
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .footer-contact-content-wrap {
    margin-top: 0;
  }
}
</style>
