let drop = document.getElementsByClassName("dropdown");
let hrs = document.querySelectorAll("hr");

let img = document.getElementById("imageToggle");
let body = document.body;
let ctext = document.getElementById("cctext")
for (let i = 0;  i < drop.length; i++ ) {
    drop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropped = this.nextElementSibling;
        
        if (dropped.style.maxHeight){
            dropped.style.maxHeight = null;
        }
else{
dropped.style.maxHeight = dropped.scrollHeight + "px";
}
    });
    }
    
    function changecolor(){
      let ccolor = getComputedStyle(document.body).backgroundColor;
      if(body.classList.contains("light-mode")){
        body.classList.remove("light-mode")
         body.classList.add("dark-mode")
img.src = "Teto images/sun-icon-36037.png";
    
   ctext.innerText = "Mode lumière";
      }

      else{
     body.classList.add("light-mode")
         body.classList.remove("dark-mode")
          img.src = "Teto images/moon-icon-23631.png";
         ctext.innerText = "Mode sombre";
          
          
    }}