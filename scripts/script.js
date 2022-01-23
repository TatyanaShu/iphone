const links = document.querySelectorAll('.header-menu__item a');

links.forEach((element)=> {
    element.onclick = () => {
        console.log('click')
    }
})

 