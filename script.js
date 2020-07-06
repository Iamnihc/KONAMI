var steamcode = "";


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
        hintbox.innerHTML="goodbye yellow road by elton john";
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
            hintbox.innerHTML="ubg jngre";
            inputbox.placeholder="rot13";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==14 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "hot water"){
            stage++;
            hintbox.innerHTML="baabb aabba aabbb aabbb abbab aabaa aabab aabab aabaa ababa";
            inputbox.placeholder="bacon ab";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==15 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "ugh hoeffel"){
            stage++;
            hintbox.innerHTML="brpak pakmohrc";
            inputbox.placeholder="ur almost there (otp)";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==16 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "happy birthday"){
            stage++;
            hintbox.innerHTML="funtion aaa";
            inputbox.placeholder="returns";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==18 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "0454"){
            stage++;
            hintbox.innerHTML="from";
            inputbox.placeholder="name";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==19 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "chinmai"){
            stage++;
            hintbox.innerHTML="registrar name";
            inputbox.placeholder="whois chinmai.dev";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==20 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "porkbun"){
            stage++;
            hintbox.innerHTML="ssl cert";
            inputbox.placeholder="issued by";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==21 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "let's encrypt authority x3"){
            stage++;
            hintbox.innerHTML="readme.txt";
            inputbox.placeholder="";
            inputbox.value = "";
        }
        else{
            alert("try again");
             inputbox.value = "";
        }
    }
    else if (stage==22 && event.key=="Enter" ){
        let code = inputbox.value;
        if (code.toLowerCase() == "8675309"){
            stage++;
            hintbox.innerHTML="store.steampowered.com";
            inputbox.placeholder="that was a steam code";
            inputbox.value = steamcode;
        }
        else{
            let code = inputbox.value;
            if (code.startsWith("925")){
                alert("wrong jenny lol");
            }
            alert("try again");
             inputbox.value = "";
        }
    }
    else{
        if (stage<10) stage=0;
        
    }


  }, true);

  function aaa(){
    let code = inputbox.value;
    if (code.toLowerCase() == "code" && stage==17){
        stage++;
        hintbox.innerHTML="discord";
        inputbox.placeholder="#";
        inputbox.value = "";
    }
    else{
        alert("look at the return");
         inputbox.value = "";
         return ("code");
    }
  }

  

