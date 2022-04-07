var noOfClicks=0;
var player1Score=0;
var player2Score=0; 
var roundCount=0;
var player1Health=10;
var player2Health=10;    

  
 function shoot()

{
    menuloop1:
 
    if(roundCount<5)
    {
        menuloop2:
        if(player1Health >1 || player2Health>1)            
        {
            
          noOfClicks+=1;
            
            if(noOfClicks%2==0) //to set odd even number which is a deciding factor that whose turn is to shoot. 
            {            
                document.getElementById("b2").style.visibility="hidden"; // to hide fire bullet of player-2 when it's player-turn.
                document.getElementById("b1").style.visibility="visible";//...and vise versa.

                var bullet1Count=Math.floor(Math.random()*5);  //to find out random number 

                document.getElementById("p1ic").value=bullet1Count; // setting the random number in Bullet-Count field.
          
                player1Health=player1Health-bullet1Count; //calculating player's healthpoints.

                document.getElementById("p1ih").value=player1Health; // setting the health points into browser.
                      
            }// player1 turnm is closed
            else if (noOfClicks%2>0)
            {
                document.getElementById("b1").style.visibility="hidden";
                document.getElementById("b2").style.visibility="visible";

                var bullet2Count=Math.floor(Math.random()*5);

                document.getElementById("p2ic").value=bullet2Count;
          
                player2Health=player2Health-bullet2Count;

                document.getElementById("p2ih").value=player2Health;

            
            }//player2 turn closed
            

        }else if(player1Health <1 || player2Health<1)
        {
           
           
            if(player1Health>player2Health)  // winning msg with points updates while winner is player 1.
            {
                alert("Congratulations! player - 1 won the round.");
                
                player1Score+=1;
                document.getElementById("p1is").value=player1Score;
                
                roundCount+=1;
                document.getElementById("nor").value=roundCount;
                
                
                
                player1Health=10;    
                document.getElementById("p1ih").value=player1Health;
                player2Health=10;    
                document.getElementById("p2ih").value=player2Health;
                bullet1Count=0;
                document.getElementById("p1ic").value=bullet1Count;
                bullet2Count=0;
                document.getElementById("p2ic").value=bullet2Count;




             break menuloop2;

            }else if(player1Health<player2Health)  // winning msg with points updates while winner is player 2.
            {
                alert("Congratulations! player - 2 won the round.");
                
                player2Score+=1;
                document.getElementById("p2is").value=player2Score;
                
                roundCount+=1;
                document.getElementById("nor").value=roundCount;
                
                
                
                player1Health=10;    
                document.getElementById("p1ih").value=player1Health;
                player2Health=10;    
                document.getElementById("p2ih").value=player2Health;
                bullet1Count=0;
                document.getElementById("p1ic").value=bullet1Count;
                bullet2Count=0;
                document.getElementById("p2ic").value=bullet2Count;
            



                break menuloop2;

            }else if(player1Health==player2Health)  //  msg with points updates when it's tie between the players.
            {
                alert("It's a tie!");
                
                
                roundCount+=1;
                document.getElementById("nor").value=roundCount;
                
                
                
                player1Health=10;    
                document.getElementById("p1ih").value=player1Health;
                player2Health=10;    
                document.getElementById("p2ih").value=player2Health;
                bullet1Count=0;
                document.getElementById("p1ic").value=bullet1Count;
                bullet2Count=0;
                document.getElementById("p2ic").value=bullet2Count;
            
                
                
                
               break menuloop2;

            } 
        
        }     // healthscore for 1 of the players is less then 1 hence menuloop closed after winning msg the round.   
   
        
    
    
    
    
    
    
    
    }else if(roundCount==5){

        if(player1Score>player2Score) 
        
        {
        document.getElementById("congomsg1").style.visibility="visible";
        document.getElementById("fire").innerHTML="GameOver";
        document.getElementById("fire").style.backgroundColor="grey";
      
    }else if(player1Score<player2Score)
        {
            document.getElementById("congomsg2").style.visibility="visible";
            document.getElementById("fire").innerHTML="GameOver";
            document.getElementById("fire").style.backgroundColor="grey";


        }  else if(player1Health==player2Health){
            document.getElementById("congomsg3").style.visibility="visible";
            document.getElementById("fire").innerHTML="GameOver";
        document.getElementById("fire").style.backgroundColor="grey";

        }   




    }                 
          
    
    

}
          
    

        
            


            
                              
            
        
                
            


           
    

        
        
    

      

    



    


