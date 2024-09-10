
let chngMode = document.querySelector("#mode");

let curMode = "light"


chngMode.addEventListener("click", ()=>{

    if (curMode === "light") {
        document.body.setAttribute("class", "dark");
        chngMode.textContent ="Light"
        curMode = "dark"
    
    }
    else{
        document.body.setAttribute("class", "light");
         chngMode.textContent ="Dark"
        curMode = "light"        
    }


    console.log(curMode);
})
