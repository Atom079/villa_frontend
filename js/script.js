'use strict'
window.addEventListener('DOMContentLoaded', ()=>{
    // Loader
    const loader = document.querySelector('.loader')
    document.body.style.overflow = 'hidden'
    setTimeout(()=> {
        loader.style.opacity = 0
        setTimeout(()=> {
            document.body.style.overflow = ''
            loader.style.display = 'none'
        }, 500)
    }, 2000)
})