<template>
  <div class="footer">
   <div class="content">
     <div class="left">
      <div class="title">
        湖北天凯风林电子有限公司
      </div>
      <div class="list-item">
        <i class="icon address"></i>
        <span class="text">北京市经济技术开发区科创十三街18号院8号楼4层</span>
      </div>
      <div class="list-item">
        <i class="icon mail"></i>
        <span class="text">service@somur.com</span>
      </div>
      <div class="list-item">
        <i class="icon phone"></i>
        <span class="text">010-53827563</span>
      </div>
      <div class="list-item">
        <i class="icon time"></i>
        <span class="text">工作时间：周一至周五 9:00--18:00</span>
      </div>
     </div>
     <div class="right">
      <div class="title">
        关注我们
      </div>
      <div class="wechat"></div>
     </div>
   </div>
   <div class="bottom">
     网络经营许可证 京ICP备17024851号-1 | 京公网安备11854635214347号
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~static/common/stylus/index"
.footer
  width 100%
  height 260px
  background rgba(20,21,21,1)
  .content
    width 1000px
    height 230px
    margin 0 auto
    overflow hidden
    .left
      width 860px
      height 230px
      display inline-block
      vertical-align top
      .title
        width 860px
        height 20px
        font-size 20px
        line-height 20px
        color rgba(230,230,230,1)
        margin-top 40px
        margin-bottom 30px
        font-weight 800
      .list-item
        width 860px
        height 16px
        font-size 16px
        line-height 16px
        margin-bottom 14px
        color rgba(230,230,230,1)
        .icon
          display inline-block
          vertical-align middle
          &.address
            width 13px
            height 16px
            margin-right 9px
            margin-left 2px
            bg-image('address')
          &.mail
            width 18px
            height 12px
            margin-right 7px
            bg-image('mail')
          &.phone
            width 14px
            height 14px
            bg-image('phone')
            margin-right 8px
            margin-left 2px
          &.time
            width 15px
            height 15px
            bg-image('time')
            margin-right 9px
        .text
          width 400px
          height 16px
    .right
      width 120px
      height 230px
      display inline-block
      vertical-align top
      .title
        width 100%
        height 20px
        font-size 20px
        line-height 20px
        color rgba(230,230,230,1)
        margin-top 40px
        margin-bottom 30px
        font-weight 800
      .wechat
        width 120px
        height 120px
        bg-image('wechat')
  .bottom
    width 100%
    height 30px
    background #000
    text-align center
</style>
