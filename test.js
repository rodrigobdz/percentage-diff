import test from 'ava';
import percentageDiff from '.';

test('title', t => {
	const err = t.throws(() => {
		percentageDiff(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(percentageDiff('unicorns'), 'unicorns & rainbows');
});
