function degToRad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function updateZoom(value){
    view_matrix = multiply(scale(value, value, value), view_matrix);
    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function updateMove(){
    let value = document.getElementById('angle').value;
    value = degToRad(value);

    let move = value - oldValueMove;

    view_matrix = multiply(yRotation(move), view_matrix);
    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }

    oldValueMove = value;
}