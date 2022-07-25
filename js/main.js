let links=document.querySelectorAll('.nav-link')


links.forEach(link=>{
    link.addEventListener('click',()=>{
        links.forEach(link=>{
                link.classList.remove('active')
        })
        link.classList.add('active')
    })
})

/////////////////////sticky navbar/////////////////////
let nav=document.querySelector('.nav-bar')

window.addEventListener('scroll',()=>{
    nav.classList.toggle('sticky',scrollY !== 0)
})
////////////////////////scroll active link///////
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-bar a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-bar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)