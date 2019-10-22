/*
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {complement, compose, includes, length, partial, replace, test} from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const countNumbersOver = (count, text) => getNumbersCount(text) > count;
const countNumbersLess = (count, text) => getNumbersCount(text) < count;

const countNumbersOver1 = partial(countNumbersOver, [1]);
const countNumbersOver2 = partial(countNumbersOver, [2]);
const countNumbersOver3 = partial(countNumbersOver, [3]);
const countNumbersOver4 = partial(countNumbersOver, [4]);

const countNumbersLess2 = partial(countNumbersLess, [2]);
const countNumbersLess5 = partial(countNumbersLess, [5]);

/**
 * Функции для проверки выполнения условий с длиной строки
 */

const lengthLess = (count, text) => length(text) < count;
const lengthOver = (count, text) => length(text) > count;

const lengthLess4 = partial(lengthLess, [4]);
const lengthLess5 = partial(lengthLess, [5]);
const lengthLess8 = partial(lengthLess, [8]);
const lengthLess10 = partial(lengthLess, [10]);

const lengthOver5 = partial(lengthOver, [5]);
const lengthOver8 = partial(lengthOver, [8]);

/**
 * Функции для проверки наличия конкретного символа в строке
 */

const hasNumber4 = partial(includes, [4]);
const hasHotNumber4 = complement(hasNumber4);
const hasNumber7 = partial(includes, [7]);

// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = (text) => countNumbersOver2(text) && lengthLess5(text);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = (text) => countNumbersLess2(text) && lengthLess5(text);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = (text) => countNumbersOver1(text) && lengthOver5(text);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = (text) => lengthLess10(text) && countNumbersOver2(text) && hasNumber4(text);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = (text) => lengthLess10(text) && countNumbersOver1(text) && hasHotNumber4(text);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = (text) => lengthOver5(text) && hasNumber7(text);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = (text) => lengthOver8(text) && countNumbersOver3(text) && containsOnlyEng(text);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = (text) => countNumbersLess5(text) && (hasNumber7(text) || containsOnlyEng(text));

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = (text) => lengthLess8(text) && countNumbersOver4(text) && containsOnlyEng(text);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = (text) => lengthLess4(text) || countNumbersOver2(text) || containsOnlyEng(text);
