const projectContainer = document.querySelector("#projects")
const imageViewContainer = document.querySelector('#image-view');

// container listener for performance
// having an individual listener for each item can be slower
projectContainer.addEventListener("click",(event)=>{
    console.log(event.target)
    if(event.target.className == "image-preview"){
        imageItemPreviewSrc = event.target.src;
        imageViewContainerImg = imageViewContainer.querySelector('img');
        imageViewContainerImg.src = imageItemPreviewSrc;
        imageViewContainer.style.display = 'flex';
    }
})

imageViewContainer.addEventListener("click",(event)=>{
    if(!event.target.src) {
        imageViewContainer.style.display = 'none';
    }
})


