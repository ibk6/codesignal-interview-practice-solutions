function isListPalindrome(item) {
    var mid, slow = item,
        fast = item,
        count = 1;
    if (!item)
        return true;
    while (true) {
        if (fast.next && fast.next.next) {
            fast = fast.next.next;
            count += 2;
        } else {
            if (fast.next)
                count += 1;
            break;
        }
        if (slow.next) {
            slow = slow.next;
        }
    }
    mid = slow;
    var midNext = mid.next;
    var ptr = reverse(item, mid, count);
    return isPalindrome(ptr, midNext);
}

function isPalindrome(midLast, mid) {
    while (midLast && mid) {
        if (midLast.value !== mid.value)
            return false;
        midLast = midLast.next;
        mid = mid.next;
    }
    return true;
}

function reverse(item, mid, count) {
    var previous = undefined;
    if (count % 2 === 0)
        mid = mid.next;
    while (item !== mid) {
        var next = item.next;
        item.next = previous;
        previous = item;
        item = next;
    }
    if (count % 2 === 0)
        return previous;
    else
        return previous;
}