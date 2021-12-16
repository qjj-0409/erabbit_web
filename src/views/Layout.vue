<template>
  <!-- 顶部通栏 -->
  <HmNav></HmNav>
  <!-- 头部-导航 -->
  <HmHeader></HmHeader>
  <!-- 主体内容 -->
  <main>
    <router-view></router-view>
  </main>
  <!-- 底部 -->
  <HmFooter></HmFooter>
</template>

<script>
import HmNav from '@/components/hmnav.vue'
import HmHeader from '@/components/hmheader.vue'
import HmFooter from '@/components/hmfooter.vue'
export default {
  name: 'Layout',
  components: {
    HmNav,
    HmHeader,
    HmFooter
  }
}
</script>
<style lang='less' scoped>
</style>
