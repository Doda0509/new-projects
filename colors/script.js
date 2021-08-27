const blue = document.querySelector('.blue')
const black = document.querySelector('.black')
const yellow = document.querySelector('.yellow')
let purple = document.querySelector('.purple')
const red = document.querySelector('.red')
const tadam = document.querySelector('.tadam')


blue.addEventListener('click', function() {
    blue.style.background = 'blue'
})

black.addEventListener('dblclick', function() {
    black.style.background = 'black'
    black.style.color = 'white'
})

yellow.addEventListener('contextmenu', function(e){
    e.preventDefault()
    yellow.style.background = 'yellow'
})

purple.addEventListener('mouseover', function(){
    purple.style.background = 'purple'
    purple.innerHTML = 'чтобы покрасить в розовый цвет отведите курсор мыши'
})

purple.addEventListener('mouseleave', function(){
    purple.style.background = 'pink'
    purple.innerHTML = 'чтобы покрасить в фиолетовый цвет наведи курсором мыши'
})

red.addEventListener('mouseup', function(){
    red.style.background = 'red'
})
let i=20
tadam.addEventListener('mousemove', function(){
    i++
    tadam.style.background = 'orange'
    tadam.style.width = i + 'px'
})

