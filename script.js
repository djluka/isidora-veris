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
let start = 0.4;  

boxes.forEach((boxes) => {
    boxes.style.transitionDelay = `${start}s`;

    start += 0.3;

    if (start > 1) {
        start = 0.4;
    }
    console.log(boxes)

});
