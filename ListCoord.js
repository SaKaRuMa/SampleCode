var list = document.getElementById('demo');


function changeText2() {
   
    var coord = document.getElementById('coord').value;
    
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(coord));
    
    list.appendChild(entry);
    
    }


function clearCoord() {
    document.getElementById("coord").value = "";
};

