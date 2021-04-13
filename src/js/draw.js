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
   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // back
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
    1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

    0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // back
    0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
    0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
    0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
    -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
     1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // back
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // bacl
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // bacl
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // bacl
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // bacl
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right

   0,0,-1,  0,0,-1, 0,0,-1, 0,0,-1,    // bacl
   0,0, 1,  0,0, 1, 0,0, 1, 0,0, 1,    // front
   0,-1,0,  0,-1,0, 0,-1,0, 0,-1,0,    // bottom
   0, 1,0,  0, 1,0, 0, 1,0, 0, 1,0,    // top
   -1,0,0,  -1,0,0, -1,0,0, -1,0,0,    // left
   1,0,0,   1,0,0,  1,0,0,  1,0,0,    // right
 ];

 var textures = [
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
   // Back
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
   // Top
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
   // Bottom
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
   // Right
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
   // Left
   0.0,  0.0,
   1.0,  0.0,
   1.0,  1.0,
   0.0,  1.0,
 ];

 objects = [];

 function loadTexture(gl, url) {
   const texture = gl.createTexture();
   gl.bindTexture(gl.TEXTURE_2D, texture);
 
   const level = 0;
   const internalFormat = gl.RGBA;
   const width = 1;
   const height = 1;
   const border = 0;
   const srcFormat = gl.RGBA;
   const srcType = gl.UNSIGNED_BYTE;
   const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
   gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                 width, height, border, srcFormat, srcType,
                 pixel);
 
   const image = new Image();
   requestCORSIfNotSameOrigin(image, url);
   image.onload = function() {
     gl.bindTexture(gl.TEXTURE_2D, texture);
     gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                   srcFormat, srcType, image);
 
     if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
        gl.generateMipmap(gl.TEXTURE_2D);
     } 
     else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
     }
   };
   image.src = url;
 
   return texture;
 }
 
 function isPowerOf2(value) {
   return (value & (value - 1)) == 0;
 }

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

   var texture_buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, texture_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textures),gl.STATIC_DRAW);

   /*======== Associating attributes to vertex shader =====*/
   _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
   _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
   _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
   _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   var _position = gl.getAttribLocation(shaderProgram, "position");
   gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_position);

   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   var _color = gl.getAttribLocation(shaderProgram, "color");
   gl.vertexAttribPointer(_color, 3, gl.FLOAT, false,0,0) ;
   gl.enableVertexAttribArray(_color);

   gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
   var _normal = gl.getAttribLocation(shaderProgram, "normal");
   gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_normal);

   gl.bindBuffer(gl.ARRAY_BUFFER, texture_buffer);
   var _texture = gl.getAttribLocation(shaderProgram, "texture");
   gl.vertexAttribPointer(_texture, 2, gl.FLOAT, false,0,0);
   gl.enableVertexAttribArray(_texture);

   gl.useProgram(shaderProgram);

   gl.enable(gl.DEPTH_TEST);

   gl.depthFunc(gl.LEQUAL);
  
   gl.clearColor(0, 0, 0, 0);
   gl.clearDepth(1.0);
   gl.viewport(0.0, 0.0, canvas.width, canvas.height);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 }

// function setUpBufferFromObjects(){
//     // Create and store data into vertex buffer
//     var vertex_buffer = gl.createBuffer ();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    
//     var vertices_array = objects[0].vertices.concat(objects[1].vertices,objects[2].vertices);
//     var colors_array  = objects[0].color.concat(objects[1].color,objects[2].color);
//     var vertexNormals_array = objects[0].normals.concat(objects[1].normals,objects[2].normals);
    
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_array), gl.STATIC_DRAW);

//     // Create and store data into color buffer
//     var color_buffer = gl.createBuffer ();
//     gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors_array), gl.STATIC_DRAW);

//     var normal_buffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals_array),gl.STATIC_DRAW);

//     /*======== Associating attributes to vertex shader =====*/
//     console.log(shaderProgram);
//     _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
//     _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
//     _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
//     _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

//     gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
//     var _position = gl.getAttribLocation(shaderProgram, "position");
//     console.log(_position);
//     gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
//     gl.enableVertexAttribArray(_position);

//     gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
//     var _color = gl.getAttribLocation(shaderProgram, "color");
//     console.log(_color);
//     gl.vertexAttribPointer(_color, 3, gl.FLOAT, false,0,0) ;
//     gl.enableVertexAttribArray(_color);

//     gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
//     var _normal = gl.getAttribLocation(shaderProgram, "normal");
//     console.log(_normal);
//     gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false,0,0);
//     gl.enableVertexAttribArray(_normal);

//     gl.useProgram(shaderProgram);

//     gl.enable(gl.DEPTH_TEST);

//     gl.depthFunc(gl.LEQUAL);

//     gl.clearColor(0, 0, 0, 0);
//     gl.clearDepth(1.0);
//     gl.viewport(0.0, 0.0, canvas.width, canvas.height);
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
// }

function requestCORSIfNotSameOrigin(image, url) {
   if ((new URL(url, window.location.href)).origin !== window.location.origin) {
       image.crossOrigin = "";
   }
}

function initScene(proj_matrix, view_matrix, model_matrix){
   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);
   gl.uniformMatrix4fv(_Nmatrix, false, normal_matrix);

   const texture = loadTexture(gl, 'https://live.staticflickr.com/65535/51111759688_56c0b69a81_z.jpg');

   // Tell WebGL we want to affect texture unit 0
   gl.activeTexture(gl.TEXTURE0);

   // Bind the texture to texture unit 0
   gl.bindTexture(gl.TEXTURE_2D, texture);

   // Tell the shader we bound the texture to texture unit 0
   const uSampler = gl.getUniformLocation(shaderProgram, 'uSampler');
   gl.uniform1i(uSampler, 0);

   console.log(objects);
}

function setUpObjects(){
   objects.push(
      {
         name: "robot1",
         parts : 
         [
            {
               name: "torso1Id",
               id : 0,
            },
            {
               name: "head1Id",
               id : 1
            },
            {
               name: "rightarm1Id",
               id : 2
            },
            {
               name: "leftarm1Id",
               id : 3
            },
            {
               name: "rightleg1Id",
               id : 4
            },
            {
               name: "leftright1Id",
               id : 5
            },
            {
               name: "rightfoot1Id",
               id : 6
            },
            {
               name: "leftfoot1Id",
               id : 7
            }
         ]
      }
   );

   for (var i = 0; i<objects[0].parts.length; i++){
      objects[0].parts[i]["theta"] = 0;
      objects[0].parts[i]["translate"] = 0;
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
var view_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-2,1 ];
var proj_matrix = getProjection(30, canvas.width/canvas.height, 1, 100);
//  var proj_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,0,0, 0,0,0,1 ];
var model_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];
let normal_matrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];

initScene(proj_matrix, view_matrix, model_matrix, normal_matrix);
