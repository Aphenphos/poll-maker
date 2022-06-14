import createPollMenu from './PollMenu.js';
import createNewPoll from './NewPoll.js';
import createPolls from './polls.js';
import trackVotes from './voteTracker.js';

import state, { newPoll, votes, removes, submit } from './state.js';

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
    handleSubmit: () => {
        submit();
        display();
    }
});

const NewPoll = createNewPoll(document.querySelector('#new-poll'), {
    handleNewPoll: (pollQuestion, optionAInput, optionBInput) => {
        newPoll(pollQuestion, optionAInput, optionBInput);
        display();
    }
});

const Polls = createPolls(document.querySelector('.all-polls'));

function display() {
    PollMenu({ poll: state.poll });
    voteTracker({ poll: state.poll });
    NewPoll({ poll: state.poll });
    Polls({ polls: state.data });
}

display();
