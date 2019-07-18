

Pod::Spec.new do |s|

 

  s.name         = "audio"
  s.version      = "0.0.1"
  s.summary      = "Handle some data."
  s.description  = <<-DESC
                    Handle the data.
                   DESC

  s.homepage     = "http://csdn.net/veryitman"
  s.license      = "MIT"
  s.author             = { "veryitman" => "362675035@qq.com" }
  s.source =  { :path => '.' }
  s.source_files  = "audio", "**/**/*.{h,m,mm,c}"
  s.exclude_files = "Source/Exclude"
  s.resources = 'audio/resources/storyboard/**','audio/resources/image/**','audio/resources/xib/**'
  s.platform     = :ios, "8.0"
  s.requires_arc = true
  

  
  s.dependency 'farwolf.weex'
  s.dependency 'FreeStreamer', '~> 3.9.3'
   #s.dependency 'KVAudioStreamer', '~> 1.0.0'
 


end
