async function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  await mergeSort(arr, left, mid);
  await mergeSort(arr, mid + 1, right);

  await merge(arr, left, mid, right);
}

async function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr = new Array(n1);
  const rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) {
      leftArr[i] = arr[left + i];
  }

  for (let i = 0; i < n2; i++) {
      rightArr[i] = arr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
      document.querySelectorAll(".bar")[left + i].style.background = 'blue';
      document.querySelectorAll(".bar")[mid + 1 + j].style.background = 'blue';
      await waitforme(delay);

      if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
      } else {
          arr[k] = rightArr[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
  }

  for (let x = left; x <= right; x++) {
      document.querySelectorAll(".bar")[x].style.background = 'green';
  }
  await waitforme(delay);
}

const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click', async function () {
  const bars = document.querySelectorAll(".bar");
  const arr = [];
  for (let i = 0; i < bars.length; i++) {
      arr.push(parseInt(bars[i].style.height));
  }
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await mergeSort(arr, 0, arr.length - 1);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});
