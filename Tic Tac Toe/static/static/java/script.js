//Kiro odi najdole poslednata funkcija mi e frka :'( 
    var MyChoice;
    var music = new Audio('static/static/music/2.mp3');
    function playMusic()
    {
        music.play();    
    }
    function stopMusic()
    {
        music.pause();
    }
    var score = 0;
    var score1 = 0;
    var divWins = document.getElementById('Wins');
    var divLosses = document.getElementById('Losses');
    var mySpace = 0;
    var mySpace2 = 0;
    var mySpace3 = 0;
    var mySpace4 = 0; 
    var mySpace5 = 0; 
    var mySpace6 = 0;
    var mySpace7 = 0;
    var mySpace8 = 0;
    var mySpace9 = 0;
    var EnemySpace = 0;
    var EnemySpace2 = 0;
    var EnemySpace3 = 0;
    var EnemySpace4 = 0;
    var EnemySpace5 = 0;
    var EnemySpace6 = 0;
    var EnemySpace7 = 0;
    var EnemySpace8 = 0;
    var EnemySpace9 = 0;
    var button1 = document.getElementById('one');
    var button2 = document.getElementById('two');
    var button3 = document.getElementById('three');
    var button4 = document.getElementById('four');
    var button5 = document.getElementById('five');
    var button6 = document.getElementById('six');
    var button7 = document.getElementById('seven');
    var button8 = document.getElementById('eight');
    var button9 = document.getElementById('nine');
    
    var ButtonData = {
        "button1": button1,
        "button2": button2,
        "button3": button3,
        "button4": button4,
        "button5": button5,
        "button6": button6,
        "button7": button7,
        "button8": button8,
        "button9": button9,
    
    }
    
    
    function AIchoice()
    {
        let x = Math.floor(Math.random()*9);
        switch(x)
        {   
            //0  
            case 0:
            if(mySpace != button1 && EnemySpace != button1)
            {
                button1.classList.add('btn-danger');
                EnemySpace = button1;
                
            }
            
            else
            {
                newChoice();    
            }break;
            case 1:
            if(mySpace2 != button2 && EnemySpace2 != button1)
            {
                button2.classList.add('btn-danger');
                EnemySpace2 = button2;
                
            }
            else
            {
                newChoice();
            }break;
            case 2:
            if(mySpace3 != button3 && EnemySpace3 != button3)
            {
                button3.classList.add('btn-danger');
                EnemySpace3 = button3;
                
            }
            else
            {
                newChoice();
            } break;
            case 3:
                if(mySpace4 != button4 && EnemySpace4 != button4)
                {
                    button4.classList.add('btn-danger');
                    EnemySpace4 = button4;
                    
                }
                
                else
                {
                    newChoice();
                }break;
                case 4:
                if(mySpace5 != button5 && EnemySpace5 != button5)
                {
                    button5.classList.add('btn-danger');
                    EnemySpace5 = button5;
                    
                }
                else
                {
                    newChoice();
                }break;
                case 5:
                if(mySpace6 != button6 && EnemySpace6 != button6)
                {
                    button6.classList.add('btn-danger');
                    EnemySpace6 = button6;
                    
                }
                else
                {
                    newChoice();
                }break;
                case 6:
                    if(mySpace7 != button7 && EnemySpace7 != button7)
                    {
                        button7.classList.add('btn-danger');
                        EnemySpace7 = button7;
                    
                    }
                    
                    else
                    {
                        newChoice();    
                    }break;
                    case 7:
                    if(mySpace8 != button8 && EnemySpace8 != button8)
                    {
                        button8.classList.add('btn-danger');
                        EnemySpace8 = button8;
                        
                    }
                    else
                    {
                        newChoice();
                    }break;
                    case 8:
                    if(mySpace9 != button9 && EnemySpace9 != button9)
                    {
                        button9.classList.add('btn-danger');
                        EnemySpace9 = button9;
                        
                    }
                    else
                    {
                        newChoice();
                    }break;
        }    
        
    
    }
    function newChoice()
    {
        AIchoice();
    }
    
        function Main(MyChoice)
    
    {
        
       
            if(MyChoice === button1)
     {
            if(EnemySpace != button1)
        {
            button1.classList.remove(button1.classList[3]);
            button1.classList.add('btn-primary');
            mySpace = button1;
            winner();
        }
        else
        {
            button1.classList.add('btn-danger');
        }
     }
        
        else if(MyChoice === button2)
        {
            if(EnemySpace2 != button2)
            {
                button2.classList.remove(button2.classList[3]);
                button2.classList.add('btn-primary');
                mySpace2 = button2;
                winner();
                
            }
           else{
               button2.classList.add('btn-danger');
           }
        }
        else if(MyChoice === button3)
        {
            if(EnemySpace3 != button3)
        {
            button3.classList.remove(button3.classList[3]);
            button3.classList.add('btn-primary');
            mySpace3 = button3;
            winner();
        }
        else
        {
            button3.classList.add('btn-danger');
        }
        }
        
        else if(MyChoice === button4)
        {
            if(EnemySpace4 != button4)
            {
                button4.classList.remove(button4.classList[3]);
                button4.classList.add('btn-primary');
                mySpace4 = button4;
                winner();
            }
           else{
               button4.classList.add('btn-danger');
           }
        }
        else if(MyChoice === button5)
        {
            if(EnemySpace5 != button5)
        {
            button5.classList.remove(button5.classList[3]);
            button5.classList.add('btn-primary');
            mySpace5 = button5 ;
            winner();
        }
        else
        {
            button5.classList.add('btn-danger');
        }
        }
        
        else if(MyChoice === button6)
        {
            if(EnemySpace6 != button6)
            {
                button6.classList.remove(button6.classList[3]);
                button6.classList.add('btn-primary');
                mySpace6 = button6;  
                winner();
            }
           else{
               button6.classList.add('btn-danger');
           }
        }
        else if(MyChoice === button7)
        {
            if(EnemySpace7 != button7)
        {
            button7.classList.remove(button7.classList[3]);
            button7.classList.add('btn-primary');
            mySpace7 = button7;
            winner();
        }
        else
        {
            button7.classList.add('btn-danger');
        }
        }
        
        else if(MyChoice === button8)
        {
            if(EnemySpace8 != button8)
            {
                button8.classList.remove(button8.classList[3]);
                button8.classList.add('btn-primary');
                mySpace8 = button8
                winner();
            }
           else{
               button8.classList.add('btn-danger');
           }
        }
        else if(MyChoice === button9)
        {
            if(EnemySpace9 != button9)
            {
                button9.classList.remove(button9.classList[3]);
                button9.classList.add('btn-primary');
                mySpace9 = button9;
                winner();
            }
           else{
               button9.classList.add('btn-danger');
           }
        }
        
        
    }
   
    
    
    
    
    
    function reset()
    {   mySpace = 0;
        mySpace2 = 0;
        mySpace3 = 0;
        mySpace4 = 0;
        mySpace5 = 0;
        mySpace6 = 0;
        mySpace7 = 0;
        mySpace8 = 0;
        mySpace9 = 0;
        EnemySpace = 0;
        EnemySpace2 = 0;
        EnemySpace3 = 0;
        EnemySpace4 = 0;
        EnemySpace5 = 0;
        EnemySpace6 = 0;
        EnemySpace7 = 0;
        EnemySpace8 = 0;
        EnemySpace9 = 0;
        msgContent.remove();
        ButtonData.button1.classList.remove(ButtonData.button1.classList[3]);
        ButtonData.button1.classList.add('btn-warning');
        ButtonData.button2.classList.remove(ButtonData.button2.classList[3]);
        ButtonData.button2.classList.add('btn-warning');
        ButtonData.button3.classList.remove(ButtonData.button3.classList[3]);
        ButtonData.button3.classList.add('btn-warning');
        ButtonData.button4.classList.remove(ButtonData.button4.classList[3]);
        ButtonData.button4.classList.add('btn-warning');
        ButtonData.button5.classList.remove(ButtonData.button5.classList[3]);
        ButtonData.button5.classList.add('btn-warning');
        ButtonData.button6.classList.remove(ButtonData.button6.classList[3]);
        ButtonData.button6.classList.add('btn-warning');
        ButtonData.button7.classList.remove(ButtonData.button7.classList[3]);
        ButtonData.button7.classList.add('btn-warning');
        ButtonData.button8.classList.remove(ButtonData.button8.classList[3]);
        ButtonData.button8.classList.add('btn-warning');
        ButtonData.button9.classList.remove(ButtonData.button9.classList[3]);
        ButtonData.button9.classList.add('btn-warning');
    }

    let msgContent = document.createElement('h1');
    let msgDiv = document.getElementById('Win-result');
    let msgDiv1 = document.getElementById('Lose-result');
    function DisplayWinnerHuman()
    {
        msgContent = document.createTextNode('You won!');
        msgDiv.appendChild(msgContent);
    }
    function DisplayLoserHuman()
    {
        msgContent = document.createTextNode('You lost!');
        msgDiv1.appendChild(msgContent);
    }
    function winner()
    {
        //u win
       {    if(mySpace == button1 && mySpace2 == button2 && mySpace3 == button3) 
        {
            
            DisplayWinnerHuman();
            score += 1;
           divWins.textContent = score;
           
        }
       
       else if(mySpace4 == button4 && mySpace5 == button5 && mySpace6== button6) 
        {

            DisplayWinnerHuman();
            score += 1;
           divWins.textContent = score;
        }
        
      
       else if(mySpace7 == button7 && mySpace8 == button8 && mySpace9 == button9) 
        {

            DisplayWinnerHuman();
            score += 1;
           divWins.textContent = score;
            
        }
        

        else if(mySpace == button1 && mySpace5 == button5 && mySpace9 == button9) 
       {
        DisplayWinnerHuman();
        score += 1;
        divWins.textContent = score;
       }
      
       else if(mySpace3 == button3 && mySpace5 == button5 && mySpace7 == button7) 
        {

           
            DisplayWinnerHuman();
            score += 1;
           divWins.textContent = score;
        }
        
        else if(mySpace == button1 && mySpace4 == button4 && mySpace7 == button7) 
        {

            
            DisplayWinnerHuman();
            score += 1;
           divWins.textContent = score;
        }
        
        else if(mySpace2 == button2 && mySpace5 == button5 && mySpace8 == button8) 
        {

            DisplayWinnerHuman();
            score += 1;
            divWins.textContent = score;
        }
        else if(mySpace3 == button3 && mySpace6 == button6 && mySpace9 == button9) 
        {

            DisplayWinnerHuman();
            score += 1;
            divWins.textContent = score;
        }
          //hard pc
           
        else
        {
            AIchoice();
        }
      
    }//pc Win
    if(EnemySpace == button1 && EnemySpace2 == button2 && EnemySpace3 == button3) 
      {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
      }
    
    else if(EnemySpace4 == button4 && EnemySpace5 == button5 && EnemySpace6 == button6) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     
   
    else if(EnemySpace7 == button7 && EnemySpace8 == button8 && EnemySpace9 == button9) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     

     else if(EnemySpace == button1 && EnemySpace5 == button5 && EnemySpace9 == button9) 
    {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
    }
   
    else if(EnemySpace3 == button3 && EnemySpace5 == button5 && EnemySpace7 == button7) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     
     else if(EnemySpace == button1 && EnemySpace4 == button4 && EnemySpace7 == button7) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     
     else if(EnemySpace2 == button2 && EnemySpace5 == button5 && EnemySpace8 == button8) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     else if(EnemySpace3 == button3 && EnemySpace6 == button6 && EnemySpace9 == button9) 
     {

        DisplayLoserHuman();
        score1 += 1;
        divLosses.textContent = score1;
     }
     
    
   
     
}
    
    
    
    