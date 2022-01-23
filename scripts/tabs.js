const tabFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
const tabTitle = document.querySelector('.card-details__title');
    const tebsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const listTitle = document.querySelector('title');
    console.log('listTitle', listTitle)
    

const tabsOptions = [
    {
        name: 'Graphite', 
        memory: '128', 
        price: 60000,
        image: 'img/iPhone-graphite.webp',
    },
    {
        name: 'Silver', 
        memory: '256', 
        price: 65000,
        image: 'img/iPhone-silver.webp'
    },
    {
        name: 'Sierra Blue', 
        memory: '512', 
        price: 70000,
        image: 'img/iPhone-sierra_blue.webp'
    }
]

const changeContent = (index) => {

    tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tebsPrice.textContent = `${tabsOptions[index].price}₽`;
    tabsImage.setAttribute('src', tabsOptions[index].image)
    listTitle.textContent = `Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
}
const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if (index === indexClickedTab) {
            tab.classList.add('active')
        }
   })
    changeContent(indexClickedTab);
}
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        
        changeActiveTabs(index)
        
    })
})
changeContent(0)
}
tabFunc()