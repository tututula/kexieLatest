<template>
  <div class="childPage" style="">
    <div class="expert">
      <Row :gutter="30">
        <Col :span="16">
          <Row class="card" style="height: 243px">
            <div class="carouselItem">
              <div style="display: flex">
                <div style="width: 107px;height: 135px;margin-right: 30px">
                  <img src="" alt="" style="width: 100%;height: 100%">
                </div>
                <div style="flex: 1">
                  <div style="text-align: left">
                    <span style="font-weight: bold;color: #000000;font-size: 20px">车少帅</span>
                    <span style="font-size: 14px;margin-left: 15px">研发中心-AI工作组</span>
                    <span style="font-size: 14px;margin-left: 170px">人才级别</span>
                    <span style="font-size: 18px;font-weight: bold;color: #2B5FBE;margin-left: 15px">省公司专家一级</span>
                  </div>
                  <div style="display: flex;padding-top: 20px">
                    <div style="padding-right: 50px">
                      <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">PC-4</p>
                      <p>岗位级别</p>
                    </div>
                    <div class="abilityDirection" style="width: 196px;text-align: center">
                      <div>
                        <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">图像类型</p>
                        <p>能力方向</p>
                      </div>
                    </div>
                    <div style="padding-left: 50px">
                      <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">2046</p>
                      <p>总积分</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex;padding: 20px 0 15px;flex-wrap: wrap">
                <div class="abilityTag" style="" v-for="i in 20">66rrrr6</div>
              </div>
            </div>
          </Row>
          <Row class="card" style="margin-top: 15px;height: 300px;padding: 10px 40px">
            <Col :span="10">
              <p class="title">主导科创能力</p>
              <p class="label">人才级别 : <span class="text">c</span></p>
              <p class="label">科创能力 : <span class="text">a</span></p>
              <p class="label">行业专家 : <span class="text">a</span></p>
              <p class="title">获奖情况</p>
              <p class="label"  v-for="i in 3">2020年6月  江苏省五一章</p>
            </Col>
            <Col :span="14">
              <div id="radar" style="width: 100%;height: 100%"></div>
            </Col>
          </Row>
        </Col>
        <Col class="card" :span="8" style="max-height: 560px;overflow: auto">
          <Timeline>
            <TimelineItem>
              <p class="timeline-title">20/01-20/12  鸿信视频分析系统产品1.0</p>
              <div class="departmentTag">智慧城市</div>
              <p class="label">项目技术架构 : <span class="text">微服务架构</span></p>
              <p class="label">应用技术 : <span class="text">视频AI分析技术</span></p>
              <p class="label">个人工作量 : <span class="text">100/日</span></p>
              <p class="label">工作内容 : <span class="text">带领团队设计产品功能、页面样式、交互逻辑流程；设计系统架构；负责后端交通与行人视频分析算法微服务；推动项目落地，落地集团MEC智慧文旅、DICT交通视频云等项目。</span></p>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
    </div>
    <div style="margin-top: 30px">
      <p class="title" style="font-size: 18px">积分细则</p>
      <Table :data="tableData" :columns="tableColumns" stripe></Table>
    </div>
  </div>
</template>

<script>
export default {
  name: "expertDetail",
  mounted() {
    this.initChart()
  },
  data(){
    return {
      tableData:[
        {
          name: 'John Brown',
          direction: 'AI'
        },
      ],
      tableColumns:[
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
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
    },
    initChart(){
      let mychart = this.$echarts.init(document.getElementById('radar'))
      let option = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        radar: [
          {
            indicator: [
              {text: 'Indicator1'},
              {text: 'Indicator2'},
              {text: 'Indicator3'},
              {text: 'Indicator4'},
              {text: 'Indicator5'}
            ],
            center: ['50%', '50%'],
            radius: 80,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
              color: '#000',
              fontSize:12
            },
            splitArea: {
              areaStyle: {
                color: ['#eef3fd'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7dde4'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#d7dde4'
              }
            },
          }
        ],
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value: [60, 5, 0.3, -100, 1500],
                name: 'Data B',
                lineStyle:{
                  color:'#83D9FF'
                },
                itemStyle:{
                  color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#44FFD1' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#0990A6' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }
                },
                areaStyle: {
                  color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#83D9FF' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#083095' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }
                }
              }
            ]
          }
        ]
      };
      mychart.setOption(option)
    }
  }
}
</script>

<style scoped lang="less">
.expert{
  margin-top: 30px;
  .card{
    padding: 20px;
    background: linear-gradient(167deg, #F4F6F9 0%, #FFFFFF 100%);
    box-shadow: 8px 8px 22px -7px rgba(62, 63, 66, 0.33000001311302185);
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    border: 3px solid #FFF;
  }
  .carouselItem{
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
      font-size: 12px;
      margin-right: 5px;
      margin-bottom: 5px;
      background: #E8F0FF;
    }
  }
  .label{
    font-size: 12px;
    font-weight: bold;
    color: #000;
    margin: 10px 0;
    .text{
      font-weight: normal;
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
  .timeline-title{
    font-size: 16px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #2B5FBE;
  }
  .departmentTag{
    display: inline-block;
    width: auto;
    height: 22px;
    border-radius: 4px;
    border:1px solid #2B5FBE;
    padding: 4px;
    line-height: 14px;
    font-size: 12px;
    margin: 5px 0;
    background: #E8F0FF;
  }
}
.title{
  font-size: 16px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #2B5FBE;
  margin: 10px 0;
}
</style>
