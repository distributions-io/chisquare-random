'use strict';

// MODULES //

var randGamma = require( 'distributions-gamma-random/lib/number.js' );


// GENERATE CHI-SQUARED RANDOM NUMBERS //

/**
* FUNCTION random( k[, rand] )
*	Generates a random draw from a chi-squared distribution with parameter `k`.
*
* @param {Number} k - degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( k, rand ) {
	return randGamma( k / 2, 0.5, rand );
}

module.exports = random;
