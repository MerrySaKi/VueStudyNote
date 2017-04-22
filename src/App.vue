<template>
  <div id="app">
    <hder></hder>
    <study-aside></study-aside>
    <div class="context">
      <context></context>
    </div>
  </div>
</template>

<script>
import hder from './components/header'
import studyAside from './components/studyMenu'
import context from './pages/studybefore'
export default {
  name: 'app',
  components: {hder, studyAside, context},
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
