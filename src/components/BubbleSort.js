import React, { useState } from 'react';

function BubbleSort() {
  const [array, setArray] = useState([5, 3, 8, 6, 2]);

  const bubbleSort = (arr) => {
    let sortedArray = [...arr];
    let n = sortedArray.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    return sortedArray;
  };

  const handleSort = () => {
    const sorted = bubbleSort(array);
    setArray(sorted);
  };

  return (
    <div>
      <h3>Bubble Sort</h3>
      <p>Array: {array.join(', ')}</p>
      <button onClick={handleSort}>Sort Array</button>
    </div>
  );
}

export default BubbleSort;
