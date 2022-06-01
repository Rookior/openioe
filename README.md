<h1 align="center">
 <a href="http://www.openioe.net/" target="_blank">
    openIOE
  </a>
</h1>

天气预报


```
import openioe from 'openioe';

openioe.weather({
  cityName:"辽宁 沈阳",  //必传
  //time:'2022-05-26',  //可选。默认为当前日期
  success:function(result){  //成功回调
      console.log(result)
  },
  error:function(status){
    console.log(status)
  }
})
```

