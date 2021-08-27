const container=document.querySelector('body');
const cube = document.querySelector('.cube');
container.addEventListener('mousemove', e=>{
    const x=window.innerWidth / 2 - e.pageX
    const y=window.innerHeight / 2 - e.pageY
    
    cube.style.transform=`rotateX(${y / 3}deg) rotateY(${x / 3}deg)`
})