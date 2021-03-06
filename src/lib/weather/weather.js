import {ajax} from '../ajax/ajax';

import {cityData} from './cityData'

function weather({
    cityName='北京 北京',
    time,
    success,
    error
}) {
    let cityCode = null;
    for(var i=0;i<cityData.length;i++){
        if(cityName.split(" ")[0] === cityData[i].name){
            for(var j=0;j<cityData[i].sub.length;j++){
                const item = cityData[i].sub[j];
                if(cityName.split(" ")[1] === item.name){
                    cityCode = item.code;
                    break;
                }
            }
            break;    
        }
    }  
    const now = time ? new Date(time) : new Date();
    const date = now.getFullYear() + '/' + ((now.getMonth()+1 < 10) ? '0' + (now.getMonth()+1) : (now.getMonth()+1)) + '/' + ((now.getDate() < 10) ? '0' + (now.getDate()) : (now.getDate())  )
    

    new Promise((resolve,reject)=>{
        ajax({
            url:'http://api.openioe.net/?OPCS=OpenIOE&LINK=Meteor&CONT=Weather&ISTR=get&LMBD=cityWeather&TYPE=jsonp&stationCode='+cityCode+'&date=' + date,
            type:"GET",
            success:function(res){
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.text = "function callback (json){return json;}";
                document.head.appendChild(script);
                // function callback (json){
                //     return json;
                // }
                const result = eval(res);
                document.head.removeChild(script)
                resolve(result)
            },
            error:function(status){
                reject(status)
            }       
        })
    }).then(result=>{
        if(success){
            success(result)
        }       
    }).catch(status=>{
        console.log('err'+status)
        if(error){
            error(status)
        }     
    })
   
}

export {
    weather
};