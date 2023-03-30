const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds));
  };
  
  export const selectionSort = async (
    primaryArray,
    setPrimaryArray,
    animationSpeed,
    setDisableOptions
  ) => {
    let currentArr = [...primaryArray];
    // setAlgorithm({ name: 'Selection Sort', timeComplexity: 'O(n^2)' })
    for (let i = 0; i < currentArr.length - 1; i++) {
      for (let j = i + 1; j < currentArr.length; j++) {
        let bar1 = document.getElementById(i).style;
        let bar2 = document.getElementById(j).style;
        if (currentArr[i] > currentArr[j]) {
          let swap1 = currentArr[i];
          let swap2 = currentArr[j];
          currentArr[i] = swap2;
          currentArr[j] = swap1;
          setPrimaryArray([...currentArr]);
  
          bar1.backgroundColor = "#DC143C";
          bar2.backgroundColor = "#6A5ACD";
  
          await sleep(animationSpeed);
  
          bar1.backgroundColor = "#FF7F50";
          bar2.backgroundColor = "#FF7F50";
        }
      }
      const element1 = document.getElementById(i);
      if (element1) {
        element1.style.backgroundColor = "green";
      }
    }
    const element1 = document.getElementById(currentArr.length - 1);
    if (element1) {
      element1.style.backgroundColor = "green";
    }
    setDisableOptions(false);
  };
  