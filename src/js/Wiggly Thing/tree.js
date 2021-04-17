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
var partsId = {};

partsId["base1Id"]      = 0;
partsId["segment1Id"]   = 1;
partsId["segment2Id"]   = 2;
partsId["segment3Id"]   = 3;
partsId["end1Id"]       = 4;

var transCenter = 0.7;

var theta = [0, 0, 0, 0, 0];
var translate = [0, 0, 0, 0, 0];
var thetaRotate = [3, 10, 10, 10, 10];
var translateMove = [0.01, 0, 0, 0, 0];

var figure = [ ];
for (var i = 0; i < numNodes; i++) {
    figure[i] = createNode(null, null, null, null);
}

function initNodes(id){
    var m;
    switch(id){
        case partsId["base1Id"]:
            m = translation(0, translate[id], 0);
            m = multiply(m, yRotation(theta[id]));
            figure[id] = createNode(m, base1, null, partsId["segment1Id"]);
            break;

        case partsId["segment1Id"]:
            m = translation(0, 0.13, 0);
            m = multiply(m, xRotation(theta[id]));
            figure[id] = createNode(m, segment1, null, partsId["segment2Id"]);
            break;
        
        case partsId["segment2Id"]:
            m = translation(0, 0.13, 0);
            m = multiply(m, xRotation(theta[id]));
            figure[id] = createNode(m, segment2, null, partsId["segment3Id"]);
            break;
        
        case partsId["segment3Id"]:
            m = translation(0, 0.13, 0);
            m = multiply(m, xRotation(theta[id]));
            //m = multiply(m, translation(-0.21,0.15,0));
            figure[id] = createNode(m, segment3, null, partsId["end1Id"]);
            break;
        
        case partsId["end1Id"]:
            m = translation(0, 0.13, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0,0,translate[id]));
            figure[id] = createNode(m, end1, null, null);
            break;
    }
}

function base1(){
    instanceMatrix = multiply(model_matrix,translation(-transCenter,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 1.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
    }

}

function segment1(){
    instanceMatrix = multiply(model_matrix,translation(-transCenter,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 0.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24 + i*4, 4);
    }
}

function segment2(){
    instanceMatrix = multiply(model_matrix,translation(-transCenter,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
 
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*2 + i*4, 4);
    }
}

function segment3(){
    instanceMatrix = multiply(model_matrix,translation(-transCenter,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
    
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*3 + i*4, 4);
    }
}

function end1(){
    instanceMatrix = multiply(model_matrix,translation(-transCenter,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*4 + i*4, 4);
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

var stack = [];
traverse(partsId["base1Id"], stack);
