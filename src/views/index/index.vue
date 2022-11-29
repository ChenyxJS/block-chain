<template>
  <!-- 首页容器 -->
  <div class="containner">
    <!-- header -->
    <Header></Header>
    <!-- content -->
    <Content></Content>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/header/index.vue";
import Content from "@/components/content/index.vue"
import Footer from "@/components/footer/index.vue"
export default defineComponent({
  components: {
    Header,
    Content,
    Footer
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.containner {
  width: 1920px;
}
@media (max-width: 765px) {
 
}
</style>
