<template>
  <div class="Stydylist">
    <div class="skill">
      <p>你需要具备以下知识</p>
      <transition name="showIt">
        <div>
          <ul>
            <li v-for="(skill, index) in skills">{{index+1}}. {{skill.message}}
              <span>
                <input type="checkbox" v-model = "skill.ischecked"name="check1" :id="'checked' + index" value=""/>
                <label class="hasit" :class="{ischecked:skill.ischecked}" :for="'checked' + index" @click="changeChecked(index)">未具备</label>
                <span id="dele" @click="removeSkill(index)">删除</span>
              </span>
            </li>
          </ul>
          <span id="inIt"><input type="search" placeholder="还需要具备：" v-model = "beforeVal" /><button @click = "updata" id="submitIt">提交</button>
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      skills: [
      { message: 'ES6语法', ischecked: false },
      { message: 'JAVASCRIPT中级前端知识', ischecked: false },
      { message: 'HTML、CSS基础知识', ischecked: false }
      ],
      beforeVal: ''
    }
  },
  methods: {
    updata () {
      if (this.beforeVal !== '') {
        let obj = {}
        obj.message = this.beforeVal
        obj.ischecked = false
        this.skills.push(obj)
        console.log(this.skills)
        this.beforeVal = ''
      }
    },
    removeSkill (a) {
      this.skills.splice(a, 1)
    },
    changeChecked (a) {
      if (!this.skills[a].ischecked) {
        document.querySelectorAll('.hasit')[a].innerHTML = '具&nbsp&nbsp&nbsp备'
        console.log(document.querySelectorAll('.hasit')[a])
      } else {
        document.querySelectorAll('.hasit')[a].innerHTML = '未具备'
      }
    }
  }
}
</script>

<style>

/*skill部分*/
.skill{
  box-shadow:#ddd 0 0 4px;
  width: 60%;
  margin:15px auto;
  border-radius: 2px;
  background-color:rgba(0,0,0,0.3);
  color:#fff;
  position: relative;
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
  display: flex;
  justify-content: space-between;
}
.skill ul li input{
  display: none;
}
#dele,.hasit{
  padding:3px;
  font-size: 16px;
  border-radius: 2px;
  display: inline-block;
  width: 60px;
  text-align: center;
}
#dele{
  background: #FF5959;
}
.hasit{
  margin-right: 5px;
  background: mediumseagreen;
}
.ischecked{
  background:darkturquoise;
}
/*输入按钮部分*/
#inIt{
  display: flex;
  height: 33px;
  position: absolute;
  bottom:8%;
  right: 10%;
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

.showIt-enter{
  opacity: 0;
}
.showIt-enter-active{
  transition: all .5s;
}
.showIt-leave{
}
.showIt-leave-active{
  transition: all .5s;
  opacity: 0;
}
</style>
