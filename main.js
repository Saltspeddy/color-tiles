let contor = 1;

function addCards(){
    contor = 1;
    const b = document.querySelectorAll(".container");
    for( let i = 0 ; i < b.length ; i++){
        b[i].remove();
    }

    let height = parseInt( document.querySelector("#height").value);
    let length = parseInt( document.querySelector("#length").value);        
    document.body.innerHTML += '<main class="container" style="grid-template-columns: repeat('+length+',50px); grid-template-rows: repeat('+height+',50px);"></main>'
    let area = height * length;
    for( let i = 1 ; i <= area ; i++){
        document.querySelector(".container").innerHTML += '<div class="blocks" onclick="changeColor('+contor+')"></div>';
        contor++;
    }

}

function changeColor(value){

    console.log(value);
    let a = document.querySelector("#color").value;
    let b = document.querySelectorAll(".blocks");
    b[value - 1].style.backgroundColor = a;
 
}