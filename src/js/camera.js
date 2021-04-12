function updateZoom(value){
    view_matrix = multiply(scale(value, value, value), view_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);

    var stack = []
    traverse(partsId["torso1Id"], stack);
}

function updateMove(){
    let value = document.getElementById('angle').value;
    let move = value - oldValueMove;

    view_matrix = multiply(yRotation(move), view_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);

    var stack = []
    traverse(partsId["torso1Id"], stack);

    oldValueMove = value;
}