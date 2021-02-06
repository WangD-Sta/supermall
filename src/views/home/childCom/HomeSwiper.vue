<!--  -->
<template>
  <div>
      <swiper>
        <!-- 添加v-for报错就添加：key='item' -->
        <!-- 添加三个轮播图元素 -->
        <swiper-item v-for="item in banners" >
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  data () {
    return {
    }
  },
  props:{
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {
      Swiper,
      SwiperItem
  }
}
</script>

<style  scoped>

</style>
