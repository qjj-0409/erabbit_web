<template>
  <div class="home">
    <!-- 轮播图 -->
    <HmBanner :list="bannerList"></HmBanner>
    <!-- 新鲜好物 -->
    <div class="home-new">
      <div class="home-panel">
        <div class="container">
          <div class="head">
            <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3><a aria-current="page"
               href="#/"
               class="router-link-active router-link-exact-active xtx-more"><span>查看全部</span><i class="iconfont icon-angle-right"></i></a>
          </div>
          <div style="position: relative; height: 426px;">
            <ul class="goods-list">
              <li v-for="item in goodList" :key="item.id"><a href="#"
                   class=""><img :src="item.picture"
                       alt="">
                  <p class="name ellipsis">{{item.name}}</p>
                  <p class="price">¥{{item.price}}</p>
                </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
import { onMounted, ref } from 'vue'
import HmBanner from '@/components/hmbanner.vue'
export default {
  name: 'Home',
  components: {
    HmBanner
  },
  // 添加统一入口
  setup () {
    // 不管你定义是简单数据类型还是复杂数据类型，如果希望数据操作的结果能够体现到模板，则定义为响应式
    const goodList = ref([])

    // 生命周期钩子函数-Dom挂载完成
    onMounted(() => {
      request.get('/home/new').then(res => {
        console.log(res)
        // ref变量操作需要通过value属性进行
        goodList.value = res.data.result
      })
    })

    // 获取轮播图数据
    const bannerList = ref([])
    onMounted(() => {
      request.get('/home/banner').then(res => {
        console.log(res)
        bannerList.value = res.data.result
      })
    })
    return { goodList, bannerList }
  }
}
</script>

<style lang="less" scoped>
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: #cf4444;
    }
  }
}
</style>
