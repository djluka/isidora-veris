const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e)=> observer.observe(e));


const clients = document.querySelectorAll('.single-klijenti');
let start = 0.2;  

clients.forEach((client) => {
    client.style.transitionDelay = `${start}s`;

    start += 0.2;

    if (start > 0.5) {
        start = 0.2;
    }
});
