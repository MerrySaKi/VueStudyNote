<template>
  <div id="app">
    <hder></hder>
    <study-aside></study-aside>
    <transition enter-active-class = "rotateInUpRight" leave-active-class = "rotateOutUpRight">
      <router-view class="context animated"></router-view>
    </transition>
      
  </div>
</template>

<script>
import hder from './components/header'
import studyAside from './components/studyMenu'
export default {
  name: 'app',
  components: {hder, studyAside},
  data () {
    return {
      todayData: '4.20日'
    }
  }
}
</script>

<style>
  @import url("../resource/css/animate.css");>
#app {
}
*{
  margin:0;
  padding:0;
}
.context{
  position: absolute;
  left: 10%;
  bottom: 0;
  top:60px;
  width: 90%;
  background: rgba(255,255,255,0.3);
  overflow: auto;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:all .5s;
}
.fade-leave{
  transition:all .5s;
}
.fade-leave-active{
  opacity: 0;
}
</style>
