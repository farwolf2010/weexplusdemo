<template>
    <div>
        <head title="网络访问"></head>
        <scroller style="align-items: center">
            <button @click="submit" text="网络请求" style="margin-top: 100px"></button>
            <button @click="openPhoto" text="上传文件" style="margin-top: 30px"></button>
            <button @click="download" text="下载文件" style="margin-top: 30px"></button>
            <button @click="all" text="全局封装" style="margin-top: 30px"></button>
            <text style="color: #000000">{{text}}</text>
        </scroller>
    </div>
</template>
<script>

  export default{
    components: {},
    props: {},
    data () {
      return {
        text:''
      }
    },
    methods: {
      all(){
        this.net.post('search.do',{keyword:'权利'},(res)=>{
          this.text=res
        })
      },
      submit(){
        let net=weex.requireModule('net')
        let process=weex.requireModule('progress')
        let url='http://59.110.169.246/movie/search.do'
        let param={}
        param.keyword='权利'
        let header={}
        header.token='11111'
//        net.get(url,param,header,()=>{
        net.post(url,param,header,()=>{
//        net.postJson(url,param,header,()=>{
            //start
          process.show()
        },(res)=>{
           //success
           this.text=res
        },()=>{
          //compelete
          process.dismiss()
        },()=>{
          //exception
        })
      },
      openPhoto()
      {
        var self=this;
        const photo = weex.requireModule('photo');
        photo.openPhoto(500,800,'#000000','#ffffff','#ffffff',function(e){

          self.src=e.path;
          var param={};
          var header={};
          var path={};
          path.file=e.path;
          var net=weex.requireModule("net");
          net.postFile('http://xxx/upload',param,header,path,()=>{
            //start
          },(e)=>{
            //succcess
            var modal=weex.requireModule("modal")
            modal.toast({message:'上传成功！'})
          },()=>{
            //compelete

          },()=>{
            //exception
            var modal=weex.requireModule("modal")
            modal.toast({message:'上传异常！'})
          })

        });
      },
      download(){
        var net=weex.requireModule("net");
        let url='https://qd.myapp.com/myapp/qqteam/pcqq/QQ9.0.8_3.exe'
        net.download(url,(process)=>{
           this.text=process.percent+"%"
        },(res)=>{
           //compelete
          this.text=res
        },()=>{
          //exception
          this.text='下载异常'
        })
      }

    },
    created () {
    }
  }
</script>
<style scoped>
</style>
