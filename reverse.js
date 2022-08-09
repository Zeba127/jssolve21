function reverseString(text){
    let allreverse = '';
    for(let i=text.length-1;i>=0;i--){
        const element = text[i];
        allreverse = allreverse + element;
         console.log(element,allreverse);

    }
   return allreverse;
}

const myString = 'i am a student';
const allreverse =reverseString(myString);
console.log(allreverse)


