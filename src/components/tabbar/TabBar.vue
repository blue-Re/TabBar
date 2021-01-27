<template>
<div id="tabbar">
  <slot></slot>
</div>
</template>

<script>
import TabBarItem from '../tabbarItem/TabBarItem'

export default {
  name: "TabBar.vue",
  components:{
    TabBarItem
  }
};
</script>

<style>
#tabbar {
  display: flex;
  height: 49px;
  text-align: center;
  background-color: wheat;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(0, 0, 0, 0.04);
}


</style>
