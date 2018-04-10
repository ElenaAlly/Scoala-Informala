var listaProduse=[];			
    
function drawLista(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        listaProduse= JSON.parse(this.responseText);
        document.getElementById("produs").innerHTML=listaProduse.nume;

    }
};
xhttp.open("GET", "https://menuadmin.firebaseio.com/menu/"+window.location.search.substring(4)+".json", true);
xhttp.send();

}

function sterge(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.location="MenuAdmin.html";
            }
        };
        xhttp.open("DELETE", "https://menuadmin.firebaseio.com/menu/"+window.location.search.substring(4)+".json", true);
        xhttp.send();
        document.getElementById("loading").style.display="";
    }
          
function nuSterge(){
                window.location="MenuAdmin.html";
    }           
