<template>
  <div class="context">
    <h1>{{ animation }}</h1>
    <transition name = "show" mode="out-in">
      <div v-if="show" key="1">动画测试1</div>
      <div v-else key="2">动画测试2</div>
    </transition>
    <button @click="showIt">按钮</button>
    <div class="anima2">
      <transition name="move">
        <p v-show = "move">这是一段动画</p>
      </transition>
    </div>
    <button @click="moveIt">移动</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      animation: '动画练习',
      show: true,
      move: true
    }
  },
  methods: {
    showIt () {
      this.show = !this.show
    },
    moveIt () {
      this.move = !this.move
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.show-enter,.show-leave-active{
  opacity: 0;
}
.show-enter-active,.show-leave-active{
  transition: all 0.5s;
} 



.move-enter{
  transform: translateX(-500px);
  opacity: 0;
}
.move-enter-active,.move-leave-active{
  transition: all .5s;
}
.move-leave-active{
  transform: translateX(500px);
  opacity: 0;
}



.anima2{
  margin-top:50px;
  border-top:1px solid black;
  height:50px;
}
</style>
