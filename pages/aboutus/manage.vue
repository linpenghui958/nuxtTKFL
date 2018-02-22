<template>
  <div class="manage">
    <about-us-head></about-us-head>
    <div class="manage-content">
      <div class="title">管理架构</div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import AboutUsHead from '~/components/AboutUsHead/AboutUsHead'
export default {
  components: {
    AboutUsHead
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.manage
  width 100%
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
  
  .image
    width 767px
    height 518px
    margin 0 auto
    bg-image('manage')
    margin-bottom 190px
</style>
