function recursive_binary_search(list, target){
    if (list.length === 0){
        return false;
    }

    let midpoint = Math.floor(list.length/2);

    if (list[midpoint] === target) {
        return true;
    }

    if (target > list[midpoint]) {
        return recursive_binary_search(range(list, midpoint + 1, list.length), target);
    } else {
        return recursive_binary_search(range(list, 0, midpoint), target);
    }

    function range(array, start, end){
 
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(array[i]);
        }

        return result;
    }
}

function verify(result){
    console.log(`Target found: ${result}`);
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

verify(recursive_binary_search(numbers, 12));

verify(recursive_binary_search(numbers, 9));