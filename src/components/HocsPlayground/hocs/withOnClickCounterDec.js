import {withHandlers} from 'recompose';
import {dec, gte} from 'ramda';

export default withHandlers({
    onClick: ({setClickCounter, clickCount, setColor}) => () => {
        clickCount = dec(clickCount);
        if (gte(0, clickCount)) {
            clickCount = 5;
            setColor('orange');
        }
        setClickCounter(clickCount);
    },
});
