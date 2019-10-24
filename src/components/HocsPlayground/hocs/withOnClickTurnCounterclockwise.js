import {withHandlers} from 'recompose';
import {add} from 'ramda';

export default withHandlers({
    onClick: ({setDeg, deg, updateColorFromDeg}) => () => {
        deg = add(deg, 30);
        if ((deg % 360) === 0) {
            updateColorFromDeg();
        }
        setDeg(deg);
    },
});
