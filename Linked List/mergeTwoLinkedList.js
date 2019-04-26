function addToList(array, value) {
    array.push(value);
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function mergeTwoLinkedLists(l1, l2) {
    var array = [];

    if (!isDefined(l1) && !isDefined(l2))
        return array;

    if ((isDefined(l1) && !isDefined(l2)) || (isDefined(l1) && l1.value < l2.value) || (isDefined(l1) && isDefined(l2) && l1.value === l2.value)) {
        addToList(array, l1.value);
        mergeTwoLinkedLists(l1.next, l2);
    } else if ((!isDefined(l1) && isDefined(l2)) || (isDefined(l2) && l2.value < l1.value)) {
        addToList(array, l2.value);
        mergeTwoLinkedLists(l1, l2.next);
    }
    return array;
}