<!--     -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
      
    <div v-else><slot name="item-icon-active"></slot></div>
      
    <div :style="activeStyle"><slot name="item-text"></slot></div>
      
  </div>
</template>

<script>
export default {
    name:"TabBaritem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
  data () {
    return {
      
    }
  },
  computed:{
    isActive() {
      // 拿到当前活跃的路由的路径值，判断每个的路径是否是当前路径中的一部分，是就返会第一次出现的索引值，没有就返回-1
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
	itemClick() {
    this.$router.replace(this.path);
    console.log('click');
  }
  }
}
</script>

<style  scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
 .tab-bar-item img {
      width: 24px;
      height: 24px;   
      margin-top: 3px;
      /* vertical align middle 去除图片下方空白 */
      vertical-align: middle;
      margin-bottom: 2px;
  }
  
</style>
