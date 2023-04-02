const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

export const mergeSort = (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
 
  const merge_sort = async (arr, low, high) => {
    // console.log("in the mergesort...");
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      await merge_sort(arr, low, mid);
      await merge_sort(arr, mid + 1, high);
      await merge(arr, low, mid, high);
    }
    if (low === 0 && high === arr.length - 1) {
      await finishedAnimation(primaryArray, animationSpeed, setDisableOptions);
     
    }
    
  };

  // const merge = async (arr, low, mid, high) => {
  //   console.log("in the merge,,,");
  //   let i = low;
  //   let j = mid + 1;
  //   let k = 0;
  //   let tempArr = [];

  //   while (i <= mid && j <= high) {
  //     if (arr[i] < arr[j]) {
  //       tempArr[k++] = arr[i++];
  //     } else {
  //       tempArr[k++] = arr[j++];
  //     }
  //     setPrimaryArray([...tempArr]);

  //     let bar1 = document.getElementById(i);
  //     let bar2 = document.getElementById(j);
  //     if (bar1 && bar2) {
  //       bar1.style.backgroundColor = "#DC143C";
  //       bar2.style.backgroundColor = "#6A5ACD";

  //       await sleep(animationSpeed);

  //       bar1.style.backgroundColor = "#FF7F50";
  //       bar2.style.backgroundColor = "#FF7F50";
  //     }
  //   }

  //   while (i <= mid) {
  //     tempArr[k++] = arr[i++];
  //     setPrimaryArray([...tempArr]);

  //     let bar1 = document.getElementById(i);
  //     let bar2 = document.getElementById(j);
  //     if (bar1 && bar2) {
  //       bar1.style.backgroundColor = "#DC143C";
  //       bar2.style.backgroundColor = "#6A5ACD";

  //       await sleep(animationSpeed);

  //       bar1.style.backgroundColor = "#FF7F50";
  //       bar2.style.backgroundColor = "#FF7F50";
  //     }
  //   }

  //   while (j <= high) {
  //     tempArr[k++] = arr[j++];
  //     setPrimaryArray([...tempArr]);
  //     let bar1 = document.getElementById(i);
  //     let bar2 = document.getElementById(j);
  //     if (bar1 && bar2) {
  //       bar1.style.backgroundColor = "#DC143C";
  //       bar2.style.backgroundColor = "#6A5ACD";

  //       await sleep(animationSpeed);

  //       bar1.style.backgroundColor = "#FF7F50";
  //       bar2.style.backgroundColor = "#FF7F50";
  //     }
  //   }

  //   for (let p = low; p <= high; p++) {
  //     arr[p] = tempArr[p - low];
  //     await sleep(animationSpeed);
  //     setPrimaryArray([...arr]);

  //     // await sleep(animationSpeed);
  //   }
  // };
  const merge =async (arr, l, m, r)=> {
  const n1 = m - l + 1;
  const n2 = r - m;
  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    setPrimaryArray([...arr])
    // Set color for bars being compared
    
    const bar1 = document.getElementById(k);
    if (bar1) {
      bar1.style.backgroundColor = "#DC143C";
      await sleep(animationSpeed);
      bar1.style.backgroundColor = "#6A5ACD";
    }

    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
    setPrimaryArray([...arr])
    // Set color for bars being compared
    const bar1 = document.getElementById(k - 1);
    if (bar1) {
      bar1.style.backgroundColor = "#DC143C";
      await sleep(animationSpeed);
      bar1.style.backgroundColor = "#6A5ACD";
    }
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
    setPrimaryArray([...arr])
    // Set color for bars being compared
    const bar1 = document.getElementById(k - 1);
    if (bar1) {
      bar1.style.backgroundColor = "#DC143C";
      await sleep(animationSpeed);
      bar1.style.backgroundColor = "#6A5ACD";
    }
  }
}

  merge_sort(primaryArray, 0, primaryArray.length - 1);
  // finishedAnimation(primaryArray, animationSpeed, setDisableOptions);
  // setDisableOptions(false)
};

const finishedAnimation = async (
  primaryArray,
  animationSpeed,
  setDisableOptions
) => {
  for (let i = 0; i < primaryArray.length; i++) {
    let bar1 = document.getElementById(i);
    if (bar1) bar1.style.backgroundColor= "green";

    await sleep(animationSpeed);
  }
  setDisableOptions(false);
};
