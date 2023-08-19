# Sorting Visualizer Project Guide

Welcome to the comprehensive step-by-step guide for creating a sorting visualizer project using HTML, CSS, and JavaScript. This guide is tailored to beginners in web development. By following these instructions, you'll create a dynamic web application that visually demonstrates various sorting algorithms in action.

## Table of Contents

1. [Introduction](#introduction)
   - [Why Sorting Algorithms?](#why-sorting-algorithms?)
   - [What You'll Learn](#what-you'll-learn)
2. [Prerequisites](#prerequisites)
   - [Basic Understanding of HTML, CSS, and JavaScript](#basic-understanding-of-html-css-and-javascript)
   - [Text Editor or Integrated Development Environment (IDE)](#text-editor-or-integrated-development-environment)
3. [Project Setup](#project-setup)
   - [Creating the Project Directory](#creating-the-project-directory)
   - [Creating HTML, CSS, and JavaScript Files](#creating-html-css-and-javascript-files)
4. [HTML Structure](#html-structure)
   - [Setting Up the Basic HTML Structure](#setting-up-the-basic-html-structure)
   - [Adding Navigation Buttons](#adding-navigation-buttons)
   - [Implementing Sliders](#implementing-sliders)
5. [Styling with CSS](#styling-with-css)
   - [Basic Styling](#basic-styling)
   - [Styling Navigation Buttons](#styling-navigation-buttons)
   - [Styling Bars Container](#styling-bars-container)
6. [Implementing Sorting Algorithms](#implementing-sorting-algorithms)
   - [Bubble Sort](#bubble-sort)
   - [Selection Sort](#selection-sort)
   - [Insertion Sort](#insertion-sort)
   - [Quick Sort](#quick-sort)
   - [Merge Sort](#merge-sort)
7. [Conclusion](#conclusion)

## 1. Introduction <a name="introduction"></a>

Welcome to the Sorting Visualizer Project! In this step-by-step guide, we will walk you through the process of creating a dynamic web application 
that visualizes various sorting algorithms. By the end of this project, you'll have developed a sorting visualizer that not 
only demonstrates the power of sorting algorithms but also enhances your skills in web development and algorithm visualization.

### 1.1 Why Sorting Algorithms? <a name="why-sorting-algorithms?"></a>

Sorting algorithms play a crucial role in computer science and programming. 
They are essential tools for organizing data efficiently, which is a fundamental task in various applications, from databases to user interfaces. 
Understanding how these algorithms work and visualizing their execution helps us grasp their inner workings and appreciate their efficiency.

### 1.2 What You'll Learn <a name="what-you'll-learn"></a>

This project serves as a comprehensive learning experience, allowing you to:

***Apply HTML, CSS, and JavaScript Skills:*** You'll get hands-on practice with web development technologies. 
This project involves creating the user interface, implementing algorithms, and adding interactivity to your web application.

***Understand Sorting Algorithms:*** You'll gain a deeper understanding of popular sorting algorithms such as Bubble Sort, Selection Sort, Insertion Sort, 
Quick Sort, and Merge Sort. Through visualization, you'll witness how these algorithms rearrange elements to achieve the desired sorted order.

***Enhance Problem-Solving Skills:*** Implementing and visualizing algorithms improve your problem-solving skills. 
You'll learn to think critically about optimizing processes and enhancing the user experience.

<hr>

## 2. Prerequisites <a name="prerequisites"></a>

Before you embark on this sorting visualizer project, it's important to have a few prerequisites in place. 
These prerequisites ensure that you have the foundational knowledge and tools needed to successfully complete the project.

### 2.1 Basic Understanding of HTML, CSS, and JavaScript <a name="basic-understanding-of-html-css-and-javascript"></a>
Having a basic understanding of HTML, CSS, and JavaScript is crucial for this project. 
If you're new to web development, here's a brief overview of each technology:

***HTML (HyperText Markup Language):*** HTML is the backbone of any web page. It's used to structure the content of a webpage, defining headings, 
paragraphs, images, links, and more.

***CSS (Cascading Style Sheets):*** CSS is used to style the HTML content, controlling the layout, colors, fonts, and overall visual appearance of a webpage.

***JavaScript:*** JavaScript is a programming language that adds interactivity and functionality to web pages. 
It enables you to create dynamic elements, handle user interactions, and perform complex operations.

While you don't need to be an expert, having a basic understanding of these three technologies will make it easier for you to follow along and 
implement the various components of the sorting visualizer.

### 2.2 Text Editor or Integrated Development Environment (IDE) <a name="text-editor-or-integrated-development-environment"></a>
You'll need a text editor or an Integrated Development Environment (IDE) to write and edit your code. Here's a bit more about each:

***Text Editor:*** A text editor is a simple tool for writing code. It provides a clean interface for writing and editing code files. 
Popular text editors include Visual Studio Code, Sublime Text, and Atom.

***IDE (Integrated Development Environment):*** An IDE is a more comprehensive software suite that includes not only a text editor but also features 
like code debugging, version control integration, and more. Examples of popular IDEs include Visual Studio, JetBrains IntelliJ IDEA, and Eclipse.

Having a text editor or IDE of your choice will make the coding process smoother and more efficient. 
It's important to use a tool that you're comfortable with and that provides features that suit your coding style and preferences.

With these prerequisites in place, you'll be well-prepared to embark on the journey of creating your own sorting visualizer web application. 
If you're unsure about any of these prerequisites, don't worry! There are plenty of resources available online to help you learn the basics of HTML, CSS, 
and JavaScript.

<hr>

## 3. Project Setup <a name="project-setup"></a>

### 3.1 Creating the Project Directory <a name="creating-the-project-directory"></a>

Start by creating a new project directory on your computer. Name it something like "SortingVisualizer."

### 3.2 Creating HTML, CSS, and JavaScript Files <a name="creating-html-css-and-javascript-files"></a>

Inside your project directory, create the following files:

- `index.html`: This file will contain the structure of your web page.
- `sorting.css`: This file will handle the styling of your web page.
- `sorting.js`: This file will handle the core functionality of the sorting visualizer.
- `bubble.js`, `selection.js`, `insertion.js`, `quick.js`, `merge.js`: These files will implement the respective sorting algorithms.

<hr>

## 4. HTML Structure <a name="html-structure"></a>

### 4.1 Setting Up the Basic HTML Structure <a name="setting-up-the-basic-html-structure"></a>

Open the `index.html` file and add the following HTML code to set up the basic structure of your web page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Head content here -->
  </head>
  <body class="p-3 mb-2 bg-dark text-white">
    <header>
      <h1 align="center">Sorting Visualizer</h1>
      <!-- Navigation buttons and sliders here -->
    </header>
    <div id="bars" class="flex-container"></div>
    <!-- JavaScript imports here -->
  </body>
</html>
```

### 4.2 Adding Navigation Buttons <a name="adding-navigation-buttons"></a>

In the index.html file, add navigation buttons to control sorting algorithms and actions:

```html
<nav>
  <div class="row">
    <!-- New Array button -->
    <button type="button" class="btn-outline-success btn-dark custom-button newArray">
      New Array
    </button>
    <!-- Sorting algorithm buttons -->
    <button type="button" class="btn-outline-primary btn-dark custom-button bubbleSort">
      Bubble Sort
    </button>
    <button type="button" class="btn-outline-primary btn-dark custom-button selectionSort">
      Selection Sort
    </button>
    <button type="button" class="btn-outline-primary btn-dark custom-button insertionSort">
      Insertion Sort
    </button>
    <button type="button" class="btn-outline-primary btn-dark custom-button quickSort">
      Quick Sort
    </button>
    <button type="button" class="btn-outline-primary btn-dark custom-button mergeSort">
      Merge Sort
    </button>
  </div>
</nav>
```

### 4.3 Implementing Sliders <a name="implementing-sliders"></a>

Add sliders to adjust array size and sorting speed:

```html
<div class="col" id="input">
  <span id="size">
    Size
    <input id="arr_sz" type="range" min="5" max="100" step="1" value="60" />
  </span>
  <span id="speed">
    Speed
    <input
      id="speed_input"
      type="range"
      min="20"
      max="300"
      stepDown="10"
      value="60"
    />
  </span>
</div>
```

<hr>

## 5. Styling with CSS <a name="styling-with-css"></a>

In this section, we will focus on styling the different components of our sorting visualizer to create an appealing user interface.

### 5.1 Basic Styling <a name="basic-styling"></a>

Open the sorting.css file and add the following code to apply some basic styling to your web page:

```css
/* Reset some default styles */
body, h1, button {
  margin: 0;
  padding: 0;
  border: 0;
}

/* Set a background color and font for the entire page */
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  padding: 0 20px 30px 0;
  line-height: 1.4;
  background-color: rgb(15, 44, 75);
}

/* Add spacing to the header */
header {
  margin-bottom: 20px;
}

/* Style header text */
h1 {
  text-align: center;
  margin-bottom: 10px;
}

/* Style navigation buttons */
.custom-button {
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}
```

### 5.2 Styling Navigation Buttons <a name="styling-navigation-buttons"></a>

Now, let's add some styles to the navigation buttons for better visibility:

```css
/* Style New Array button */
.newArray {
  background-color: #28a745;
  color: white;
}

/* Style sorting algorithm buttons */
.custom-button {
  background-color: #343a40;
  color: white;
}

/* Change color on hover */
.custom-button:hover {
  background-color: #495057;
}
```

### 5.3 Styling Bars Container <a name="styling-bars-container"></a>
 
Finally, let's style the container that holds the bars representing the array elements:

```css
/* Style the container for bars */
.flex-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 500px;
  justify-content: center;
  transition: 2s all ease;
}

/* Style individual bars */
.flex-item {
  background: cyan;
  border: 1pt solid black;
  width: 10px;
  transition: 0.1s all ease;
}

/* Style the sorted bars */
.flex-item.green {
  background: green;
}

/* Style the bars during sorting */
.flex-item.blue {
  background: blue;
}

/* Style the pivot element during sorting */
.flex-item.red {
  background: red;
}

/* Style the elements being compared during sorting */
.flex-item.yellow {
  background: yellow;
}

/* Style elements that are temporarily highlighted */
.flex-item.orange {
  background: orange;
}

/* Style elements that are not being compared */
.flex-item.pink {
  background: pink;
}
```

With these CSS styles, your sorting visualizer will have a more polished and appealing look. 
The colors and transitions applied to the elements will help users better understand the sorting process as it unfolds visually.

Now you've successfully styled your sorting visualizer project! 
You can continue enhancing the styling, adding more animations, or even implementing additional features to make the user experience even more engaging.

Feel free to move on to the next sections to implement the sorting algorithms and conclude your project.

<hr>

## 6. Implementing Sorting Algorithms <a name="implementing-sorting-algorithms"></a>

In this section, you'll learn how to implement various sorting algorithms to visualize the process of sorting an array of numbers. We'll cover Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort.

### 6.1 Bubble Sort <a name="bubble-sort"></a>

1. **Understanding the Algorithm:**
   - Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order.
   - The algorithm continues iterating through the list until no more swaps are needed, indicating that the list is sorted.

2. **Implementing Bubble Sort:**
   - Create a new JavaScript file named `bubble.js`.
   - In this file, implement the Bubble Sort algorithm using asynchronous JavaScript to visualize the sorting process.

    ```javascript
    async function bubble() {
      console.log("In bubbe()");
      const ele = document.querySelectorAll(".bar");
      for (let i = 0; i < ele.length - 1; i++) {
        console.log("In ith loop");
        for (let j = 0; j < ele.length - i - 1; j++) {
          console.log("In jth loop");
          ele[j].style.background = "blue";
          ele[j + 1].style.background = "blue";
          if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
            console.log("In if condition");
            await waitforme(delay);
            swap(ele[j], ele[j + 1]);
          }
          ele[j].style.background = "cyan";
          ele[j + 1].style.background = "cyan";
        }
        ele[ele.length - 1 - i].style.background = "green";
      }
      ele[0].style.background = "green";
    }
    
    const bubSortbtn = document.querySelector(".bubbleSort");
    bubSortbtn.addEventListener("click", async function () {
      disableSortingBtn();
      disableSizeSlider();
      disableNewArrayBtn();
      await bubble();
      enableSortingBtn();
      enableSizeSlider();
      enableNewArrayBtn();
    });
    ```

  1. Connecting to the UI:
    - In the index.html file, add a button with the class bubbleSort to initiate the Bubble Sort process.
    - Attach an event listener to the button to disable other buttons during sorting, call the bubble function, and re-enable buttons after sorting.

### 6.2 Selection Sort <a name="selection-sort"></a>

1. Understanding the Algorithm:

  - Selection Sort divides the input list into two parts: the sorted sublist and the unsorted sublist.
  - The algorithm repeatedly selects the smallest element from the unsorted sublist and swaps it with the first element in the unsorted sublist.
  - 
2. Implementing Selection Sort:

  - Create a new JavaScript file named selection.js.
  - In this file, implement the Selection Sort algorithm using asynchronous JavaScript for visualization.

    ```javascript
    async function selection(){
        console.log('In selection()');
        const ele = document.querySelectorAll(".bar");
        for(let i = 0; i < ele.length; i++){
            console.log('In ith loop');
            let min_index = i;
            // Change color of the position to swap with the next min
            ele[i].style.background = 'blue';
            for(let j = i+1; j < ele.length; j++){
                console.log('In jth loop');
                // Change color for the current comparision (in consideration for min_index)
                ele[j].style.background = 'red';
    
                await waitforme(delay);
                if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                    console.log('In if condition height comparision');
                    if(min_index !== i){
                        // new min_index is found so change prev min_index color back to normal
                        ele[min_index].style.background = 'cyan';
                    }
                    min_index = j;
                } 
                else{
                    // if the currnent comparision is more than min_index change is back to normal
                    ele[j].style.background = 'cyan';
                }   
            }
            await waitforme(delay);
            swap(ele[min_index], ele[i]);
            // change the min element index back to normal as it is swapped 
            ele[min_index].style.background = 'cyan';
            // change the sorted elements color to green
            ele[i].style.background = 'green';
        }
    }
    
    const selectionSortbtn = document.querySelector(".selectionSort");
    selectionSortbtn.addEventListener('click', async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await selection();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
    ```

3. Connecting to the UI:

  - Similar to the previous sorting algorithms, add a button with the class selectionSort to trigger the Selection Sort process.
  - Attach an event listener to the button to disable other buttons, call the selection function, and re-enable buttons after sorting.
    

### 6.3 Insertion Sort <a name="insertion-sort"></a>

1. Understanding the Algorithm:

  - Insertion Sort builds the final sorted array one item at a time.
  - The algorithm takes each element from the input and inserts it into its correct position in the sorted array.

2. Implementing Insertion Sort:

  - Create a new JavaScript file named insertion.js.
  - In this file, implement the Insertion Sort algorithm using asynchronous JavaScript for visualization.

    ```javascript
    async function insertion(){
        console.log('In insertion()');
        const ele = document.querySelectorAll(".bar");
        // color
        ele[0].style.background = 'green';
        for(let i = 1; i < ele.length; i++){
            console.log('In ith loop');
            let j = i - 1;
            let key = ele[i].style.height;
            // color
            ele[i].style.background = 'blue';
    
            await waitforme(delay);
    
            while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
                console.log('In while loop');
                // color
                ele[j].style.background = 'blue';
                ele[j + 1].style.height = ele[j].style.height;
                j--;
    
                await waitforme(delay);
    
                // color
                for(let k = i; k >= 0; k--){
                    ele[k].style.background = 'green';
                }
            }
            ele[j + 1].style.height = key;
            // color
            ele[i].style.background = 'green';
        }
    }
    
    const inSortbtn = document.querySelector(".insertionSort");
    inSortbtn.addEventListener('click', async function(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await insertion();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
    ```

3. Connecting to the UI:

  - Add a button with the class insertionSort to trigger the Insertion Sort process.
  - Attach an event listener to the button to disable other buttons, call the insertion function, and re-enable buttons after sorting.


### 6.4 Quick Sort <a name="quick-sort"></a>

1. Understanding the Algorithm:

  - Quick Sort is a divide-and-conquer algorithm that selects a "pivot" element and partitions the array into two subarrays.
  - The algorithm recursively sorts the subarrays and combines them to produce the final sorted array.

2. Implementing Quick Sort:

  - Create a new JavaScript file named quick.js.
  - In this file, implement the Quick Sort algorithm using asynchronous JavaScript for visualization.

```javascript
async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
```

3. Connecting to the UI:

  - Add a button with the class quickSort to initiate the Quick Sort process.
  - Attach an event listener to the button to disable other buttons, call the quickSort function, and re-enable buttons after sorting.

### 6.5 Merge Sort <a name="merge-sort"></a>

1. Understanding the Algorithm:

  - Merge Sort is another divide-and-conquer algorithm that divides the input array into two halves, sorts them, and then merges the sorted halves.

2. Implementing Merge Sort:

  - Create a new JavaScript file named merge.js.
  - In this file, implement the Merge Sort algorithm using asynchronous JavaScript for visualization.

```javascript
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
```

3. Connecting to the UI:

  - Add a button with the class mergeSort to trigger the Merge Sort process.
  - Attach an event listener to the button to disable other buttons, call the mergeSort function, and re-enable buttons after sorting.

<hr>

## 7. Conclusion <a name="conclusion"></a>

Congratulations! You've successfully implemented various sorting algorithms and created a sorting visualizer that showcases the process of sorting an array 
in real time. This project not only provides valuable insights into algorithms but also enhances your web development skills.

By following this comprehensive guide, you've learned how to set up the project, style the user interface, 
and implement sorting algorithms using JavaScript. Feel free to explore further by adding more sorting algorithms, customizing animations, 
or implementing additional features to make the project even more impressive.

As you continue your journey in web development, remember that understanding algorithms and their visualization can greatly 
improve your problem-solving skills and enhance your ability to build efficient and effective web applications.

Happy coding!
