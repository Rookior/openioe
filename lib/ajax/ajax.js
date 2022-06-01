function ajax({
    url,
    type = "GET",
    success,
    error
}) {
    var xhr = new XMLHttpRequest();
    xhr.open(type,url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){      
            if(xhr.status === 200){
                success(xhr.responseText)
            }else{
                error(xhr.status)
            }
        }
    };
    xhr.send();
}



export {
    ajax
};