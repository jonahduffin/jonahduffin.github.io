import React, { useState, useRef, createRef, useEffect } from 'react';
import {
  Button,
  Typography,
  Grid,
  Item,
  Box
} from '@mui/material';
import AnimateSorting from './AnimateSorting';
import Column from './Column';

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

function Sort({ nums, setNums, numColumns, delay, animationSpeed }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleShuffleColumns = () => {
    setNums((prevState) => {
      return prevState
      .map(a => {
        return ({ sort: Math.random(), value: a.val });
      })
      .sort((a, b) => a.sort - b.sort)
      .map(a => {return {val: a.value, color: 'black'}});
    });
  }

  const handleBubbleSort = async () => {
    // prevent from clicking button til its done
    setButtonDisabled(true);

    // have to create a copy of state like this
    let working_array = [].concat(nums);
    let temp;
    for (let i = 0; i < working_array.length; i++) {
      for (let j = 0; j < (working_array.length - i - 1); j++) {
        working_array[j].color = 'red';
        working_array[j + 1].color = 'red';
        setNums(working_array);
        await sleep(delay);
        working_array = [].concat(working_array);

        if (working_array[j].val > working_array[j + 1].val) {
          temp = working_array[j];
          working_array[j] = working_array[j + 1];
          working_array[j + 1] = temp;
          setNums(working_array);
          // need to make a new copy of working_array so React thinks its a new object and changes state
          working_array = [].concat(working_array);
          await sleep(delay);
        }


        working_array[j].color = 'black';
        setNums(working_array);
        //await sleep(delay);
        working_array = [].concat(working_array);
      }
      working_array[working_array.length - i - 1].color = 'green';
      setNums(working_array);
      await sleep(delay);
      working_array = [].concat(working_array);
    }
    setNums(working_array);
    setButtonDisabled(false);
  };

  const handleSelectionSort = async () => {
    // prevent from clicking button til its done
    setButtonDisabled(true);
    
    let working_array = [].concat(nums);
    let temp;
    let min_index;

    for (let i = 0; i < working_array.length - 1; i++) { 
      min_index = i;

      working_array[i].color = 'blue';
      setNums(working_array);
      await sleep(delay);
      working_array = [].concat(working_array);

      for(let j = i + 1; j < working_array.length; j++ ) {
        working_array[j].color = 'red';
        setNums(working_array);
        await sleep(delay);
        working_array = [].concat(working_array);

        if (working_array[j].val < working_array[min_index].val) {
          working_array[j].color = 'blue';
          working_array[min_index].color = 'black';
          setNums(working_array);
          await sleep(delay);
          working_array = [].concat(working_array);
          min_index = j;
        } else {
          working_array[j].color = 'black';
        }

      }
      if (min_index !== i) {
        temp = working_array[i];
        working_array[i] = working_array[min_index];
        working_array[min_index] = temp;
        setNums(working_array);
        await sleep(delay);
        working_array = [].concat(working_array);
      }

      working_array[i].color = 'green';
      setNums(working_array);
      await sleep(delay);
      working_array = [].concat(working_array);

    }
    working_array[working_array.length - 1].color = 'green';
    setNums(working_array);
    await sleep(delay);
    working_array = [].concat(working_array);

    setButtonDisabled(false);
  };

  const handleInsertionSort = async () => {
    // prevent from clicking button til its done
    setButtonDisabled(true);

    let working_array = [].concat(nums);
    let temp, key, j, switched;
    for (let i = 1; i < working_array.length; i++ ) {
      key = working_array[i];
      j = i - 1;
      switched = false;

      working_array[i].color = 'red';
      setNums(working_array);
      await sleep(delay);
      working_array = [].concat(working_array);

      while (j >= 0 && working_array[j].val > key.val) {
        // this is to fix a weird bug that causes columns to color incorrectly
        switched = true;
        temp = working_array[j + 1];
        working_array[j + 1] = working_array[j];
        working_array[j] = temp;
        j = j - 1;
        setNums(working_array);
        await sleep(delay);
        working_array = [].concat(working_array);
      }
      if (!switched) { j--;}
      working_array[j + 1].color = 'green';
      key.color = 'green';
      setNums(working_array);
      await sleep(delay);
      working_array = [].concat(working_array);
    }
    // sometimes last square doesn't color if it was already sorted. This fixes that.
    working_array[working_array.length - 1].color = 'green';
    setNums(working_array);
    await sleep(delay);
    working_array = [].concat(working_array);

    setButtonDisabled(false);
  };



  return (
    <div style={{height: "100%", width: "100%", display: "block"}}>
      <Button
        onClick={handleShuffleColumns}
        sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mr: "2px",
        "&:hover": {
            background: "rgb(255, 196, 4)"
          }
        }}
        disabled={buttonDisabled}
      >
        Randomize
      </Button>
      <Button
        onClick={handleBubbleSort}
        sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mr: "2px",
        "&:hover": {
            background: "rgb(255, 196, 4)"
          }
        }}
        disabled={buttonDisabled}
      >
        Bubble Sort
      </Button>
      <Button
        onClick={handleSelectionSort}
        sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mr: "2px",
        "&:hover": {
            background: "rgb(255, 196, 4)"
          }
        }}
        disabled={buttonDisabled}
      >
        Selection Sort
      </Button>
      <Button
        onClick={handleInsertionSort}
        sx={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "2px", borderColor: "rgb(58, 45, 3)", backgroundColor: "rgb(247, 240, 216)", color: "rgb(58, 45, 3)", mr: "2px",
        "&:hover": {
            background: "rgb(255, 196, 4)"
          }
        }}
        disabled={buttonDisabled}
      >
        Insertion Sort
      </Button>
      <Grid container sx={{height: "80%", width: "100%", pl: '15px;'}} alignItems="flex-end" justify="center" spacing={0} columns={numColumns}>
        <AnimateSorting animationSpeed={animationSpeed}>
        { nums.map((num) => {
          return (
            <Column key={num.val} num={num.val} numColor = {num.color} ref={createRef()} numColumns={numColumns} />)
        })}
        </AnimateSorting>
      </Grid>
    </div>
  );
}

export default Sort;
