const scrollFunc = () => {
    //smooth scroll  page
const links = document.querySelectorAll('.header-menu__item a');
const addLink = document.querySelector('.card-details__link-characteristics');
let arr = [...links, addLink];
console.log('arr', arr)

// for (let i = 0; i < links.length; i++) {
//     arr.push(links[i]);
// }
// arr.push(addLink);
seamless.polyfill();

arr.forEach((element)=> {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        // console.log('section', section)
        console.log( id);
       
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            });

            console.log('this link consist address');
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
            console.log("element doesn't consist address");
        }
    })
})
 

}
scrollFunc()