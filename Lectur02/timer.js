const startTime = Date.now();
function someHeavyTask(){
    for (let i = 0; i <4e7; i++){
        Math.sqrt(i);
    }
}

const endtime = Date.now();

const duration = endtime - startTime;
console.log(`functionfortimework: ${duration} ms`)