'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, k[, rand] )
*	Creates a matrix of chi-squared distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} k - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with chi-squared random numbers
*/
function random( dims, dt, k, rand ) {
	var out,
		draw,
		i;

	draw = partial( k, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
