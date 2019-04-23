import test from 'ava';
import percentageDiff from '.';

test('Validate argument types', t => {
	const err1 = t.throws(() => {
		percentageDiff('123', 12);
	}, TypeError);
	t.is(err1.message, 'Expected a number, got string');
	const err2 = t.throws(() => {
		percentageDiff(123, '12');
	}, TypeError);
	t.is(err2.message, 'Expected a number, got string');
});

test('First number is larger than second one', t => {
	t.is(percentageDiff(3595210, 738583), -79.46);
	t.is(percentageDiff(75, 50), -33.33);
	t.is(percentageDiff(45, 35), -22.22);
});

test('Second number is larger than first one', t => {
	t.is(percentageDiff(12, 32), 166.67);
	t.is(percentageDiff(27, 96), 255.56);
	t.is(percentageDiff(50, 75), 50);
	t.is(percentageDiff(35, 45), 28.57);
});

test('Both numbers are equal', t => {
	t.is(percentageDiff(12, 12), 0);
	t.is(percentageDiff(-5, -5.0), 0);
});

test('Handles zero division', t => {
	t.is(percentageDiff(0, 0), NaN);
	t.is(percentageDiff(0, 2), Infinity);
});

test('Format as percentage', t => {
	t.is(percentageDiff.toPercentage(50), '50%');
});
