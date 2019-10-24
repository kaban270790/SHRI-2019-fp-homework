import {withHandlers} from 'recompose';
import {inc} from 'ramda';

export default withHandlers({
    onClick: ({setClickCounter, clickCount, setColor}) => () => {
        clickCount = inc(clickCount);
        setClickCounter(clickCount);
        if (clickCount % 2 === 0) {
            setColor('gray');
        } else {
            setColor('green');
        }
    },
});
