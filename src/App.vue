<template>
  <div id="app">
    <hder></hder>
    <study-aside></study-aside>
      <router-view class="context"></router-view>
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
</style>
