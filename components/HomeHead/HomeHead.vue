<template>
  <div>
      <div class="nav" v-show="isShowHead">
        <div class="nav-head">
          <div class="logo"></div>
          <ul class="head-nav">
            <div class="nav-item" to="/" @click="changeIndex(0, '/')" :class="{'active': activeIndex === 0}">首页</div>
            <div class="nav-item" to="/product" @click="changeIndex(1, '/product')" :class="{'active': activeIndex === 1}">产品动态</div>
            <div class="nav-item" to="/news" @click="changeIndex(2, '/news')" 
                                            @mouseenter="showNews"
                                            @mouseleave="notShowNews"
                                            :class="{'active': activeIndex === 2}">新闻动态
              <transition name="fade" v-if="showNewsList">
                <div class="about-us-list">
                  <div class="sub-item" @click.stop="changeIndex(2, '/news')" >公司新闻</div>
                  <div class="sub-item" @click.stop="changeIndex(2, '/news')" >行业动态</div>
                </div>
              </transition>
            </div>
            <div class="nav-item" to="/aboutus" @click="changeIndex(3, '/aboutus')" 
                                                @mouseenter="showAbout"
                                                @mouseleave="notShowAbout"
                                                :class="{'active': activeIndex === 3}">关于我们
              <transition name="fade" v-if="showAboutUs">
                <div class="about-us-list">
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus')" >公司介绍</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/manage')" >管理架构</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/honor')" >发展成就</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/contact')" >联系我们</div>
                </div>
              </transition>
            </div>
            <div class="nav-item" to="/invite" @click="changeIndex(4, '/invite')" :class="{'active': activeIndex === 1}">加入我们</div>
          </ul>
        </div>
      </div>
      <!-- <div class="float-icon-wrapper">
        <div class="phone">
          <i class="icon"></i>
          <span class="text">027-45877822</span>
        </div>
        <div class="email">
          <i class="icon"></i>
          <span class="text">578457842@qq.com</span>
        </div>
        <div class="weixin">
          <i class="icon"></i>
          <i class="show-icon"></i>
        </div>
        <div class="message" @click="openDialog">
          <i class="icon"></i>
        </div>
        <div class="top">
          <i class="icon" @click="goTop"></i>
        </div>
      </div> -->
    <transition name="fade">
      <div class="fixed-nav" v-if="!isShowHead && !showDialog">
        <div class="nav-head">
          <div class="logo"></div>
          <ul class="head-nav">
            <div class="nav-item" to="/" @click="changeIndex(0, '/')" :class="{'active': activeIndex === 0}">首页</div>
            <div class="nav-item" to="/product" @click="changeIndex(1, '/product')" :class="{'active': activeIndex === 1}">产品动态</div>
            <div class="nav-item" to="/news" @click="changeIndex(2, '/news')" 
                                            @mouseenter="showNews"
                                            @mouseleave="notShowNews"
                                            :class="{'active': activeIndex === 2}">新闻动态
              <transition name="fade" v-if="showNewsList">
                <div class="about-us-list">
                  <div class="sub-item" @click.stop="changeIndex(2, '/news')" >公司新闻</div>
                  <div class="sub-item" @click.stop="changeIndex(2, '/news')" >行业动态</div>
                </div>
              </transition>
            </div>
            <div class="nav-item" to="/aboutus" @click="changeIndex(3, '/aboutus')" 
                                                @mouseenter="showAbout"
                                                @mouseleave="notShowAbout"
                                                :class="{'active': activeIndex === 3}">关于我们
              <transition name="fade" v-if="showAboutUs">
                <div class="about-us-list">
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus')" >公司介绍</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/manage')" >管理架构</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/honor')" >发展成就</div>
                  <div class="sub-item" @click.stop="changeIndex(3, '/aboutus/contact')" >联系我们</div>
                </div>
              </transition>
            </div>
            <div class="nav-item" to="/invite" @click="changeIndex(4, '/invite')" :class="{'active': activeIndex === 1}">加入我们</div>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="message-dialog-wrapper" v-if="showDialog">
        <div class="message-dialog">
          <div class="title">留言反馈
            <i class="icon" @click="closeDialog">X</i>
          </div>
          <div class="item">
            <span class="text">您的邮箱</span>
            <input type="text" class="email-input" placeholder="请输入您的邮箱">
          </div>
          <div class="item">
            <span class="text">意见建议</span>
            <textarea name="message-content" id="" cols="30" rows="10" class="message-content" placeholder="留下你的意见与建议"></textarea>
          </div>
          <div class="button">提交</div>
        </div>
      </div>
    </transition>
  </div>
  
</template>

<script type="text/ecmascript-6">
import {mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      isShowHead: true,
      stop: false,
      timer: null,
      showAboutUs: false,
      showNewsList: false,
      showDialog: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScrollY)
  },
  methods: {
    openDialog () {
      this.showDialog = true
    },
    closeDialog () {
      this.showDialog = false
    },
    showNews () {
      this.showNewsList = true
    },
    notShowNews () {
      this.showNewsList = false
    },
    notShowAbout () {
      this.showAboutUs = false
    },
    showAbout () {
      this.showAboutUs = true
    },
    changeIndex (index, path) {
      this.$router.push({
        path: path
      })
      this.setActiveIndex(index)
    },
    onScrollY () {
      if (window.scrollY > 100) {
        this.isShowHead = false
      } else {
        this.isShowHead = true
      }
    },
    goTop () {
      var timer = null
      clearInterval(timer)
      timer = setInterval(function () {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop
        let now = curHeight
        var speed = (0 - now) / 7
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (curHeight <= 10) {
          clearInterval(timer)
          console.log('end')
        }
        document.documentElement.scrollTop = curHeight + speed
        document.body.scrollTop = curHeight + speed
      }, 30)
    },
    ...mapMutations({
      setActiveIndex: 'SET_HOME_HEAD_ACTIVE_INDEX'
    })
  },
  computed: {
    activeIndex () {
      return this.homeHeadActiveIndex
    },
    ...mapGetters([
      'homeHeadActiveIndex'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.nav
  width 100%
  height 80px
  box-shadow 1px 0px 4px rgba(0,0,0,0.41)
  position relative
  z-index 20
  .nav-head
    width 1000px
    height 80px
    margin 0 auto
    .logo
      width 182px
      height 50px
      float left
      margin-top 15px
      bg-image('logo')
      background-size contain
    .head-nav
      height 80px
      line-height 80px
      float right 
      .nav-item
        height 80px
        display inline-block
        vertical-align top
        cursor pointer
        font-size 18px
        color #000
        margin-left 46px
        position relative
        &.active 
          color #3D8ADC
        .about-us-list
          width 140px
          position absolute
          top 80px
          left -15px
          background #fff
          .sub-item
            width 140px
            height 50px
            text-align center
            color #232323
            line-height 50px
            box-sizing border-box
            border-bottom 1px solid #dbdbdb
            &:last-child
              border-bottom none
            &:hover
              background #46A0FF
              color #fff
.fixed-nav
  width 100%
  height 80px
  background #fff
  box-shadow 1px 0px 4px rgba(0,0,0,0.41)
  position fixed
  z-index 20
  top 0
  left 0
  .nav-head
    width 1000px
    height 80px
    margin 0 auto
    .logo
      width 182px
      height 50px
      float left
      margin-top 15px
      bg-image('logo')
      background-size contain
    .head-nav
      height 80px
      line-height 80px
      float right 
      .nav-item
        height 80px
        display inline-block
        vertical-align top
        cursor pointer
        font-size 18px
        color #000
        margin-left 46px
        position relative
        &.active 
          color #3D8ADC
        .about-us-list
          width 140px
          position absolute
          top 80px
          left -15px
          background #fff
          .sub-item
            width 140px
            height 50px
            text-align center
            color #232323
            line-height 50px
            box-sizing border-box
            border-bottom 1px solid #dbdbdb
            &:last-child
              border-bottom none
            &:hover
              background #46A0FF
              color #fff
.float-icon-wrapper
  width 60px
  height 240px
  display block
  position fixed
  top 50%
  right 0
  cursor pointer
  .phone
    width 200px
    height 60px
    display block
    transition all ease .6s
    background #80d8ff
    .icon
      width 40px
      height 38px
      display inline-block
      vertical-align top
      margin 10px 10px 0 11px
      bg-image('phone')
    .text
      font-size 18px
      height 60px
      display inline-block
      vertical-align top
      line-height 60px
      color #fff
    &:hover
      transform translateX(-140px)
      background #3D8ADC 
      transition all ease .6s
  .email
    width 245px
    height 60px
    display block
    transition all ease .6s
    background #80d8ff
    .icon
      width 40px
      height 28px
      display inline-block
      vertical-align top
      margin 16px 10px 0 11px
      bg-image('email')
    .text
      font-size 18px
      height 60px
      display inline-block
      vertical-align top
      line-height 60px
      color #fff
    &:hover
      transform translateX(-185px)
      background #3D8ADC 
      transition all ease .6s
  .message
    width 60px
    height 60px
    display block
    background #80d8ff
    overflow hidden
    transition all ease .6s 
    .icon
      width 45px
      height 45px
      bg-image('message')
      display block
      margin 7px 0 0 8px
    &:hover
      background #3D8ADC 
      transition all ease .6s 
  .weixin
    width 60px
    height 60px
    display block
    background #80d8ff
    transition all ease .6s
    position relative
    .icon
      width 44px
      height 37px
      bg-image('weixin')
      display inline-block
      margin 11px 6px 12px 10px
    .show-icon
      width 135px
      height 142px
      position absolute
      opacity 0
      left -140px
      top -36px
      bg-image('weixin-detail')
      transition all ease .6s
    &:hover
      background #3D8ADC 
      transition all ease .6s  
      .show-icon
        opacity 1
        transition all ease .6s
  .top
    width 60px
    height 60px
    display block
    background #80d8ff
    transition all ease .6s
    cursor pointer
    .icon
      width 35px
      height 20px
      display inline-block
      bg-image('top')
      margin 20px 11px 20px 14px
    &:hover
      background #3D8ADC 
      transition all ease .6s  
.message-dialog-wrapper
  width 100%
  height 100%
  position fixed
  background rgba(0,0,0,0.4)
  z-index 1000
  .message-dialog
    width 760px
    height 504px
    position absolute
    top 50%
    left 50%
    transform translateY(-50%)translateX(-50%)
    box-shadow 0px 0px 4px #000
    background #fff
    .title
      height 50px
      line-height 50px
      text-indent 37px
      font-size 18px
      color #fff
      background-color #3D8ADC
      position relative
      .icon
        position absolute
        right 22px
        top 0px
        font-style normal
        cursor pointer
        font-size 18px
        color #fff
    .item
      min-height 45px
      width 100%
      display block
      margin-top 40px
      .text
        font-size 18px
        color #232323
        width 142px
        height 45px
        display inline-block
        text-align center
        vertical-align top
      .email-input
        width 297px
        height 44px
        display inline-block
        vertical-align top
        color #232323
        font-size 16px
        border 1px solid #9B9B9B 
        text-indent 16px
        &::-webkit-input-placeholder
          color #949494
      .message-content
        width 580px
        height 200px
        font-size 16px
        text-indent 16px
        &::-webkit-input-placeholder
          color #949494
    .button
      width 90px
      height 40px
      background #3D8ADC
      line-height 40px
      font-size 18px
      color #ffffff
      text-align center
      position absolute
      bottom 46px
      left 335px
      cursor pointer
.fade-enter-active,.fade-leave-active
  transition all 0.3s
.fade-enter,.fade-leave-active
  opacity 0
</style>
