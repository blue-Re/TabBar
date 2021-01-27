<template>
<div class="main-tab-bar">
  <TabBar>
    <TabBarItem path="/home" activeColor="green">
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="" />
      <div slot="item-text" class="word">首页</div>
    </TabBarItem>

    <TabBarItem path="category" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="" />
      <div slot="item-text" class="word">分类</div>
    </TabBarItem>

    <TabBarItem path="shopcart" activeColor="purple">
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="" />
      <div slot="item-text" class="word">购物车</div>
    </TabBarItem>

    <TabBarItem path="myprofile" activeColor="orange">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="" />
      <div slot="item-text" class="word">我的</div>
    </TabBarItem>
  </TabBar>
</div>
</template>

<script>
import TabBar from '../tabbar/TabBar'
import TabBarItem from '../tabbarItem/TabBarItem'

export default {
  name: 'MainTabBar.vue',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
