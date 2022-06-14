import DataDisplay from './dataBoxDisplay.js';

export default function createPolls(root) {

    const container = root.querySelector('.all-polls');

    return (props) => {
        const polls = props.polls;


        for (const poll of polls) {
            const dataDisplay = DataDisplay({ poll });
            container.append(dataDisplay);
        }
    };
}