function translation(tx, ty, tz){
    return [
        1,  0,  0,  0,
        0,  1,  0,  0,
        0,  0,  1,  0,
        tx, ty, tz, 1,
    ];
}

function scale(sx, sy, sz){
    return [
      sx, 0,  0,  0,
      0, sy,  0,  0,
      0,  0, sz,  0,
      0,  0,  0,  1,
    ];
}

function xRotation(angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
 
    return [
      1, 0, 0, 0,
      0, c, s, 0,
      0, -s, c, 0,
      0, 0, 0, 1,
    ];
  }
 
  function yRotation(angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
 
    return [
      c, 0, s, 0,
      0, 1, 0, 0,
      -s, 0, c, 0,
      0, 0, 0, 1,
    ];
  }
 
  function zRotation(angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
 
    return [
       c, s, 0, 0,
      -s, c, 0, 0,
       0, 0, 1, 0,
       0, 0, 0, 1,
    ];
  }

  function multiply(a, b){
    let product = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            let sum = 0;
            for (var k = 0; k < 4; k++)
                sum = sum + a[i * 4 + k] * b[k * 4 + j];
            product[i * 4 + j] = sum;
        }
    }
    return product;
  }

  function invert(a){
    var temp;
    var N = a.length;
    var E = [];
   
    for (var i = 0; i < N; i++)
      E[i] = [];
   
    for (i = 0; i < N; i++)
      for (var j = 0; j < N; j++) {
        E[i][j] = 0;
        if (i == j)
          E[i][j] = 1;
      }
   
    for (var k = 0; k < N; k++) {
      temp = a[k][k];
   
      for (var j = 0; j < N; j++)
      {
        a[k][j] /= temp;
        a[k][j] /= temp;
      }
   
      for (var i = k + 1; i < N; i++)
      {
        temp = a[i][k];
   
        for (var j = 0; j < N; j++)
        {
          a[i][j] -= a[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }
   
    for (var k = N - 1; k > 0; k--)
    {
      for (var i = k - 1; i >= 0; i--)
      {
        temp = a[i][k];
   
        for (var j = 0; j < N; j++)
        {
          a[i][j] -= a[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }
   
    for (var i = 0; i < N; i++)
      for (var j = 0; j < N; j++)
        a[i][j] = E[i][j];
    return a;
  }

  function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  }