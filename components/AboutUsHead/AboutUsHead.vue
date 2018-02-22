<template>
  <div class="banner">
    <div class="ad">业内领先的卫星定位终端设备提供商</div>
    <div class="sub-ad">专业  专注  专心</div>
    <div class="select-list">
      <div class="select-content">
        <div class="item" :class="{'active': aboutUsActiveIndex === 0}" @click.stop="gotoPath(0, '/aboutus')">关于我们</div>
        <div class="item" :class="{'active': aboutUsActiveIndex === 1}" @click.stop="gotoPath(1, '/aboutus/manage')">管理架构</div>
        <div class="item" :class="{'active': aboutUsActiveIndex === 2}" @click.stop="gotoPath(2, '/aboutus/honor')">发展成就</div>
        <div class="item" :class="{'active': aboutUsActiveIndex === 3}" @click.stop="gotoPath(3, '/aboutus/contact')">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    gotoPath (index, path) {
      this.$router.push({
        path: path
      })
      this.setActiveIndex(index)
    },
    ...mapMutations({
      setActiveIndex: 'SET_ABOUT_US_ACTIVE_INDEX'
    })
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
</style>
