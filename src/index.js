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

let arr = []; // container of bar heights
let choice = ""; // choice of sort
let size = INITIAL_SIZE;
let delay = INITIAL_DELAY;
const positions = {
    bubble: 8.33,
    selection: 25,
    insertion: 41.66,
    quicksort: 58.33,
    mergesort: 75,
    heapsort: 91.66
}; // positions of dots

const arrayContainer = document.querySelector('#array-container');
const dot = document.querySelector('#dot');

const randHeight = () => Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));

function computeWidth() {
    return 100/size;
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
        element.style['width'] = `${computeWidth()}%`;
        arrayContainer.appendChild(element);
    }
}
randomise();

// a and b are indices of arr and data-index
// swap places in arr and swap places on DOM
function swap(a, b, h1, h2) {
    arr[a] = h1;
    arr[b] = h2;

    const item1 = document.querySelector(`[data-index='${a}']`);
    const item2 = document.querySelector(`[data-index='${b}']`);

    item1.style['height'] = `${h1}vh`
    item2.style['height'] = `${h2}vh`;
}

function changeChoice(e) {
    const chosenButton = e.srcElement;
    choice = chosenButton.id;

    // remove previous active classes
    sortButtons.forEach(button => button.classList.remove('active'));

    // activate dot and position
    chosenButton.classList.add('active');
    dot.classList.add('active');
    dot.style.left = `${positions[choice]}%`;
}

function chooseSort() {
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
sortButtons.forEach(button => button.addEventListener('click', changeChoice));

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', sort);


const randomButton = document.querySelector('#randomise');
randomButton.addEventListener('click', randomise);



// TODO
// implement swapping visualisation
// flourish after a sort ends?
// implement swap/pause
// clean up style, refactor
// build HTML?
// rework webpack to build