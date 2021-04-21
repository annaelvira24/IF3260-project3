function getSTMat(left, right, bottom, top, near, far){
    var a = right - left;
    b = top - bottom;
    c = far - near;

    return [
        2/a,0,0,-1*(left + right)/a,
        0,2/b,0,-1*(top + bottom)/b,
        0,0,-2/c,-1*(far + near )/c,
        0,0,0,1
    ]
}

function getShearMat(ang1, ang2){
    return[
        1,0,-1/Math.tan(degToRad(ang1)),0,
        0,1,-1/Math.tan(degToRad(ang2)),0,
        0,0,1,0,
        0,0,0,1
    ];
}
 
function getProjection(angle, aspect, zMin, zMax) {
    var top = Math.tan(degToRad(angle)/2) * zMin;
    var right = top * aspect;
    return [
       zMin/right, 0 , 0, 0,
       0, zMin/top, 0, 0,
       0, 0, -(zMax+zMin)/(zMax-zMin), (-2*zMax*zMin)/(zMax-zMin),
       0, 0, -1, 0 
       ];
 }

function toPerspective(){
     var perspectiveMatrix = getProjection(30, canvas.width/canvas.height, 1, 100);

     for(var i = 0; i<objects.length; i++){
        objects[i].projMatrix = perspectiveMatrix;
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function toOrtho(){
    var orthMatrix = [ 1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1 ];
    var stMatrix = getSTMat(-1,1,-1,1,1,100);

    for(var i = 0; i<objects.length; i++){
       objects[i].projMatrix = multiply(orthMatrix, stMatrix);
       draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
   }
}

function toOblique(){
    var shtMat = [ 1,0,0,0, 0,1,0,0, 0.3,0.3,0,0, 0,0,0,1 ];

    for(var i = 0; i<objects.length; i++){
        objects[i].projMatrix = multiply(translation(0.6,0.6,0), shtMat);
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}