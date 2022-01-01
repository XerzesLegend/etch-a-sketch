let setSize = 16; //Dimension for the squares in the grid, in this case it is 16x16
let size = 600; //Fixed dimension of the grid (600x600)
n = (setSize)**2; 
let divs = [];

//Setting the CSS variables
let r = document.querySelector(':root');
let sizeInPx = String(size) + "px";
let mainDim = r.style.setProperty('--dim', sizeInPx);
let dim = (size/setSize);
dim = String(dim) + "px";
let divDim = r.style.setProperty('--divDim', dim);

controlsContainer = document.querySelector('#controls');
container = document.querySelector('#main');

//For loop for adding all the divs
for(i=0; i<n; i++){
    let div = document.createElement('div');
    div.addEventListener('mouseover', function(e){
        div.classList.add('squareHover');
    });
    container.append(div);
    divs.push(div);
}

//Create button elements

const blackButton = document.createElement('button');
const rainbowButton = document.createElement('button');
const clearButton = document.createElement('button');

//Initialize selection

blackButton.classList.add('btnActive');
color = "black";
let globalColor = r.style.setProperty('--color', color);

//Black button

blackButton.addEventListener('click', function(e){
    this.classList.add('btnActive');
    rainbowButton.classList.remove('btnActive');
    globalColor = r.style.setProperty('--color', "black");
});
blackButton.textContent = "Black mode";
////////////////////////////////////////////////////////////

//Rainbow button

rainbowButton.addEventListener('click', function(e){
    this.classList.add('btnActive');
    blackButton.classList.remove('btnActive');
    globalColor = r.style.setProperty('--color', randomRGB());
});
rainbowButton.textContent = "Rainbow mode";
////////////////////////////////////////////////////////////

//Clear button

clearButton.addEventListener('click', function(e){
    createSquares(askForSize(divDim, size), container);
    divs.forEach(div => div.classList.remove('squareHover'))
});
clearButton.textContent = "Clear";
////////////////////////////////////////////////////////////




controlsContainer.append(blackButton);
controlsContainer.append(rainbowButton);
controlsContainer.append(clearButton);





//Functions

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createSquares(size, container){
    size = size**2
    removeAllChildNodes(container);

    for(i=0; i<size; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(e){
            div.classList.add('squareHover');
        });
        container.append(div);
        divs.push(div);
    }
    return divs
}

function askForSize(divDim, size){
    let answer = prompt("Select a size between 1 and 100");
    if(answer>100){
        answer = 100;
    }
    else if(answer<1){
        answer = 1;
    }
    let ans = answer;
    answer = (size/answer);
    answer = String(answer) + "px";
    divDim = r.style.setProperty('--divDim', answer);
    return ans
}


function randomRGB(){
    let r = Math.round, k = Math.random, s = 255;
    rgbColor = "rgb(" + String(r(k()*s)) + ", " + String(r(k()*s)) + ", " + String(r(k()*s)) + ')';
    return rgbColor
}
