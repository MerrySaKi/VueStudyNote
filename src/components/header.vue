<template>
  <div class="header">
    <div>
      <span>Vue study line</span>
      <span>By YuKa</span>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
  width: 100%;
  background-color:rgba(58,187,252,0.4);
  color:white;
  box-shadow: #ddd 0 0 1px;
  
}
.header div{
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin:auto;
}
.header span{
  font-size:20px;
  line-height: 20px;
  font-family:"微软雅黑";
  font-weight: 300;
  padding:20px 0;
}
</style>
