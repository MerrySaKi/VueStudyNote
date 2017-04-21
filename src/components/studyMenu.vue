<template>
  <div class="aside">
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        '学习前提',
        '学习进度',
        '学习资料',
        '学习视频',
        '更多'
      ]
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
    color:#fff;
    padding:10px;
    font-weight: 300;
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
