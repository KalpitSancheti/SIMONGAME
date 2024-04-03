function next(){
    var rand=Math.floor(Math.random()*4);
    return rand;
}

var check=[];
var l=0;
var arr=[];
var start=false;
$("#level-title").click(function(){
    if(!start){
        start=true;
      //  $("#level-title").text("Level 1");
        blink();
        
    }
});
function blink() {
    arr=[];
    
    var num=next();
   
    var f;
    var ad;
    if(num==0){
        f = $("#green");
        check.push("green");
        ad=new Audio("./sounds/green.mp3");

    }
    else if(num==1){
        f = $("#red");
        check.push("red");
        ad=new Audio("./sounds/red.mp3");

        
    }
    else if(num==2){
        f = $("#yellow");
        check.push("yellow");
        ad=new Audio("./sounds/yellow.mp3");
    }
    else{
        f = $("#blue");
        check.push("blue");
        ad=new Audio("./sounds/blue.mp3");
    }
    ad.play();
    f.fadeIn(100);
    f.fadeOut(100);
    f.fadeIn(100);
    l++;
    $("#level-title").text("Level "+l);
    console.log(check);
 }
 function gameover(){
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
        
    }, 200);
    var a=new Audio("./sounds/wrong.mp3");
    a.play();
    l=0;
    arr=[];
    check=[];
    start=false;
    $("#level-title").text("GAME OVER! Click here to start.");




 }
 var current;
 function checkans(curent){
    console.log(check[current],arr[current]);
    if(check[current]!==arr[current]){
        console.log("lost");
        gameover();

    }
    else{
        if(check.length==arr.length){
            setTimeout(function(){
                blink();

            },1000);
        }
        console.log("right");
    }

 }

 
 


 


$(".btn").click(function(){
    var c=this.id;
   
    var audio;
    arr.push(c);
    
    if(c==='green'){
        audio=new Audio("./sounds/green.mp3");
        
        
    }
    if(c==='blue'){
        audio=new Audio("./sounds/blue.mp3");
        
    }
    if(c==='red'){
        audio=new Audio("./sounds/red.mp3");
        
    }
    if(c==='yellow'){
        audio=new Audio("./sounds/yellow.mp3");
        
    }
    audio.play();
    var i="#";
    i+=c;
    
    $(i).addClass("pressed");
    var delayInMilliseconds = 100; //1 second

    setTimeout(function() {
    //your code to be executed after 1 second
    $(i).removeClass("pressed");
    }, delayInMilliseconds);
    console.log(arr.length-1);
    current=arr.length-1;
    checkans(current);


    


    
    console.log(arr);

 });


