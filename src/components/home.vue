<template>
  <div style="background-image: url('/images/homeability.png');background-size: 100% 1434px;background-repeat: no-repeat">
    <Carousel class="header" v-model="value1" loop :height="456" style="margin-top: 82px">
      <CarouselItem>
        <div class="carousel" style="background-image: url('/images/homeBanner1.png')">
          <p style="font-size: 36px;font-weight: 300;color: #111111;">鸿信科创平台上线</p>
          <p style="width: 610px;font-size: 20px;font-weight: 300;color: #666666;">平台通过汇聚工业行业的机器视觉解决方案、应用及算法，为客户提供视觉识别，视觉定位，尺寸测量，外观检测等</p>
          <Button type="primary" style="width: 118px;height: 40px;margin-top: 50px;background: #2B5FBE">立即体验</Button>
        </div>
      </CarouselItem>
    </Carousel>
    <div class="ability">
      <p class="titles">核心能力</p>
      <div class="introduce">
        <div v-for="item in coreAbility.slice(0,3)">
          <img :src="item.picture_url" width="353" height="204" alt="">
          <div class="introArea">
            <img width="64" height="64" src="/images/bigData.png" alt="">
            <div>
              <p class="introName">{{item.ability_name}}</p>
              <p style="margin-top: 10px">{{item.ability_description}}</p>
            </div>
          </div>
        </div>
<!--        <div>
          <img src="/images/MaskGroup2@2x.png" width="353" height="204" alt="">
          <div class="introArea">
            <img width="64" height="64" src="/images/textDistinguish.png" alt="">
            <div>
              <p class="introName">文字智能识别能力</p>
              <p style="margin-top: 10px">能力成功应用于各类场景，基于企业客户的长期实践，经受过复杂场景考验</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/MaskGroup3@2x.png" width="353" height="204" alt="">
          <div class="introArea">
            <img width="64" height="64" src="/images/UAV.png" alt="">
            <div>
              <p class="introName">无人机通用能力</p>
              <p style="margin-top: 10px">供符合RESTful规范的API访问接口，兼容性强，使用方便</p>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <div style="padding: 100px 0 0;text-align: center">
      <p class="titles">落地案例</p>
      <Carousel class="projects" v-model="value2" loop :radius-dot="true" :height="472" style="margin-top: 42px;background: #FFF;min-height: 472px">
        <CarouselItem v-for="i in examples">
          <div style="height: 100%;background-repeat: no-repeat;background-size: 100% 100%;background-image: url('/images/zhongxing@2x.png')">
            <div style="width: 1023px;height: 100%;float: right;padding: 80px 370px 0 63px;text-align: left;color:#FFF;">
              <img v-if="i.picture_url" width="186" height="60" src="/images/zhongxingLogo@2x.png" alt="">
              <p style="font-size: 24px;font-weight: 400;margin: 24px 0">{{ i.project_name }}</p>
              <p style="font-size: 14px;font-weight: 400">{{i.project_description}}</p>
              <Button type="default" ghost style="margin-top: 50px">查看案例</Button>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div style="padding: 100px 0 0;text-align: center;">
      <p class="titles">历史立项课题</p>
      <div style="padding: 0 370px;height: 550px;">
        <div style="position: relative">
          <Divider style="position: absolute;top: 98%;margin: 0"/>
          <div class="historyMenu" style="display: flex;font-size: 16px;">
            <div v-for="(item, index) in historyMenuItem" :class="{active: isActive === item}" @click="historyMenuClick(item)" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="historyContent">
          <div style="height: 238px;padding: 0 67px;display: grid; grid-template-columns: repeat(3, 33.33%);grid-row-gap: 55px">
            <div v-for="(k,i) in historyArr" style="text-align: left">
              <div style="display: flex;">
                <img :src="'/images/ani'+(i+1)+'@2x.png'" width="90" height="90" alt="" style="margin-right: 20px">
                <div style="color: #3D485D">
                  <p style="">{{k.name}}</p>
                  <p style="font-size: 48px;font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;font-weight: 400;">{{ k.count }}<span style="font-size: 16px;">个</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="expert" style="padding: 40px 0 0;text-align: center;position:relative;">
      <p class="titles" style="position: relative;z-index: 101">科创专家展示</p>
      <div style="padding: 0 370px;text-align: center;position: relative;z-index: 100">
        <Carousel v-model="value1" loop dots="none" arrow="always" height="500">
          <CarouselItem v-for="item in expertList">
            <div class="carouselItem">
              <div style="width: 138px;height: 200px;margin-right: 30px">
                <img src="" alt="" style="width: 100%;height: 100%">
              </div>
              <div style="flex: 1">
                <div style="text-align: left">
                  <span style="font-weight: bold;color: #000000;font-size: 20px">{{item.name}}</span>
                  <span style="font-size: 14px;margin-left: 15px">{{item.work_team}}</span>
                  <span style="font-size: 14px;margin-left: 170px">人才级别</span>
                  <span style="font-size: 18px;font-weight: bold;color: #2B5FBE;margin-left: 15px">{{item.talent_level}}</span>
                </div>
                <div style="display: flex;padding-top: 20px">
                  <div style="padding-right: 50px">
                    <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{item.job_leval}}</p>
                    <p>岗位级别</p>
                  </div>
                  <div class="abilityDirection" style="width: 196px;text-align: center">
                    <div>
                      <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{item.ability_type}}</p>
                      <p>能力方向</p>
                    </div>
                  </div>
                  <div style="padding-left: 50px">
                    <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{item.total_score}}</p>
                    <p>总积分</p>
                  </div>
                </div>
                <div style="display: flex;padding: 20px 0 15px;flex-wrap: wrap">
<!--                  <div class="abilityTag" style="" >{{item.telnet}}</div>-->
                </div>
                <div style="text-align: left">
                  <span style="font-weight: bold;color: #000">主导科创能力 : </span><span>{{item.lead_project}}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div style="position: absolute;bottom: 0;width: 100%">
        <div style="height: 615px;background-image: url('/images/historyBg.png');background-size: 100% 100%;position: relative;">
          <div style="display: flex;width:100%;background-image: url('/images/serviceAsk.png');height: 208px;background-size: 100% 100%;padding: 74px 370px;position: absolute;bottom: 0">
            <p style="width: 553px;font-size: 26px;font-weight: 400;color: #FFFFFF;text-align: left;line-height: 51px;letter-spacing: 2px;">
              联系我们的专家，我们将竭诚为您提供政府与公共事业咨询服务
            </p>
            <!--            <Button type="default" ghost style="margin: 40px 0 0 100px">查看案例</Button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
  return {
    value1:0,
    value2:0,
    isActive: 2021,
    coreAbility:[],
    historyArr:[],
    expertList:[],
    examples:[],
    categoryBtn:[
      {
        name: '流媒体',
        active: true,
        id: '10735e3e0bc44627998c76cbf72f8fdf'
      },
      {
        name: 'AI',
        active: false,
        id: '954be9c42f6d43aab2fa5f38f91ba2b4'
      },
      {
        name: '大数据',
        active: false,
        id: 'df8bb75009544683bcadf4a8bd1b112e'
      },
      {
        name: '通用技术',
        active: false,
        id: '920b38ddb2044c7dbd7f4e6c26c2319b'
      },
      {
        name: '云网融合',
        active: false,
        id: 'a6b3590474774d688ab789e9d2cba8c6'
      },
      {
        name: '信创与信息安全',
        active: false,
        id: 'e78019fda4e54918ba4bea21d7c46720'
      }
    ],
    historyMenuItem:[
        2021,
        2020,
        2019,
        2018
    ],
    historyContentItem:[
      {
        name:'流媒体',
        value: 6
      },
      {
        name:'AI',
        value: 15
      },
      {
        name:'大数据与可视化',
        value: 13
      },
      {
        name:'通用技术与组建',
        value: 28
      },
      {
        name:'云网融合',
        value: 9
      },
      {
        name:'信息安全与信创',
        value: 12
      }
    ]
  }
  },
  created() {
    this.queryAbilityList()
    this.queryHistory()
    this. queryExpert()
    this.queryExample()
  },
  methods:{
    historyMenuClick(item){
      this.isActive = item
      this.queryHistory()
    },
    queryAbilityList(){
      this.$axios.post('/sdata/rest/service/dataapi/rest/438f61e0-1a38-4a26-9199-01d4671359b1', {
        show_flag: '是'
      })
      .then((res)=>{
        res.data.result.forEach(item => {
          item.picture_url = JSON.parse(item.picture_url)[0].url
        })
        this.coreAbility = res.data.result.slice(0,3)
        console.log(  this.coreAbility)
      })
    },
    queryHistory(){
      this.$axios.post('/sdata/rest/dataservice/rest/orchestration/578a15a9-7c10-492c-8670-ff5296e4de53', {
        "param": {
          "year": this.isActive
        }
      })
          .then((res)=>{
            this.historyArr = res.data.result.result
          })
    },
    queryExpert(){
      this.$axios.post('/sdata/rest/service/dataapi/rest/491453fc-08a8-4daa-b282-7b49b077175e', {
      })
          .then((res)=>{
            let arr = res.data.result.filter((item)=>{
              return item.show_flag === '是'
            })
            this.expertList = arr.map(item => {
              this.categoryBtn.forEach(i => {
                if (i.id === item.ability_type) {
                  item.ability_type = i.name
                }
              })
              return item
            })
          })
    },
    queryExample(){
      this.$axios.post('/sdata/rest/service/dataapi/rest/a39ec45e-0a52-4030-8c51-3fc9750a4a6e', {
        show_flag: '是'
      })
          .then((res)=>{
            this.examples = res.data.result
          })
    },
  }
}
</script>

<style scoped lang="less">
.header{
  .carousel{
    height: 100%;
    padding: 89px 370px 0;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  ::v-deep .ivu-carousel-dots-inside {
    display: block;
    position: absolute;
    bottom: 70px;
    padding: 0 370px;
    text-align: left;
    button{
      width: 48px;
      height: 3px;
    }
    .ivu-carousel-active button{
      background: #2B5FBE;
    }
  }
}
.titles{
  font-size: 36px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #111111;
}
.projects{
  ::v-deep .ivu-carousel-dots-inside {
    display: block;
    position: absolute;
    bottom: 100px;
    padding: 0 370px;
    text-align: right;
  }
}
.ability{
  height: 494px;
  padding: 100px 370px;
  text-align: center;
  .introduce{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    &>div{
      width: 353px;
    }
  }
  .introArea{
    display: flex;
    justify-content: space-between;
    img{
      margin-right: 24px;
    }
    p{
      text-align: left;
      font-size: 14px;
      font-family: Microsoft YaHei UI-Light, Microsoft YaHei UI;
      font-weight: 300;
      color: #666666;
    }
    .introName{
      font-size: 22px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #111111;
    }
  }
}
.historyMenu{
  margin-top: 35px;
  &>div{
    width: 198px;
    height: 46px;
    text-align: center;
    position: relative;
    &:hover{
      cursor: pointer;
    }
  }
  .active{
    color: #2B5FBE;
    &::after{
      content: "";
      width: 198px;
      height: 7.5px;
      background-image: url("/images/activeIcon@2x.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.historyContent{
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 400px;
  border-radius: 8px 8px 8px 8px;
  background: rgba(205, 217, 233,0.4);
  opacity: 1;
  padding: 60px 40px;
}
.expert{
  height: 800px;
  ::v-deep .ivu-carousel-arrow{
    background: #FFF;
    color: #91aedd;
    width: 62px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    line-height: 62px;
  }
  .carouselItem{
    height: 100%;
    margin-top: 30px;
    border-radius: 8px 8px 8px 8px;
    background: rgba(205, 217, 233,0.4);
    display: flex;
    padding: 55px 130px;
    .abilityDirection{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::before,&::after{
        content: "";
        height: 44px;
        width: 1px;
        background: #D7D7D7;
      }
    }
    .abilityTag{
      height: 22px;
      border-radius: 4px;
      border:1px solid #2B5FBE;
      padding: 4px;
      line-height: 14px;
      font-size: 14px;
      background: #FFF;
      margin-right: 5px;
      margin-bottom: 5px
    }
  }
}
</style>
