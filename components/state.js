
const state = {};


export function initialize() {
    state.poll = null;
    state.data = [];
}

initialize();

export default state;

export function newPoll(pollQuestion, optionAInput, optionBInput) {
    state.poll = null;
    state.poll = {
        pollQuestion: pollQuestion,
        optionA: { name: optionAInput, votes: 0 },
        optionB: { name: optionBInput, votes: 0 }
    };
}

export function votes(option) {
    if (option === 'A') {
        state.poll.optionA.votes++;
    }
    if (option === 'B') {
        state.poll.optionB.votes++;
    }
}

export function removes(option) {
    if (option === 'A') {
        state.poll.optionA.votes--;
    }
    if (option === 'B') {
        state.poll.optionB.votes--;
    }
}

export function submit(poll) {
    state.data.push(poll);
    state.poll = null;
}