
var lista=[];
var tabel=document.querySelector("#lista tbody");

function drawLista() {
    var str = "";      
    document.getElementById("description").innerHTML="Item description";
    document.getElementById("action").innerHTML="Action";

    for (var i = 0; i < lista.length; i++) {
        str += `<tr>
                   <td class="strike">${lista[i].nume}</td>
                   <td > <button type="button" class="buy" onclick="strike(${i})">Mark as buyed</button>
                </tr>`
        }
        document.querySelector("#lista tbody").innerHTML = str;
    }

/*  function test(input,event){
        if(event.keyCode===13){
            adauga(input,event);
        }
    }*/
    

function strike(index){     
    var ele = document.getElementsByClassName("strike");
    for (j = 0; j < ele.length; j++) { 
        if(j==index){
                  ele[j].style.textDecoration = "line-through";}
        }      
    }


function adauga(form,event){
    event.preventDefault();
    lista.push({
                nume:form.querySelector("[name=nume]").value,                    
              });
      drawLista();
    }

    function sorteazaAsc(coloana, td){	
        lista.sort(function(a,b){
            if(a[coloana]>b[coloana]){
                return 1;
            }else if(a[coloana]<b[coloana]){
                return -1;
            }else{
                return 0;
            }
        });	
        console.log(lista);
        drawLista();
    }   
    
    function sorteazaDesc(coloana, td){
        lista.sort(function(a,b){
            if(a[coloana]>b[coloana]){
                return 1;
            }else if(a[coloana]<b[coloana]){
                return -1;
            }else{
                return 0;
            }
        });
            lista.reverse();
        drawLista();
    }