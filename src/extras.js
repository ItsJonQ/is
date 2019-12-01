// Extras
export const any = (...args) => {
	const [type, ...rest] = args;
	return rest.some(type);
};

export const all = (...args) => {
	const [type, ...rest] = args;
	return rest.every(type);
};
