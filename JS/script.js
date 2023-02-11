// Session_btn script

let Session_btn = document.getElementsByClassName('Session_btn');
Session_btn.addEventListener('click', join);

function join(){
    if(Session_btn.textContent == "Join Session"){
        Session_btn.textContent = "Joint"
    }
    else{
        Session_btn.textContent = "Join Session";
    }
}
