function decodingData(listObject, listVertex, listColor, listNormal, listTexture){
    var result = listObject;
    
    let sides = ["back", "front", "bottom", "top", "left", "right"]

    for (var i = 0; i<result.length; i++){
        for (var j = 0; j<result[i].parts.length; j++){
            for (var k = 0; k<6; k++){
                // console.log(result[i]);
                // console.log(result[i].parts);
                console.log(result[i].parts.length);
                console.log(j);
                console.log(result[i].parts[j]);

                result[0].parts[j]["sides"].push({
                    name : sides[k], 
                    vertices : [listVertex.slice(k*12, k*12+3), listVertex.slice(k*12+3, k*12+6), listVertex.slice(k*12+6, k*12+9), listVertex.slice(k*12+9, k*12+12)],
                    colors : [listColor.slice(k*12, k*12+3), listColor.slice(k*12+3, k*12+6), listColor.slice(k*12+6, k*12+9), listColor.slice(k*12+9, k*12+12)],
                    normals : [listNormal.slice(k*12, k*12+3), listNormal.slice(k*12+3, k*12+6), listNormal.slice(k*12+6, k*12+9), listNormal.slice(k*12+9, k*12+12)]
                });

                if(j == 0){
                    result[0].parts[j]["sides"]["textures"] = [listTexture.slice(0, 3), listTexture.slice(4, 7), listTexture.slice(8, 11), listTexture.slice(12, 15)];
                }
            }
        }
    }

    return result;
}

function saveData(){
    let resultJson = decodingData(objects, vertices, colors, vertexNormals, textures);
    var json = JSON.stringify(resultJson, null, 2);
    let dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(json);
    let exportFileDefaultName = "model.json";
    
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
    console.log(resultJson);
}
    
    // for (var i = 0; i<listObject.length; i++) {
    //     var object = {"name" : listObject[i].name, vertices : []}

    //     var offset = listObject[i].off;
    //     var count = listObject[i].count;
    //     for(var j = offset * 2; j < (offset + count) * 2; j += 2){
    //         object.vertices.push({
    //             xAxis : listVertex[j],
    //             yAxis : listVertex[j+1],
    //             color :  {
    //                 r : listColor[j/2*3],
    //                 g : listColor[j/2*3+1],
    //                 b : listColor[j/2*3+2],
    //             }
    //         });
    //     }
    //     result.push(object);
    // }
    // return result;
// }