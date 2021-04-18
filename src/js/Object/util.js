function getCenterPoint(start, end, arr){
    let maxX = -1;
    let minX = 1;
    let maxY = -1;
    let minY = 1;

    for (var i = start; i < end; i+=3){
        if(maxX < arr[i]){
            maxX = arr[i];
        }

        if(minX > arr[i]){
            minX = arr[i];
        }

        if(maxY < arr[i+1]){
            maxY = arr[i+1];
        }

        if(minY > arr[i+1]){
            minY = arr[i+1];
        }
    }

    let centerX = (maxX + minX)/2;
    let centerY = (maxY + minY)/2;
    console.log(centerX, centerY)
    return ([centerX, centerY])
}

function resetValue(){
    document.getElementById('scale').value = 1;
    document.getElementById('rotateX').value = 0;
    document.getElementById('rotateY').value = 0;
    document.getElementById('rotateZ').value = 0;

    oldValueRotX = 0;
    oldValueRotY = 0;
    oldValueRotZ = 0;

}

function getSelectedObjectIdx(selectedObject){
    for (var i = 0; i <objects.length; i++){
        if(objects[i].name == selectedObject){
            selectedObjectIdx = i;
            break;
        }
    }

    return selectedObjectIdx;
}


function getMousePosition(canvas, event) { 
    let temp = [];
    let rect = canvas.getBoundingClientRect(); 
    let x = ((event.clientX - rect.left)/(canvas.width))*2-1; 
    let y = -((event.clientY - rect.top)/(canvas.height))*2+1; 
    console.log(x, y);
    temp.push(x);
    temp.push(y)
    return(temp);
} 

var canvasElem = document.querySelector("#glcanvas"); 
canvasElem.addEventListener('mousedown', (e) => 
{ 
    vec = getMousePosition(canvasElem, e);
});

function saveData() {
    var json = JSON.stringify(objects, null, 4);
    let dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(json);
    let exportFileDefaultName = "model.json";
    
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
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
    objects = JSON.parse(modelJson);

    var resetButton = document.getElementById("button-tools");
    resetButton.click();
    setUpBufferFromObjects();
    
    for(var i = 0; i<3; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);
    }

}

const loadFile = async (filename) => {
    return await fetchFile(filename);
};

async function fetchFile(filename) {
    return await fetch(filename).then((res) => res.text());
}