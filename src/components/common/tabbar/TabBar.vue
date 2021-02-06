<!--  -->
<template>
  
  <div id="tab-bar">
    <slot></slot>
  
  </div>
</template>

<script>
export default {
    name: "TabBar",
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
#tab-bar {
    /* 给父元素加这个且子元素flex=1就会按比例布局 */
    display: flex;
     background-color: #f6f6f6;
     /* position fixed相对于浏览器定位 */
     position:fixed;
     left: 0;
     right: 0;
     bottom: 0;

     box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);

  }
  
</style>
