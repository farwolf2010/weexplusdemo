<template>
    <div style="align-items: center;justify-content: center">
        <text coretext="xxxx" @hostload="hostload">{{txt}}</text>
        <toast @load="onToastLoad" ref="toast" @click="gettoastmethod" color="#000000" style="width: 100px;height: 100px"></toast>
        <button text="弹出" @click="open"></button>
        <button text="同步返回" @click="getdata"></button>
        <button text="异步返回" @click="getdatasyc"></button>
    </div>
</template>
<script>
    export default{
        props: {},
        data(){
            return {
                txt:''
            }
        },
        methods: {
            onToastLoad(e){

            },
            hostload(e){

            },
            gettoastmethod(){
                let modal=weex.requireModule('modal')
                modal.toast({message:'',duration:10})
                modal.alert({message:'',okTitle:"nihao"},(res)=>{

                })
                this.$refs.toast.getData((res)=>{
                    this.txt=res
                })
            },
            open(){
              let toast=weex.requireModule('toast')
                toast.open({msg:'xxxxx'})
            },
            getdata(){
                let toast=weex.requireModule('toast')
                this.txt=toast.getData()
            },
            getdatasyc(){
                let toast=weex.requireModule('toast')
                toast.getDataSyc((res)=>{
                    this.txt=res
                })
            },
            onLoad(p){

            }
        },
        created(){

        }
    }
</script>
<style scoped>

</style>