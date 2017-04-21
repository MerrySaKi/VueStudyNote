<template>
  <div class="">
    <div class="skill">
    	<p>你需要具备以下知识</p>
    	<div>
    	<ul>
        <li v-for = "skill in skills">{{skill}}</li>
      </ul>
      <span id="inIt">
        <input type="text" placeholder="还需要具备：" :value = "beforeVal"/><button @click = "updata">提交</button>
      </span>
    	</div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      skills: [
        'ES6语法',
        'JAVASCRIPT中级前端知识',
        'HTML、CSS基础知识'
      ],
      beforeVal: ''
    }
  },
  methods: {
    updata () {
      this.skills.push(this.beforeVal)
    }
  }
}
</script>

<style>
.skill{
  box-shadow:#ddd 0 0 4px;
  width: 60%;
  margin:15px auto;
  border-radius: 2px;
  background-color:rgba(0,0,0,0.3);
  color:#fff;
}
.skill p{
  font-size:23px;
  padding: 12px 50px;
  border-bottom:1px solid #fff;
  background-color:rgba(0,0,0,0.3);
}
.skill>div{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding:20px 0;
}
.skill ul{
  width:60%;
}
.skill ul li{
  list-style: none;
  font-size:16px;
  padding:5px 0;
}
#inIt{
  display: flex;
  height: 33px;
}
#inIt input,#inIt button{
  border:none;
  outline: none;
  font-size: 14px;
}
#inIt input{
  background: rgba(0,0,0,0);
  color:#fff;
  border-bottom:1px solid #fff;
  padding:0 5px;
}
#inIt button{
  color:#fff;
  margin-left:-1px;
  background: rgba(58,190,252,0.7);
  padding:0 15px;
}
</style>
