let setSize = 16;
const size = 600;

n = (setSize)**2;
divs = [];
container = document.querySelector('#main');
for(i=0; i<n; i++){
    div = document.createElement('div');
    container.append(div);
    divs.push(div);
}


let r = document.querySelector(':root');
let mainDim = r.style.setProperty('--dim', size);
let dim = (600/setSize)**(0.5);
let divDim = r.style.setProperty('--divDim', dim);