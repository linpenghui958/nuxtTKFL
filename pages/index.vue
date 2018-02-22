<template>
  <div class="index">
    <section class="banner"></section>
    <div class="product">
      <div class="title">产品</div>
      <div class="product-list">
        <div class="product-item" v-for="item in 6">
          <i class="icon"></i>
          <span class="text">产品{{item}}</span>
        </div>
      </div>
    </div>
    <section class="company-intro">
      <div class="left-img"></div>
      <div class="company-right">
        <div class="title">企业简介</div>
        <div class="content">湖北天凯风林电子有限公司武汉分公司成立于2014年6月6日。湖北天凯风林电子有限公司武汉分公司位于江汉区江汉经济开发区江兴路17号A栋506室交通便利。湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。热诚欢迎各界朋友前来参观、考察、洽谈业务。林利民欢迎新老客户来电咨询。</div>
        <div class="more"></div>
      </div>
    </section>
    <section class="news">
      <div class="title">新闻动态</div>
      <div class="new-content">
        <div class="news-item">
          <div class="content">
            <div class="sub-title">
              这里是新闻标题，大概内容是天凯风林公司
            </div>
            <div class="sub-content">
              湖北天凯风林电子有限公司于2010年06月23日在潜江市工商行政管理局登记成立。公司经营范围包括卫星定位系统的研发、设计；卫星定位终端设备的销售等。
            </div>
            <div class="time">
              2017-06-02
            </div>
          </div>
        </div>
        <div class="news-item">
          <div class="content">
            <div class="sub-title">
              这里是新闻标题，大概内容是天凯风林公司
            </div>
            <div class="sub-content">
              湖北天凯风林电子有限公司于2010年06月23日在潜江市工商行政管理局登记成立。公司经营范围包括卫星定位系统的研发、设计；卫星定位终端设备的销售等。
            </div>
            <div class="time">
              2017-06-02
            </div>
          </div>
        </div>
        <div class="news-item">
          <div class="content">
            <div class="sub-title">
              这里是新闻标题，大概内容是天凯风林公司
            </div>
            <div class="sub-content">
              湖北天凯风林电子有限公司于2010年06月23日在潜江市工商行政管理局登记成立。公司经营范围包括卫星定位系统的研发、设计；卫星定位终端设备的销售等。
            </div>
            <div class="time">
              2017-06-02
            </div>
          </div>
        </div>
      </div>
      <div class="more">了解更多</div>
    </section>
    <div class="advantage-wrapper">
      <div class="advantage">
        <div class="title">我们的优势</div>
        <div class="advan-list">
          <div class="item" v-for="item in 4">
            <i class="icon"></i>
            <div class="subtitle">优势1</div>
            <div class="text">公司提供全方位，个性化的解决方案，为你提供最优解。</div>
            <div class="more">了解更多</div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="title">合作伙伴</div>
      <div class="partner-item"></div>
      <div class="partner-item"></div>
      <div class="partner-item"></div>
      <div class="partner-item"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.index
  width 100%
  background rgba(255,255,255,1)
  .banner
    width 100%
    height 620px
    display block
    bg-image('banner4')
    background-position center
  .product
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
    .product-list
      width 1000px
      height 500px
      border-top 2px solid rgba(204,204,204,1)
      border-left 2px solid rgba(204,204,204,1)
      color rgba(112,112,112,1)
      margin-bottom 110px
      .product-item
        width 33.33%
        height 250px
        display inline-block
        box-sizing border-box
        border-right 2px solid rgba(204,204,204,1)
        border-bottom 2px solid rgba(204,204,204,1)
        .icon
          width 130px
          height 130px
          display block
          margin 30px 0 40px 100px
      
        &:nth-child(1)
          .icon
            bg-image('auto')
            background-size contain
        &:nth-child(2)
          .icon
            bg-image('calendar')
            background-size contain
        &:nth-child(3)
          .icon
            bg-image('product-features')
            background-size contain
        &:nth-child(4)
          .icon
            bg-image('QRCode')
            background-size contain
        &:nth-child(5)
          .icon
            bg-image('store')
            background-size contain
        &:nth-child(6)
          .icon
            bg-image('trade-assurance')
            background-size contain
        .text
          height 24px
          line-height 24px
          font-size 24px
          display block
          text-align center
  .company-intro
    width 1000px
    margin 0 auto
    font-size 0
    position relative
    .left-img
      width 360px
      height 450px
      display inline-block
      vertical-align top
      bg-image('banner3')
    .company-right
      width 640px
      height 450px
      display inline-block
      box-sizing border-box
      padding-left 60px
      vertical-align top
      .title
        height 24px
        line-height 24px
        font-size 24px
        position relative
        color rgba(112,112,112,1)
        margin 30px 0 120px
        &::after
          content ''
          display block
          position absolute
          bottom -46px
          left 0px
          width 40px
          height 16px
          border-radius 8px
          button-bg()
      .content
        font-size 16px
        width 100%
        height 220px
        line-height 36px
        color rgba(51,51,51,1)
      .more
        width 100px
        height 35px
        bg-image('more')
        position absolute
        bottom 0
        right 0
  .news
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
    .new-content
      width 1000px
      .news-item
        width 300px
        height 400px
        margin-right 50px
        display inline-block
        vertical-align top
        overflow hidden
        bg-image('banner')
        position relative
        transition all ease .2s
        &:nth-child(2)
          bg-image('banner1')
        &:nth-child(3)
          bg-image('banner2')
          margin-right 0
        .content
          width 100%
          height 136px
          bottom 34px
          height 40px
          position absolute
          transition all ease .2s
          .sub-title
            box-sizing border-box
            position relative
            width 100%
            padding 0 26px 0 35px
            font-size 16px
            color #ffffff
            line-height 20px
            transition all ease .2s
          .sub-content
            font-size 12px
            position relative
            top 30px
            line-height 16px
            height 32px
            width 100%
            padding 0 26px 0 35px
            word-break:break-all;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
            overflow:hidden;
            display none
          .time
            font-size 10px
            text-indent 34px
            display none
            position relative
            top 42px
        &:hover
          box-shadow 2px 2px 8px rgba(0,0,0,0.4)
          transition all ease .2s
          .content
            height 136px
            background #fff
            bottom 0
            transition all ease .2s
            .sub-title
              transition all ease .2s
              color #000
              top 19px
              &::after
                content ''
                display block
                position absolute
                left 20px 
                top 0 
                width 2px
                height 36px
                background rgba(128,128,128,1)
            .sub-content
              display block
            .time
              display block
    .more
      width 100px
      height 35px
      margin 57px auto 50px
      font-size 16px
      line-height 35px
      text-align center
      button-bg()     
      color #ffffff
      border-radius 4px      
  .advantage-wrapper
    width 100%
    background rgba(245,245,245,1)
    border 1px solid transparent
    .advantage
      width 1000px
      margin 0 auto 130px
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
      .advan-list
        width 1000px
        height 360px
        font-size 0
        .item
          width 250px
          height 360px
          display inline-block
          vertical-align top
          position relative
          .icon
            width 70px
            height 70px
            display block
            margin 60px 90px 47px
            bg-image('icon')
          .subtitle
            height 16px
            font-size 16px
            text-align center
            display block
            line-height 16px
            width 100%
            color rgba(62,62,62,1)
            margin-bottom 19px
          .text
            font-size 14px
            line-height 18px
            color rgba(77,77,77,1)
            width 100%
            box-sizing border-box
            padding 0 13px
            text-align justify
            height 60px
          .more
            width 100px
            display none
            height 35px
            line-height 35px
            font-size 16px
            color #ffffff
            border-radius 8px
            position absolute
            text-align center
            bottom 30px
            left 75px
            background rgb(82, 158, 235)
          &:hover
            background #ffffff
            .more
              display block
  .partner
    width 1000px
    margin 0 auto
    padding-bottom 130px
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
    .partner-item
      width 235px
      height 100px
      display inline-block
      vertical-align top
      margin-right 20px
      background rgba(221,221,221,1)
      &:nth-child(4n + 1)
        margin-right 0
</style>
