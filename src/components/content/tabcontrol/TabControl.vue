<!--  -->
<template>
  <div class="tab-control">
      <!-- 点击颜色变红，将元素及索引值引入，用索引值判断，索引值传进方法，赋值给当前，两者相等使用该类 -->
	<div v-for="(item,index) in titles" class="tab-control-item"
     :class="{active: index == currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        currentIndex: 0
    }
  },
  props: {
      titles: {
          type: Array,
          default () {
              return []
          }
      }
  },
  methods: {
      itemClick(index) {
          this.currentIndex = index
      }
  }
}
</script>

<style  scoped>
 .tab-control {
     display: flex;
     text-align: center;
     font-size: 15px;
     height: 40px;
     line-height: 40px;
     background-color: #fff;
 }
 .tab-control-item {
     flex: 1;
 }
 .tab-control-item span {
     padding: 5px;
 }
  .active {
      color: var(--color-high-text);
      
  }
  .active span {
      border-bottom: 3px solid var(--color-high-text);
  }
</style>
