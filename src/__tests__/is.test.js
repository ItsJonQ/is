import { is } from '../index';

test('should test for array', () => {
	expect(is.array([])).toBe(true);
	expect(is.array('123')).toBe(false);
});

test('should test for boolean', () => {
	expect(is.boolean(true)).toBe(true);
	expect(is.boolean(false)).toBe(true);
	expect(is.boolean('123')).toBe(false);
});

test('should test for defined', () => {
	expect(is.defined(true)).toBe(true);
	expect(is.defined(0)).toBe(true);
	expect(is.defined(undefined)).toBe(false);
	expect(is.defined(null)).toBe(false);
});

test('should test for function', () => {
	function Hello() {}
	class HelloClass {}
	expect(is.function(() => {})).toBe(true);
	expect(is.function(Hello)).toBe(true);
	expect(is.function(HelloClass)).toBe(true);
	expect(is.function('123')).toBe(false);
});

test('should test for date', () => {
	expect(is.date(new Date())).toBe(true);
	expect(is.date('123')).toBe(false);
});

test('should test for map', () => {
	/* eslint-disable no-undef */
	const o = new Map();
	/* eslint-enable no-undef */
	expect(is.map(o)).toBe(true);
	expect(is.map('123')).toBe(false);
});

test('should test for number', () => {
	expect(is.number(0)).toBe(true);
	expect(is.number(123)).toBe(true);
	expect(is.number('123')).toBe(false);
});

test('should test for null', () => {
	expect(is.null(null)).toBe(true);
	expect(is.null(undefined)).toBe(false);
	expect(is.null('')).toBe(false);
	expect(is.null(0)).toBe(false);
});

test('should test for object', () => {
	expect(is.object([])).toBe(true);
	expect(is.object({})).toBe(true);
	expect(is.object(() => {})).toBe(false);
	expect(is.object('')).toBe(false);
	expect(is.object(0)).toBe(false);
});

test('should test for plainObject', () => {
	expect(is.plainObject({})).toBe(true);
	expect(is.plainObject([])).toBe(false);
	expect(is.plainObject(() => {})).toBe(false);
	expect(is.plainObject('')).toBe(false);
	expect(is.plainObject(0)).toBe(false);
});

test('should test for regExp', () => {
	/* eslint-disable no-undef */
	const o = new RegExp();
	/* eslint-enable no-undef */
	expect(is.regExp(o)).toBe(true);
	expect(is.regExp('123')).toBe(false);
});

test('should test for string', () => {
	expect(is.string('Hello')).toBe(true);
	expect(is.string('')).toBe(true);
	expect(is.string(123)).toBe(false);
});

test('should test for symbol', () => {
	/* eslint-disable no-undef */
	const o = Symbol();
	/* eslint-enable no-undef */
	expect(is.symbol(o)).toBe(true);
	expect(is.symbol('123')).toBe(false);
});

test('should test for undefined', () => {
	expect(is.undefined(undefined)).toBe(true);
	expect(is.undefined(null)).toBe(false);
	expect(is.undefined('')).toBe(false);
	expect(is.undefined(0)).toBe(false);
});

test('should test for weakMap', () => {
	/* eslint-disable no-undef */
	const o = new WeakMap();
	/* eslint-enable no-undef */
	expect(is.weakMap(o)).toBe(true);
	expect(is.weakMap('123')).toBe(false);
});
