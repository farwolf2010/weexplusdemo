<template>
    <div>
        <head title="通知（接收）"></head>
        <div  style="align-items: center;justify-content: center">
            <text>{{name}}</text>
            <button @click="gotoSend()" style="margin-top: 20px;" text="跳转到下一页"></button>
        </div>
    </div>
</template>
<script>
  export default{
    props: {},
    data () {
      return {
        name:'接收的值放这:'
      }
    },
    methods: {
      hanle(p){
        this.name=p.name
      },
      gotoSend(){
//        this.name='sss'
        this.push('notify_send.js')
      },
      onLoad(){
        this.toast('xxx')
      }
    },
    created () {
      let notify=weex.requireModule('notify')
      notify.regist('changeName',(param)=>{
         this.hanle(param)
      })
    }
  }
</script>
<style scoped>
</style>
