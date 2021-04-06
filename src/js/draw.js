var _Pmatrix;
var _Vmatrix;
var _Mmatrix;
var _Nmatrix;
 
 var model1 = [
    //back face
   -0.2,0.2,-0.2, 0.2,0.2,-0.2, 0.2,-0.2,-0.2, -0.2,-0.2,-0.2,

   //front face
   -0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,-0.2,0.2, -0.2,-0.2,0.2,

   //bottom face
   -0.2,-0.2,0.2, 0.2,-0.2,0.2, 0.2,-0.2,-0.2, -0.2,-0.2,-0.2,

   //top face
   -0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,-0.2, -0.2,0.2,-0.2,

   //left face
   -0.2,-0.2,0.2, -0.2,-0.2,-0.2, -0.2,0.2,-0.2, -0.2,0.2,0.2,

   //right face
   0.2,-0.2,0.2, 0.2,-0.2,-0.2, 0.2,0.2,-0.2, 0.2,0.2,0.2,
];

for (var i = 0; i < 12*6; i++){
   if(i % 3 == 0){
      vertices.push(model1[i]-0.7);
   }
   else{
      vertices.push(model1[i]);
   }
}

 var colors = [
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,1,0, 1,1,0, 1,1,0, 1,1,0,
    0,1,1, 0,1,1, 0,1,1, 0,1,1,
    0,1,0, 0,1,0, 0,1,0, 0,1,0,
 ];

 var vertexNormals = [
   // Back
   0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
   0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
   0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
   0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,

   // Front
    0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
    0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
    0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
    0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,

   // Bottom
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,

   // Top
    0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
    0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
    0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
    0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,

   // Left
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,

   // Right
    1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0,
    1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0,
    1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0,
    1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0, 1.0,0.0,0.0,

    //bottom
    0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
    0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
    0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
    0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,

    //right
    0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0,
    0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0,
    0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0, 0.5,0.5,0.0,

    //front
    0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
    0.0,0.5,0.5, 0.0,0.5,0.5, 0.0,0.5,0.5, 0.0,0.5,0.5,
    0.0,0.5,0.5, 0.0,0.5,0.5, 0.0,0.5,0.5, 0.0,0.5,0.5,

    //left
    -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0,
    -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0,
    -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0, -0.5,0.5,0.0,

    //back
    0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5,
    0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5,
    0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5, 0.0,0.5,-0.5,

    //back
    0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
    0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
    0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,
    0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0, 0.0,0.0,-1.0,

   //front
   0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
   0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
   0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,
   0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0, 0.0,0.0,1.0,

   //bottom
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,
   0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0, 0.0,-1.0,0.0,

   // Top
   0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
   0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
   0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,
   0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0, 0.0,1.0,0.0,

   // Left
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,
   -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0, -1.0,0.0,0.0,

 ];

 function setUpBuffer(){
   // Create and store data into vertex buffer
   var vertex_buffer = gl.createBuffer ();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

   // Create and store data into color buffer
   var color_buffer = gl.createBuffer ();
   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

   var normal_buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),gl.STATIC_DRAW);

   /*======== Associating attributes to vertex shader =====*/
   console.log(shaderProgram);
   _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
   _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
   _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
   _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   var _position = gl.getAttribLocation(shaderProgram, "position");
   console.log(_position);
   gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_position);

   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   var _color = gl.getAttribLocation(shaderProgram, "color");
   console.log(_color);
   gl.vertexAttribPointer(_color, 3, gl.FLOAT, false,0,0) ;
   gl.enableVertexAttribArray(_color);

   gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
   var _normal = gl.getAttribLocation(shaderProgram, "normal");
   console.log(_normal);
   gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_normal);

   gl.useProgram(shaderProgram);

   gl.enable(gl.DEPTH_TEST);

   gl.depthFunc(gl.LEQUAL);
  
   gl.clearColor(0, 0, 0, 0);
   gl.clearDepth(1.0);
   gl.viewport(0.0, 0.0, canvas.width, canvas.height);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 }

function setUpBufferFromObjects(){
    // Create and store data into vertex buffer
    var vertex_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    
    var vertices_array = objects[0].vertices.concat(objects[1].vertices,objects[2].vertices);
    var colors_array  = objects[0].color.concat(objects[1].color,objects[2].color);
    var vertexNormals_array = objects[0].normals.concat(objects[1].normals,objects[2].normals);
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_array), gl.STATIC_DRAW);

    // Create and store data into color buffer
    var color_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_array), gl.STATIC_DRAW);

    var normal_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals_array),gl.STATIC_DRAW);

    /*======== Associating attributes to vertex shader =====*/
    console.log(shaderProgram);
    _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
    _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
    _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
    _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var _position = gl.getAttribLocation(shaderProgram, "position");
    console.log(_position);
    gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
    gl.enableVertexAttribArray(_position);

    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    var _color = gl.getAttribLocation(shaderProgram, "color");
    console.log(_color);
    gl.vertexAttribPointer(_color, 3, gl.FLOAT, false,0,0) ;
    gl.enableVertexAttribArray(_color);

    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    var _normal = gl.getAttribLocation(shaderProgram, "normal");
    console.log(_normal);
    gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false,0,0);
    gl.enableVertexAttribArray(_normal);

    gl.useProgram(shaderProgram);

    gl.enable(gl.DEPTH_TEST);

    gl.depthFunc(gl.LEQUAL);

    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1.0);
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

 var view_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-2,1 ];

// draw object
function draw(proj_matrix, model_matrix, start, end){
   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);

   console.log(isShading);
   
   if(isShading){
      shading(model_matrix, view_matrix);
   }
   else{
      let normalMatrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
      gl.uniformMatrix4fv(_Nmatrix, false, normalMatrix);
   }

   for (var i = start; i < end; i++){
      gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
   }
}

function setUpInitScene(){
   // var proj_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1 ];
   var proj_matrix = getProjection(30, canvas.width/canvas.height, 1, 100);
   var model_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];

   objects.push({
      "name" : "cube",
      "offset" : 0,
      "end" : 24,
      "numVertices" : 96,
      "vertices" : vertices.slice(0,96*3),
      "color" : colors.slice(0, 96*3),
      "normals" : vertexNormals.slice(0,96*3),
      "projMatrix" : proj_matrix,
      "modelMatrix" : model_matrix
   });

   objects.push({
      "name" : "pyramid",
      "offset" : 24,
      "end" : 40,
      "numVertices" : 64,
      "vertices" : vertices.slice(96*3, 96*3+64*3),
      "color" : colors.slice(96*3, 96*3+64*3),
      "normals" : vertexNormals.slice(96*3, 96*3+64*3),
      "projMatrix" : proj_matrix,
      "modelMatrix" : model_matrix
   });

    objects.push({
        "name" : "prism",
        "offset" : 40,
        "end" : 60,
        "numVertices" : 80,
        "vertices" : vertices.slice(96*3+64*3, 96*3+64*3+80*3),
        "color" : colors.slice(96*3+64*3, 96*3+64*3+80*3),
        "normals" : vertexNormals.slice(96*3+64*3, 96*3+64*3+80*3),
        "projMatrix" : proj_matrix,
        "modelMatrix" : model_matrix
    });

   for(var i = 0; i<objects.length; i++){
      draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
   }
}

function reset(){
   var projMatrix = [1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1];
   view_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-2,1];


   for(var i = 0; i<objects.length; i++){
      objects[i].projMatrix = projMatrix;
      draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
   }

   oldValueMove = 0;
   document.getElementById('angle').value = oldValueMove;
}

setUpBuffer();
setUpInitScene();
