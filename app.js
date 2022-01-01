let setSize = 16;
let size = 600;

n = (setSize)**2;
divs = [];
container = document.querySelector('#main');
for(i=0; i<n; i++){
    div = document.createElement('div');
    container.append(div);
    divs.push(div);
}


let r = document.querySelector(':root');
size = String(size) + "px";
let mainDim = r.style.setProperty('--dim', size);
let dim = (600/setSize);
dim = String(dim) + "px";
let divDim = r.style.setProperty('--divDim', dim);