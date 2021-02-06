<!--  -->
<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name:"RecommandView",
  data () {
    return {
    }
  },
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {

  }
}
</script>

<style  scoped>

  .recommend {
    /* 浮动？ */
    display: flex;
    width: 100% ;
    text-align: center;
    font-size: 6px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    
  }
</style>
