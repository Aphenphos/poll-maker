
const state = {};


export function initialize() {
    state.poll = null;
    state.data = [];
}

initialize();

export default state;

export function newPoll(optionA, optionB) {
    state.poll = {
        aOption: { name: optionA, votes: 0 },
        bOption: { name: optionB, votes: 0 }
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

export function remove(option) {
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