<template>
  <div class="product">
    <div class="product-content">
      <ul class="left">
        <li v-for="(item, index) in 6" class="left-item" 
                              :class="{'active': activeIndex === index}" 
                              @click="changeIndex(index)"
                              :key="index">产品{{item}}</li>
      </ul>
      <ul class="right">
        <li class="right-item" v-for="(item, index) in 6" :class="{'active': activeIndex === index}" :key="index">
          <div class="img"></div>
          <div class="content">这里是一段产品{{item}}介绍</div>
        </li>
      </ul>
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
    changeIndex (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.product
  width 100%
  background rgba(239,243,245,1)
  padding-top 60px
  .product-content
    width 1000px
    margin 0 auto
    .left
      width 140px
      min-height 880px
      display inline-block
      vertical-align top
      .left-item
        width 140px
        height 50px
        cursor pointer
        margin-bottom 24px
        text-align center
        line-height 50px
        background #ffffff
        color rgba(102,102,102,1)
        &.active
          background rgba(86,180,241,1)
          color #ffffff

    .right
      width 760px
      height 880px
      display inline-block
      vertical-align top
      margin-left 100px
      background #fff
      .right-item
        display none
        &.active  
          display block
        .img
          width 760px
          height 340px
          bg-image('banner')
        .content
          width 760px
          height 530px
          box-sizing border-box
          padding 29px 37px
          font-size 16px
          line-height 24px
          color rgba(102,102,102,1)
</style>
