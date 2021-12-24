<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: space-between;background: #FFF;">
      <div class="historyMenu" style="display: flex;font-size: 16px;">
        <div v-for="(item, index) in menuItem" :class="{active: isActive === item.name}" @click="menuClick(item.name)" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="card" v-for="i in 8" @click="showDetail()">
        <div style="width: 150px;height: 117px;background: linear-gradient(220deg, #3157DE 0%, #6BB6E0 100%);border-radius: 35px;position: absolute;top: -74px;right: -33px"></div>
        <p style="position:absolute;right: 0;padding: 10px 8px;color: #FFF">省公司专家一级</p>
        <div style=" padding: 15px;width: 100%;height: 100%">
          <p class="name">车少帅</p>
          <p class="group">研发中心-AI工作组</p>
          <div style="margin-top:15px;min-height: 80px;">
            <div class="tag" v-for="i in 4">55666665565</div>
          </div>
          <div class="flex-center">
            <div style="text-align: center;font-size: 12px">
              <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">PC-4</p>
              <p>岗位级别</p>
            </div>
            <div style="margin: 0 40px;width: 1px;height: 44px;background: #D7D7D7;"></div>
            <div style="text-align: center">
              <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">2046</p>
              <p>总积分</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-view name="expertDetail"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "expert",
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
    },
    showDetail(){
      this.$router.push({name:'expertDetail'})
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
