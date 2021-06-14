
var search=document.querySelector(".search")
var button=document.querySelector(".button")
var inputs=document.querySelector(".city")
var temperat=document.querySelector(".temperature")
var descrips=document.querySelector(".description")
var icon=document.querySelector(".icons")

var icon2=document.querySelector(".icon2")
var tomweather2=document.querySelector(".temperature2")
var tomdesc2=document.querySelector(".description2")

var icon3=document.querySelector(".icon3")
var tomweather3=document.querySelector(".temperature3")
var tomdesc3=document.querySelector(".description3")
var date2=document.querySelector(".day3")

var icon4=document.querySelector(".icon4")
var tomweather4=document.querySelector(".temperature4")
var tomdesc4=document.querySelector(".description4")
var date3=document.querySelector(".day4")
//const key="f904640bab0ef7b2334cb44efa056b72";


var elem = document.getElementById('button');

elem.addEventListener("click",function(){
   
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+search.value+"&units=metric&appid=f904640bab0ef7b2334cb44efa056b72")  
    //fetch("http://api.openweathermap.org/data/2.5/weather?q="+search.value+"&units=metric&appid=f904640bab0ef7b2334cb44efa056b72")
    .then(response=>response.json())
    .then(data => {
       
        console.log(data);

        var cityname =data["city"]["name"];
        var country=data["city"]["country"];
        var iconcode =data["list"][0]["weather"][0]["icon"];
        var iconurl ="http://openweathermap.org/img/w/"+iconcode+".png";
        var temperatureval=data["list"][0]["main"]["temp"];
        newtemperatureval=Math.floor(temperatureval);
        var descriptionval=data["list"][0]["weather"][0]["description"];

        icon.src=iconurl;
        inputs.innerHTML=cityname+","+country;
        temperat.innerHTML=newtemperatureval+"ºC";
        descrips.innerHTML=descriptionval;

        var iconcode2 =data["list"][2]["weather"][0]["icon"];
        var iconurl2 ="http://openweathermap.org/img/w/"+iconcode2+".png";
        var newtemperatureval2=data["list"][2]["main"]["temp"];
        newtemperatureval2=Math.floor(newtemperatureval2);
        var descriptionval2=data["list"][2]["weather"][0]["description"];

        icon2.src=iconurl2;
        tomweather2.innerHTML=newtemperatureval2+"ºC";
        tomdesc2.innerHTML=descriptionval2;

        var iconcode3 =data["list"][10]["weather"][0]["icon"];
        var iconurl3 ="http://openweathermap.org/img/w/"+iconcode3+".png";
        var newtemperatureval3=data["list"][10]["main"]["temp"];
        newtemperatureval3=Math.floor(newtemperatureval3);
        var descriptionval3=data["list"][10]["weather"][0]["description"];
        var day3=data["list"][10]["dt_txt"];
        day3=day3.substring(0, 10);

        icon3.src=iconurl3;
        tomweather3.innerHTML=newtemperatureval3+"ºC";
        tomdesc3.innerHTML=descriptionval3;
        date2.innerHTML=day3;

        var iconcode4 =data["list"][18]["weather"][0]["icon"];
        var iconurl4 ="http://openweathermap.org/img/w/"+iconcode4+".png";
        var newtemperatureval4=data["list"][18]["main"]["temp"];
        newtemperatureval4=Math.floor(newtemperatureval4);
        var descriptionval4=data["list"][18]["weather"][0]["description"];
        var day4=data["list"][18]["dt_txt"];
        day4=day4.substring(0, 10);

        icon4.src=iconurl4;
        tomweather4.innerHTML=newtemperatureval4+"ºC";
        tomdesc4.innerHTML=descriptionval4;
        date3.innerHTML=day4;
})         
.catch(err => alert("Some error is occured"))
})
