<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: space-between;background: #FFF;">
      <div class="historyMenu" style="display: flex;font-size: 16px;">
        <div v-for="(item, index) in menuItem" :class="{active: isActive === item.id}" @click="menuClick(item.id)" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="card" v-for="i in expertList" @click="showDetail(i)">
        <div style="width: 300px;height: 117px;background: linear-gradient(220deg, #3157DE 0%, #6BB6E0 100%);border-radius: 35px;position: absolute;top: -74px;right: -150px"></div>
        <p style="position:absolute;right: 0;padding: 10px 8px;color: #FFF">{{ i.talent_level }}</p>
        <div style=" padding: 15px;width: 100%;height: 100%">
          <p class="name">{{ i.name }}</p>
          <p class="group">{{ i.work_team }}</p>
          <div style="margin-top:15px;min-height: 80px;">
            <div class="tag" v-for="i in i.telnet">{{}}</div>
          </div>
          <div class="flex-center">
            <div style="text-align: center;font-size: 12px">
              <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{i.job_leval}}</p>
              <p>岗位级别</p>
            </div>
            <div style="margin: 0 40px;width: 1px;height: 44px;background: #D7D7D7;"></div>
            <div style="text-align: center">
              <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{i.total_score}}</p>
              <p>总积分</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "expert",
  data(){
    return {
      isActive: '10735e3e0bc44627998c76cbf72f8fdf',
      menuItem:[
        {
          name: '流媒体',
          id: '10735e3e0bc44627998c76cbf72f8fdf'
        },
        {
          name: 'AI',
          id: '954be9c42f6d43aab2fa5f38f91ba2b4'
        },
        {
          name: '大数据',
          id: 'df8bb75009544683bcadf4a8bd1b112e'
        },
        {
          name: '通用技术',
          id: '920b38ddb2044c7dbd7f4e6c26c2319b'
        },
        {
          name: '云网融合',
          id: 'a6b3590474774d688ab789e9d2cba8c6'
        },
        {
          name: '信创与信息安全',
          id: 'a83f8353601d49a8887f26e9709f81c2'
        }
      ],
      expertList:[]
    }
  },
  mounted() {
    this.queryExpert()
  },
  methods:{
    menuClick(item){
      this.isActive = item
      this.queryExpert()
    },
    showDetail(item){
     // let query = Object.assign({pageName:'科创专家'},item)
      this.$router.push({name:'expertDetail',query:{pageName:'科创专家'},params: item})
    },
    queryExpert(){
      this.$axios.post('/sdata/rest/service/dataapi/rest/491453fc-08a8-4daa-b282-7b49b077175e', {
        "ability_type": this.isActive
      })
      .then((response)=>{
        this.expertList = response.data.result
      })
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
  min-height: 540px;
  width: 100%;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px 10px;
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
      cursor: pointer;
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
