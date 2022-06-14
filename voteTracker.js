export default function trackVotes(root, dispatch) {
    const handleVotes = dispatch.handleVotes;
    const handleRemoves = dispatch.handleRemoves;
    const handleSubmitData = dispatch.handleSubmitData;


    const [pollQuestionDisplay, optionADisplay, optionBDisplay] = root.querySelectorAll('span');
    const [voteA, removeA, voteB, removeB, submitData] = root.querySelectorAll('button');

    voteA.addEventListener('click', () => {
        handleVotes('A');
    });
    removeA.addEventListener('click', () => {
        handleRemoves('A');
    });
    voteB.addEventListener('click', () => {
        handleVotes('B');
    });
    removeB.addEventListener('click', () => {
        handleRemoves('B');
    });
    submitData.addEventListener('click', () => {
        handleSubmitData(); 
    });

    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
        pollQuestionDisplay.textContent = poll.question;
        optionADisplay.textContent = poll.optionA;
        optionBDisplay.textContent = poll.optionB;
    };
}
