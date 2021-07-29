
class Network {
    layerCount;
    layers;
    lossFunction;

    forwardPropagate() {
        if(this.layerCount < 2) {
            alert("Please create an input and output");
            return;
        }
        for(var i = 0; i < this.layerCount-1; i++) {
            //send outputs through axons to i+1 inputs
            //activate i+1 to send values to i+1 outputs
            //advance
        }
    }
    backwardPropogate() {

    }
    constructor() {
        this.layerCount = 0;
    }
}

function multiplyMatrices(matrix1, matrix2) { // m x n times n x p results m x p
    result = [];
    for(var i = 0; i < matrix1.length; i++) {
        for(var j = 0; j < matrix2[0].length; j++) {
            resultRow = [];
            
        }
    }
}

class Layer {
    size;
    inputs;
    outputs;
    activationFunctions;
    differentationFunctions;
    errorOutputDifferentials;
    outputInputDifferentials;
    positions;
    axonWeights; // matrix - row connects an output to each input in the next layer
    
    activate() {
        for(var i = 0; i < this.size; i++) {
            outputs[i] = activationFunctions[i](inputs[i]);
        }
    }
}

// ----------------------------------------------------------Input
function mouseMove(e) {
    canvas = document.getElementById("NeuralNetCanvas");
    /*if(e.clientX > 500) {
        canvas.style.cursor = 'pointer';
    }*/
    rect = document.getElementById("NeuralNetCanvas").getBoundingClientRect();
    canvasX = e.clientX - window.scrollX - rect.x;
    canvasY = e.clientY - window.scrollY - rect.y;
    x1 = width / 2 - radius*1.5;
    x2 = width / 2 + radius*1.5;
    y = height / 2;
    radius = document.getElementById("NeuralNetCanvas").width / 20;
    if((canvasX - x1) * (canvasX - x1) + (canvasY - y) * (canvasY - y) < radius*radius) {
        canvas.style.cursor = 'pointer';
    }
    else {
        canvas.style.cursor = 'initial';
    }
}

// ----------------------------------------------------------Rendering
function update() {
    canvas = document.getElementById("NeuralNetCanvas");
    context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderEmptyNetwork();
    console.log("h");
    window.requestAnimationFrame(update);
}

function renderNetwork() {
    canvas = document.getElementById("NeuralNetCanvas");
    width = canvas.width;
    height = canvas.height;
    if(true) {
        renderEmptyNetwork(canvas, width, height);
    }
    if(layerCount = 1) {

    }
    else {

    }
}

var progress = 0;

function renderEmptyNetwork() { //canvas, width, height) {
    // Get necessary data
    canvas = document.getElementById("NeuralNetCanvas");
    boundingRect = document.getElementById("NeuralNetContainer").getBoundingClientRect();
    canvas.width = boundingRect.width;
    canvas.height = boundingRect.height;
    width = canvas.width;
    height = canvas.height;
    // Compute data into required info
    context = canvas.getContext('2d');
    radius = width / 20;
    x1 = width / 2 - radius*1.5;
    x2 = width / 2 + radius*1.5;
    y = height / 2;
    context.strokeStyle = '#6978ff';
    context.lineWidth = 1;
    // Draw dotted circles

    context.beginPath();
    context.arc(x1, y, radius, 0, progress);
    context.stroke();

    for(angle = 0; angle < Math.PI*2; angle += 0.175) {
        if (angle + 0.1 > progress) {
        context.beginPath();
        context.arc(x1, y, radius, angle, angle+0.1);
        context.stroke();
        }
    }
    for(angle = 0; angle < Math.PI*2; angle += 0.175) {
        context.beginPath();
        context.arc(x2, y, radius, angle, angle+0.1);
        context.stroke();
    }
    // Draw plus sign over first circle
    context.beginPath();
    context.moveTo(x1, y-radius/2);
    context.lineTo(x1, y+radius/2);
    context.stroke();
    context.beginPath();
    context.moveTo(x1-radius/2, y);
    context.lineTo(x1+radius/2, y);
    context.stroke();

    context.strokeStyle = '#6978ff';

    context.beginPath();
    context.moveTo(x1 + radius*1.1, y);
    context.lineTo(x2 - radius*1.1, y);
    context.stroke();
    if(canvas.style.cursor == 'pointer') {
        if(progress <= Math.PI*2) progress += 0.2;
    }
    else {
        if(progress > 0.2) progress -= 0.2;
        else {
            progress = 0;
        }
    }
}