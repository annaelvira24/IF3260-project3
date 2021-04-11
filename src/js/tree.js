function createNode(transform, render, sibling, child){
    var node = {
        transform: transform,
        render: render,
        sibling: sibling,
        child: child
    };
    return node;
}

// parts id declaration
var torso1Id        = 0;
var head1Id         = 1;
var rightarm1Id     = 2;
var leftarm1Id      = 3;
var rightleg1Id     = 4;
var leftleg1Id      = 5;
var rightfoot1Id    = 6;
var leftfoot1Id     = 7;

var transTorso1 = 0.7;

var theta = [0, 0, 0, 0, 0, 0, 0, 0];
var translate = [0, 0, 0, 0, 0, 0, 0, 0];

var figure = [ ];
for (var i = 0; i < numNodes; i++) {
    figure[i] = createNode(null, null, null, null);
}

function initNodes(id){
    var m;
    switch(id){
        case torso1Id:
            m = translation(0,translate[id],0);
            m = multiply(m, yRotation(theta[id]));
            figure[id] = createNode(m, torso1, null, head1Id);
            break;
        
        case head1Id:
            m = translation(0, 0.31, 0);
            m = multiply(m, yRotation(theta[id]));
            figure[id] = createNode(m, head1, rightarm1Id, null);
            break;
        
        case rightarm1Id:
            m = translation(0,-0.15, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0.21,0.15,0));
            figure[id] = createNode(m, rightarm1, leftarm1Id, null);
            break;

        case leftarm1Id:
            m = translation(0,-0.15, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(-0.21,0.15,0));
            figure[id] = createNode(m, leftarm1, rightleg1Id, null);
            break;
        
        case rightleg1Id:
            m = translation(0,-0.12, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0.1,-0.18,0));
            figure[id] = createNode(m, rightleg1, leftleg1Id, rightfoot1Id);
            break;

        case leftleg1Id:
            m = translation(0,-0.12, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(-0.1,-0.18,0));
            figure[id] = createNode(m, leftleg1, null, leftfoot1Id);
            break;

        case rightfoot1Id:
            m = yRotation(theta[id]);
            m = multiply(m, translation(0,0,translate[id]));
            m = multiply(m, translation(0,-0.12,0));
            figure[id] = createNode(m, rightfoot1, null, null);
            break;

        case leftfoot1Id:
            m = yRotation(theta[id]);
            m = multiply(m, translation(0,0,translate[id]));
            m = multiply(m, translation(0,-0.12,0));
            figure[id] = createNode(m, leftfoot1, null, null);
            break;
    }
}


function torso1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
    }

}

function head1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24 + i*4, 4);
    }
}

function rightarm1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
 
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*2 + i*4, 4);
    }
}

function leftarm1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
    
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*3 + i*4, 4);
    }
}

function rightleg1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*4 + i*4, 4);
    }
}

function leftleg1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*5 + i*4, 4);
    }
}

function rightfoot1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*6 + i*4, 4);
    }
}

function leftfoot1(){
    instanceMatrix = multiply(model_matrix,translation(-transTorso1,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*7 + i*4, 4);
    }
}

function traverse(id, stack){
    if (id == null) return;
    stack.push(model_matrix);
    model_matrix = multiply(figure[id].transform, model_matrix);
    figure[id].render();
    if (figure[id].child != null) {
        traverse(figure[id].child, stack);
    }
    model_matrix = stack.pop();
    if (figure[id].sibling != null) {
        traverse(figure[id].sibling, stack);
    }
}

for(i=0; i<numNodes; i++) initNodes(i);

console.log(figure);

var stack = [];
traverse(torso1Id, stack);
