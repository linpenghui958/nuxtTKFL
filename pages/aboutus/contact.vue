<template>
  <div class="contact">
    <!-- <div class="banner">
      <div class="ad">业内领先的卫星定位终端设备提供商</div>
      <div class="sub-ad">专业  专注  专心</div>
      <div class="select-list">
        <div class="select-content">
          <div class="item">关于我们</div>
          <div class="item">管理架构</div>
          <div class="item">企业文化</div>
          <div class="item">联系我们</div>
        </div>
      </div>
    </div> -->
    <about-us-head></about-us-head>
    <div class="map">
      <div class="title">联系我们</div>
      <div id="map-content" class="map-content">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" >
          <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        </el-amap>
      </div>
    </div>
    <div class="message">
      <div class="title">留言</div>
      <div class="left-input">
        <input type="text" name="" id="" class="input-item" placeholder="姓名">
        <input type="text" name="" id="" class="input-item" placeholder="电弧">
        <input type="text" name="" id="" class="input-item" placeholder="E-mail">
      </div>
      <div class="right-input">
        <textarea name="" id="" cols="30" rows="10" class="area-input" placeholder="感谢您宝贵的意见..."></textarea>
      </div>
      <div class="button">提交</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import AboutUsHead from '~/components/AboutUsHead/AboutUsHead'
export default {
  data () {
    return {
      zoom: 16,
      center: [114.233246, 30.623953],
      marker: {
        position: [114.233246, 30.623953],
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      }
    }
  },
  components: {
    AboutUsHead
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.contact
  width 100%
  background #fff
  .banner
    width 100%
    height 500px
    overflow hidden
    bg-image('banner')
    background-position center
    position relative
    .ad
      width 100%
      height 45px
      font-size 48px
      display block
      color #ffffff
      text-align center
      font-weight lighter
      margin-top 155px
    .sub-ad
      width 100%
      height 30px
      font-size 30px
      line-height 30px
      text-align center
      margin-top 40px
      color #fff
    .select-list
      position absolute
      bottom 0 
      width 100%
      height 80px
      background rgba(0,0,0,0.2)
      .select-content
        width 1000px
        margin 0 auto
        font-size 0
        .item
          width 250px
          height 80px
          display inline-block
          font-size 20px
          line-height 80px
          text-align center
          cursor pointer
          color #ffffff
          transition all ease .2s
          &:hover
            background rgba(0,0,0,0.5)
            transition all ease .2s
  .map
    width 1000px
    margin 0 auto
    .title
      font-size 24px
      height 24px
      line-height 24px
      margin 80px 0 95px
      position relative
      text-align center
      &::after
        content ''
        display block
        width 40px
        height 16px
        border-radius 8px
        button-bg()
        position absolute
        bottom -45px
        left 50%
        transform translateX(-50%) 
    .map-content
      width 1000px
      height 400px
      display block
  .message
    width 1000px
    margin 0 auto
    .title
      font-size 24px
      height 24px
      line-height 24px
      margin 80px 0 95px
      position relative
      text-align center
    .left-input
      width 485px
      height 180px
      margin-right 30px
      display inline-block
      vertical-align top
      .input-item
        width 485px
        height 40px
        margin-bottom 30px
        font-size 16px
        box-sizing border-box
        border 1px solid rgba(102,102,102,1)
        text-indent 12px
        &::-webkit-input-placeholder
          color rgba(153,153,153,1)
    .right-input
      width 485px
      height 180px
      display inline-block
      vertical-align top
      .area-input
        width 485px
        height 180px
        font-size 16px
        box-sizing border-box
        text-indent 12px
        &::-webkit-input-placeholder
          color rgba(153,153,153,1)
    .button
      width 100px
      height 35px
      background-color rgba(86,185,241,1)
      border-radius 4px
      margin 0 auto 
      line-height 35px
      text-align center
      color #ffffff
      margin-top 50px
      margin-bottom 62px
</style>
