'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, k[, rand] )
*	Creates a multidimensional array of chi-squared distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} k - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with chi-squared random numbers
*/
function random( dims, k, rand ) {
	var draw = partial( k, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
