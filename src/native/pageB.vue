<template>
    <div >
        <head   title="pageB"></head>
        <div style="align-items: center;justify-content: center">
            <text>参数：{{param}}</text>
            <input v-model="param" style="width: 500px;height: 100px;border-color: #0088fb;border-width: 1px;">
            <button style="margin-top: 20px" @Click="push('pageC.js')" text="push到pageC"></button>
            <button style="margin-top: 30px" @Click="dimissB" text="dimiss返回"></button>
            <button style="margin-top: 30px" @Click="backWidthParam" text="带参数返回"></button>
        </div>

    </div>
</template>
<script>
  export default{
    props: {},
    data () {
      return {
          param:''
      }
    },
    methods: {
      backWidthParam(){
        let nav=weex.requireModule('navigator')
        nav.backFull({name:'test'},true)
      },
      dimissB(){
        let nav=weex.requireModule('navigator')
        nav.dismiss()
      },
      backClick(){
        let nav=weex.requireModule('navigator')
        if(this.param!=undefined&&this.param.push==true)
        nav.dismiss()
        else nav.back()
      },
      onLoad(param){
        this.param=param
        let nav=weex.requireModule('navigator')
//        this.alert(JSON.stringify( nav.param()))
      }
    },
    created () {
    }
  }
</script>
<style scoped>
</style>
