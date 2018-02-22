<template>
  <div class="news">
    <div class="news-title">新闻动态</div>
    <div class="select-content">
      <div class="select-item" @click="changIndex(0)" :class="{'active': activeIndex === 0}">公司新闻</div>
      <div class="select-item"  @click="changIndex(1)" :class="{'active': activeIndex === 1}">行业动态</div>
    </div>
    <div class="company-list" v-if="activeIndex === 0">
      <div class="company-item" v-for="item in 6">
        <div class="left"></div>
        <div class="right">
          <div class="sub-title">天凯风林电子有限公司武汉分公司成立</div>
          <div class="text">湖北天凯风林电子有限公司武汉分公司位于江汉区江汉经济开发区江兴路17号A栋506室交通便利。湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。</div>
          <div class="time">2017-06-02</div>
          <div class="more">查看更多</div>
        </div>
      </div>
    </div>
    <div class="industry-list" v-if="activeIndex === 1">
      <div class="industry-item" v-for="item in 6">
        <div class="left"></div>
        <div class="right">
          <div class="sub-title">天凯风林电子有限公司武汉分公司成立</div>
          <div class="text">湖北天凯风林电子有限公司武汉分公司位于江汉区江汉经济开发区江兴路17号A栋506室交通便利。湖北天凯风林电子有限公司武汉分公司本着“客户第一，诚信至上”的原则，欢迎国内外企业/公司/机构与本单位建立长期的合作关系。</div>
          <div class="time">2017-06-02</div>
          <div class="more">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changIndex (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.news
  width 100%
  background rgba(245,245,245,1)
  .news-title
    width 1000px
    margin 0 auto
    height 80px
    display block
    box-sizing border-box
    border-bottom 1px solid rgba(179,179,179,1)
    text-align left 
    font-size 24px
    color rgba(102,102,102,1)
    line-height 80px
  .select-content
    width 1000px
    height 116px
    margin 0 auto
    box-sizing border-box
    padding-top 40px
    padding-left 380px
    .select-item
      width 80px
      height 30px
      display inline-block
      vertical-align top
      box-sizing border-box
      margin-right 84px
      color rgba(102,102,102,1)
      text-align center
      cursor pointer
      line-height 20px
      &.active
        color rgba(46,131,191,1)
        border-bottom 1px solid rgba(46,131,191,1)
  .company-list
    width 1000px
    margin 0 auto
    .company-item
      width 1000px
      height 250px
      background-color #fff
      border-radius 8px
      margin-bottom 24px
      .left
        width 277px
        height 200px
        display inline-block
        vertical-align top
        margin 25px 49px 25px 25px
        bg-image('new2')
      .right
        width 640px
        height 250px
        display inline-block
        vertical-align top
        position relative
        .sub-title
          height 20px
          font-size 20px
          line-height 20px
          text-align left 
          color rgba(102,102,102,1)
          width 640px
          display block
          margin 24px 0 29px
        .text
          width 640px
          height 118px
          display block
          font-size 16px
          text-align justify
          line-height 22px
          color rgba(102,102,102,1)
        .time
          width 100px
          height 14px
          font-size 14px
          line-height 14px
          color rgba(153,153,153,1)
          position absolute
          left 0px
          bottom 24px
        .more
          width 100px
          height 35px
          text-align center
          line-height 35px
          color #ffffff
          position absolute
          right 0
          bottom 25px
          font-size 16px
          border-radius 4px
          button-bg()
  .industry-list
    width 1000px
    margin 0 auto
    .industry-item
      width 1000px
      height 250px
      background-color #fff
      border-radius 8px
      margin-bottom 24px
      .left
        width 277px
        height 200px
        display inline-block
        vertical-align top
        margin 25px 49px 25px 25px
        bg-image('new3')
      .right
        width 640px
        height 250px
        display inline-block
        vertical-align top
        position relative
        .sub-title
          height 20px
          font-size 20px
          line-height 20px
          text-align left 
          color rgba(102,102,102,1)
          width 640px
          display block
          margin 24px 0 29px
        .text
          width 640px
          height 118px
          display block
          font-size 16px
          text-align justify
          line-height 22px
          color rgba(102,102,102,1)
        .time
          width 100px
          height 14px
          font-size 14px
          line-height 14px
          color rgba(153,153,153,1)
          position absolute
          left 0px
          bottom 24px
        .more
          width 100px
          height 35px
          text-align center
          line-height 35px
          color #ffffff
          position absolute
          right 0
          bottom 25px
          font-size 16px
          border-radius 4px
          background linear-gradient(top, #56ccf2, #539df0)

</style>
