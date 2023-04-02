
const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};
export const heapSort = (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
  let arr=[...primaryArray]
  const heap_sort=async(array)=> {
    const len = array.length;
  
    // Build heap (rearrange array)
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      await heapify(array, len, i);
      await sleep(animationSpeed)
    }
  
    // One by one extract an element from heap
    for (let i = len - 1; i >= 0; i--) {
      // Move current root to end
      swap(array, 0, i);
      setPrimaryArray([...array]);
      // call max heapify on the reduced heap
      await sleep(animationSpeed)
      // Heapify root element to get highest element at root again
      await heapify(array, i, 0);
    }
    await finishedAnimation(primaryArray, animationSpeed, setDisableOptions);
  }
  const heapify=async(array,n,i)=>{
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      let bar1=document.getElementById(i).style;
      let bar2=document.getElementById(largest).style;
      swap(array, i, largest);
      
      setPrimaryArray([...array])
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'
      await sleep(animationSpeed)
      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'
      setPrimaryArray([...array])
      // Recursively heapify the affected sub-tree
      await heapify(array, n, largest);
     
      //
    //   swap(array, i, largest);
    // setPrimaryArray([...array]);
    // array[i].color = "red";
    // array[largest].color = "red";
    // await sleep(delay);
    // array[i].color = "blue";
    // array[largest].color = "blue";
    // setPrimaryArray([...array]);

    // // Recursively heapify the affected sub-tree
    // await heapify(array, length, largest, setPrimaryArray, delay);
    }
  }

  //call the heap-sort function
  heap_sort(arr);
}

const swap=(array, i, j)=> {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const finishedAnimation = async (
  primaryArray,
  animationSpeed,
  setDisableOptions
) => {
  for (let i = 0; i < primaryArray.length; i++) {
    let bar1 = document.getElementById(i);
    if (bar1) bar1.style.backgroundColor = "green";

    await sleep(animationSpeed);
  }
  setDisableOptions(false);
};