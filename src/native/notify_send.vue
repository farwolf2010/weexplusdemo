<template>
    <div >
        <head title="通知"></head>
         <div style="align-items: center;justify-content: center">
             <text>{{agex}}</text>
             <input v-model="name" placeholder="name" style="width: 600px;height: 100px;border-width: 1px;border-color: #0088fb;margin-top: 20px"/>
             <input v-model="age" placeholder="age"  style="width: 600px;height: 100px;border-width: 1px;border-color: #0088fb;margin-top: 20px"/>
             <button @click="sendName()" text="通知修改name" style="margin-top: 20px"></button>
             <button @click="sendAge()" text="通知修改age" style="margin-top: 20px"></button>
         </div>

    </div>
</template>
<script>
  export default{
    props: {},
    data () {
      return {
        name:'',
        age:'',
        agex:'',
      }
    },
    methods: {
      sendName(){
        let notify=weex.requireModule('notify')
        notify.send('changeName',{name:this.name})
      },
      sendAge(){
        let notify=weex.requireModule('notify')
        notify.send('changeAge',{age:this.age})
      },
    },
    created () {
      let notify=weex.requireModule('notify')
      notify.regist('changeAge',(param)=>{
        this.agex=param.age
      })

    }
  }
</script>
<style scoped>
</style>
