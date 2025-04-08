const lightbox = document.createElement('div')
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const closeButton = document.createElement('div')
closeButton.class = "closebutton";
closeButton.innerHTML = "&times"



const images = document.querySelectorAll('.img-holder img')
images.forEach(image =>{
    image.addEventListener('click' , e =>{
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        console.log(lightbox)

        lightbox.appendChild(img)
        lightbox.appendChild(closeButton)
    })
})

lightbox.addEventListener('click', e=>{
    if(e.target == e.currentTarget)
        lightbox.classList.remove('active')
})
