
const state = {};

export function initialize() {
    state.poll = null;
    state.allData = [];
}

initialize();

export default state;

export function newPoll(question, optionAInput, optionBInput) {
    state.poll = {
        question: question,
        optionA: { name: optionAInput, total: 0 },
        optionB: { name: optionBInput, total: 0 }
    };
    console.log(newPoll());
}
