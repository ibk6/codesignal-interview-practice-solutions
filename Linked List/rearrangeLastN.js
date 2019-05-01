function findPosition(l, count, position, first) {
	if (l.next === null || l.next === undefined) {
		if (position < count && position !== 0)
			l.next = first;
		return count;
	}
	var lengthOrNext = findPosition(l.next, count + 1, position, first);
	if (typeof lengthOrNext !== 'number')
		return lengthOrNext;

	if (lengthOrNext - position === count) {
		var next = l.next;
		l.next = null;
		return next;
	}

	return lengthOrNext;
}

function rearrangeLastN(l, n) {
	if (!l)
		return null;

	var result = findPosition(l, 1, n, l);

	if (typeof result === 'number')
		return l;

	return result;
}