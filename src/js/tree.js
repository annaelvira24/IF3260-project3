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

partsId["torso1Id"]     = 0;
partsId["head1Id"]      = 1;
partsId["rightarm1Id"]  = 2;
partsId["leftarm1Id"]   = 3;
partsId["rightleg1Id"]  = 4;
partsId["leftleg1Id"]   = 5;
partsId["rightfoot1Id"] = 6;
partsId["leftfoot1Id"]  = 7;
partsId["base1Id"]      = 8;
partsId["segment1Id"]   = 9;
partsId["segment2Id"]   = 10;
partsId["segment3Id"]   = 11;
partsId["end1Id"]       = 12;
partsId["torso3Id"]     = 13;
partsId["rightleg3Id"]  = 14;
partsId["leftleg3Id"]   = 15;

var theta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var translate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var thetaRotate = [3, 10, 15, 15, 7.5, 7.5, 4, 4, 3, 10, 10, 10, 10, 10, 10, 10];
var translateMove = [0.01, 0, 0, 0, 0, 0, 0.005, 0.005, 0.01, 0, 0, 0, 0, 0, 0];
var roots = [0, 8, 13];

function initNodes(id){
    var m;
    switch(id){
        case partsId["torso1Id"]:
            m = translation(0,translate[id],0);
            m = multiply(m, yRotation(theta[id]));
            figure[id] = createNode(m, torso1, null, partsId["head1Id"]);
            break;
        
        case partsId["head1Id"]:
            m = translation(0, 0.31, 0);
            m = multiply(m, yRotation(theta[id]));
            figure[id] = createNode(m, head1, partsId["rightarm1Id"], null);
            break;
        
        case partsId["rightarm1Id"]:
            m = translation(0,-0.15, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0.21,0.15,0));
            figure[id] = createNode(m, rightarm1, partsId["leftarm1Id"], null);
            break;

        case partsId["leftarm1Id"]:
            m = translation(0,-0.15, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(-0.21,0.15,0));
            figure[id] = createNode(m, leftarm1, partsId["rightleg1Id"], null);
            break;
        
        case partsId["rightleg1Id"]:
            m = translation(0,-0.12, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0.1,-0.18,0));
            figure[id] = createNode(m, rightleg1, partsId["leftleg1Id"], partsId["rightfoot1Id"]);
            break;

        case partsId["leftleg1Id"]:
            m = translation(0,-0.12, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(-0.1,-0.18,0));
            figure[id] = createNode(m, leftleg1, null, partsId["leftfoot1Id"]);
            break;

        case partsId["rightfoot1Id"]:
            m = yRotation(theta[id]);
            m = multiply(m, translation(0,0,translate[id]));
            m = multiply(m, translation(0,-0.12,0));
            figure[id] = createNode(m, rightfoot1, null, null);
            break;

        case partsId["leftfoot1Id"]:
            m = yRotation(theta[id]);
            m = multiply(m, translation(0,0,translate[id]));
            m = multiply(m, translation(0,-0.12,0));
            figure[id] = createNode(m, leftfoot1, null, null);
            break;

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
            figure[id] = createNode(m, segment3, null, partsId["end1Id"]);
            break;
        
        case partsId["end1Id"]:
            m = translation(0, 0.13, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0,0,translate[id]));
            figure[id] = createNode(m, end1, null, null);
            break;

        case partsId["torso3Id"]:
            m = translation(0, 0, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0,0,translate[id]));
            figure[id] = createNode(m, torso3, null, partsId["rightleg3Id"]);
            break;
        
        case partsId["rightleg3Id"]:
            m = translation(0.1, -0.2, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0,0,translate[id]));
            figure[id] = createNode(m, rightleg3, partsId["leftleg3Id"], null);
            break;

        case partsId["leftleg3Id"]:
            m = translation(-0.1, -0.2, 0);
            m = multiply(m, xRotation(theta[id]));
            m = multiply(m, translation(0,0,translate[id]));
            figure[id] = createNode(m, leftleg3, null, null);
            break;
    }
}


function torso1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 1.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
    }

}

function head1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 0.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24 + i*4, 4);
    }
}

function rightarm1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
 
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*2 + i*4, 4);
    }
}

function leftarm1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
    
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*3 + i*4, 4);
    }
}

function rightleg1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*4 + i*4, 4);
    }
}

function leftleg1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*5 + i*4, 4);
    }
}

function rightfoot1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*6 + i*4, 4);
    }
}

function leftfoot1(){
    instanceMatrix = multiply(model_matrix,translation(-0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*7 + i*4, 4);
    }
}

function base1(){
    instanceMatrix = model_matrix;
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 0.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*8 + i*4, 4);
    }

}

function segment1(){
    instanceMatrix = model_matrix;
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);

    const vIsTexture = gl.getUniformLocation(shaderProgram, 'vIsTexture');
    gl.uniform1f(vIsTexture, 0.0);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*9 + i*4, 4);
    }
}

function segment2(){
    instanceMatrix = model_matrix;
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
 
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*10 + i*4, 4);
    }
}

function segment3(){
    instanceMatrix = model_matrix;
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);
    
    checkShading(instanceMatrix, view_matrix);

    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*11 + i*4, 4);
    }
}

function end1(){
    instanceMatrix = model_matrix;
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*12 + i*4, 4);
    }
}

function torso3(){
    instanceMatrix = multiply(model_matrix,translation(0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*13 + i*4, 4);
    }
}

function leftleg3(){
    instanceMatrix = multiply(model_matrix,translation(0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*14 + i*4, 4);
    }
}

function rightleg3(){
    instanceMatrix = multiply(model_matrix,translation(0.7,0,0));
    gl.uniformMatrix4fv(_Mmatrix, false, instanceMatrix);

    checkShading(instanceMatrix, view_matrix);
 
    for (var i = 0; i < 6; i++){
       gl.drawArrays(gl.TRIANGLE_FAN, 24*15 + i*4, 4);
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

function traverseAll(roots){
    for (var i in roots){
        traverse(roots[i], stack = []);
    }
}

var figure = [ ];

for (var i = 0; i < numNodes; i++) {
    figure[i] = createNode(null, null, null, null);
}

for(i=0; i<numNodes; i++) initNodes(i);

traverseAll(roots);

