/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import WithSmallSize from "../hocs/withSmallSize.js";
import withDefaultColor from "../hocs/withDefaultColor.js";
import withOnClickCounterDec from "../hocs/withOnClickCounterDec.js";


export default compose(
    WithSmallSize,
    withDefaultColor,
    withOnClickCounterDec
)(BaseButton)
