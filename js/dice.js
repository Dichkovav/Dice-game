 let imagesArray=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
score=0;


 function diceImg(){
     let num =Math.floor(Math.random()*6);
     document.canvas.src=imagesArray[num];
     score+= num +1;
document.getElementById("total").innerHTML="Score: " + score

if (score>=21){
    alert("You win!")
    location.reload()


    }else if (num==0){
        score=0;
       alert("You lose")
     
    }
   
}

  
 

let btn=document.getElementById("btn-roll");
btn.addEventListener("click",diceImg);












