let Player = prompt("Player name ? : "); 

let randomNumber = Math.floor(Math.random() * 100) + 1;


let numberPlayer ;

while(numberPlayer !== randomNumber){
   let numberPlayer = parseInt(prompt("Choose a number between 1 and 100 : "));

    if (numberPlayer > randomNumber) {
                console.log("It's less !");    
    }
    else if (numberPlayer < randomNumber) {
                console.log("It's more !");
    }
    else if (numberPlayer == randomNumber){
        console.log(Player + " win !");
    }
            
}
         
    

            