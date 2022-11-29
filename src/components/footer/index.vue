<template>
  <div class="footer">
    <div class="main">
      <ul>
        <li>服务</li>
        <li>社区</li>
        <li>行业报告</li>
      </ul>
      <ul>
        <li>工具</li>
        <li>数字产品介绍</li>
        <li>行业报告</li>
      </ul>
      <ul>
        <li>关于</li>
        <li>联系我们</li>
        <li>帮助中心</li>
        <li>新闻</li>
      </ul>
      <ul>
        <li>条款说明</li>
        <li>用户协议</li>
        <li>隐私条款</li>
        <li>法律声明</li>
      </ul>
    </div>
    <div class="bottom">
      <div class="left">© 2020 - 2021 www.chenyxjs.com</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #242a37;
  .main {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-top: 89px;
    padding-bottom: 183px;
    ul {
      li {
        cursor: pointer;
        margin-top: 23px;
        font-size: 18px;
        color: #999999;
      }
      li:hover{
        color: #00ebea;
      }
      li:first-of-type {
        margin-top: 0;
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .bottom {
    background: #1f2026;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      color: #656d7a;
      font-size: 12px;
    }
  }
}
</style>
