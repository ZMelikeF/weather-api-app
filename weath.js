
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


var elem = document.getElementById('button');

/*elem.addEventListener("click",function(){
   
    //fetch("http://api.weatherstack.com/forecast?access_key=89f7d5f7eda025aacc97f02295e27763&forecast_days=5&units=m&query="+search.value)  
    //fetch("http://api.openweathermap.org/data/2.5/weather?q="+search.value+"&units=metric&appid=f904640bab0ef7b2334cb44efa056b72")
    fetch("http://api.weatherstack.com/forecast?access_key=89f7d5f7eda025aacc97f02295e27763&units=m&query="+search.value)
    .then(response=>response.json())
    .then(data => {
       
        console.log(data);

        var cityname =data["location"]["name"];
        var country=data["location"]["country"];
        var iconcode =data["current"]["weather_icons"][0];
        var temperatureval=data["current"]["temperature"];
        var descriptionval=data["current"]["weather_descriptions"][0];

        icon.src=iconcode;
        inputs.innerHTML=cityname+","+country;
        temperat.innerHTML=temperatureval+"ºC";
        descrips.innerHTML=descriptionval;

    }) 
    .catch(err2 => alert("Some error is occured"))
})
*/
//const newone="93790173d290447bac0d1bf36393b887";

elem.addEventListener("click",function()
{
    fetch("https://api.weatherbit.io/v2.0/forecast/daily?city="+search.value+"&key=93790173d290447bac0d1bf36393b887")
    //fetch("http://api.weatherbit.io/v2.0/history/daily?city_name="+search.value+"&start_date=2021-06-15&end_date=2021-06-20&key=93790173d290447bac0d1bf36393b887")
    
    .then(response => response.json())
    .then(data2 => {
        console.log(data2);

        var cityname =data2["city_name"];
        var iconcode =data2["data"][0]["weather"]["icon"];
        var iconurl ="https://weatherbit.io/static/img/icons/"+iconcode+".png";
        var temperatureval=data2["data"][0]["temp"];
        var descriptionval=data2["data"][0]["weather"]["description"];

        icon.src=iconurl;
        inputs.innerHTML=cityname;
        temperat.innerHTML=temperatureval+"ºC";
        descrips.innerHTML=descriptionval;

        var iconcode2 =data2["data"][1]["weather"]["icon"];
        var iconurl2 ="https://weatherbit.io/static/img/icons/"+iconcode2+".png";
        var newtemperatureval2=data2["data"][1]["temp"];
        var descriptionval2=data2["data"][1]["weather"]["description"];

        icon2.src=iconurl2;
        tomweather2.innerHTML=newtemperatureval2+"ºC";
        tomdesc2.innerHTML=descriptionval2;

        var iconcode3 =data2["data"][2]["weather"]["icon"];
        var iconurl3 ="https://weatherbit.io/static/img/icons/"+iconcode3+".png";
        var newtemperatureval3=data2["data"][2]["temp"];
        var descriptionval3=data2["data"][2]["weather"]["description"];
        var day3=data2["data"][2]["datetime"];
        

        icon3.src=iconurl3;
        tomweather3.innerHTML=newtemperatureval3+"ºC";
        tomdesc3.innerHTML=descriptionval3;
        date2.innerHTML=day3;

        var iconcode4 =data2["data"][3]["weather"]["icon"];
        var iconurl4 ="https://weatherbit.io/static/img/icons/"+iconcode4+".png";
        var newtemperatureval4=data2["data"][3]["temp"];
        var descriptionval4=data2["data"][3]["weather"]["description"];
        var day4=data2["data"][3]["datetime"];
        

        icon4.src=iconurl4;
        tomweather4.innerHTML=newtemperatureval4+"ºC";
        tomdesc4.innerHTML=descriptionval4;
        date3.innerHTML=day4;
        
    }) 
    .catch(err2 => alert("Some error is occured"))
})
