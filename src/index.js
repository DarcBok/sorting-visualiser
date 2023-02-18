import './style.css';
import bubbleSort from './algorithms/bubble.js';
import selectionSort from './algorithms/selection.js';
import insertionSort from './algorithms/insertion.js';
import mergeSort from './algorithms/mergesort.js'
import quickSort from './algorithms/quicksort.js';
import heapSort from './algorithms/heapsort.js';

const MIN_HEIGHT = 75;
const MAX_HEIGHT = 5;
const INITIAL_SIZE = 64;
const INITIAL_DELAY = 10;

let arr = []; // store heights of bars
let size = INITIAL_SIZE;
let delay = INITIAL_DELAY;

const arrayContainer = document.querySelector('#array-container');

const randHeight = () => Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));

function computeWidth() {
    return 75/size;
}

const sizeSlider = document.querySelector('#size-slider');
sizeSlider.addEventListener('input', (e) => {
    size = e.srcElement.value;
    randomise();
});

const speedSlider = document.querySelector('#speed-slider');
speedSlider.addEventListener('input', (e) => {
    delay = 1000 / (e.srcElement.value * e.srcElement.value);
});

// Randomises array and displays on page
function randomise() {
    arr = [];
    document.querySelector('#array-container').innerHTML = "";
    for (let i = 0; i < size; i++) {
        let h = randHeight();
        arr.push(h);
        const element = document.createElement('div');
        element.classList.add('array-elem');
        element.dataset.index = i
        element.style['height'] = `${h}vh`;
        element.style['width'] = `${computeWidth()}vw`;
        arrayContainer.appendChild(element);
    }
}
randomise();

// a and b are indices of arr and data-index
// swap places in arr and swap places on DOM
function swap(a, b, h1, h2) {
    //let tmp = arr[a];
    //arr[a] = arr[b]
    //arr[b] = tmp;
    arr[a] = h1;
    arr[b] = h2;

    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);

    item1.style['height'] = `${h1}vh`
    item2.style['height'] = `${h2}vh`;
}

function chooseSort(choice) {
    if (choice === 'bubble') return bubbleSort(size, arr);
    if (choice === 'selection') return selectionSort(size, arr);
    if (choice === 'insertion') return insertionSort(size, arr);
    if (choice === 'mergesort') return mergeSort(size, arr);
    if (choice === 'quicksort') return quickSort(size, arr);
    if (choice === 'heapsort') return heapSort(size, arr);
}

async function sort(event) {
    const process = chooseSort(event.srcElement.id);
    for (const [a, b, h1, h2, action] of process) {
        if (action) {
            await sleep(delay);
            swap(a, b, h1, h2);
        }
    }
}


const sortButtons = document.querySelector('#sort-selection').querySelectorAll('.sort-button');
sortButtons.forEach(button => button.addEventListener('click', sort));


// distance magic

//sortButtons.forEach(button => {
//    button.style.width = `${(parseInt(button.offsetWidth) + 20)}px`;
//    let rect = button.getBoundingClientRect();
//    console.log(rect.left, rect.right);
//});
//const distances = []//

//const buttons = Array.from(sortButtons);
//const dot = document.querySelector('#dot');//

//// initial transform
//distances.push((buttons[0].getBoundingClientRect().right - buttons[0].getBoundingClientRect().left) / 2);//

//// distances between each button
//buttons.slice(1).reduce((prev, curr) => {
//    let rect = curr.getBoundingClientRect().left;
//    distances.push(rect - prev);
//    return rect;
//}, dot.getBoundingClientRect().left);//
//

//for (let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener('mouseenter', (e) => {
//        dot.style.cssText += `transform: translateX(${distances[i]})`;
//    });
//}





const randomButton = document.querySelector('#randomise');
randomButton.addEventListener('click', randomise);

