import createPollMenu from './components/PollMenu.js';
import createNewPoll from './components/NewPoll.js';
import createPolls from './components/polls.js';
import trackVotes from './components/voteTracker.js';

import state, { newPoll, votes, removes, submit } from './components/state.js';

const PollMenu = createPollMenu(document.querySelector('#poll-menu'));

const voteTracker = trackVotes(document.querySelector('#poll-inputs'), {
    handleVotes: (option) => {
        votes(option);
        display();
    },
    handleRemoves: (option) => {
        removes(option);
        display();
    },
    handleSubmitData: (poll) => {
        submit(poll);
        poll = null;
        display();
    }
});

const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll: (pollQuestion, optionA, optionB) => {
        newPoll(pollQuestion, optionA, optionB);
        display();
    }
});

const Polls = createPolls(document.querySelector('#all-data'));

function display() {
    PollMenu({ poll: state.poll });
    voteTracker({ poll: state.poll });
    NewPoll({ poll: state.poll });
    Polls({ polls: state.data });
    console.log(state.data);
}

display();
