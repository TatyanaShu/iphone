const sendForm = () => {
    const btnOpenModel = document.querySelector('.card-details__button_delivery');
    const cardDetailsTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const modalClose = modal.querySelector('.modal__close');
    const modalForm = modal.querySelector('form');
    console.log('modalForm', modalForm)


    btnOpenModel.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const labels = modal.querySelectorAll('.modal__label');
        const sendMessage ={}
        labels.forEach(label => {
            const span = label.querySelector('span');
            console.log('span', span.textContent)
            const input = label.querySelector('input');
            sendMessage[span.textContent] = input.value
            modal.style.display = 'none';
        })
        modalForm.reset()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                sendMessage
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(() => console.log('submit'))
    })
}
sendForm()