class GlobalVariables {
    static renderEmpty = true;
    static marginX = 0;
    static marginY = 0;
    static neuronRadius = 0.02;
    static mainNetwork;
}

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
        this.layerCount = Math.floor(Math.random()*7+2);
        this.lossFunction = (actual, theoretical) => {return 0.5 * (actual - theoretical) * (actual - theoretical)};
        this.layers=[];
        for(var i = 0; i < this.layerCount; i++) {
            this.layers.push(new Layer());
        }
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
    
    constructor() {
        this.size = Math.floor(Math.random()*5+2);
        this.inputs = [0, 0, 0];
        this.outputs = [0, 0, 0];
        this.activationFunctions = [(input) => {return 1 / (1 + Math.exp(-input))}];
        this.differentationFunctions = [(output) => {return output * (1 - output)}];
        this.positions = [];
        this.axonWeights = [];
        for(var i = 0; i < 15; i++) {
            let array = [];
            for(var j = 0; j < 15; j++) {
                array.push(Math.random()*3-1.5);
            }
            this.axonWeights.push(array);
        }
    }
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
    x1 = canvas.width / 2 - radius*1.5;
    x2 = canvas.width / 2 + radius*1.5;
    y = height / 2;
    radius = document.getElementById("NeuralNetCanvas").width / 20;
    if(GlobalVariables.renderEmpty) {
        if((canvasX - x1) * (canvasX - x1) + (canvasY - y) * (canvasY - y) < radius*radius) {
            canvas.style.cursor = 'pointer';
        }
        else {
            canvas.style.cursor = 'initial';
        }
    }
}

function mouseClick(e) {
    canvas = document.getElementById("NeuralNetCanvas");
    rect = document.getElementById("NeuralNetCanvas").getBoundingClientRect();
    canvasX = e.clientX - window.scrollX - rect.x;
    canvasY = e.clientY - window.scrollY - rect.y;
    x1 = canvas.width / 2 - radius*1.5;
    x2 = canvas.width / 2 + radius*1.5;
    y = height / 2;
    radius = document.getElementById("NeuralNetCanvas").width / 20;
    if((canvasX - x1) * (canvasX - x1) + (canvasY - y) * (canvasY - y) < radius*radius) {
        GlobalVariables.renderEmpty = false;
        canvas.style.cursor = 'initial';
        GlobalVariables.mainNetwork = new Network();
    }
    else {
        //bruh
    }
}

// ----------------------------------------------------------Rendering
function update() {
    //Params and setup
    canvas = document.getElementById("NeuralNetCanvas");
    context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Call rendering function
    if(GlobalVariables.renderEmpty) {
        renderEmptyNetwork();
    }
    else {
        renderNetwork();
    }
    window.requestAnimationFrame(update);
}

function renderNetwork() {
    canvas = document.getElementById("NeuralNetCanvas");
    width = canvas.width;
    height = canvas.height;

    radius = GlobalVariables.neuronRadius*width;
    marginX = GlobalVariables.marginX*width;
    marginY = GlobalVariables.marginY*height;
    incrementX = (width - marginX)/(GlobalVariables.mainNetwork.layerCount+1);
    
    context.strokeStyle = '#6978ff';
    for(var i = 0; i < GlobalVariables.mainNetwork.layerCount; i++) {
        incrementY = (height - marginY)/(GlobalVariables.mainNetwork.layers[i].size+1);
        for(var j = 0; j < GlobalVariables.mainNetwork.layers[i].size; j++) {
            context.beginPath();
            context.arc(marginX/2 + incrementX*(i+1), marginY/2 + incrementY*(j+1), radius, 0, Math.PI*2);
            context.stroke();
        }
    }
    for(var i = 0; i < GlobalVariables.mainNetwork.layerCount-1; i++) {
        incrementY = (height - marginY)/(GlobalVariables.mainNetwork.layers[i].size+1);
        for(var j = 0; j < GlobalVariables.mainNetwork.layers[i].size; j++) {
            for(var k = 0; k < GlobalVariables.mainNetwork.layers[i+1].size; k++) {
                var neuronX1 = marginX/2 + incrementX*(i+1);
                var neuronY1 = marginY/2 + incrementY*(j+1);
                var neuronX2 = marginX/2 + incrementX*(i+2);
                var neuronY2 = marginY/2 + ((height - marginY)/(GlobalVariables.mainNetwork.layers[i+1].size+1))*(k+1);
                //-=------=-=-=---==-=-=-=-=-=-=-=-=-=-=-=-=--=Calculate color according to axon weight
                //#ffb269 negative, #6978ff positive
                
                if(GlobalVariables.mainNetwork.layers[i].axonWeights[j][k] > 0) {
                    context.strokeStyle = '#6978ff';
                }
                else if (GlobalVariables.mainNetwork.layers[i].axonWeights[j][k] < 0) {
                    context.strokeStyle = '#ffb269';
                }
                else {
                    context.strokeStyle = '#ffffff';
                }
                context.beginPath();
                context.moveTo(neuronX1+radius, neuronY1);
                context.bezierCurveTo(neuronX2 - radius*4, neuronY1, neuronX1 + radius*4, neuronY2, neuronX2-radius, neuronY2);
                context.stroke();
            }
        }
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

    //Draw axon
    context.strokeStyle = '#6978ff';
    context.beginPath();
    context.moveTo(x1 + radius*1.1, y);
    context.lineTo(x2 - radius*1.1, y);
    context.stroke();

    //Control demo animation--crude method
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