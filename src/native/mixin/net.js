let fetch={
  baseUrl:'http://59.110.169.246/movie/',
   post(url,param,success){
     let net=weex.requireModule('net')
     let st=weex.requireModule('static')
     let token=st.getString('token')
     let process=weex.requireModule('progress')
     url=this.baseUrl+url
     let header={}
     header.token=token
     net.post(url,param,header,()=>{
       //start
       process.show()
     },(res)=>{
       //success
       success(res.res)
     },()=>{
       //compelete
       process.dismiss()
     },()=>{
       //exception
       let modal=weex.requireModule('modal')
       modal.toast({message:'网络异常！'})
     })
   }
}
module.exports=fetch