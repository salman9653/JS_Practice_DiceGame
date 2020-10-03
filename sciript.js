
        function refresh(){
            r1=Math.floor((Math.random()*6)+1);
            r2=Math.floor((Math.random()*6)+1);

            
            document.querySelector('.img1').setAttribute('src',"images/dice"+r1+".png");
 
            document.querySelector('.img2').setAttribute('src',"images/dice"+r2+".png");

            if(r1>r2){
                document.querySelector('heading').innerHTML="<h1>Player1 Wins</h1><br><h3>Click to Play again</h3>";
            }
            else if (r2>r1){
                document.querySelector('heading').innerHTML="<h1>Player2 Wins</h1><br><h3>Click to Play again</h3>";
            }
            else{
                document.querySelector('heading').innerHTML="<h1>Draw</h1><br><h3>Click to Play again</h3>";
            }
        }
        btn=document.querySelector('heading');
        btn.addEventListener('click',function run(){
            refresh()
        });
