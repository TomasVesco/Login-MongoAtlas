process.on('message', ( cant ) => {

    let array = [];

    let uniqueNumbers = [];
    let numbersRepet = [];
    let count = 1;
    
    const finishProcess = [];

    for(let i = 0; i <= cant ;i++){
        array.push(Math.floor(Math.random() * (1000 - 1)) + 1);
    }
    
    array = array.sort(function(a,b){return a - b});

    for(let i = 1; i <= cant ;i++){
        if(array[i] === array[i+1]){
            count++;
        } else {
            uniqueNumbers.push(array[i]);
            numbersRepet.push(count);
            count = 1;
        }
    }

    for(let i = 0; i < uniqueNumbers.length; i++){
        if(numbersRepet[i] > 1){
            finishProcess.push(`El número [${uniqueNumbers[i]}] se ha repetido: ${numbersRepet[i]} veces`);
        } else {
            finishProcess.push(`El número [${uniqueNumbers[i]}] se ha repetido: ${numbersRepet[i]} vez`);
        }
    }

    process.send(finishProcess);
    process.exit();
});