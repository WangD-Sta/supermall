<!--  -->
<template>
  <div>
    <tab-bar>
     <!-- 使用导入并注册的子组件，替换上面的插槽 -->
     <!-- :path="/home"绑定变量 不带冒号是字符串 -->
     <!-- 在使用组件上写入要传的父传子props属性 -->
     <!-- 在模板中使用路径别名需要用~ -->
     <tab-bar-item path="/home">
       <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/category">
       <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/cart">
       <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile" >
       <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
       <div slot="item-text">我的</div>
     </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
 import TabBarItem from 'components/common/tabbar/TabBaritem'
export default {
    name: "MainTabBar",
 
  components: {
      TabBar,
      TabBarItem
  }
}
</script>

<style  scoped>

</style>
