function shading(modelMatrix, viewMatrix){
    var temp = multiply(modelMatrix, viewMatrix);
    var mvMatrix = [];
    var normalMatrix = [];

    for (var i = 0; i<16; i+=4){
        mvMatrix.push([temp[i], temp[i+1], temp[i+2], temp[i+3]]);
    }

    normalMatrix = invert(mvMatrix);
    normalMatrix = transpose(normalMatrix);
    var normalVector = [];
    for (var i = 0; i<4; i++){
        for (var j = 0; j<4; j++){
            normalVector.push(normalMatrix[i][j]);
        }
    }

    gl.uniformMatrix4fv(_Nmatrix, false, normalVector);
}

function updateShading(){
    let checkbox = document.getElementById('shader');
    isShading = checkbox.checked;
}

function checkShading(modelMatrix, viewMatrix){
    if(isShading){
        shading(modelMatrix, viewMatrix);
    }
    else{
        var normalMatrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
        gl.uniformMatrix4fv(_Nmatrix, false, normalMatrix);
    }
}