let drop = document.getElementsByClassName("dropdown");
let i;
let hrs = document.querySelectorAll("hr");

for ( let i = 0; i < drop.length; i++ ) {
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
      if(ccolor == "rgb(245, 179, 214)"){
        document.body.style.backgroundColor = "#2e2e2e";
        document.body.style.color = "#f5b3d6";
    for (let i = 0; i < hrs.length; i++){
      hrs[i].style.borderColor = "#ffffff";
    }
      }
      else{
        document.body.style.backgroundColor = "#f5b3d6"
         document.body.style.color = "#2e2e2e";
        for (let i = 0; i < hrs.length; i++){
      hrs[i].style.borderColor = "#2e2e2e";
           }
          }
    }