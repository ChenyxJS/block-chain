<template>
  <!-- content -->
  <div class="content">
    <!-- cards -->
    <div class="cards">
      <div class="card">
        <div class="name">
          <span>EOS/USDT</span>
          <span>1.89%</span>
        </div>
        <p>7.89 USDT</p>
        <p>Volume 356777777.09</p>
      </div>
      <div class="card">
        <div class="name">
          <span>EOS/USDT</span>
          <span>1.89%</span>
        </div>
        <p>0.000007896 ETH</p>
        <p>Volume 356777777.09</p>
      </div>
      <div class="card">
        <div class="name">
          <span>EOS/USDT</span>
          <span>1.89%</span>
        </div>
        <p>0.000007896 ETH</p>
        <p>Volume 356777777.09</p>
      </div>
      <div class="card">
        <div class="name">
          <span>EOS/USDT</span>
          <span>1.89%</span>
        </div>
        <p>7.89 USDT</p>
        <p>Volume 356777777.09</p>
      </div>
    </div>
    <!-- safe -->
    <div class="safe-panel panel">
      <svg-icon icon-name="2" icon-size="400"></svg-icon>
      <div class="panel-content">
        <div class="title">安全</div>
        <div class="desc">
          钱包冷热分离，冷钱包无力隔离，用户私钥多重加密异地储存。
          多重密码验证智能防护，保护敏感操作同时更严防会话劫持和恶意操作
          6级国际容灾数据储存标准，多重业务拆分，独立部署。
        </div>
      </div>
    </div>
    <!-- Profession -->
    <div class="profession-panel panel">
      <svg-icon icon-name="3" icon-size="400"></svg-icon>
      <div class="panel-content">
        <div class="title">专业</div>
        <div class="desc">
          严格精选世界各地顶级机房，服务器分布式托管部署， 流畅访问不延迟。
          专业团队定制打造的交易撮合引擎。每秒百万订单处理， 交易精准快速。
          来自世界各地的开发者组建的区块链开发团队，
          时刻关注区块链技术的更新于发展。
        </div>
      </div>
    </div>
    <!-- 多平台接入 -->
    <div class="multi-platform-panel panel">
      <p>多平台接入</p>
      <p>覆盖Android/ios/Windows/mac多个平台，支持全业务功能</p>
      <div class="icons">
        <div class="icon">
          <svg-icon icon-name="android" icon-size="30"></svg-icon>
        </div>
        <div class="icon">
          <svg-icon icon-name="ios" icon-size="30"></svg-icon>
        </div>
        <div class="icon">
          <svg-icon icon-name="win" icon-size="30"></svg-icon>
        </div>
        <div class="icon">
          <svg-icon icon-name="mac" icon-size="30"></svg-icon>
        </div>
      </div>
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
.content {
  width: 100%;
  .cards {
    background: #f7f8fa;
    padding-top: 47px;
    padding-bottom: 36px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      padding: 12px 0 18px 17px;
      background: #fff;
      margin-left: 20px;
      width: 250px;
      height: 112px;
      box-shadow: 2px 2px #ebeff7;
      .name {
        margin-bottom: 18px;
        span:last-of-type {
          margin-left: 25px;
          color: #14d485;
        }
      }
      p {
        color: #b4b5b9;
      }
      p:first-of-type {
        margin-bottom: 14px;
      }
    }
    .card:first-of-type {
      margin-left: 0;
    }
  }
  .safe-panel {
    width: 100%;
  }
  .profession-panel {
    width: 100%;
    flex-direction: row-reverse;
    background: #f9f9fa;
  }
  .multi-platform-panel {
    flex-direction: column;
    p:first-of-type {
      font-size: 37px;
      margin-bottom: 28px;
    }
    p:last-of-type {
      font-size: 30px;
      margin-bottom: 118px;
    }
    .icons {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: 140px;
        height: 140px;
        border-radius: 5px;
        box-shadow: 0px 2px 8px #ebeff7;
        display: flex;
        justify-content: center;
        align-items: center;
        .svg-icon{
            padding: 20px;
            background: #203062;
        }
      }
    }
  }
}
.panel {
  padding-top: 60px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel-content {
  margin-left: 28px;
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    width: 100%;
    font-size: 36px;
  }
  .desc {
    font-size: 16px;
    line-height: 32px;
    color: #999999;
  }
}
@media (max-width: 765px) {
  .card {
    width: 45%;
  }
  .panel {
    flex-direction: column-reverse;
  }
}
</style>
