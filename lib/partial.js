'use strict';

// MODULES //

var randGamma = require( 'distributions-gamma-random/lib/number.js' );


// PARTIAL //

/**
* FUNCTION: partial( k[, rand] )
*	Partially applies `k` and returns a function to generate random variables from the triangular distribution.
*
* @param {Number} k - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( k, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}

	/**
	* FUNCTION: draw()
	*	Generates a random draw for a chi-squared distribution with parameter `k`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		return randGamma( k / 2, 0.5, rand );
	}; // end FUNCTION draw()

} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
