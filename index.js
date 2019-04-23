'use strict';

module.exports = (firstNr, secondNr) => {
	if (typeof firstNr !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof firstNr}`);
	}

	if (typeof secondNr !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof secondNr}`);
	}

	const percentageDiff = (secondNr - firstNr) / firstNr * 100;

	return Number(percentageDiff.toFixed(2));
};
