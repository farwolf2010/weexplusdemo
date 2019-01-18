<template>
    <div style="background-color: red">
        <WxcButton></WxcButton>
    </div>
</template>
<script>
  import { WxcButton, WxcPopup } from 'weex-ui';
  export default{
    components:{WxcButton,WxcPopup},
    props: {},
    data () {
      return {}
    },
    methods: {
      onLoad(){
//        let modal=weex.requireModule('modal')
//        let nav=weex.requireModule('navigator')
//        nav.presentFull({url:'root:pageA.js',animated:false},()=>{
//
//        })
//        this.push('root:test.js')
      }
    },
    created () {

    }
  }
</script>
<style scoped>
</style>
