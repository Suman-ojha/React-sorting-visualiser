const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

export const BubbleSort = async (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
  let currentArr = [...primaryArray];
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < currentArr.length; i++) {
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        let bar1 = document.getElementById(j).style;
        let bar2 = document.getElementById(j + 1).style;

        bar1.backgroundColor = "#DC143C";
        bar2.backgroundColor = "#6A5ACD";
        if (currentArr[j] > currentArr[j + 1]) {
          await sleep(animationSpeed); // add a delay after each swap operation
          let temp = currentArr[j];
          currentArr[j] = currentArr[j + 1];
          currentArr[j + 1] = temp;
          setPrimaryArray([...currentArr]); // update primaryArray with the updated currentArr
          sorted = false;
        }
        bar1.backgroundColor = "#FF7F50";
        bar2.backgroundColor = "#FF7F50";
      }
      const element1 = document.getElementById(currentArr.length - i);
      if (element1) {
        element1.style.backgroundColor = "green";
      }
    }

    const element2 = document.getElementById(0);
    if (element2) {
      element2.style.backgroundColor = "green";
    }
  }
  setDisableOptions(false);
};
