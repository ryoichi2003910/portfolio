setTimeout(() => {
    document.querySelector("#boxparent").classList.add("fadeIn")
}, 300);

let text = "welcome." ;
let n = 0;

let hide = function(){
  document.querySelector("#eye_catch p").style.borderRight = "2px solid rgba(0, 0, 0, .0)";
  setTimeout(show, 500);
}

let show = function(){
  document.querySelector("#eye_catch p").style.borderRight = "2px solid black";
  setTimeout(hide, 500);
}

let type = function(){
    if (n < text.length){
      document.querySelector("#eye_catch p").innerText += text[n];
        n += 1;
        setTimeout(type, 150);
    }
    else{
        show();
    }
};

window.onload = function() {
    type();
};