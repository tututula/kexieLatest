<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: center;background: #FFF;">
      <span style="color: #111111;font-size: 36px;font-weight: 400;">专业物联网解决方案，倾力满足行业所需</span>
    </div>
    <Row class="category">
      <Col v-for="(i,j) in categoryBtn" span="4" :key="j">
        <div class="catBtn" style="width: 100%;height: 100%;" @click="choose(j, i)">
          <img :src="'/images/ani'+(j+1)+'@2x.png'"  width="72" height="66">
          <p :class="{active: i.active}">{{i.name}}</p>
          <img style="margin-top: 10px" v-if="i.active" src="/images/activeIcon0@2x.png" width="198" height="7.8" alt="">
        </div>
      </Col>
    </Row>
    <div class="content">
      <div style="height:1px;box-shadow: 0 10px 20px #000000;position: absolute;top: 0;width: 100%;"></div>
      <div style="width: 100%;height: 100%;display: flex;margin-top: 25px">
        <div class="menu" style="width: 294px;height: 100%;padding: 46px 0 0 0">
          <ul style="height:100%;overflow: auto">
            <li :class="{activeMenu: activeSecondMenu === item.name}" v-for="(item, index) in secondMenu" @click="secondMenuQuery(item.name,item.id)">{{item.name}}</li>
          </ul>
        </div>
        <div style="height: 100%;width: calc(100% - 294px);position: relative">
          <Carousel v-model="value1" loop arrow="never" style="height: 100%;padding: 162px 0 150px 50px;">
            <CarouselItem v-for="pageIndex in Math.ceil(thirdMenu.length/6)" >
              <div class="secondMenu">
                <div v-for="(item, index) in thirdMenu.slice(6*(pageIndex-1),6*pageIndex)" >
                  <div @mouseover.prevent="showCard($event, item)" style="width: 100%;height: 100%;position: absolute"></div>
                  <p class="title"  >{{ item.ability_name }}</p>
                  <p class="discribe">{{ item.ability_description }}</p>
                  <div style="display: flex;font-size: 12px">
                    <div class="symbol" style="margin-right: 10px">{{ item.ability_attribution }}</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
          <div class="lastMenu" ref="lastMenu" v-if="lastMenuShow" @mouseleave="hideLastMenu">
            <div style="padding: 20px;width:100%;height:100%;background-image: url('/images/lastMenu.png');background-size: cover;">
              <p style="font-weight: bold;color: #2B5FBE;font-size: 16px">{{ lastMenu.ability_name }}</p>
              <p style="margin: 20px 0 40px 0;white-space: normal;word-break: break-all;color: #666;font-size: 12px">
                {{  lastMenu.ability_description  }}</p>
              <div style="display: grid;grid-template-columns: repeat(2, 1fr);grid-gap: 15px 10px;height: 200px;justify-items: center;padding: 10px">
                <div class="btn">{{ lastMenu.ability_attribution }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "abilityAtlas",
  created() {
    this.choose(0, this.categoryBtn[0])
  },
  data(){
    return {
      value1:0,
      activeSecondMenu:'',
      lastMenuShow:false,
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
      secondMenu:[],
      thirdMenu:[],
      lastMenu: {}
    }
  },
  methods:{
    choose (index, item) {
      this.categoryBtn.forEach((item, num) => {
        if (num !== index) {
          this.categoryBtn[num].active = false
        }
      })
      this.categoryBtn[index].active = true
      this.secondMenu = []
      this.thirdMenu = []
      this.$axios.post('/sdata/rest/service/dataapi/rest/c52b2173-5e65-4bb6-8676-f05a65e58ceb', {
        parent_id: item.id
      })
          .then((response)=>{
            console.log(response);
            this.secondMenu = response.data.result
            this.activeSecondMenu = response.data.result[0].name
            this.secondMenuQuery(this.activeSecondMenu,response.data.result[0].id)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    showCard (e, item) {
      this.lastMenuShow = true
      this.lastMenu = item
      this.$nextTick(()=>{
        let left = e.target.parentElement.offsetLeft -  e.target.parentElement.parentElement.offsetLeft
        this.$refs.lastMenu.style.left =  left+20 + 'px'
        this.$refs.lastMenu.style.top =  110+ 'px'
        this.$axios.post('/sdata/rest/service/dataapi/rest/4995a172-62d3-4066-9436-6ad777703664', {
          parent_id: item.id
        })
            .then((response)=>{
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      })
    },
    hideLastMenu(){
      this.lastMenuShow = false
    },
    secondMenuQuery(name,id){
      this.activeSecondMenu = name
      this.$axios.post('/sdata/rest/service/dataapi/rest/c52b2173-5e65-4bb6-8676-f05a65e58ceb', {
        parent_id: id
      })
          .then((response)=>{
            console.log(response);
            if ( response.data.result.length === 0) {
              return this.$axios.post('/sdata/rest/service/dataapi/rest/4995a172-62d3-4066-9436-6ad777703664', {
                parent_id: id
              })
            } else this.thirdMenu = response.data.result
          })
          .then((response)=>{
            this.thirdMenu = response.data.result
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped lang="less">
.lastMenu{
  position: absolute;
  width: 297px;
  height: 413px;
  background: linear-gradient(180deg,#edf0f4 0%,#FFF 100%);
  .btn{
    width: 104px;
    height: 36px;
    background: #FFFFFF;
    box-shadow: 3px 3px 8px 1px rgba(201, 214, 231, 0.7900000214576721);
    text-align: center;
    line-height: 36px;
    &:hover{
      background: #3062BF;
      box-shadow: 3px 3px 8px 1px rgba(99, 142, 200, 0.7900000214576721);
      cursor: pointer;
      color: #FFF;
    }
  }
}
.content{
  height: 624px;
  margin-top: 20px;
  position: relative;
  .menu{
    background-image: url("/images/Group 940@2x.png");
    background-size: 100% 100%;
    li{
      height: 64px;
      color: #3D485D;
      line-height: 64px;
      padding: 0 40px;
      &:hover{
        cursor: pointer;
        border-left: 2px solid #2B5FBE;
        font-weight: bold;
        background: #FFF;
        color: #2B5FBE;
      }
    }
    .activeMenu{
      border-left: 2px solid #2B5FBE;
      font-weight: bold;
      background: #FFF;
      color: #2B5FBE;
    }
  }
  .secondMenu{
    height: 312px;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(2, 50%);
    grid-row-gap: 20px;
    &>div{
      width: 234px;
      height: 116px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      .title{
        font-size: 14px;
        font-weight: bold;
        color: #111111;
        &:hover{
          cursor: pointer;
        }
      }
      .discribe{
        flex: 1 auto;
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(17, 17, 17, 0.8);
      }
      .symbol{
        padding: 0 8px;
        height: 24px;
        line-height:24px;
        border: 1px solid rgba(0, 0, 0, 0.4);
      }
    }
  }
  ::v-deep .ivu-carousel-dots-inside {
    display: block;
    position: absolute;
    bottom: 50px;
    left: -20px;
    text-align: center;
    button{
      width: 48px;
      height: 4px;
    }
    .ivu-carousel-active button{
      background: #2B5FBE;
    }
  }
}
.category{
  height: 135px;
  padding: 48px 63px 0;
  .catBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
      color: #3D485D;
    }
    .active{
      color:#2B5FBE;
      font-weight: bold;
    }
    &:hover{
      cursor: pointer;
      p{
        color:#2B5FBE;
        font-weight: bold;
      }
    }
  }
}
</style>
