<template>
    <div>
        <head title="pageA"></head>
        <div style="align-items: center;justify-content: center">
            <image style="width: 100px;height: 100px;" src="root:img/logo.png"></image>
            <input v-model="name" style="width: 500px;height: 100px;border-color: #0088fb;border-width: 1px;">
            <button style="margin-top: 30px" @Click="pushToB" text="push到pageB"></button>
            <button style="margin-top: 30px" @Click="presentB" text="present到pageB"></button>
            <button style="margin-top: 30px" @Click="pushBParam" text="push传参数到pageB"></button>
            <button style="margin-top: 30px" @Click="presentBParam" text="present传参数到pageB"></button>
            <button style="margin-top: 30px" @Click="pushForParam" text="pushForParam"></button>
        </div>
    </div>

</template>
<script>
  export default{
    props: {},
    data () {
      return {
        name:'1111'

      }
    },
    methods: {
      pushToB()
      {
         let nav=weex.requireModule('navigator')
         nav.push( 'pageB.js')
      },
      presentB()
      {
        let nav=weex.requireModule('navigator')
        nav.present('pageB.js')
//        nav.present('demo/input.js')

      },
      pushBParam(){
        let nav=weex.requireModule('navigator')
        nav.pushParam('pageB.js',{name:this.name})
      },
      presentBParam(){
        let nav=weex.requireModule('navigator')
        nav.presentFull({url:'pageB.js',param:{name:this.name}})
      },
      pushForParam(){
        let nav=weex.requireModule('navigator')
        nav.pushFull({url:'pageB.js',param:{name:this.name}},(res)=>{
            this.alert(JSON.stringify(res))
        })
      },
      onLoad(){
         let nav=weex.requireModule('navigator')
         nav.setRoot('A')
         nav.setPageId('A')
      }
    },
    created () {
    }
  }
</script>
<style scoped>
</style>
