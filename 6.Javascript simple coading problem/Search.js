const lyrics= "Sada sada kala kala ...tumi bondhu kala pakhai ami jano ki ..bosonto kal a bondu tumi aila ki ??"
const search= "PaKHAi";
const searchLowercase = search.toLowerCase();
const lyricsLowercase = lyrics.toLowerCase();
const doseExists =lyricsLowercase.includes(searchLowercase);
const searchOnlineMan = lyrics.toLowerCase().includes(search.toLowerCase());
// console.log(searchOnlineMan);
// console.log(doseExists);
// ------------------------------------------------------------------------------------
console.log(lyrics.indexOf('tumi1'));
if(lyrics.indexOf("sada")!=-1)
{
    console.log("The product is Available Here ");
}
console.log(lyrics.startsWith('Sada'));
console.log(lyrics.endsWith('?'));
