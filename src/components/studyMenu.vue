<template>
  <div class="aside">
    <ul>
      <li><router-link :to="{path:'/studybefore'}">学习前提</router-link></li>
      <li><router-link :to="{path:'studyprogress'}">学习进度</router-link></li>
      <li><router-link :to="{path:'studybook'}">学习资料</router-link></li>
      <li><router-link :to="{path:'studuvideo'}">实战练习</router-link></li>
      <li><router-link :to="{path:'studymore'}">更多</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  .aside{
    position: absolute;
    bottom: 0;
    left: 0;
    top:60px;
    width: 10%;
  }
  .aside ul{
    background: rgba(58,190,252,0.5);
    height: 100%;
  }
  .aside ul li{
    list-style: none;
    font-weight: 300;
  }
  .aside ul li a{
     color:#fff; 
     padding:10px;
     display: block;
     text-decoration: none;
  }
  .aside ul li:hover{
    background: rgba(58,190,252,0.5);
    transition: all .5s ease;
  }
  html,body{
    height: 100%;
    overflow: hidden;
    background: url(../../resource/img/bgimg.jpg);
  }
</style>
