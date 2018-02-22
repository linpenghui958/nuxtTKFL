<template>
  <div class="honor">
    <about-us-head></about-us-head>
    <div class="aptitude">
      <div class="title">荣誉资质</div>
      <div class="apt-item" v-for="item in 8">
        <div class="img"></div>
        <div class="text">某某资质</div>
      </div>
    </div>
    <div class="develop-wrapper">
      <div class="develop-content">
        <div class="title">发展历程</div>
        <div class="develop-list">
          <div class="left">
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
          </div>
          <div class="right">
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
            <div class="item">
              <span class="text">湖北天凯风林电子有限公司成立于2014年6月6日。</span>
              <span class="year">2016</span>
            </div>
          </div>
        </div>
      </div>
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
.honor
  width 100%
  .aptitude
    width 1000px
    margin 0 auto 
    padding-bottom 80px
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
    .apt-item
      width 235px
      height 230px
      display inline-block
      vertical-align top
      margin-right 20px
      margin-bottom 40px
      .img
        width 235px
        height 171px
        bg-image('aptitude')
      .text
        width 235px
        height 18px
        line-height 18px
        color rgba(102,102,102,1)
        text-align center
        margin-top 20px
      &:nth-child(4n + 1)
        margin-right 0
  .develop-wrapper
    width 100%
    background rgba(245,245,245,1)
    .develop-content
      width 1000px
      overflow hidden
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
      .develop-list
        width 1000px
        height 635px
        margin-bottom 121px
        font-size 0
        .left
          width 500px
          height 635px
          display inline-block
          vertical-align top
          box-sizing border-box
          border-right 2px solid rgba(153,153,153,1)
          .item
            width 471px
            height 70px
            bg-image('input')
            line-height 70px
            margin-bottom 150px
            .text
              width 355px
              height 70px
              font-size 14px
              color rgba(102,102,102,1)
              text-align right 
              display inline-block
              vertical-align top
            .year
              width 80px
              height 70px
              font-size 24px
              color #fff
              text-align right 
              float right
              display inline-block
              vertical-align top
              margin-right 32px

        .right
          width 500px
          height 635px
          display inline-block
          vertical-align top
          .item
            width 471px
            height 70px
            bg-image('input-right')
            line-height 70px
            margin-top 150px
            margin-left 28px
            .text
              width 355px
              height 70px
              font-size 14px
              color rgba(102,102,102,1)
              text-align left 
              display inline-block
              vertical-align top
            .year
              width 80px
              height 70px
              font-size 24px
              color #fff
              text-align left 
              float left
              display inline-block
              vertical-align top
              margin-left 32px
</style>
