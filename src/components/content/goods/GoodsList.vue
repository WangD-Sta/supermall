<!--  -->
<template>
  <div class="goods">
     <goods-list-item v-for="item in goods" :goods-item= 'item'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'GoodsList',
  data () {
    return {
    }
  },
  props: {
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {
      GoodsListItem
  }
}
</script>

<style  scoped>
    .goods {
        display: flex;
        /* wrap根据元素宽度拆行，nowarp不拆行即在一行显示 */
        flex-wrap: wrap;
        /* 元素在一行居中，空白大小一样 */
        /* 试试？margin: 0 auto; */
        justify-content: space-around;
        padding: 2px;
    }
</style>
