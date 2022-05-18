function linear_search(list, target) {
    // Returns the index position of the target if found, 
    // else returns null

    for (let i = 0; i < list.length; i++ ){
        if (list[i] === target) {
            return i;
        }
    }
    
    return null;
}

function verify(index) {
    if (index !== null){
        console.log(`Target found at index: ${index}`);
    } else {
        console.log(`Target not found in list`);
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

verify(linear_search(numbers, 12));

verify(linear_search(numbers, 6));