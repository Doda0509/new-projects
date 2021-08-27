const slider = document.querySelector('.slider')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const img = document.querySelectorAll('img')
const dots = document.querySelectorAll('.dots')
const play = document.querySelector('.play')
const st =document.querySelector('.stop')
let count = 0
let timer 
// functions
const removeActives = () => {
    for(let i = 0; i < img.length; i++) {
        img[i].classList.remove('active')
    }
    for (let j = 0; j< img.length; j++) {
     dots[j].classList.remove('active')   
    }
}
const nextSlide = () => {
   removeActives()
   if (count=== img.length - 1) {
       count = 0
   } 
   else{
       count++
   }
   img[count].classList.add('active')
   dots[count].classList.add('active')
   clearTimeout(timer)
   autoplay()
}
const prevSlide = () => {
    removeActives()
    if (count===0) {
        count=img.length -1
    }
    else{
        count--
    }
    img[count].classList.add('active')
    dots[count].classList.add('active')
    clearTimeout(timer)
    autoplay()
}
function slideDots(){
    removeActives()
    clearTimeout(timer)
    autoplay()
    this.classList.add('active')
    const index = this.getAttribute('data-slide-to')
    count =1* index
    img[count].classList.add('active')
}
function autoplay() {
    timer=setTimeout(nextSlide, 2000)
}
function stopSlide(){
    
    clearTimeout(timer)
}
function playSlide() {
    clearTimeout(timer)
    autoplay()
}
autoplay()



// events
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
dots.forEach(item => item.addEventListener('click', slideDots))
st.addEventListener('click', stopSlide)
play.addEventListener('click', playSlide)

