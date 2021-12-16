<template>
  <div class='xtx-carousel' @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li class="carousel-item" :class="{fade: index === activeIndex}" v-for="(item, index) in list" :key="item.id">
        <RouterLink to="/">
          <img :src="item.imgUrl"
               alt="">
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;"
       class="carousel-btn prev" @click.prevent="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;"
       class="carousel-btn next" @click.prevent="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span :class="{active: i-1 === activeIndex}" v-for="i in 5"
            :key="i"></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HmBanner',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  // props：可以获取通过props方式传递的数据，获取到的是一个对象
  setup (props) {
    // 1.实现自动轮播
    const activeIndex = ref(0) // 激活的轮播图索引
    // 1.1添加定时器
    let timer = null
    const autoPlay = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        activeIndex.value++
        // 循环轮播：当索引超出数据的长度，则重置 activeIndex 为0
        if (activeIndex.value >= props.list.length) {
          activeIndex.value = 0
        }
      }, 2000)
    }
    autoPlay()

    // 鼠标进入：停止定时器
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }

    // 鼠标离开：重新创建定时器
    const start = () => {
      if (props.list.length > 0) {
        autoPlay()
      }
    }

    // 上一张和下一张
    const toggle = (step) => {
      const newIndex = activeIndex.value + step
      // 判断索引是否越界
      if (newIndex >= props.list.length) {
        activeIndex.value = 0
        return
      }
      if (newIndex < 0) {
        activeIndex.value = props.list.length - 1
        return
      }
      activeIndex.value = newIndex
    }

    return { activeIndex, stop, start, toggle }
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 500px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
