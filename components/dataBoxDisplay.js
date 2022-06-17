export default function DataDisplay(poll) {
    console.log(poll);
    const div = document.createElement('div');
    div.classList.add('data-container');

    const span1 = document.createElement('span');
    span1.classList.value = 'poll-question';
    span1.textContent = poll.pollQuestion;

    const span2 = document.createElement('span');
    span2.classList.value = 'option-A-display';
    span2.textContent = poll.optionA.name;

    const span3 = document.createElement('span');
    span3.classList.value = 'option-A-votes';
    span3.textContent = poll.optionA.votes;

    const span4 = document.createElement('span');
    span4.classList.value = 'option-B-display';
    span4.textContent = poll.optionB.name;

    const span5 = document.createElement('span');
    span5.classList.value = 'option-B-votes';
    span5.textContent = poll.optionB.votes;

    div.append(span1, span2, span3, span4, span5);

    return div;
}