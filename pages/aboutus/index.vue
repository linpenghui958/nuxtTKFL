<template>
  <div class="about-us">
    <!-- <div class="banner">
      <div class="ad">业内领先的卫星定位终端设备提供商</div>
      <div class="sub-ad">专业  专注  专心</div>
      <div class="select-list">
        <div class="select-content">
          <div class="item" :class="{'active': aboutUsActiveIndex === 0}">关于我们</div>
          <div class="item" :class="{'active': aboutUsActiveIndex === 1}">管理架构</div>
          <div class="item" :class="{'active': aboutUsActiveIndex === 2}">企业文化</div>
          <div class="item" :class="{'active': aboutUsActiveIndex === 3}">联系我们</div>
        </div>
      </div>
    </div> -->
    <about-us-head></about-us-head>
    <div class="us-content">
      <div class="title">关于我们</div>
      <div class="img"></div>
      <div class="text-content">湖北天凯风林电子有限公司武汉分公司成立于2014年6月6日。湖北天凯风林电子有限公司武汉分公司位于江汉区江汉经济开发区江兴路17号A栋506室交通便利。湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。热诚欢迎各界朋友前来参观、考察、洽谈业务。林利民欢迎新老客户来电咨询。</div>
    </div>
    <div class="banner2">
      <div class="title">愿景</div>
    </div>
    <div class="value">
      <div class="title">价值观</div>
      <div class="value-list">
        <div class="value-item">
          <div class="item-img1"></div>
          <div class="item-title">公司价值观</div>
          <div class="item-content">湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。热诚欢迎各界朋友前来参观、考察、洽谈业务。林利民欢迎新老客户来电咨询。</div>
        </div>
        <div class="value-item">
          <div class="item-img2"></div>
          <div class="item-title">公司价值观</div>
          <div class="item-content">湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。热诚欢迎各界朋友前来参观、考察、洽谈业务。林利民欢迎新老客户来电咨询。</div>
        </div>
        <div class="value-item">
          <div class="item-img3"></div>
          <div class="item-title">公司价值观</div>
          <div class="item-content">湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。热诚欢迎各界朋友前来参观、考察、洽谈业务。林利民欢迎新老客户来电咨询。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import AboutUsHead from '~/components/AboutUsHead/AboutUsHead'
export default {
  data () {
    return {
      selectList: [
        {text: '关于我们', path: '/aboutus'},
        {text: '管理架构', path: '/aboutus'},
        {text: '企业文化', path: '/aboutus'},
        {text: '联系我们', path: '/aboutus'}
      ]
    }
  },
  components: {
    AboutUsHead
  },
  computed: {
    ...mapGetters([
      'aboutUsActiveIndex'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.about-us
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
          &.active
            background rgba(0,0,0,0.5)
          &:hover
            background rgba(0,0,0,0.5)
            transition all ease .2s
  .us-content
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
    .img
      width 700px
      height 400px
      margin 0 auto
      bg-image('banner1')
    .text-content
      width 700px
      margin 0 auto
      height 230px
      box-sizing border-box
      padding-top 40px
      font-size 14px
      line-height 26px
      color rgba(35,35,35,1)
      text-align justify
  .banner2
    width 100%
    height 300px
    bg-image('banner2')
    overflow hidden
    .title
      font-size 24px
      height 24px
      line-height 24px
      margin 50px 0 95px
      position relative
      color #fff
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
      &::before
        content '成为一家拥抱变化、持续创新的好公司'
        display block
        width 100%
        position absolute
        font-size 18px
        bottom -105px
  .value
    width 1000px
    margin 0 auto
    font-size 0
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
    .value-item
      width 293px
      height 550px
      display inline-block
      vertical-align top
      margin-right 60px
      &:nth-child(3)
        margin-right 0
      .item-img1
        width 293px
        height 290px
        bg-image('icon')
      .item-img2
        width 293px
        height 290px
        bg-image('icon1')
      .item-img3
        width 293px
        height 290px
        bg-image('icon2')
      .item-title
        width 100%
        height 18px
        line-height 18px
        font-size 18px
        text-align center
        margin 34px 0 24px
        color rgba(33,33,33,1)
      .item-content
        width 100%
        height 90px
        font-size 14px
        color rgba(33,33,33,1)
        text-align justify
        line-height 24px
</style>
