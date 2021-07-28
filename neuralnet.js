
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

// ----------------------------------------------------------Rendering
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
    console.log("done");
    canvas = document.getElementById("NeuralNetCanvas");
    width = canvas.width;
    height = canvas.height;
    console.log(width);
    context = canvas.getContext('2d');
    radius = width / 20;
    x1 = width / 2 - radius*1.5;
    x2 = width / 2 + radius*1.5;
    y = height / 2;
    for(angle = 0; angle < Math.PI*2; angle += 0.2) {
        context.beginPath();
        context.arc(x1, y,radius, angle, angle+0.1);
        context.closePath();
        context.fill();
    }
    for(angle = 0; angle < Math.PI*2; angle++) {
        context.beginPath();
        context.arc(x2, y,radius, angle, angle+0.1);
        context.closePath();
        context.fill();
    }
    
}