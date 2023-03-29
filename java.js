window.addEventListener('load', function(event){
    alert("Hello World");//On load display message
    
    //When the user mouses over the header, ther text should change to red
    const nameHeader = this.document.getElementById("name");
    nameHeader.addEventListener("mouseover", () => {
        nameHeader.style.color = "red";
      });
    nameHeader.addEventListener("mouseout", () => {
        nameHeader.style.color = "white";
     });


    //Alternate coulor change of list elements on click
    const bulletElemetns = this.document.getElementsByTagName("li");
    for(let i = 0; i < bulletElemetns.length; i++){
        bulletElemetns[i].addEventListener("click", function(event){
            changeColour(bulletElemetns[i])
        })
    }

    //Add a rotation animation to h4 elements on click
    const h4Elements = document.getElementsByTagName("h4");
    for(let i = 0; i < h4Elements.length; i++){
        h4Elements[i].addEventListener("click", function(index){
        return function(event){
            rotateYears(h4Elements[index]);
        }
    }(i));
    }

});


async function rotateYears(h4Element){

    if(h4Element.classList.contains("animate"))
        return;

    h4Element.classList.add("animate");

    function onAnimationEnd(){
        h4Element.classList.remove("animate");
        h4Element.removeEventListener("animationend", onAnimationEnd);
    }
    h4Element.addEventListener("animationend", onAnimationEnd);
}

function changeColour(bulletElemetn) {

    let color = false;
    if(bulletElemetn.style.color == "red")
        color = true;

    switch(color){
        case true:
            bulletElemetn.style.color = "white";
            break;
        case false:
            bulletElemetn.style.color = "red";
            break;
    };
}
