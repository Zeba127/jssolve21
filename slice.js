const lyrics ='ami nijer kono desh nai. alo nai ami joshna. dekhi tmr alo te'
const parts = lyrics.split(' ');
const sentance = lyrics.split('.')
const char = lyrics.split('')
// console.log(char);

const partial = lyrics.slice(5,8);
console.log(partial);

const partial2 = lyrics.substring(5,8);
console.log(partial2);


const line =['ami nijer kono desh nai', 
'alo nai ami joshna',
 'dekhi tmr alo' ]
const newline = line.join(':');
console.log(newline)

