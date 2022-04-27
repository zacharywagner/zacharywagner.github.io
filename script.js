function toggle(){
    let element = document.getElementById("id");
    if(element.style.display == "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
    console.log("toggle()");
}