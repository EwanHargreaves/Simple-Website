let color = false;

const bulletElemetns = this.document.getElementsByTagName("li");
bulletElemetns.addEventListener("click", function(event){
    changeColour()
});

function changeColour() {
    for(let i = 0; i < bulletElemetns.length; i++){
        bulletElemetns[i].addEventListener("click", function(event){
            if(color){
                bulletElemetns[i].style.color = "red"
                color = false
            }else{
                bulletElemetns[i].style.color = "white"
                color = true
            }
        })
    }
}


//When the user clicks on the header, ther text should change to red
// nameHeader.addEventListener("input", function(event){
//     nameHeader.style.color = "red"
// });


window.addEventListener('load', function(event){
    const nameHeader = this.document.getElementById("name");
    nameHeader.style.color = "red";

    alert("Hello World");
});