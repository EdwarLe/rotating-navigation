const main__contain = document.getElementById('main__contain-vert')
const menu__desp__vert = document.getElementById('menu__desp-vert')
const main__menu = document.getElementById('main__menu-hidden')

menu__desp__vert.onclick = () => {
    main__contain.classList.toggle('main__contain-rotate');
    menu__desp__vert.classList.toggle('menu__desp-rotate');
    main__menu.classList.toggle('main__menu-show')
}