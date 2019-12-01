/**
 * Returns the object type of the given payload
 */
function isType(type) {
	return o => {
		return {}.toString.call(o).slice(8, -1) === type;
	};
}

/**
 * Collection of type checking functions
 */
export const is = {
	array: Array.isArray,
	blob: isType('Blob'),
	boolean: isType('Boolean'),
	date: isType('Date'),
	defined: function(o) {
		return !(this.undefined(o) || this.null(o));
	},
	file: isType('File'),
	function: isType('Function'),
	map: isType('Map'),
	null: isType('Null'),
	number: isType('Number'),
	plainObject: o => {
		if (!isType('Object')(o)) return false;
		return (
			o.constructor === Object &&
			Object.getPrototypeOf(o) === Object.prototype
		);
	},
	object: isType('Object'),
	regExp: isType('RegExp'),
	string: isType('String'),
	symbol: isType('Symbol'),
	undefined: isType('Undefined'),
	weakMap: isType('WeakMap'),
};

export default is;
