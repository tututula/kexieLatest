<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: space-between;background: #FFF;padding: 0 50px">
      <Input search v-model.trim="serchCondition" @on-enter="queryList()" placeholder="搜索产品名称、缩写、功能名称（如：云服务" style="width: 100%;height: 36px"/>
<!--      <div style="height: 36px;flex: 1;display: flex;align-items: center;margin-left: 20px">
        <Icon type="md-flame" color="#f85f52" />
      </div>-->
    </div>
    <div class="content">
      <div style="position: relative">
        <Divider style="position: absolute;top: 98%;margin: 0"/>
        <div class="historyMenu" style="display: flex;font-size: 16px;">
          <div v-for="(item, index) in menuItem" :class="{active: isActive === item}" @click="menuClick(item)" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <div style="padding: 20px 0">
        所属方向 :
      <RadioGroup v-model="formData.direction" type="button" button-style="solid" @on-change="queryList">
        <Radio v-for="item in categoryBtn" :label="item.id" border>{{item.name}}</Radio>
      </RadioGroup>
      </div>
      <div style="display: flex">
        <div>负责人 :
          <Select v-model="formData.personInChargeValue" style="width:272px" clearable @on-change="queryList">
            <Option v-for="item in personInCharge" :value="item.manager_id" :key="item.value">{{ item.name }}</Option>
          </Select>
        </div>
        <div style="margin-left: 30px">能力类型 :
          <Select v-model="formData.abilityType" style="width:272px" clearable @on-change="queryList">
            <Option :value="'API接口'">API接口</Option>
            <Option :value="'SDK'">SDK</Option>
            <Option :value="'平台'">平台</Option>
          </Select>
        </div>
      </div>
      <div class="table">
        <Table :data="tableData" :columns="tableColumns" stripe></Table>
        <div style="margin: 30px 0 0;overflow: hidden">
          <div style="float: right;">
            <Page :total="total" :current="formData.page"  @on-change="changePage($event,'page')" @on-page-size-change="changePage($event,'pageSize')" show-elevator show-sizer show-total ></Page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectShow",
  data(){
    return {
      formItem:{},
      serchCondition: '',
      isActive: '2021',
      total:0,
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
      menuItem:[
        '2021',
        '2020',
        '2019',
        '2018'
      ],
      tableData:[
      ],
      tableColumns:[
        {
          title: '课题名称',
          key: 'subject_name',
          align: 'center'
        },
        {
          title: '立项年份',
          key: 'setup_time',
          align: 'center'
        },
        {
          title: '负责人',
          key: 'manager_id',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                style: {
                  color: '#2B5FBE'
                },
                on: {
                  click: () => {
                    let id = ''
                    this.personInCharge.forEach((j)=>{
                      if(j.name ===  params.row.manager_id){
                        id = j.manager_id
                      }
                    })
                    this.$axios.post('/sdata/rest/service/dataapi/rest/491453fc-08a8-4daa-b282-7b49b077175e', {id: id})
                        .then(res => {
                          this.$router.push({ name: 'expertDetail',query:{pageName:'科创专家'},params: res.data.result[0]})
                        })
                  }
                },
              }, params.row.manager_id)
            ]);
          }
        },
        {
          title: '联系方式',
          key: 'mobile',
          align: 'center'
        },
        {
          title: '所属部门',
          key: 'department',
          align: 'center'
        },
        {
          title: '课题状态',
          key: 'subject_state',
          align: 'center'
        },
        {
          title: '所属方向',
          key: 'direction'   ,
          align: 'center'
        },
        {
          title: '能力类型',
          align: 'center',
          key: 'provide_type'
        },
      ],
      personInCharge:[],
      directionList:[],
      formData:{
        personInChargeValue:'',
        year: '2021',
        direction:'',
        abilityType: '',
        page:1,
        pageSize:10
      }
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    menuClick(item){
      this.isActive = item
      this.formData.year = item
      this.queryList()
    },
    queryList(){
      let obj = {
        "pageNum": "1",
        "pageSize": "20",
        "manager_id": this.formData.personInChargeValue || null,
        "provide_type": this.formData.abilityType || null,
        "setup_time": this.formData.year,
        "direction": this.formData.direction || null,
        "department": null,
        subject_name: this.serchCondition || null
      }
      Promise.all([
        this.$axios.post('/sdata/rest/service/dataapi/rest/7679c6b3-a2fe-4fd9-b201-b61470bb0b72', obj),
        this.queryDirection()
      ]).then((res)=>{
        this.total = res[0].data.result.length
        let dataFinal =  res[0].data.result.map((item)=>{
          this.categoryBtn.forEach((i)=>{
            if(i.id === item.direction){
              item.direction = i.name
            }
          })
          this.personInCharge.forEach((j)=>{
            if(j.manager_id === item.manager_id){
              item.manager_id = j.name
            }
          })
          return item
        })
        this.tableData = dataFinal
      })
    },
    queryPersonInCharge(){
      return this.$axios.post('/sdata/rest/dataservice/rest/orchestration/e91fc804-6fc6-4a23-8cdd-257c80e8d2c2', {
        "param": {
          "year": this.formData.year
        }
      }).then((res)=>{
        this.personInCharge = res.data.result.expert
      })
    },
    queryDirection(){
      this.$axios.post('/sdata/rest/dataservice/rest/orchestration/a8d0bc03-1985-43cf-8cef-6411db7ee3d8', {
        "param": {
          "year": this.formData.year
        }
      }).then((res)=>{
        this.directionList = res.data.result.direction
      })

    },
    changePage(e,type){
      if(type === 'page'){
        this.formData.page = e
      } else if(type === 'pageSize'){
        this.formData.pageSize = e
      }
      this.queryList()
    },
    init(){
      this.queryPersonInCharge().then(()=>{
        this.queryList()
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
    width: 104px;
    height: 35px;
    text-align: center;
    position: relative;
    &:hover{
      cursor: pointer;
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
  ::v-deep .ivu-radio-group-item{
    height: 30px;
    background: none;
    border-radius: 0px 0px 0px 0px;
    border: none;
    margin: 0 10px;
    color: #000;
  }
  .ivu-radio-wrapper-checked{
    color: #FFF;
  }
  .ivu-radio-group-button-solid .ivu-radio-wrapper-checked:not(.ivu-radio-wrapper-disabled){
    background: #2B5FBE;
  }
  .ivu-radio-group-button .ivu-radio-wrapper:first-child,.ivu-radio-group-button .ivu-radio-wrapper:last-child{
    border-radius: 0;
  }
  .ivu-radio-group-button .ivu-radio-wrapper, .ivu-radio-inner{
    border: none!important;
  }
  ::v-deep .ivu-radio-group-button .ivu-radio-wrapper:after,::v-deep .ivu-radio-group-button .ivu-radio-wrapper:before{
    height: 0px;
    left: 0px;
    top: 0px;
    background: none!important;
    opacity: 0;
  }
  .table{
    margin-top: 30px;
    ::v-deep .ivu-table-header{
      thead{
        height: 52px;
        tr th {
          background: #F0F4F8;
          .ivu-table-cell{
            color: #0B1D30;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
    ::v-deep .ivu-page-total{
      position: absolute;
      left:370px;
    }
    ::v-deep .ivu-page-item-active {
      border-color: #2B5FBE;
      background: #2B5FBE;
      a{
        color: #FFF;
      }

    }
  }
}
</style>
