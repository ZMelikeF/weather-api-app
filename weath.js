
var search=document.querySelector(".search")
var button=document.querySelector(".button")
var inputs=document.querySelector(".city")
var temperat=document.querySelector(".temperature")
var descrips=document.querySelector(".description")
var icon=document.querySelector(".icons")
var tomweather=document.querySelector(".tomtemp")

//const key="f904640bab0ef7b2334cb44efa056b72";


var elem = document.getElementById('button');

elem.addEventListener("click",function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+search.value+"&units=metric&appid=f904640bab0ef7b2334cb44efa056b72")
    .then(response=>response.json())
    .then(data => {
        console.log(data);
        var cityname =data["name"];
        var iconcode =data["weather"][0]["icon"];
        console.log(iconcode);
        var iconurl ="http://openweathermap.org/img/w/"+iconcode+".png";
        var temperatureval=data["main"]["temp"];
        newtemperatureval=Math.floor(temperatureval);
        var descriptionval=data["weather"][0]["description"];

        icon.src=iconurl;
        inputs.innerHTML=cityname;
        temperat.innerHTML=newtemperatureval+"ºC";
        descrips.innerHTML=descriptionval;
})          
//.catch(err => alert("Some error is occured"))
    
})
