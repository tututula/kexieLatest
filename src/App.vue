<template>
  <div id="app">
    <header>
      <div class="nav">
        <div style="display: flex;align-items: center">
          <p>科创平台</p>
          <ul>
            <li v-for="item in menu" ><router-link :to="{path: item.url, query:{ pageName: item.name }}">{{ item.name }}</router-link></li>
          </ul>
        </div>
<!--        <div style="display: flex;align-items: center;float: right">
          <Input suffix="ios-search" placeholder="Enter text" style="width: 188px;height:32px;margin-left: 11.5%" />
          <Button  type="text" style="margin: 0 38px 0 24px">登录</Button>
          <Button  type="primary" style="background: #2B5FBE">免费注册</Button>
        </div>-->
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="flex-center" style="height: 80px;">
        <p>© 2020 中国电信股份有限公司 版权所有 京ICP备09031924号</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Page from './components/page.vue'
import Home from './components/home.vue'
export default {
  name: 'App',
  data(){
    return {
      menu: [
        {
          name:'首页',
          url:'/home'
        },
        {
          name:'能力图谱',
          url:'/page/abilityAtlas'
        },
        {
          name:'能力清单',
          url:'/page/abilityList'
        },
        {
          name:'课题展示',
          url:'/page/projectShow'
        },
        {
          name:'科创专家',
          url:'/page/expert'
        }
      ]
    }
  },
  components: {
    Page,
    Home
  },
  methods:{
  }
}
</script>

<style lang="less">
@import "./styles/common.css";
html,
body {
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: auto!important;
  word-break: break-all;
  word-wrap: break-word;
}

#app {
  width: 100%;
  height: 100%;
  overflow: visible!important;
}

header {
  height: 82px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  background: #FFF;
  .nav{
    padding: 0 370px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    p{
      font-size: 20px;
      color: #252525;
    }
    ul{
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 80px;
      li{
        margin-right: 40px;
        color: #333;
      }
    }
    a{
      color: #333!important;
      font-size: 16px;
    }
    .linkActive{
      color: #2B5FBE!important;
      font-weight: bold;
    }
  }
}
.section{
  min-height: 502px;
  margin-top: 82px!important;
  width: 100%;
}
footer{
  width: 100%;
  height: 80px;
  background: #232E45;
}
.ivu-input{
  background-color: #FFF!important;
}
.ivu-btn{
  border-radius: 0!important;
}
.childPage{
  padding: 0 370px 80px;
  margin-top: -78px;
  position: relative;
  box-sizing: content-box;
}

*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 4px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #8cb7ec;
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
}

</style>
