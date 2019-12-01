function isType(type) {
	return o => {
		return {}.toString.call(o) === `[object ${type}]`;
	};
}

export const is = {
	array: Array.isArray,
	boolean: isType('Boolean'),
	date: isType('Date'),
	defined: function(o) {
		return !(this.undefined(o) || this.null(o));
	},
	function: isType('Function'),
	map: isType('Map'),
	null: isType('Null'),
	number: isType('Number'),
	plainObject: isType('Object'),
	object: o => typeof o === 'object',
	regExp: isType('RegExp'),
	string: isType('String'),
	symbol: isType('Symbol'),
	undefined: isType('Undefined'),
	weakMap: isType('WeakMap'),
};

export default is;
