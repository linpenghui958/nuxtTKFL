<template>
  <div class="index">
    <section class="banner"></section>
    <div class="product">
      <div class="title">加入我们</div>
      <div class="content">
        <ul class="left">
          <li class="item sub-title">全部岗位</li>
          <li class="item" v-for="(item, index) in departList" :key="index">{{item}}</li>
        </ul>
        <div class="right">
          <div class="infor-title">
            <span class="station">职位</span>
            <span class="depart">部门</span>
            <span class="location">武汉</span>
            <span class="view">查看</span>
          </div>
          <div class="content-wrapper">
            <div class="item" v-for="(item, index) in 6" :key="index">
              <span class="station">JAVA工程师</span>
              <span class="depart">软件研发部</span>
              <span class="location">地点</span>
              <span class="icon" @click="toggleInfor(index)">
                <i class="iconfont" :class="[showInforIndex === index ? 'icon-shouqi' : 'icon-xiangxia']"></i>
              </span>
              <div class="text-content" :class="{'show': showInforIndex === index}">
                <p>职责:</p>
                <p>1、负责前期视觉用户研究、设计流行趋势分析； 视觉风格设定；</p>
                <p>2、负责日常手机端、pc端、电视端等各终端项目的UI设计和资源输出；</p>
                <p>3、能够团队合作，参与设计流程和规范的制定，保证团队规范的有效执行；</p>
                <p>4、负责与开发同事沟通保证ui设计在实际手机中的实现效果完美呈现及各种极限情况的妥善处理；</p>
                <p>要求:</p>
                <p>1、执行能力强、不拖需求，有较好的抗压能力；</p>
                <p>2、具备良好的表达能力，沟通能力，以及团队合作意识；</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      departList: ['市场部', '客服部', '研发部', '人事部'],
      showInforIndex: null
    }
  },
  methods: {
    toggleInfor (index) {
      this.showInforIndex = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.index
  width 100%
  background rgba(255,255,255,1)
  .banner
    width 100%
    height 400px
    display block
    bg-image('banner')
    background-position center
  .product
    width 1000px
    margin 0 auto
    padding-bottom 100px
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
    .content
      font-size 0
      .left
        width 200px
        font-size 16px
        box-sizing border-box
        cursor pointer
        display inline-block
        vertical-align top
        .item
          width 200px
          height 50px
          line-height 50px
          text-align center
          color #666666 
          border 1px solid rgba(221,225,230,1)
          &:hover
            color #2E83BF
            border-color #2E83BF
          &.sub-title
            background #E6EAF0
            font-size 18px
      .right
        width 760px
        min-height 400px
        margin-left 40px
        display inline-block
        vertical-align top
        .station
          width 30%
          height 50px
          display inline-block
          vertical-align top
        .depart
          width 30%
          height 50px
          display inline-block
          vertical-align top
        .location
          width 20%
          height 50px
          display inline-block
          vertical-align top
        .view 
          width 20%
          height 50px
          display inline-block
          vertical-align top
        .icon
          width 20%
          height 50px
          display inline-block
          vertical-align top
        .infor-title
          height 50px
          background #E6EAF0
          line-height 50px
          text-align center
          color #666
          font-size 18px
        .content-wrapper
          .item
            min-height 50px
            font-size 16px
            line-height 50px
            box-sizing border-box
            cursor pointer
            border-bottom 1px solid #E6EAF0
            color #666
            text-align center
            .text-content
              text-align left
              font-size 14px
              box-sizing border-box
              padding-left 68px
              display none
              &.show
                display block
              p
                height 28px
                line-height 28px
          
</style>
