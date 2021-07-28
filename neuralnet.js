
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
    /*canvas = document.getElementById("NeuralNetCanvas");
    if(e.clientX > 500) {
        canvas.style.cursor = 'pointer';
    }*/
}

// ----------------------------------------------------------Rendering
function update() {

    

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
    context.strokeStyle = '#5E6CE6';
    context.lineWidth = 1;
    // Draw dotted circles
    for(angle = 0; angle < Math.PI*2; angle += 0.175) {
        context.beginPath();
        context.arc(x1, y, radius, angle, angle+0.1);
        context.closePath();
        context.stroke();
    }
    for(angle = 0; angle < Math.PI*2; angle += 0.175) {
        context.beginPath();
        context.arc(x2, y, radius, angle, angle+0.1);
        context.closePath();
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
}