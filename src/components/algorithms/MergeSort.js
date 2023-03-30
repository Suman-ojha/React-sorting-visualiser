const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds));
  };

export const mergeSort = async (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
  let currentArr = [...primaryArray];
//   setAlgorithm({ name: "Merge Sort", timeComplexity: "O(n log(n))" });

  await sort(currentArr, 0, currentArr.length - 1,primaryArray,
    setPrimaryArray,
    animationSpeed,
    setDisableOptions);
//   finishedAnimation();
};

const sort = async (arr, low, high,primaryArray,
    setPrimaryArray,
    animationSpeed,
    setDisableOptions) => {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    await sort(arr, low, mid,primaryArray,
        setPrimaryArray,
        animationSpeed,
        setDisableOptions);
    await sort(arr, mid + 1, high,primaryArray,
        setPrimaryArray,
        animationSpeed,
        setDisableOptions);
    await merge(arr, low, mid, high,primaryArray,
        setPrimaryArray,
        animationSpeed,
        setDisableOptions);
  }
};

const merge = async (arr, low, mid, high,primaryArray,
    setPrimaryArray,
    animationSpeed,
    setDisableOptions) => {
  let i = low;
  let j = mid + 1;
  let k = 0;
  let tempArr = [];

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      tempArr[k] = arr[i];
      i++;
      k++;
    } else {
      tempArr[k] = arr[j];
      j++;
      k++;
    }
    setPrimaryArray([...tempArr]);

    let bar1 = document.getElementById(i).style;
    let bar2 = document.getElementById(j).style;
    bar1.backgroundColor = "#DC143C";
    bar2.backgroundColor = "#6A5ACD";

    await sleep(animationSpeed);

    bar1.backgroundColor = "#FF7F50";
    bar2.backgroundColor = "#FF7F50";

   
  }

  while (i <= mid) {
    tempArr[k] = arr[i];

    setPrimaryArray([...tempArr]);

    let bar1 = document.getElementById(i).style;
    let bar2 = document.getElementById(j).style;
    bar1.backgroundColor = "#DC143C";
    bar2.backgroundColor = "#6A5ACD";

    await sleep(animationSpeed);

    bar1.backgroundColor = "#FF7F50";
    bar2.backgroundColor = "#FF7F50";

   

    i++;
    k++;
  }

  while (j <= high) {
    tempArr[k] = arr[j];

    setPrimaryArray([...tempArr]);

    let bar1 = document.getElementById(i).style;
    let bar2 = document.getElementById(j).style;
    bar1.backgroundColor = "#DC143C";
    bar2.backgroundColor = "#6A5ACD";

    await sleep(animationSpeed);

    bar1.backgroundColor = "#FF7F50";
    bar2.backgroundColor = "#FF7F50";

  

    j++;
    k++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low];
    setPrimaryArray([...primaryArray, arr]);
  
  }
};
