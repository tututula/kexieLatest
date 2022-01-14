<template>
  <div class="page">
    <div class="nameBg" :style="{background: `url('${headerBgUrl}') no-repeat`}">
      <p class="pageName">{{ this.$route.query.pageName }}</p>
      <div class="nameBgContent"></div>
    </div>
    <div style="background: url('/images/contentBg.png') no-repeat ;background-clip:padding-box;background-origin:padding-box;background-size: cover;background-position-y: 78px">
      <router-view></router-view>
    </div>
    <div class="flex-center" style="min-height: 126px;background: url('/images/footerBg.png') no-repeat;background-size: 100% 100%;">
      <Button type="default" ghost>联系我们</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    msg: String
  },
  components:{
  },
  data(){
    return {
    }
  },
  computed:{
    headerBgUrl: function () {
      if(this.$route.query.pageName === '能力图谱'){
        return '/images/abilityAtlasBg.png'
      } else if (this.$route.query.pageName === '能力清单') {
        return '/images/abilityListBg.png'
      } else if (this.$route.query.pageName === '课题展示') {
        return '/images/projectBg.png'
      } else if (this.$route.query.pageName === '科创专家') {
        return '/images/zhuanjiaBg.png'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
  min-height: 520px;
  margin-top: 85px!important;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .nameBg{
    width: 100%;
    min-height: 210px;
    position: relative;
    background-size: 100% 100%!important;
    .pageName{
      position: absolute;
      top: 84px;
      left: 370px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
    .nameBgContent{
      height: 78px;
      background: #FFF;
      position: absolute;
      bottom: 0;
      left: 320px;
      right: 320px;
    }
  }
}
</style>
