var _Pmatrix;
var _Vmatrix;
var _Mmatrix;
var _Nmatrix;
 
 var model1 = [
    //torso
   -0.15,0.2,-0.15,  0.15,0.2,-0.15,   0.15,-0.2,-0.15,  -0.15,-0.2,-0.15,    // back face
   -0.15,0.2,0.15,   0.15,0.2,0.15,    0.15,-0.2,0.15,   -0.15,-0.2,0.15,     // front
   -0.15,-0.2,0.15,  0.15,-0.2,0.15,   0.15,-0.2,-0.15,  -0.15,-0.2,-0.15,    // bottom
   -0.15,0.2,0.15,   0.15,0.2,0.15,    0.15,0.2,-0.15,   -0.15,0.2,-0.15,     // top
   -0.15,-0.2,0.15,  -0.15,-0.2,-0.15, -0.15,0.2,-0.15,  -0.15,0.2,0.15,      // left
   0.15,-0.2,0.15,   0.15,-0.2,-0.15,  0.15,0.2,-0.15,   0.15,0.2,0.15,       // right

   // head
   -0.1,-0.1,-0.1,   0.1,-0.1,-0.1,    0.1,0.1,-0.1,  -0.1,0.1,-0.1,      // back face
   -0.1,-0.1,0.1,    0.1,-0.1,0.1,     0.1,0.1,0.1,   -0.1,0.1,0.1,       // front
   -0.1,-0.1,0.1,    0.1,-0.1,0.1,     0.1,-0.1,-0.1, -0.1,-0.1,-0.1,     // bottom
   -0.1,0.1,0.1,     0.1,0.1,0.1,      0.1,0.1,-0.1,  -0.1,0.1,-0.1,      // top
   -0.1,-0.1,0.1,    -0.1,-0.1,-0.1,   -0.1,0.1,-0.1, -0.1,0.1,0.1,       // left
   0.1,-0.1,0.1,     0.1,-0.1,-0.1,    0.1,0.1,-0.1,  0.1,0.1,0.1,        // right

   //right arm
   -0.05,-0.15,-0.05,   0.05,-0.15,-0.05,    0.05,0.18,-0.05,     -0.05,0.18,-0.05,      // back face
   -0.05,-0.15,0.05,    0.05,-0.15,0.05,     0.05,0.18,0.05,      -0.05,0.18,0.05,       // front
   -0.05,-0.15,0.05,    0.05,-0.15,0.05,     0.05,-0.15,-0.05,    -0.05,-0.15,-0.05,     // bottom
   -0.05,0.18,0.05,     0.05,0.18,0.05,      0.05,0.18,-0.05,     -0.05,0.18,-0.05,      // top
   -0.05,-0.15,0.05,    -0.05,-0.15,-0.05,   -0.05,0.18,-0.05,    -0.05,0.18,0.05,       // left
   0.05,-0.15,0.05,     0.05,-0.15,-0.05,    0.05,0.18,-0.05,     0.05,0.18,0.05,        // right

   //left arm
   -0.05,-0.15,-0.05,   0.05,-0.15,-0.05,    0.05,0.18,-0.05,     -0.05,0.18,-0.05,      // back face
   -0.05,-0.15,0.05,    0.05,-0.15,0.05,     0.05,0.18,0.05,      -0.05,0.18,0.05,       // front
   -0.05,-0.15,0.05,    0.05,-0.15,0.05,     0.05,-0.15,-0.05,    -0.05,-0.15,-0.05,     // bottom
   -0.05,0.18,0.05,     0.05,0.18,0.05,      0.05,0.18,-0.05,     -0.05,0.18,-0.05,      // top
   -0.05,-0.15,0.05,    -0.05,-0.15,-0.05,   -0.05,0.18,-0.05,    -0.05,0.18,0.05,       // left
   0.05,-0.15,0.05,     0.05,-0.15,-0.05,    0.05,0.18,-0.05,     0.05,0.18,0.05,        // right

   //right leg
   -0.04,-0.12,-0.04,   0.04,-0.12,-0.04,    0.04,0.12,-0.04,     -0.04,0.12,-0.04,      // back face
   -0.04,-0.12,0.04,    0.04,-0.12,0.04,     0.04,0.12,0.04,      -0.04,0.12,0.04,       // front
   -0.04,-0.12,0.04,    0.04,-0.12,0.04,     0.04,-0.12,-0.04,    -0.04,-0.12,-0.04,     // bottom
   -0.04,0.12,0.04,     0.04,0.12,0.04,      0.04,0.12,-0.04,     -0.04,0.12,-0.04,      // top
   -0.04,-0.12,0.04,    -0.04,-0.12,-0.04,   -0.04,0.12,-0.04,    -0.04,0.12,0.04,       // left
   0.04,-0.12,0.04,     0.04,-0.12,-0.04,    0.04,0.12,-0.04,     0.04,0.12,0.04,        // right

   //left leg
   -0.04,-0.12,-0.04,   0.04,-0.12,-0.04,    0.04,0.12,-0.04,     -0.04,0.12,-0.04,      // back face
   -0.04,-0.12,0.04,    0.04,-0.12,0.04,     0.04,0.12,0.04,      -0.04,0.12,0.04,       // front
   -0.04,-0.12,0.04,    0.04,-0.12,0.04,     0.04,-0.12,-0.04,    -0.04,-0.12,-0.04,     // bottom
   -0.04,0.12,0.04,     0.04,0.12,0.04,      0.04,0.12,-0.04,     -0.04,0.12,-0.04,      // top
   -0.04,-0.12,0.04,    -0.04,-0.12,-0.04,   -0.04,0.12,-0.04,    -0.04,0.12,0.04,       // left
   0.04,-0.12,0.04,     0.04,-0.12,-0.04,    0.04,0.12,-0.04,     0.04,0.12,0.04,        // right

   //right foot
   -0.05,-0.01,-0.1,   0.05,-0.01,-0.1,    0.05,0.01,-0.1,     -0.05,0.01,-0.1,      // back face
   -0.05,-0.01,0.1,    0.05,-0.01,0.1,     0.05,0.01,0.1,      -0.05,0.01,0.1,       // front
   -0.05,-0.01,0.1,    0.05,-0.01,0.1,     0.05,-0.01,-0.1,    -0.05,-0.01,-0.1,     // bottom
   -0.05,0.01,0.1,     0.05,0.01,0.1,      0.05,0.01,-0.1,     -0.05,0.01,-0.1,      // top
   -0.05,-0.01,0.1,    -0.05,-0.01,-0.1,   -0.05,0.01,-0.1,    -0.05,0.01,0.1,       // left
   0.05,-0.01,0.1,     0.05,-0.01,-0.1,    0.05,0.01,-0.1,     0.05,0.01,0.1,        // right

   //left foot
   -0.05,-0.01,-0.1,   0.05,-0.01,-0.1,    0.05,0.01,-0.1,     -0.05,0.01,-0.1,      // back face
   -0.05,-0.01,0.1,    0.05,-0.01,0.1,     0.05,0.01,0.1,      -0.05,0.01,0.1,       // front
   -0.05,-0.01,0.1,    0.05,-0.01,0.1,     0.05,-0.01,-0.1,    -0.05,-0.01,-0.1,     // bottom
   -0.05,0.01,0.1,     0.05,0.01,0.1,      0.05,0.01,-0.1,     -0.05,0.01,-0.1,      // top
   -0.05,-0.01,0.1,    -0.05,-0.01,-0.1,   -0.05,0.01,-0.1,    -0.05,0.01,0.1,       // left
   0.05,-0.01,0.1,     0.05,-0.01,-0.1,    0.05,0.01,-0.1,     0.05,0.01,0.1,        // right
];

for (var i = 0; i < model1.length; i++){
   vertices.push(model1[i]);
}

console.log(vertices);

 var colors = [
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,
    1,0,1, 1,0,1, 1,0,1, 1,0,1,

    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,
    0,0,1, 0,0,1, 0,0,1, 0,0,1,

    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,

    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,

    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,

    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,
    1,0,0, 1,0,0, 1,0,0, 1,0,0,

    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,

    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
    0,0,0, 0,0,0, 0,0,0, 0,0,0,
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

function initScene(proj_matrix, view_matrix, model_matrix){
   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);
   gl.uniformMatrix4fv(_Nmatrix, false, normal_matrix);
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
var view_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-2,1 ];
var proj_matrix = getProjection(30, canvas.width/canvas.height, 1, 100);
//  var proj_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1 ];
var model_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];
let normal_matrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];

initScene(proj_matrix, view_matrix, model_matrix, normal_matrix);
