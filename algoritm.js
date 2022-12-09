
let playingField = [0,0,0,0,0,0,0,0,0];
let move = 0;
let icon = ['o','x'];

genPlace()
// generation game place
function genPlace(){
    for(let i = 0; i < 9; i++){
        document.getElementById('screen').innerHTML+='<div id="'+i+'" class="block"><div/>';

    }
}

// обробка натиску на блок
    document.getElementById('screen').onclick = function(event){
        
        if(event.target.className == 'block' & playingField[event.target.id] == 0){
            event.target.className = 'block '+icon[move]+''
            playingField[event.target.id] = 1 + move;
            move = move==0?1:0
            // testPlace(playingField)git config --global user.name "Your Name"
            // algoritmGame()
            first(playingField)
        }else{
            console.log("no")
        }
        
    }
function first(x){
    
    let testPlaceBlock = [];
    testPlaceBlock.push(...x);
    let freePlace = []
   
    for(let i=0; i < testPlaceBlock.length; i++){ // generate free place mass...
        if(testPlaceBlock[i] == "0"){
            freePlace.push(i);
        }
        
    }
    
    checkStep(freePlace,testPlaceBlock)
}

let moveMode = 1
function checkStep(freePlace, playse){
    moveMode = moveMode==1?2:1
    for(let i=0; i<freePlace.length; i++){
        playse[freePlace[i]] = moveMode
        testPlace(playse)
        checkStep(freePlace, playse)
    }
}


function testPlace(playse){

    let checkLine = [];
            for(let x=0; x<3; x++){ //horizontal checked
                for(let y=0; y<3; y++){
                    checkLine[y]=playse[y+x*3]
    
                }
                matchChecking(checkLine)
               
            }
            
            for(let x=0; x<3; x++){ // vertical checked
                for(let y=0; y<3; y++){
                    checkLine[y]=playse[y*3+x]
    
                }
                matchChecking(checkLine)
              
            }
            for(let x=0; x<2; x++){ // diagonal checked
                for(let y=0; y<3; y++){
                    checkLine[y]=playse[((x+y)*2)*(2-x)]
    
                }
                matchChecking(checkLine)
                
            }
        }
    

        function matchChecking(x){
            if(x[0] == x[1] & x[1] == x[2] & x[0]!=0){
                            if(x[0] == 1){
                                console.log("if",x,"nice cock", x[0])
                               
                            }else{
                                console.log(x,"nice cock", x[0])
                                alert("you win")
                                
                               
                                 
                                
                            }
                        }
                
            // console.log(x)
        }









