var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides w3-animate-fading");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}



function drawLista(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                listaProduse= JSON.parse(this.responseText);
                
                var tabel=document.querySelector("#listaProduse ");
                var str="";
                for(var i in listaProduse.menu){
                  document.getElementById("loading").style.display="none";
                  
                   if(document.querySelector("#text_box_1").value!==""&&listaProduse.menu[i].nume.toLowerCase().indexOf(document.querySelector("#text_box_1").value.toLowerCase() )===-1) {
                          continue;
                    }
                   if(listaProduse.menu[i]==null){
                    continue;
                   }

                    str += `<ul class="produs">
                        <li><a href="paginaDetalii.html?id=${i}" class="imgProdus"> <img  src="${listaProduse.menu[i].imagine}" alt="no image" class="imagine"/> </a> </li>
                        <li class="nume"> ${listaProduse.menu[i].nume}</li> </br>
                        <li class="pretDetalii">     <div class="pret"> ${listaProduse.menu[i].pret} LEI </div>  <a href="paginaDetalii.html?id=${i}" class="detalii">Detalii</a> </li> 
                    </ul>`;
                }
                console.log(str);
                tabel.innerHTML=str;
            }
        };
        xhttp.open("GET", "https://shopproject-54a8b.firebaseio.com/.json", true);
        xhttp.send();
        document.getElementById("loading").style.display="";
    }