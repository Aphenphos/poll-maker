
const state = {};


export function initialize() {
    state.poll = null;
    state.data = [];
}

initialize();

export default state;

export function newPoll(pollQuestion, optionAInput, optionBInput) {
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

export function submit() {
    state.data.push(state.poll);
    state.poll = null;
}