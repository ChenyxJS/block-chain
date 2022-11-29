<template>
  <!-- header -->
  <div class="header">
    <!-- 顶部 -->
    <div class="top">
      <!-- 左侧logo -->
      <div class="left">
        <div class="logo"></div>
        <div class="text">CHENYX</div>
      </div>
      <!-- 导航栏 -->
      <ul class="nav">
        <li>OTC交易</li>
        <li>币币交易</li>
        <li>资产</li>
      </ul>
      <!-- 语言 -->
      <div class="right">
        <select name="语言" id="1">
          <option value="中文简体">中文简体</option>
          <option value="中文繁体">中文繁体</option>
          <option value="English">English</option>
        </select>
      </div>
    </div>
    <!-- 滚动图 -->
    <div class="swiper clear">
      <!-- left -->
      <div class="left">
        <p>HELLO,</p>
        <p>Block Chain!</p>
        <p>Block chain assets trading platform</p>
        <div class="options">
          <button>注册</button>
          <button>登录</button>
        </div>
      </div>
      <div class="imgs">
        <svg-icon icon-name="1" icon-size="700"></svg-icon>
      </div>
    </div>
    <div class="dots clear">
      <div class="dot dot_active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  background-color: #203062;
  height: 671px;
  overflow: hidden;
}
.top {
  .left {
    padding-top: 18px;
    .logo {
      float: left;
      margin-left: 60px;
      width: 54px;
      height: 54px;
      border-radius: 8px;
      background: linear-gradient(to right, #197cfd, #00ebea);
    }
    .text {
      color: #2a82e4;
      float: left;
      margin-left: 14px;
      font-size: 30px;
    }
  }
  .nav {
    height: 54px;
    float: left;
    margin-left: 111px;
    display: flex;
    align-items: center;
    li {
      font-size: 20px;
      color: #fff;
      margin-left: 53px;
    }
    li:first-child {
      margin-left: 0;
    }
  }
  .right {
    height: 54px;
    float: right;
    display: flex;
    align-items: center;
    margin-right: 44px;
    font-size: 14px;
  }
}
.swiper {
  width: 100%;
  color: #fff;
  .left {
    position: absolute;
    margin-top: 156px;
    margin-left: 414px;
    p {
      font-size: 72px;
    }
    p:last-of-type {
      font-size: 30px;
    }
    .options {
      width: 425px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        margin-top: 40px;
        color: #fff;
        width: 185px;
        height: 50px;
        border-radius: 30px;
      }
      button:nth-of-type(1) {
        background: linear-gradient(to right, #197cfd, #00ebea);
      }
      button:nth-of-type(2) {
        background: transparent;
        border: 1px #707070 solid;
      }
      button:hover {
        border: 1px #00ebea solid;
      }
    }
  }
  .imgs {
    float: left;
    margin-top: 156px;
    margin-left: 832px;
  }
}
.dots {
  position: absolute;
  top: 603px;
  width: 100%;
  display: flex;
  justify-content: center;
  .dot {
    margin-left: 46px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 6px #d8d8d8 solid;
  }
  .dot:first-of-type {
    margin-left: 0;
  }
  .dot_active {
    border: 6px #fff solid;
  }
}

// @media (max-width: 765px) {
//   .header {
//     height: 38.8125rem;
//   }
//   .top {
//     .left {
//       .logo {
//         margin-left: 1.25rem;
//         width: 3.375rem;
//         height: 3.375rem;
//       }
//       .text {
//         font-size: 1.875rem;
//       }
//     }
//     .nav {
//       display: none;
//     }
//     .right {
//       margin-right: 1.25rem;
//     }
//   }
// }
</style>
