const menuOpen = document.querySelector('.menu_open')
const menuClose = document.querySelector('.menu_close')
const navMenu = document.querySelector('.nav_menu')
const navItem = document.querySelectorAll('.nav_item')

menuOpen.addEventListener('click', ()=> {
    navMenu.classList.add('open')
})
menuClose.addEventListener('click', ()=> {
    navMenu.classList.remove('open')
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
