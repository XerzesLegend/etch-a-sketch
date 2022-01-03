let setSize = 1; //Dimension for the squares in the grid, in this case it is 1x1
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



//Create button elements

const blackButton = document.createElement('button');
const rainbowButton = document.createElement('button');
const clearButton = document.createElement('button');

//Initialize selection

blackButton.style.cssText = "background-color: black; color: white;"
let cond = true;

//Black button

blackButton.addEventListener('click', function(e){
    this.style.cssText = "background-color: black; color: white;";
    this.classList.add('btn-trans');
    rainbowButton.style.cssText = "background-color: white; color: black;";
    cond = true;
});
blackButton.textContent = "Black mode";
////////////////////////////////////////////////////////////

//Rainbow button

rainbowButton.addEventListener('click', function(e){
    this.style.cssText = "background-color: black; color: white;";
    this.classList.add('btn-trans');
    blackButton.style.cssText = "background-color: white; color: black;";
    cond = false; 
});
rainbowButton.textContent = "Rainbow mode";
////////////////////////////////////////////////////////////

//Clear button

clearButton.addEventListener('click', function(e){
    this.style.cssText = "background-color: white; color: black;";
    createSquares(askForSize(divDim, size), container);
    divs.forEach(div => div.style.removeProperty('background-color'));
});
clearButton.textContent = "Clear";
////////////////////////////////////////////////////////////
btns = [blackButton, rainbowButton];
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));


controlsContainer.append(blackButton);
controlsContainer.append(rainbowButton);
controlsContainer.append(clearButton);
createSquares(askForSize(divDim, size), container);




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
            if(cond){
                div.style.backgroundColor = "black";
            }
            else{
                let color =  randomRGB();
                div.style.backgroundColor = color;
            }
            
        });
        container.append(div);
        divs.push(div);
    }
    return divs
}

function askForSize(divDim, size){
    let answer = prompt("How big do you want your canvas to be? (Select a size between 1 and 100)");
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

function removeTransition(e){
    if(e.propertyName !== "scale") return

    this.classList.remove('btn-trans');
}