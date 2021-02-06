<!--  -->
<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommand-view :recommends="recommends"></recommand-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
      <goods-list :goods="goods['pop'].list"></goods-list>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
  </div>
</template>

<script>
import HomeSwiper from 'views/home/childCom/HomeSwiper'
import RecommandView from 'views/home/childCom/RecommandView.vue'
import FeatureView from 'views/home/childCom/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home'




export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommandView,
    
    
    FeatureView,
    TabControl,
    GoodsList,
  },
  //组件生命周期函数，在组件创建时候建立调用
  created() {
    //请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //外面是methods的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type) {
      //通过中间变量type(type值为字符串)获取对象的key(key: value),使用【】，[]可以写字符串，也可写数字
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        /* for (let n of res.data.list) {
          this.goods[type].list.push(n)
        } */
       this.goods[type].list.push(...res.data.list);
       this.goods[type].page += 1
       
      })
    }
    
  }
}
</script>

<style  scoped>
 #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
