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
    let wigglyDirection = 'back';
    while(isAnimate){
        gl.clear( gl.COLOR_BUFFER_BIT);
        theta[partsId["torso1Id"]] = (theta[partsId["torso1Id"]] + thetaRotate[partsId["torso1Id"]])%360;
        theta[partsId["torso3Id"]] = (theta[partsId["torso3Id"]] + thetaRotate[partsId["torso3Id"]])%360;

        theta[partsId["base1Id"]] = (theta[partsId["base1Id"]] + 3)%360;
        
        if(theta[partsId["segment1Id"]] >= 30){
            wigglyDirection = 'back';
        }
        else if(theta[partsId["segment1Id"]] <= -30){
            wigglyDirection = 'front';
        }

        // rotate head
        if(theta[partsId["head1Id"]] >= 45){
            headDirection = 'left';
        }
        else if(theta[partsId["head1Id"]] <= -45){
            headDirection = 'right';
        }
        headDirection == 'left' ? theta[partsId["head1Id"]] -= thetaRotate[partsId["head1Id"]] : theta[partsId["head1Id"]] += thetaRotate[partsId["head1Id"]];

        // rotate arm
        if(theta[partsId["leftarm1Id"]] >= 90){
            armDirection = 'back';
        }
        else if(theta[partsId["leftarm1Id"]] <= -90){
            armDirection = 'front';
        }

        if(armDirection == 'back'){
            theta[partsId["leftarm1Id"]] -= thetaRotate[partsId["leftarm1Id"]];
            theta[partsId["rightarm1Id"]] += thetaRotate[partsId["rightarm1Id"]];
        }
        else{
            theta[partsId["leftarm1Id"]] += thetaRotate[partsId["leftarm1Id"]];
            theta[partsId["rightarm1Id"]] -= thetaRotate[partsId["rightarm1Id"]];
        }

        // rotate leg
        if(theta[partsId["leftleg1Id"]] >= 45){
            legDirection = 'back';
        }
        else if(theta[partsId["leftleg1Id"]] <= -45){
            legDirection = 'front';
        }

        if(legDirection == 'back'){
            translate[partsId["torso1Id"]]+= translateMove[partsId["torso1Id"]];
            translate[partsId["torso3Id"]]+= translateMove[partsId["torso3Id"]];
            theta[partsId["leftleg1Id"]] -= thetaRotate[partsId["leftleg1Id"]];
            theta[partsId["rightleg1Id"]]+= thetaRotate[partsId["rightleg1Id"]];;
            theta[partsId["leftfoot1Id"]]-= thetaRotate[partsId["leftfoot1Id"]];;
            theta[partsId["rightfoot1Id"]]+= thetaRotate[partsId["rightfoot1Id"]];;
            translate[partsId["leftfoot1Id"]]-= translateMove[partsId["leftfoot1Id"]];
            translate[partsId["rightfoot1Id"]]+= translateMove[partsId["rightfoot1Id"]];
        }
        else{
            translate[partsId["torso1Id"]]-= translateMove[partsId["torso1Id"]];;
            theta[partsId["leftleg1Id"]]+= thetaRotate[partsId["leftleg1Id"]];;
            theta[partsId["rightleg1Id"]]-= thetaRotate[partsId["rightleg1Id"]];;
            theta[partsId["leftleg3Id"]]+= thetaRotate[partsId["leftleg3Id"]];;
            theta[partsId["rightleg3Id"]]-= thetaRotate[partsId["rightleg3Id"]];;
            theta[partsId["leftfoot1Id"]]+= thetaRotate[partsId["leftfoot1Id"]];;
            theta[partsId["rightfoot1Id"]]-= thetaRotate[partsId["rightfoot1Id"]];;
            translate[partsId["leftfoot1Id"]]+= translateMove[partsId["leftfoot1Id"]];;
            translate[partsId["rightfoot1Id"]]-= translateMove[partsId["rightfoot1Id"]];;
        }

        if(wigglyDirection == 'back'){
            translate[partsId["base1Id"]]+=0.01;
            theta[partsId["segment1Id"]]-=5;
            theta[partsId["segment2Id"]]-=5;
            theta[partsId["segment3Id"]]-=5;
            theta[partsId["end1Id"]]-=5;
            translate[partsId["end1Id"]]-=0.005;
        }
        else{
            translate[partsId["base1Id"]]-=0.01;
            theta[partsId["segment1Id"]]+=5;
            theta[partsId["segment2Id"]]+=5;
            theta[partsId["segment3Id"]]+=5;
            theta[partsId["end1Id"]]+=5;
            translate[partsId["end1Id"]]+=0.005;
        }

        for(var j=0; j<numNodes; j++){
            initNodes(j);
        }
        
        traverseAll(roots);
        await timer(100);
    }
}