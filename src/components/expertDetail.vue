<template>
  <div style="height: 100%;width: 100%">
    11111111
  </div>
</template>

<script>
export default {
  name: "expertDetail",
  data(){
    return {
      isActive: '人工智能',
      menuItem:[
        {
          name: '人工智能',
          value:''
        },
        {
          name: '流媒体',
          value:''
        },
        {
          name: '大数据与可视化',
          value:''
        },
        {
          name: '云网融合',
          value:''
        },
        {
          name: '信息安全与信创',
          value:''
        },
        {
          name: '通用技术与组件',
          value:''
        }
      ],
    }
  },
  methods:{
    menuClick(item){
      this.isActive = item
    }
  }
}
</script>

<style scoped lang="less">
.historyMenu{
  margin-top: 35px;
  font-size: 18px;
  &>div{
    min-width: 104px;
    width: auto;
    height: 35px;
    margin-right: 30px;
    text-align: center;
    position: relative;
    &:hover{
      cursor: pointer;
      color: #2B5FBE;
    }
  }
  .active{
    color: #2B5FBE;
    font-weight: bold;
    &::after{
      content: "";
      width: 104px;
      height: 10px;
      background-image: url("/images/activeIcon@2x.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.content{
  min-height: 500px;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px 20px;
  .card{
    width: 286px;
    height: 240px;
    background: linear-gradient(167deg, #F4F6F9 0%, #FFFFFF 100%);
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    box-shadow: 8px 8px 22px -7px rgba(62, 63, 66, 0.33000001311302185);
    position: relative;
    overflow: hidden;
    &:hover{
      box-shadow: 4px 12px 30px 1px rgba(0, 23, 85, 0.33000001311302185);
      position: relative;
      top: -5px;
    }
    .tag{
      display: inline-block;
      height: 21px;
      background: #E8F0FF;
      border-radius: 4px 4px 4px 4px;
      opacity: 1;
      border: 1px solid #2B5FBE;
      padding: 0 10px;
      margin: 0 10px 8px 0;
      line-height: 21px;
    }
    .name{
      font-size: 20px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #000000;
    }
    .group{
      font-size: 14px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #000000;
      margin-top: 5px;
    }
  }
}
</style>
