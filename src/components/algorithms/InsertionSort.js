const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

export const insertionSort = async (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
  let currentArr = [...primaryArray];
  //   setAlgorithm({ name: 'Insertion Sort', timeComplexity: 'O(n^2)' })
  for (let i = 1; i < currentArr.length; i++) {
    let current = currentArr[i];
    let j = i - 1;
    while (j >= 0 && currentArr[j] > current) {
      currentArr[j + 1] = currentArr[j];
      setPrimaryArray([...currentArr]);

      let bar1 = document.getElementById(j + 1).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(animationSpeed);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";

      j--;
    }
    currentArr[j + 1] = current;
    setPrimaryArray([...currentArr]);
  }
  finishedAnimation(primaryArray,animationSpeed,setDisableOptions);
};

const finishedAnimation = async (primaryArray,animationSpeed,setDisableOptions) => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'green'
     
      await sleep(animationSpeed)
    }
    setDisableOptions(false)
  }