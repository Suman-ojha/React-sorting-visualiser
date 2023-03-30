import { Button } from "react-bootstrap";
import React, { useState, useEffect, useCallback } from "react";
import { BubbleSort } from "./algorithms/BubbleSort";
import {insertionSort} from './algorithms/InsertionSort'
import {selectionSort} from './algorithms/SelectionSort'
import {heapSort} from './algorithms/HeapSort'
import {mergeSort} from './algorithms/MergeSort'
import {quickSort} from './algorithms/QuickSort'
import Options from "./utils/Options";

const Visualizer = () => {
  const [primaryArray, setPrimaryArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [disableOptions, setDisableOptions] = useState(false);
  const [sliderValue, setSliderValue] = useState(20);

  const randomizeArray = useCallback(() => {
    // console.log("in the array..")
    let array = [];
    const ARRAYSIZE = document.getElementById("bar");
    console.log(ARRAYSIZE.value);
    for (let i = 0; i < ARRAYSIZE.value; i++) {
      array.push(randomVals(20, 400));
    }
    // console.log("in the array..")
    setPrimaryArray([...array]);
   
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "#ff7f50";
    }
    // localStorage.setItem("array", JSON.stringify(array));
  }, [primaryArray]);

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
    return randomVal;
  };

  useEffect(() => {
    // check if there is any previously saved array in the localStorage
    
      randomizeArray();
    
  }, [sliderValue]);
  // const sleep = (milliSeconds) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliSeconds));
  // };
 
  
    const handleSorting = () => {
      setDisableOptions(true)
      switch (algorithm) {
        case 'bubbleSort':
          BubbleSort(primaryArray, setPrimaryArray, animationSpeed,setDisableOptions);
          // setDisableOptions(false)
          break
        case 'selectionSort':
          selectionSort(primaryArray,setPrimaryArray,animationSpeed,setDisableOptions)
          break
        case 'insertionSort':
          insertionSort(primaryArray, setPrimaryArray, animationSpeed,setDisableOptions)
          // setDisableOptions(false)
          break
        case 'mergeSort':
          mergeSort(primaryArray, setPrimaryArray, animationSpeed,setDisableOptions)
          break
        case 'quickSort':
          quickSort(primaryArray, setPrimaryArray, animationSpeed,setDisableOptions)
          break
        case 'heapSort':
          heapSort(primaryArray, setPrimaryArray, animationSpeed,setDisableOptions)
          break
        default:
          break
      }
    }
    


  return (
    <div>
      <div className="header d-flex bg-light gap-4 justify-content-center mt-2">
        <div className="d-flex flex-column">
          <label>Array</label>
          <input
            id="bar"
            type="range"
            min={1}
            max={100}
            onClick={randomizeArray}
            disabled={disableOptions}
            value={sliderValue}
            onChange={(event) => setSliderValue(event.target.value)}
          />
        </div>
        <Options
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={disableOptions}
        >
          Dropdown
        </Options>
        <div className="d-flex flex-column">
          <label>Speed</label>
          <input
            type="range"
            min={1}
            max={1000}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            disabled={disableOptions}
          />
        </div>
        <Button
          onClick={handleSorting}
          type="SORT"
          name="Sort"
          disabled={disableOptions}
          className="gap-4"
        >
          Sort
        </Button>
        <Button onClick={randomizeArray}>Randomized Array</Button>
      </div>
      <div className="sortingBars">
        {primaryArray &&
          primaryArray.map((val, key) => {
            return (
              <div
                className="bars"
                id={key}
                key={key}
                style={{ height: val }}
              ></div>
            );
          })}
      </div>
      {/* {algorithm.name !== undefined && (
            <div className='algoInfo'>
              <div>Algorithm: {algorithm.name}</div>
              <div>Time Complexity: {algorithm.timeComplexity}</div>
            </div>
          )} */}
    </div>
  );
};

export default Visualizer;
