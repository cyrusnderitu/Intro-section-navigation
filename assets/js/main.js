const menuOpen = document.querySelector('.menu_open')
const menuClose = document.querySelector('.menu_close')
const navMenu = document.querySelector('.nav_menu')
const navItem = document.querySelectorAll('.nav_item')
const nav = document.querySelector('.nav')

menuOpen.addEventListener('click', ()=> {
    navMenu.classList.add('open')
    nav.classList.add('flow')
})
menuClose.addEventListener('click', ()=> {
    navMenu.classList.remove('open')
    nav.classList.remove('flow')
})

navItem.forEach(item => {
    const arrowIcon = item.querySelector('.dropdown')
    const accList = item.querySelector('.acc_lists')

    item.addEventListener('click', (e)=>{
        e.preventDefault();

        arrowIcon.classList.toggle('invert');
        accList.classList.toggle('open_list')
    })
})
