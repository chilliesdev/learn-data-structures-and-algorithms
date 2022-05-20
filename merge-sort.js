function mergeSort(list) {
  /* 
    Sort  a list in ascending order
    Returns a new sorted list

    Divide: Find the midpoint of the list and divide into sublists
    Conquer: Recursively sort the sublist created in previous step
    Combine: Merge the sorted sublists created in previous step
    */
   
   if (list.length <= 1) {
       return list;
   }

  let left = mergeSort(split(list).left);
  let right = mergeSort(split(list).right);

  return merge(left, right);
}

function split(list) {
  /*
    Divide the unsorted list at midpoint into sublists
    Return two sublists - left and right
    */

  let mid = Math.floor(list.length / 2);

  let left = list.slice(0, mid);
  let right = list.slice(mid);

  return { left, right };
}

function merge(left, right) {
  /*
    Merges two lists (arrays), sorting them in the process
    Returns a new merged list
    */

  let l = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i += 1;
    } else {
      l.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    l.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    l.push(right[j]);
    j += 1;
  }

  return l;
}

let alist = [54, 62, 93, 17, 77, 31, 44, 55, 20];

l = mergeSort(alist);
console.log(l);
