const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hidden1');

hiddenElements.forEach((e)=> observer.observe(e));
hiddenElements1.forEach((e)=> observer.observe(e));



let boxes = document.querySelectorAll('.animationBox');
let start = 0.2;  

boxes.forEach((boxes) => {
    boxes.style.transitionDelay = `${start}s`;

    start += 0.2;

    if (start > 0.7) {
        start = 0.2;
    }
    console.log(boxes)

});
