
var search=document.querySelector("search")
var button=document.querySelector("button")
var inputs=document.querySelector("city")
var temperat=document.querySelector("temperature")
var descrips=document.querySelector("description")
var tomweather=document.querySelector("tomtemp")

const key="f904640bab0ef7b2334cb44efa056b72";


button.addEventListener("click",function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+search.value+"&appid=f904640bab0ef7b2334cb44efa056b72")
    .then(response=>response.json())
    .then(data =>console.log("whatttt"))
    
.catch(err => alert("Some error is occured"))
    
})
