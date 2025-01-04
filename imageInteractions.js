const selectedImage = document.getElementsByClassName("image-preview")

const projectContainer = document.querySelector("#projects")
projectItems = projectContainer.querySelectorAll(".item")
projectContainer ? console.log("yes") : console.log("no");

// container listener for performance
projectContainer.addEventListener("click",(event)=>{
    console.log(event.target)
    event.target.className == "image-preview" ? console.log("IMAGE YEAH"): console.log("NO IMAGE :(");
    
    imageItemSrc = event.target.src;

    imageItem = document.createElement('img');
    imageItem.setAttribute('src',imageItemSrc);

    const imageViewContainer = document.createElement("div");
    imageViewContainer.setAttribute('class','image-popup')
   
    imageViewContainer.setAttribute("id","image-view-container");
    imageViewContainer.appendChild(imageItem);
    console.log(imageViewContainer);
    document.body.appendChild(imageViewContainer);
    
}) 


