import DataDisplay from './dataBoxDisplay.js';

export default function createPollMenu(root) {
    return (props) => {
        const poll = props.poll;
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
        root.innerHTML = '';
        const dataDisplay = DataDisplay(poll);
        root.append(dataDisplay);
    };
}