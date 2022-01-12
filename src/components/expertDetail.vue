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
                  <div style="display: flex;justify-content: space-between">
                    <div>
                      <span style="font-weight: bold;color: #000000;font-size: 20px">{{ expert.name }}</span>
                      <span style="font-size: 14px;margin-left: 15px">{{expert.work_team}}</span></div>
                    <div>
                      <span style="font-size: 14px;margin-left: 170px">人才级别</span>
                      <span style="font-size: 18px;font-weight: bold;color: #2B5FBE;margin-left: 15px">{{expert.talent_level}}</span>
                    </div>
                  </div>
                  <div style="display: flex;padding-top: 20px">
                    <div style="padding-right: 50px;display: flex;flex-direction: column;justify-content: space-between">
                      <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{expert.job_leval}}</p>
                      <p>岗位级别</p>
                    </div>
                    <div class="abilityDirection" style="width: 196px;text-align: center">
                      <div style="height: 100%;display: flex;flex-direction: column;justify-content: space-between">
                        <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{expert.ability_type}}</p>
                        <p>能力方向</p>
                      </div>
                    </div>
                    <div style="padding-left: 50px;display: flex;flex-direction: column;justify-content: space-between">
                      <p style="font-size: 26px;font-weight: bold;color: #2B5FBE;">{{expert.total_score}}</p>
                      <p>总积分</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display: flex;padding: 20px 0 15px;flex-wrap: wrap">
                <div class="abilityTag" style="" v-for="i in expert.telnet">{{}}</div>
              </div>
            </div>
          </Row>
          <Row class="card" style="margin-top: 15px;height: 300px;padding: 10px 40px">
            <Col :span="10">
              <p class="title">主导科创能力</p>
              <p class="label"><span class="text">{{expert.lead_project}}</span></p>
              <p class="title">获奖情况</p>
              <p class="label" >{{expert.prizes || '无'}}</p>
            </Col>
            <Col :span="14">
              <div id="radar" style="width: 100%;height: 100%"></div>
            </Col>
          </Row>
        </Col>
        <Col class="card" :span="8" style="max-height: 560px;overflow: auto">
          <Timeline>
            <TimelineItem v-for="item in projects">
              <p class="timeline-title">20/01-20/12</p>
              <div class="departmentTag">鸿信视频分析系统产品1.0</div>
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
  created() {
    let expertData = localStorage.getItem('expertData')
    if(!expertData) {
      this.expert = this.$route.params
      localStorage.setItem('expertData', JSON.stringify(this.$route.params))
    } else {
      this.expert = JSON.parse(expertData)
    }
    this.menuItem.forEach(i => {
      if (i.id === this.expert.ability_type) {
        this.expert.ability_type = i.name
      }
    })
  },
  mounted() {
    this.queryProject()
    this.initChart()
    this.queryScore()
    this.queryEchartData()
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
          title: '科创考评项',
          key: 'evaluate_term',
          align: 'center'
        },
        {
          title: '科创考评细项',
          key: 'evaluate_detail',
          align: 'center'
        },
        {
          title: '科创考评单次分数档',
          key: 'evaluation_score_level',
          align: 'center'
        },
        {
          title: '最终分数',
          key: 'finish_percent',
          align: 'center'
        },
        {
          title: '记录人',
          key: 'record_person',
          align: 'center'
        },
        {
          title: '时间',
          align: 'center',
          key: 'create_time',
          render: (h, params) => {
            let time =  this.$moment(new Date(params.row.create_time)).format('yyyy-MM-DD HH:mm:ss')
            console.log(time)
            return h('div', [
              h('p', time)
            ]);
          }
        },
      ],
      projects:[],
      expert: {},
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
    }
  },
  methods:{
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
    },
    queryProject(){
      this.$axios.post('/sdata/rest/dataservice/rest/orchestration/b7b25978-63a8-4cc3-b8af-4b2ab87661c6', {
        "param": {
          "expertId": this.$route.query.id
        }
      })
          .then((response)=>{
            this.projects = response.data.result.evaluate
           console.log(response)
          })
    },
    queryScore(){
      Promise.all([this.$axios.post('/sdata/rest/service/dataapi/rest/26f3df4c-1916-46c9-ba0d-030f14eebf80', {
        "expert_id": this.expert.id,
      }), this.$axios.post('/sdata/rest/dataservice/rest/orchestration/b7b25978-63a8-4cc3-b8af-4b2ab87661c6', {
        "param": {
          "expertId": this.expert.id
        }
      })]).then(res => {
        console.log(res)
        let arr = JSON.parse(JSON.stringify(res[0].data.result))
        let scoreDetailNameArr = res[1].data.result.evaluate
        arr.forEach((item) => {
          scoreDetailNameArr.forEach(i => {
            if (item.id === i.id) {
              item.evaluate_term = i.evaluate_term
              item.evaluate_detail = i.evaluate_detail
            }
          })
        })
        this.tableData = arr
      })
    },
    queryEchartData () {
      this.$axios.post('/sdata/rest/service/dataapi/rest/f7f008f5-2233-489b-b708-e7a55e640447', {
        "uesr_name": this.expert.name
      }).then(res => {
        console.log(res)
      })
    }
  },
  beforeDestroy() {
    localStorage.removeItem('expertData')
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
    width: 100%;
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
