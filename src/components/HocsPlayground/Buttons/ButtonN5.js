/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withLargelSize from "../hocs/withLargelSize.js";
import withPrimaryColor from "../hocs/withPrimaryColor.js";
import withOnClickTurnCounterclockwise from "../hocs/withOnClickTurnCounterclockwise.js";


export default compose(
    withLargelSize,
    withPrimaryColor,
    withOnClickTurnCounterclockwise
)(BaseButton)
