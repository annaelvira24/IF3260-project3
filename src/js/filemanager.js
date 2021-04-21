function decodingData(listObject, listFigure, listVertex, listColor, listNormal, listTexture, listTheta, listTranslate, listThetaRotate, listTranslateMove){
    var result = listObject;
    console.log(result.length);
    
    let sides = ["back", "front", "bottom", "top", "left", "right"]

    let offset = 0;
    for (var i = 0; i<result.length; i++){
        for (var j = 0; j<result[i].parts.length; j++){
            result[i].parts[j]["details"].push({
                theta : listTheta[(j+offset)],
                translate : listTranslate[(j+offset)],
                rotate : listThetaRotate[(j+offset)],
                move : listTranslateMove[(j+offset)],
                node: listFigure[(j+offset)]
            })

            for (var k = 0; k<6; k++){
                result[i].parts[j]["sides"].push({
                    name : sides[k], 
                    vertices : [listVertex.slice((j+offset)*72+k*12, (j+offset)*72+k*12+3), listVertex.slice((j+offset)*72+k*12+3, (j+offset)*72+k*12+6), listVertex.slice((j+offset)*72+k*12+6, (j+offset)*72+k*12+9), listVertex.slice((j+offset)*72+k*12+9, (j+offset)*72+k*12+12)],
                    colors : [listColor.slice((j+offset)*72+k*12, (j+offset)*72+k*12+3), listColor.slice((j+offset)*72+k*12+3, (j+offset)*72+k*12+6), listColor.slice((j+offset)*72+k*12+6, (j+offset)*72+k*12+9), listColor.slice((j+offset)*72+k*12+9, (j+offset)*72+k*12+12)],
                    normals : [listNormal.slice((j+offset)*72+k*12, (j+offset)*72+k*12+3), listNormal.slice((j+offset)*72+k*12+3, (j+offset)*72+k*12+6), listNormal.slice((j+offset)*72+k*12+6, (j+offset)*72+k*12+9), listNormal.slice((j+offset)*72+k*12+9, (j+offset)*72+k*12+12)],
                    texture : []
                });

                if(i == 0 && j == 0){
                    result[0].parts[j]["sides"][k].texture = [listTexture.slice(k*8, k*8+2), listTexture.slice(k*8+2, k*8+4), listTexture.slice(k*8+4, k*8+6), listTexture.slice(k*8+6, k*8+8)];
                }
            }
        }
        offset += result[i].parts.length
    }

    return result;
}

function saveData(){
    let resultJson = decodingData(objects, figure, vertices, colors, vertexNormals, textures, theta, translate, thetaRotate, translateMove);
    JSON.stringify(resultJson,function(key,value){
        if(value instanceof Array)
           return JSON.stringify(value);
        return value;
     },2);

    var value = JSON.stringify(resultJson, null, 2);
    let dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(value);
    let exportFileDefaultName = "model.json";
    
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
}

function pushFromMatrix(matrix, array){
    for (var i = 0; i<matrix.length; i++){
        for (var j = 0; j<matrix[0].length; j++){
            array.push(matrix[i][j]);
        }
    }
}

function countNodes(rawJson){
    let count = 0;
    for(var i = 0; i<rawJson.length; i++){
        count += rawJson[i].parts.length;
    }
    return count;
}

function encodingData(rawJson){
    vertices = [];
    colors = [];
    vertexNormals = [];
    textures = [];
    theta = [];
    translate =[];
    thetaRotate = [];
    translateMove = [];
    partsId = {};

    for (var i = 0; i<rawJson.length; i++){
        for (var j = 0; j<rawJson[i].parts.length; j++){
            partsId[rawJson[i].parts[j]["name"]] = rawJson[i].parts[j]["id"];

            theta.push(rawJson[i].parts[j]["details"][0]["theta"]);
            translate.push(rawJson[i].parts[j]["details"][0]["translate"]);
            thetaRotate.push(rawJson[i].parts[j]["details"][0]["rotate"]);
            translateMove.push(rawJson[i].parts[j]["details"][0]["move"]);

            for (var k = 0; k<6; k++){
                pushFromMatrix(rawJson[i].parts[j]["sides"][k]["vertices"], vertices);
                pushFromMatrix(rawJson[i].parts[j]["sides"][k]["colors"], colors);
                pushFromMatrix(rawJson[i].parts[j]["sides"][k]["normals"], vertexNormals);

                if(i == 0 && j == 0){
                    pushFromMatrix(rawJson[i].parts[j]["sides"][k]["texture"], textures);
                }
            }
        }
    }
    console.log(partsId);
    console.log(translate);

}

function loadData() {
    let linkElement = document.createElement("input");
    linkElement.setAttribute("type", "file");
    linkElement.setAttribute("name", "file-load");
    linkElement.setAttribute("value", "file-load");
    linkElement.setAttribute("id", "file-load");
    linkElement.setAttribute("onchange", "importData()");

    var dynamicParent = document.getElementById("dynamic-parent");
    dynamicParent.appendChild(linkElement);
    
    linkElement.click();
}

async function importData() {
    var fileUpload = document.getElementById("file-load");

    if (fileUpload.value !== "") {
        var path = (window.URL || window.webkitURL).createObjectURL(fileUpload.files[0]);
        await initModelFile(path);
    }
}

async function initModelFile(filename) {
    const modelJson = await loadFile(filename);
    let rawJson = JSON.parse(modelJson);

    encodingData(rawJson);

    setUpBuffer();
    var view_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-2,1 ];
    var proj_matrix = getProjection(30, canvas.width/canvas.height, 1, 100);
    var model_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];
    let normal_matrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];

    initScene(proj_matrix, view_matrix, model_matrix, normal_matrix);

    numNodes = countNodes(rawJson);
    console.log(numNodes);

    // var figure = [ ];
    figure = [];
    // console.log(figure);

    for (var i = 0; i < numNodes; i++) {
        figure[i] = createNode(null, null, null, null);
    }

    // console.log(figure);


    for(i=0; i<numNodes; i++) initNodes(i);

    console.log(figure);

    traverse(0, stack = []);
    traverse(8, stack = []);
    console.log(vertexNormals);
}

const loadFile = async (filename) => {
    return await fetchFile(filename);
};

async function fetchFile(filename) {
    return await fetch(filename).then((res) => res.text());
}