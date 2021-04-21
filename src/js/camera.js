function updateZoom(value){
    view_matrix = multiply(scale(value, value, value), view_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);

    traverseAll("torso1Id", "base1Id", "torso3Id");
}

function updateMove(){
    let value = document.getElementById('angle').value;
    let move = value - oldValueMove;

    view_matrix = multiply(yRotation(move), view_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);

    traverseAll("torso1Id", "base1Id", "torso3Id");

    oldValueMove = value;
}