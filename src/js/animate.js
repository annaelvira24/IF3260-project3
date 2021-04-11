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
        theta[torso1Id] = (theta[torso1Id] + 3)%360;

        // rotate head
        if(theta[head1Id] >= 45){
            headDirection = 'left';
        }
        else if(theta[head1Id] <= -45){
            headDirection = 'right';
        }
        headDirection == 'left' ? theta[head1Id]-=10 : theta[head1Id]+=10;

        // rotate arm
        if(theta[leftarm1Id] >= 90){
            armDirection = 'back';
        }
        else if(theta[leftarm1Id] <= -90){
            armDirection = 'front';
        }

        if(armDirection == 'back'){
            theta[leftarm1Id]-=15;
            theta[rightarm1Id]+=15;
        }
        else{
            theta[leftarm1Id]+=15;
            theta[rightarm1Id]-=15;
        }

        // rotate leg
        if(theta[leftleg1Id] >= 45){
            legDirection = 'back';
        }
        else if(theta[leftleg1Id] <= -45){
            legDirection = 'front';
        }

        if(legDirection == 'back'){
            translate[torso1Id]+=0.01;
            theta[leftleg1Id]-=7.5;
            theta[rightleg1Id]+=7.5;
            theta[leftfoot1Id]-=4;
            theta[rightfoot1Id]+=4;
            translate[leftfoot1Id]-=0.005;
            translate[rightfoot1Id]+=0.005;
        }
        else{
            translate[torso1Id]-=0.01;
            theta[leftleg1Id]+=7.5;
            theta[rightleg1Id]-=7.5;
            theta[leftfoot1Id]+=4;
            theta[rightfoot1Id]-=4;
            translate[leftfoot1Id]+=0.005;
            translate[rightfoot1Id]-=0.005;
        }

        var stack = [];
        for(var j=0; j<numNodes; j++){
            initNodes(j);
        }
        traverse(torso1Id, stack);
        console.log(theta);
        await timer(100);
    }
}