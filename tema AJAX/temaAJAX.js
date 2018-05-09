function loadVremeaAcum(){
    var loc="";
    var loc=document.getElementById("location").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){ 

               var vremeaAcum = JSON.parse(this.responseText);
               
               var descr = vremeaAcum.weather["0"].description;  
               var umid = vremeaAcum.main.humidity;
               var press = vremeaAcum.main.pressure;
               var tCrt = vremeaAcum.main.temp;
               var tMin = vremeaAcum.main.temp_min;
               var tMax = vremeaAcum.main.temp_max;

               var image=vremeaAcum.weather["0"].icon;

           
        document.getElementById("getLocation").innerHTML=loc;
        document.getElementById("descr").innerHTML=descr;
        document.getElementById("umid").innerHTML=umid;
        document.getElementById("press").innerHTML=press;
        document.getElementById("tCrt").innerHTML=tCrt;
        document.getElementById("tMin").innerHTML=tMin;
        document.getElementById("tMax").innerHTML=tMax;
        document.getElementById("image").src ="http://openweathermap.org/img/w/"+image+".png";

        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q="+loc, true);
    xhttp.send();
} 

function loadPrognoza(){
   
    var loc="";
    var loc=document.getElementById("location").value;

  
    var tabelNou=document.getElementById("tabel");

    var today = new Date(); 
    var tomorrow = new Date(today.getTime()+24*60*60*1000); 
    var tomorrow2 = new Date(today.getTime()+(24*60*60*1000)*2); 
    var tomorrow3 = new Date(today.getTime()+(24*60*60*1000)*3); 
    var tomorrow4 = new Date(today.getTime()+(24*60*60*1000)*4); 
    var tomorrow5 = new Date(today.getTime()+(24*60*60*1000)*5); 

    var ora= today.getHours();
        
    var oraString=((today.getHours()<10)?"0":"")+(today.getHours() + ":00");
    console.log("ora",ora, oraString);


    var todayString=today.getFullYear() + "-";
    todayString +=((today.getMonth()+1 <10)?"0":"")+ (today.getMonth()+1 + "-");
    todayString +=((today.getDate() <10)?"0":"")+ (today.getDate());
    console.log("today", today, todayString);

    var tomorrowString=tomorrow.getFullYear() + "-";
    tomorrowString +=((tomorrow.getMonth()+1 <10)?"0":"")+ (tomorrow.getMonth()+1 + "-");
    tomorrowString +=((tomorrow.getDate() <10)?"0":"")+ (tomorrow.getDate());
    console.log("tomorrow", tomorrow, tomorrowString);

    var tomorrow2String=tomorrow2.getFullYear() + "-";
    tomorrow2String +=((tomorrow2.getMonth()+1 <10)?"0":"")+ (tomorrow2.getMonth()+1 + "-");
    tomorrow2String +=((tomorrow2.getDate() <10)?"0":"")+ (tomorrow2.getDate());
    console.log("tomorrow2", tomorrow2, tomorrow2String);

    var tomorrow3String=tomorrow3.getFullYear() + "-";
    tomorrow3String +=((tomorrow3.getMonth()+1 <10)?"0":"")+ (tomorrow3.getMonth()+1 + "-");
    tomorrow3String +=((tomorrow3.getDate() <10)?"0":"")+ (tomorrow3.getDate());
    console.log("tomorrow3", tomorrow3, tomorrow3String);

    var tomorrow4String=tomorrow4.getFullYear() + "-";
    tomorrow4String +=((tomorrow4.getMonth()+1 <10)?"0":"")+ (tomorrow4.getMonth()+1 + "-");
    tomorrow4String +=((tomorrow4.getDate() <10)?"0":"")+ (tomorrow4.getDate());
    console.log("tomorrow4", tomorrow4, tomorrow4String);

    var tomorrow5String=tomorrow5.getFullYear() + "-";
    tomorrow5String +=((tomorrow5.getMonth()+1 <10)?"0":"")+ (tomorrow5.getMonth()+1 + "-");
    tomorrow5String +=((tomorrow5.getDate() <10)?"0":"")+ (tomorrow5.getDate());
    console.log("tomorrow5", tomorrow5, tomorrow5String);


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){ 
         
                var vremeaPrognoza = JSON.parse(this.responseText);

                var lista=vremeaPrognoza.list;
                var str="";
                var strOne="";
                var strTwo="";
                var strThree="";
                var strFour="";
                var strFive="";

           for (var i=0;i<vremeaPrognoza.list.length; i++){
                var zi = vremeaPrognoza.list[i].dt_txt.substring(0,10);
                var oraNoua=vremeaPrognoza.list[i].dt_txt.substring(11,16)
    

                if( zi==todayString && oraString>oraNoua) {                                                
                    var rand = ` <tr> 
                                <td>
                                <img id="imgspan"/> <br/>
                                <span id="ora"></span> <br/>
                                <span id="temp"> </span> <br/> 
                                <span id="descriere">  </span>
                                <td>
                        </tr>` 
                        str=str+rand;
                    
                document.getElementById("col").innerHTML=str;
                document.getElementById("zi").innerHTML= "Ziua: "+ todayString;     
                }

                if( zi==todayString && oraString<=oraNoua) {                                                
                    var rand = ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        str=str+rand;
                    
                document.getElementById("col").innerHTML=str;
                document.getElementById("zi").innerHTML= "Ziua: " + todayString;     
                }

                if( zi==tomorrowString){
                        var rand= ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        strOne+=rand; 
                }
                document.getElementById("col1").innerHTML=strOne;  
                document.getElementById("zi2").innerHTML= "Ziua: " + tomorrowString;    
     

                if( zi==tomorrow2String){
                        var rand= ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        strTwo+=rand;
                }
                document.getElementById("col2").innerHTML=strTwo;   
                document.getElementById("zi3").innerHTML= "Ziua: " + tomorrow2String;     
        

                if( zi==tomorrow3String){
                        var rand= ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        strThree+=rand; 
                }
                document.getElementById("col3").innerHTML=strThree;    
                document.getElementById("zi4").innerHTML= "Ziua: " + tomorrow3String;    

    
                if( zi==tomorrow4String){
                        var rand= ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        strFour+=rand;
                }
               document.getElementById("col4").innerHTML=strFour;  
               document.getElementById("zi5").innerHTML= "Ziua: " + tomorrow4String;      

                if( zi==tomorrow5String) {
                        var rand= ` <tr> 
                                <td>
                                <img id="imgspan" src="http://openweathermap.org/img/w/${vremeaPrognoza.list[i].weather["0"].icon}.png" /> <br/>
                                <span id="ora"> Ora: ${vremeaPrognoza.list[i].dt_txt.substring(11,16)} </span> <br/>
                                <span id="temp"> Temperatura:  ${vremeaPrognoza.list[i].main.temp} </span> <br/> 
                                <span id="descriere"> Descriere: ${vremeaPrognoza.list[i].weather["0"].description}  </span>
                                <td>
                        </tr>` 
                        strFive+=rand;
                }
               document.getElementById("col5").innerHTML=strFive; 
               document.getElementById("zi6").innerHTML= "Ziua: " + tomorrow5String;      
            }
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q="+loc, true);
    xhttp.send();  
    document.getElementById("tabel").style.display="";    
} 

function initMap() {

        var loc="";
        var loc=document.getElementById("location").value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){ 
    
                   var vremeaAcum = JSON.parse(this.responseText);
                   
                   var uluru = vremeaAcum.city.coord; 
                   console.log(uluru);
                   var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: uluru
                      });
                      var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                      });
          
    
            }
        };
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q="+loc, true);
        xhttp.send();
    } 
    






