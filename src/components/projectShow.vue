<template>
  <div class="childPage" style="">
    <div style="height: 78px;display: flex;align-items: end;justify-content: space-between;background: #FFF;padding: 0 50px">
      <Input search placeholder="搜索产品名称、缩写、功能名称（如：云服务" style="width: 738px;height: 36px"/>
      <div style="height: 36px;flex: 1;display: flex;align-items: center;margin-left: 20px">
        <Icon type="md-flame" color="#f85f52" />
      </div>
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
      <RadioGroup v-model="border" type="button" button-style="solid">
        <Radio label="全部" border></Radio>
        <Radio label="类目一" border></Radio>
        <Radio label="类目二" border></Radio>
        <Radio label="类目三" border></Radio>
      </RadioGroup>
      </div>
      <div style="display: flex">
        <div>负责人 :
          <Select v-model="model1" style="width:272px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select></div>
        <div style="margin-left: 30px">能力类型 :
          <Select v-model="model1" style="width:272px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select></div>
      </div>
      <div class="table">
        <Table :data="tableData" :columns="tableColumns" stripe></Table>
        <div style="margin: 30px 0 0;overflow: hidden">
          <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage" show-elevator show-sizer show-total ></Page>
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
      border:'全部',
      isActive: 2021,
      menuItem:[
        2021,
        2020,
        2019,
        2018
      ],
      tableData:[
        {
          name: 'John Brown',
          direction: 'AI'
        },
      ],
      tableColumns:[
        {
          title: '课题名称',
          key: '1',
          align: 'center'
        },
        {
          title: '立项年份',
          key: '2',
          align: 'center'
        },
        {
          title: '负责人',
          key: 'name',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                style: {
                  color: '#2B5FBE'
                }
              }, params.row.name)
            ]);
          }
        },
        {
          title: '联系方式',
          key: '3',
          align: 'center'
        },
        {
          title: '所属部门',
          key: '4',
          align: 'center'
        },
        {
          title: '课题状态',
          key: '5',
          align: 'center'
        },
        {
          title: '所属方向',
          key: 'direction'   ,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                style: {
                  color: '#2B5FBE'
                }
              }, params.row.direction)
            ]);
          }
        },
        {
          title: '能力类型',
          align: 'center',
          key: '6'
        },
      ]
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
