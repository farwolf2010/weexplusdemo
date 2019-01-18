<template>
    <div>
        <head title="pageC"></head>
        <div style="align-items: center;justify-content: center">
            <button @click="backTo" text="返回到pageA"></button>
        </div>
    </div>
</template>
<script>
  export default{
    props: {},
    data () {
      return {}
    },
    methods: {
      backTo(){
        let nav=weex.requireModule('navigator')
        nav.backTo('A')
      }
    },
    created () {
    }
  }
</script>
<style scoped>
</style>
