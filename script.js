var stage=0;
var inputbox, hintbox;
window.addEventListener("keydown", function(event) {
    if (stage==0&& event.key=="ArrowUp"){
        stage++;
        console.log(stage);
    }
    else if (stage==1&&event.key=="ArrowUp"){
        stage++;
        console.log(stage);
    }
    else if (stage==2&&event.key=="ArrowDown"){
        stage++;
        console.log(stage);
    }
    else if (stage==3&&event.key=="ArrowDown"){
        stage++;
        console.log(stage);
    }
    else if (stage==4&&event.key=="ArrowLeft"){
        stage++;
        console.log(stage);
    }
    else if (stage==5&&event.key=="ArrowRight"){
        stage++;
        console.log(stage);
    }
    else if (stage==6&&event.key=="ArrowLeft"){
        stage++;
        console.log(stage);
    }
    else if (stage==7&&event.key=="ArrowRight"){
        stage++;
        console.log(stage);
    }
    else if (stage==8&&event.key=="b"){
        stage++;
        console.log(stage);
    }
    else if (stage==9&&event.key=="a"){
        stage++;
        console.log(stage);
    }
    else if (stage==10&&event.key=="Enter"){
        stage++;
        console.log(stage);
        console.log("complete");
        inputbox=document.getElementById("in");
        hintbox = document.getElementById("hint");
        hintbox.innerHTML="goodbye yellow road";
        inputbox.hidden=false;
    }
    else if (stage==11 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "brick"){
            stage++;
            hintbox.innerHTML="37.849422, -122.145384";
            inputbox.value = "";
            inputbox.placeholder="city";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==12 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "orinda"){
            stage++;
            hintbox.innerHTML="Ym94";
            inputbox.placeholder="b64";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==13 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "box"){
            stage++;
            hintbox.innerHTML="ubg jngrje";
            inputbox.placeholder="rot13";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else{
        if (stage<10) stage=0;
        
    }


  }, true);

  

