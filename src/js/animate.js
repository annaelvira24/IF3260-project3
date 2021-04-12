const timer = ms => new Promise(res => setTimeout(res, ms))

function updateAnimate(){
    let checkboxAnim = document.getElementById('animate');
    isAnimate = checkboxAnim.checked;

    startAnimate();
}

async function startAnimate(){
    let headDirection = 'left';
    let armDirection = 'back';
    let legDirection = 'back';
    while(isAnimate){
        gl.clear( gl.COLOR_BUFFER_BIT);
        theta[partsId["torso1Id"]] = (theta[partsId["torso1Id"]] + 3)%360;

        // rotate head
        if(theta[partsId["head1Id"]] >= 45){
            headDirection = 'left';
        }
        else if(theta[partsId["head1Id"]] <= -45){
            headDirection = 'right';
        }
        headDirection == 'left' ? theta[partsId["head1Id"]]-=10 : theta[partsId["head1Id"]]+=10;

        // rotate arm
        if(theta[partsId["leftarm1Id"]] >= 90){
            armDirection = 'back';
        }
        else if(theta[partsId["leftarm1Id"]] <= -90){
            armDirection = 'front';
        }

        if(armDirection == 'back'){
            theta[partsId["leftarm1Id"]]-=15;
            theta[partsId["rightarm1Id"]]+=15;
        }
        else{
            theta[partsId["leftarm1Id"]]+=15;
            theta[partsId["rightarm1Id"]]-=15;
        }

        // rotate leg
        if(theta[partsId["leftleg1Id"]] >= 45){
            legDirection = 'back';
        }
        else if(theta[partsId["leftleg1Id"]] <= -45){
            legDirection = 'front';
        }

        if(legDirection == 'back'){
            translate[partsId["torso1Id"]]+=0.01;
            theta[partsId["leftleg1Id"]]-=7.5;
            theta[partsId["rightleg1Id"]]+=7.5;
            theta[partsId["leftfoot1Id"]]-=4;
            theta[partsId["rightfoot1Id"]]+=4;
            translate[partsId["leftfoot1Id"]]-=0.005;
            translate[partsId["rightfoot1Id"]]+=0.005;
        }
        else{
            translate[partsId["torso1Id"]]-=0.01;
            theta[partsId["leftleg1Id"]]+=7.5;
            theta[partsId["rightleg1Id"]]-=7.5;
            theta[partsId["leftfoot1Id"]]+=4;
            theta[partsId["rightfoot1Id"]]-=4;
            translate[partsId["leftfoot1Id"]]+=0.005;
            translate[partsId["rightfoot1Id"]]-=0.005;
        }

        var stack = [];
        for(var j=0; j<numNodes; j++){
            initNodes(j);
        }
        traverse(partsId["torso1Id"], stack);
        console.log(theta);
        await timer(100);
    }
}