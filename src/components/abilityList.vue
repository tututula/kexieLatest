<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: space-between;background: #FFF;padding: 0 50px">
      <Input v-model.trim="serchCondition" search placeholder="搜索产品名称、缩写、功能名称（如：云服务" @on-enter="chooseMenu({ability_name: serchCondition, name: activeMenu, id: activeMenuId})" style="width: 738px;height: 36px"/>
      <div style="height: 36px;flex: 1;display: flex;align-items: center;margin-left: 20px">
        <Icon type="md-flame" color="#f85f52" />
      </div>
    </div>
    <div class="content">
      <div class="menu" style="width: 294px;height: 100%;padding: 23px 0 0 10px">
        <ul style="height: 755px;background-image: url('/images/Group 940@2x.png');background-size: 100% 100%;padding: 30px 0">
          <li :class="{activeMenu: activeMenu === item.name}" v-for="item in categoryBtn" @click="chooseMenu(item)">{{ item.name }}</li>
        </ul>
      </div>
      <div :class="{isOverflow: !detailShow}" style="padding: 20px 0 0 20px;flex: 1;position: relative;max-height: 1090px;">
        <div v-if="!detailShow" class="card" style="width:99%;height: 251px;color: #666" v-for="(item, index) in list">
          <div style="display: flex">
            <img :src="item.picture_url" alt="" width="303" height="191" style="margin-right: 24px">
            <div style="flex: 1;position: relative">
              <div style="display: flex;justify-content: space-between;align-items: center">
                <p style="font-weight: bold;color: #181818;">{{ item.ability_name }} <span style="color:#00D856;">{{ item.version }}</span></p>
                <Rate
                    v-model="item.ability_level"
                    disabled
                    :show-text="false"
                >
                </Rate>
              </div>
              <div style="display: grid;grid-template-columns: repeat(2, 1fr);margin-top: 10px">
<!--                <p>负责人 : <span style="color: #2B5FBE;font-weight: bold">陈思洋</span></p>-->
                <p>复用次数 : <span>{{ item.repeat_use_counts }}</span></p>
                <p>提供形式 : <span>{{ item.provider_type }}</span></p>
              </div>
<!--              <div>
                <p style="white-space: normal"> 落地案例 : <span style="margin-right: 10px;color: #2B5FBE;font-weight: bold">宿迁无人机平台</span></p>
              </div>-->
              <p style="margin: 12px 0;width: 100%;height: 60px;overflow: hidden;text-overflow:ellipsis;word-break: break-all;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">
                {{ item.ability_description }}
              </p>
              <Button type="primary" style="width: 100px;height: 30px;background: #2B5FBE;position: absolute;bottom: 0" @click="showDetail(item)">了解详情</Button>
            </div>
          </div>
        </div>
        <div class="detail" v-if="detailShow">
          <div style="display: flex">
            <img src="" alt="" width="303" height="191">
            <div class="topArea" style="margin-left: 45px;flex: 1;display: grid;grid-template-columns: 2fr 1fr">
              <p>能力名称 : <span>{{detail.ability_name}}</span></p>
              <p style="text-align: right">版本号 : <span style="color: #00D856">{{detail.version}}</span></p>
              <p>所属方向 : <span>{{detail.direction}}</span></p>
              <p  style="text-align: right">负责人 : <span style="color: #2B5FBE"><a href="" style="color: #2B5FBE">{{detail.expert.expertName}}</a></span></p>
              <p>复用次数 : <span>{{detail.repeat_use_counts}}</span></p>
              <p  style="text-align: right">提供形式 : <span>{{detail.provider_type}}</span></p>
              <p>能力评级 : <span>    <Rate
                  v-model="detail.ability_level"
                  disabled
                  :show-text="false"
              >
                </Rate></span></p>
            </div>
          </div>
          <div style="display: flex;margin-top: 30px">
            <span>能力详情 : </span><p style="flex: 1;letter-spacing: 1px;white-space: normal;word-break: break-all;font-weight: bold;color: #333333;margin-left: 10px">{{detail.ability_description}}</p>
          </div>
          <div style="margin-top: 30px;display: flex;">
            <span style="margin-right: 10px">落地案例 : </span>
            <div style="display: flex;flex-wrap: wrap;flex: 1">
              <a  style="margin-right: 10px;font-weight: bold;color: #2B5FBE" v-for="i in detail.project" @click="jumpTo(i.project_id)">{{i.project_name||''}}</a>
            </div>
          </div>
          <img class="back" src="/images/backbtn@2x.png" alt="" width="50" height="50" @click="hideDetail" style="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "abilityList",
  data(){
    return {
      detailShow:false,
      serchCondition: '',
      activeMenu: '全部',
      activeMenuId: '',
      categoryBtn:[
        {
          name: '全部',
          id: ''
        },
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
          id: 'e78019fda4e54918ba4bea21d7c46720'
        }
      ],
      list:[],
      detail: {
      },
    }
  },
  created() {
    if (!this.$route.query.hasOwnProperty('detailId')) {
      this.chooseMenu({
        name: '全部',
        id: '',
        ability_name: null
      })
    }
  },
  methods:{
    showDetail (item) {
      this.detailShow = true
      this.detail = item
      this.detail.expert = {}
      this.$axios.post('/sdata/rest/dataservice/rest/orchestration/9c9f2640-846b-461d-8b2d-d45e4ffe9671', {
        param:{
          "abilityId": item.id
        }
      })
      .then((response)=>{
        this.$set(this.detail.expert, 'expertName', response.data.result.expert.length === 0 ? '' : response.data.result.expert[0].expertName)
        this.$set(this.detail.expert, 'expertId', response.data.result.expert.length === 0 ? '' : response.data.result.expert[0].expertId)
        this.$forceUpdate()
      })
      this.$axios.post('/sdata/rest/dataservice/rest/orchestration/1bdd62a2-a26e-40b7-96b2-791a56938d04', {
        param:{
          "abilityId": item.id
        }
      })
      .then((response)=>{
        this.detail.project = response.data.result.project
        this.$forceUpdate()
      })
      this.$axios.post('/sdata/rest/service/dataapi/rest/c52b2173-5e65-4bb6-8676-f05a65e58ceb', {
        "id": item.parent_id
      })
      .then((response)=>{
        this.detail.direction = response.data.result[0].name
        this.$forceUpdate()
      })

    },
    hideDetail(){
      this.detailShow = false
    },
    chooseMenu(item){
      this.hideDetail()
      this.list = []
      this.activeMenu = item.name
      this.activeMenuId = item.id
      let obj = {}
      if(item.name !== '全部'){
        obj.parent_id = item.id
      }
      obj.ability_name = this.serchCondition || null
      this.$axios.post('/sdata/rest/service/dataapi/rest/438f61e0-1a38-4a26-9199-01d4671359b1', obj)
      .then((response)=>{
        this.list = response.data.result.map(item => {
          item.ability_level = item.ability_level ? parseFloat(item.ability_level.replace(/[^\d]/g,'')) : 0
          return item
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    jumpTo (url) {
      return
    }
  }
}
</script>

<style scoped lang="less">
  .content{
    display: flex;
    .menu{
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
    .card{
      width: 875px;
      height: 251px;
      background: linear-gradient(167deg, #F4F6F9 0%, #FFFFFF 100%);
      box-shadow: 8px 8px 22px -7px rgba(62, 63, 66, 0.33000001311302185);
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      border: 3px solid;
      border-image: linear-gradient(151deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) 3 3;
      padding: 30px 24px;
      margin-bottom: 20px;
      &:hover{
        width: 875px;
        height: 251px;
        background: linear-gradient(167deg, #F4F6F9 0%, #FFFFFF 100%);
        box-shadow: 4px 12px 30px 1px rgba(0, 23, 85, 0.33000001311302185);
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        border: 3px solid;
        border-image: linear-gradient(151deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) 3 3;
        position: relative;
        top: -5px;
      }
    }
    .detail{
      top: 20px;
      position: absolute;
      padding: 20px 20px;
      width: 99%;
      height: ~"calc(100% - 20px)";
      background: linear-gradient(167deg, #F4F6F9 0%, #FFFFFF 100%);
      box-shadow: 8px 8px 22px -7px rgba(62, 63, 66, 0.33000001311302185);
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      border: 3px solid #FFF;
      .topArea{
        p{
          font-weight: 400;
          color: #666666;
          span{
            font-weight: bold;
            color: #333;
          }
        }
      }
      .back{
        position: absolute;
        bottom: 40px;
        left: ~"calc(50% - 25px)";
        &:hover{
          cursor: pointer;
        }
      }
    }
    .isOverflow{
      overflow: auto;
    }
  }
</style>
