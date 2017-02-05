<template>
  <div>
    <!--<div class="header">header</div>-->
    <vheader :seller="seller"></vheader>
    <div class="tab border-1px">
      <div class="tab-item">
        <!--<a>商品</a>-->
        <router-link to="/goods" class="tab-item-name">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" class="tab-item-name">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" class="tab-item-name">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import vheader from './components/header/header';

const ERR_OK = 0;

export default{
  data () {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }
    });
  },
  components: {
    vheader
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      .tab-item-name
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active
          color: rgb(240, 20, 20)
</style>
