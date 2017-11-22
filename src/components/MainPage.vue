<template>
  <div class="hello">
    <h2>听说你忘了我的生日？<button class="bt" v-on:click='displayTime()'>显示日期</button></h2>
    <div id="bir">{{dis_time}}</div>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data(){
    return {
      result:10,
      name1:'',
      dis_time:'',
    }
  },
  methods:{
    add:function(){
      this.result=this.result+10;
    },
    name:function(){
      var is=prompt("请输入您的姓名：","");
      this.name1=is;
    },
    displayTime:function(){
      var today=new Date();
      this.dis_time=today.toLocaleDateString();
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bir{
  font-size: 20px;
  color: red;
}
.bt{
  font-size: 20px;
}
h1{
  padding-top: 50px
}
h2{
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
