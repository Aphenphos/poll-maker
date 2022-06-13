export function createDataDisplay(data) {
    const poll = data.poll;

    const pollContainer = document.createElement('div');
    pollContainer.classList.add('data-container');

    const pollQuestion = document.createElement('h1');
    pollQuestion.classList.value = pollQuestion;
    pollQuestion.textContent = poll.question;

    const optionADisplay = document.createElement('h2');
    optionADisplay.classList.value = 'option A';
    optionADisplay.textContent = poll.optionA;

    const optionAVotes = document.createElement('p');
    optionAVotes.classList.value = 'option A votes';
    optionAVotes.textContent = poll.optionA.votes;

    const optionBDisplay = document.createElement('h2');
    optionBDisplay.classList.value = 'option B';
    optionBDisplay.textContent = poll.optionB;

    const optionBVotes = document.createElement('p');
    optionBVotes.classList.value = 'option B votes';
    optionBVotes.textContent = poll.optionB.votes;

    pollContainer.append(pollQuestion, optionADisplay, optionAVotes, optionBDisplay, optionBVotes);
}