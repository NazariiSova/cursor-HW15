export let arr = [];


const getRandomArray = (length, min, max) => {
    
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.round(Math.random() * (max - min) + min)
        arr.push(randomNumber);
    }
   

}

getRandomArray(15, 1, 100);