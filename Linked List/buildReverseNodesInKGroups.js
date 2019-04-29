function buildReverseNodesInKGroups(a, b, k, count) {
	if (count % k === 0) {
		return {
			newFirst: a,
			nextFirst: b
		};
	} else {
		var value = buildReverseNodesInKGroups(b, b.next, k, count + 1);
		b.next = a;
		a.next = null;
		return value;
	}
}

function hasLength(l, k) {
	var count = 1;
	while (l.next) {
		l = l.next;
		count++;
		if (count === k)
			return true;
	}
	return false;
}

function reverseNodesInKGroups(l, k) {
	var i = 1,
		reverseListHead, reverseList;
	while (l) {
		while (reverseList && reverseList.next)
			reverseList = reverseList.next;

		if (hasLength(l, k)) {
			var {
				newFirst,
				nextFirst
			} = buildReverseNodesInKGroups(l, l.next, k, i);

			l = nextFirst;
		} else {
			newFirst = l;
			l = null;
		}

		if (!reverseListHead)
			reverseListHead = reverseList = newFirst;
		else
			reverseList.next = newFirst;

		i += k;
	}
	return reverseListHead;
}