/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import WithSmallSize from "../hocs/withSmallSize.js";
import withPrimaryColor from "../hocs/withPrimaryColor.js";
import withOnClickCounterInc from "../hocs/withOnClickCounterInc.js";


export default compose(
    WithSmallSize,
    withPrimaryColor,
    withOnClickCounterInc,
)(BaseButton)
