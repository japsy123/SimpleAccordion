const container = document.querySelector('#accordion');

container.addEventListener('click', function (event) {

    const currentContent = event.target.closest('.main-content');

    if(!currentContent) return;

    const id = currentContent.id;
    const allHiddenContent = document.querySelectorAll('.hidden')
    allHiddenContent.forEach(content => {
        if(content.id !== `hidden-${currentContent.id}`) {
            content.classList.remove('active')
        }
    })
    document.querySelector(`#hidden-${id}`).classList.toggle('active')
})