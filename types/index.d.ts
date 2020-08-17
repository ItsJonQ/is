/**
 * A collection of methods to type check values.
 *
 * @example
 * is.boolean(value); // true
 */
export declare const is: {
    /**
     * Checks to see if a value is an array.
     */
    array: (o: any) => boolean,
    /**
     * Checks to see if a value is a blob.
     */
    blob: (o: any) => boolean,
    /**
     * Checks to see if a value is a boolean.
     */
    boolean: (o: any) => boolean,
    /**
     * Checks to see if a value is a date.
     */
    date: (o: any) => boolean,
    /**
     * Checks to see if a value is not defined or null.
     */
    defined: (o: any) => boolean,
    /**
     * Checks to see if a value is a file.
     */
    file: (o: any) => boolean,
    /**
     * Checks to see if a value is a function.
     */
    function: (o: any) => boolean,
    /**
     * Checks to see if a value is a map.
     */
    map: (o: any) => boolean,
    /**
     * Checks to see if a value is a plain object.
     */
    plainObject: (o: any) => boolean,
    /**
     * Checks to see if a value is a object.
     */
    object: (o: any) => boolean,
    /**
     * Checks to see if a value is a regExp.
     */
    regExp: (o: any) => boolean,
    /**
     * Checks to see if a value is a string.
     */
    string: (o: any) => boolean,
    /**
     * Checks to see if a value is a symbol.
     */
    symbol: (o: any) => boolean,
    /**
     * Checks to see if a value is a undefined.
     */
    undefined: (o: any) => boolean,
    /**
     * Checks to see if a value is a weakMap.
     */
    weakMap: (o: any) => boolean,
}
