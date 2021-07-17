

function Play(){

    if(document.getElementById("Rock").checked === false && 
       document.getElementById("Paper").checked === false && 
       document.getElementById("Scissors").checked === false){
            alert("Choose an option to be able to play");
    }else{
        let jogar = Math.floor(Math.random() * 3);
        switch(jogar){
            case 0:
                document.getElementById("Computer").src="pedra.jpg"
                break;
            case 1:
                 document.getElementById("Computer").src="papel.jpg"
                break;
            case 2:
                 document.getElementById("Computer").src="tesoura.jpg"
                break;    
        }
        if((document.getElementById("Rock").checked === true && jogar === 0) ||
          (document.getElementById("Paper").checked === true && jogar === 1) ||
          (document.getElementById("Scissors").checked === true && jogar === 2)){
              document.getElementById("Score").innerHTML = "Empate";
          
            }else if((document.getElementById("Rock").checked === true && jogar === 2) ||
                     (document.getElementById("Paper").checked === true && jogar === 0) ||
                     (document.getElementById("Scissors").checked === true && jogar === 1)){
                          document.getElementById("Score").innerHTML = "Player Wins";
        }else{
            document.getElementById("Score").innerHTML = "Computer Wins";
        }
    }
}


function Clean(){

    document.getElementById("Computer").src="pcvazio.png";
    document.getElementById("Score").innerHTML = "";
}