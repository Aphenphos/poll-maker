import state, {
    initialize, newPoll, submit, votes,
    // import dispatch functions
} from '../components/state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('new poll', (expect) => {


    newPoll('question', 'option1', 'option2');

    expect.deepEqual(state.poll, {
        pollQuestion: 'question',
        optionA: { name: 'option1', votes: 0 },
        optionB: { name: 'option2', votes: 0 }
    });


});

test('add a vote A', (expect) => {
    newPoll('question', 'option1', 'option2');
    votes('A');
    expect.deepEqual(state.poll, {
        pollQuestion: 'question',
        optionA: { name: 'option1', votes: 1 },
        optionB: { name: 'option2', votes: 0 },
        
    });
});


test('add a vote B', (expect) => {
    newPoll('question', 'option1', 'option2');
    votes('B');
    expect.deepEqual(state.poll, {
        pollQuestion: 'question',
        optionA: { name: 'option1', votes: 0 },
        optionB: { name: 'option2', votes: 1 },
        
    });
});

test('submit the poll', (expect) => {
    submit({
        pollQuestion: 'question',
        optionA: { name: 'option1', votes: 0 },
        optionB: { name: 'option2', votes: 1 },
    });

    expect.deepEqual(state.data, [{
        pollQuestion: 'question',
        optionA: { name: 'option1', votes: 0 },
        optionB: { name: 'option2', votes: 1 },
        
    }]);});
