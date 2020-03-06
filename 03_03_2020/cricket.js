class team{
    
    constructor(){
        this.ball=36
        this.wicket=0
        this.ballcount=0
        this.score=0
        this.score1=0
        this.player=[0,0,0,0,0,0,0,0,0,0,0]
        this.i=0
    }
   batting(){
        this.score=Math.floor(Math.random()*7);
        this.ball--
        if(this.score==0){
           this.wicket++;
           this.ballcount=0;
           this.i++;
        }
        else{
            this.score1+=this.score;
            this.ballcount++;
            this.player[this.i]+=this.score;
            if(this.ballcount==6){
                this.wicket++;
                this.ballcount=0;
                this.i++;
            }
        }
        
    
    }
    
}
var team1=new team();
var team2=new team();
function bat1(){
    if(team1.ball>0 && team1.wicket<=11){
       team1.batting();
        document.getElementById('runs1').innerHTML=team1.score1;
        document.getElementById('wicket1').innerHTML=team1.wicket;          
        document.getElementById('balls1').innerHTML=team1.ball;
    }
    else{
        for(var j=team1.wicket+1;j<11;j++){
            team1.player[j]="Yet To Bat";
        }
        localStorage.setItem('score1',JSON.stringify(team1));
        document.getElementById('btn').disabled=true;
        document.getElementById('btn1').disabled=false;
    }

}
function bat2(){
    if(team2.ball>0 && team2.wicket<=11 && team2.score1<=team1.score1){
       team2.batting();
       document.getElementById('runs2').innerHTML=team2.score1;
        document.getElementById('wicket2').innerHTML=team2.wicket;
        document.getElementById('balls2').innerHTML=team2.ball;
    }
    else{
        for(var j=team2.wicket+1;j<11;j++){
            team2.player[j]="Yet To Bat";
        }
        localStorage.setItem('score2',JSON.stringify(team2));
        document.getElementById('btn1').disabled=false;
    }
}
