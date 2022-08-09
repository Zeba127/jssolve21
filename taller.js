function maxArray(numbers){
    let larger = numbers[0];
     for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element>larger){
          larger = element;
        }

     }
     return larger;

}

const height = [167, 190, 120, 165, 137,500];
const tallest = maxArray(height);
console.log('tallest number',tallest);
