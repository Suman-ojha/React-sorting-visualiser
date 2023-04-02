const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

export const quickSort = (
  primaryArray,
  setPrimaryArray,
  animationSpeed,
  setDisableOptions
) => {
  const quick_sort = async (arr, left, right) => {
    if (left < right) {
      let partitionIndex = await partition(arr, left, right);
      console.log("in the main...");

      setPrimaryArray([...arr]);
      await sleep(animationSpeed);

      await quick_sort(arr, left, partitionIndex - 1);
      console.log("in the left half");
      await quick_sort(arr, partitionIndex + 1, right);
      console.log("in the right half");
    }
    if (left === 0 && right === arr.length - 1) {
      await finishedAnimation(primaryArray, animationSpeed, setDisableOptions);
    }
  };

  const partition = async (arr, left, right) => {
    console.log("in partition..");
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      //if smaller element found than pivot..swap that..
      if (arr[j] < pivot) {
        //swap
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        let bar1 = document.getElementById(i).style;
        let bar2 = document.getElementById(j).style;
        bar1.backgroundColor = "#DC143C";
        bar2.backgroundColor = "#6A5ACD";

        await sleep(animationSpeed);
        bar1.backgroundColor = "#ff7f50";
        bar2.backgroundColor = "#ff7f50";

        setPrimaryArray([...arr]);
      }
    }
    // swap pivot with the greater element at i
    let temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    console.log(i + 1);
    let bar=document.getElementById(i+1).style;
    bar.backgroundColor='purple'

    setPrimaryArray([...arr]); //update primaryArray after partition is done
    await sleep(animationSpeed)
    return i + 1; //return the partition point
  };
  
//  const partition =async(array, left, right)=> {
//     const pivotValue = array[right];
//     let pivotIndex = left;
//     for (let i = left; i < right; i++) {
//       // Add color to the bars being compared
//       let bar1 = document.getElementById(i).style;
//       let bar2 = document.getElementById(pivotIndex).style;
//       bar1.backgroundColor = "orange";
//       bar2.backgroundColor = "orange";
//       // array[i].style.backgroundColor = "orange";
//       // array[pivotIndex].style.backgroundColor = "orange";
//       setPrimaryArray([...array]);
//       await sleep(animationSpeed);

//       if (array[i] < pivotValue) {
//         // Swap the bars and update their colors
//         let bar1 = document.getElementById(i).style;
//         let bar2 = document.getElementById(pivotIndex).style;
//         bar1.backgroundColor = "red";
//         bar2.backgroundColor = "red";
//         // array[i].style.backgroundColor = "red";
//         // array[pivotIndex].style.backgroundColor = "red";
//         swap(array, i, pivotIndex);
//         pivotIndex++;
//         setPrimaryArray([...array]);
//         await sleep(animationSpeed);

//         // Reset the colors of the swapped bars
       
//         let bar3= document.getElementById(pivotIndex-1).style;
//         bar1.backgroundColor = "blue";
//         bar3.backgroundColor = "blue";
//         // array[i].style.backgroundColor = "blue";
//         // array[pivotIndex - 1].style.backgroundColor = "blue";
//         setPrimaryArray([...array]);
//         await sleep(animationSpeed);
//       } else {
//         // Reset the colors of the bars that were not swapped
//         let bar1 = document.getElementById(i).style;
//         let bar2 = document.getElementById(pivotIndex).style;
//         bar1.backgroundColor = "blue";
//         bar2.backgroundColor = "blue";
//         // array[i].style.backgroundColor = "blue";
//         // array[pivotIndex].style.backgroundColor = "blue";
//         setPrimaryArray([...array]);
//         await sleep(animationSpeed);
//       }
//     }

//     // Reset the colors of the bars being compared
//     let bar1 = document.getElementById(right).style;
//     let bar2 = document.getElementById(pivotIndex).style;
//     bar1.backgroundColor = "green";
//     bar2.backgroundColor = "green";
//     // array[right].style.backgroundColor = "green";
//     // array[pivotIndex].style.backgroundColor = "green";
//     setPrimaryArray([...array]);
//     await sleep(animationSpeed);

//     // Swap the pivot with the pivotIndex and update their colors
//     bar1.backgroundColor = "red";
//     bar2.backgroundColor = "red";
//     // array[right].style.backgroundColor = "red";
//     // array[pivotIndex].style.backgroundColor = "red";
//     swap(array, pivotIndex, right);
//     setPrimaryArray([...array]);
//     await sleep(animationSpeed);

//     // Reset the colors of the swapped bars
//     bar1.backgroundColor = "blue";
//     bar2.backgroundColor = "blue";
//     // array[right].style.backgroundColor = "blue";
//     // array[pivotIndex].style.backgroundColor = "blue";
//     setPrimaryArray([...array]);
//     await sleep(animationSpeed);

//     // Reset the colors of the pivot bars
    
//     bar2.backgroundColor = "purple";
//     // array[pivotIndex].style.backgroundColor = "purple";
//     setPrimaryArray([...array]);
//     await sleep(animationSpeed);

//     return pivotIndex;
//   }

  quick_sort(primaryArray, 0, primaryArray.length - 1);
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
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
