const lyrics = 'Allah will help us when we are in danger';

// const doesexist = lyrics.includes ('whon');
const searchString = 'danger';
// const doesexist = lyrics.includes(searchstring);
const lyricsCase = lyrics.toLowerCase()
// const doesexist = lyricsCase.includes(searchString)
const searchStringCase = searchString.toLowerCase();
const doesexist = lyricsCase.includes(searchStringCase)

console.log(doesexist);

//index

console.log(lyrics.indexOf('us'));

if(lyrics.indexOf('will') !== -1){
 console.log('will is there');
}

else{
    console.log('will is not there')
}

//startwith
console.log(lyrics.startsWith('Allah'));


//endwith


const fileName = 'Anika.pdf';
const fileType ='info.png';

console.log(fileName.endsWith('.pdf'));
