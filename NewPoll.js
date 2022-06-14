export function createNewPoll(root, handlers){
    const handleNewPoll = handlers.handleNewPoll;

    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewPoll(formData.get('pollQuestion'), formData.get('optionA'), formData.get('optionB'));

        form.reset();
    });}