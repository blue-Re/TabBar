<template>
<div class="tabbar-item" @click="itemClick">

  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>

  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>

  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>

</div>
</template>

<script>
export default {
  name: 'TabBarItem.vue',
  props:{
    path:{
      type:String,
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  methods:{
    itemClick(){
      console.log("点击了")
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor} : {}
    }
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
}

.tabbar-item .word {
  font-size: 12px;
}


</style>
