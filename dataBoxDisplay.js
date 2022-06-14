export default function DataDisplay(props) {
    const poll = props.poll;

    const pollContainer = document.createElement('div');
    pollContainer.classList.add('data-container');

    const pollQuestion = document.createElement('span');
    pollQuestion.classList.value = pollQuestion;
    pollQuestion.textContent = poll.question;

    const optionADisplay = document.createElement('span');
    optionADisplay.classList.value = 'option A display';
    optionADisplay.textContent = poll.optionA;

    const optionAVotes = document.createElement('span');
    optionAVotes.classList.value = 'option A votes';
    optionAVotes.textContent = poll.optionA.votes;

    const optionBDisplay = document.createElement('span');
    optionBDisplay.classList.value = 'option B display';
    optionBDisplay.textContent = poll.optionB;

    const optionBVotes = document.createElement('span');
    optionBVotes.classList.value = 'option B votes';
    optionBVotes.textContent = poll.optionB.votes;

    pollContainer.append(pollQuestion, optionADisplay, optionAVotes, optionBDisplay, optionBVotes);

    return pollContainer;
}