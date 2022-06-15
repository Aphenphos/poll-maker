import DataDisplay from './dataBoxDisplay.js';

export default function createPolls(root) {

    const container = root.querySelector('.all-polls');
    console.log(container);
    return (props) => {
        const polls = props.polls;

        for (const poll of polls) {
            const dataDisplay = DataDisplay(poll);
            dataDisplay.classList.replace('data-container', 'old-data-container');
            container.append(dataDisplay);
        }
    };
}