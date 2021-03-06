/* 
Author: Karimu Mohammed
Project Name: Dubstep
Description: From CodeWars> "Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
url= https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
"
Date Created: 2020.04.26
Date Modified: 2020.04.27
*/

const songDecoder = (song) =>
  song
    .split("WUB")
    .filter((noWub) => noWub != "")
    .join(" ");

/*     
    //Psuedo code time everybody. So this dubstep is a fun one.

    //First get some function (or constant) songDecoder that takes song as an input. -done

    //Second replace Wub's with spaces or split the string on each instance of Wub as a delimitter
    let noWubs = song.split("WUB"); //after testing return I can see I'm not done, and I'll have to mutate the noWubs array to get rid of space's.
    let noWubClean = noWubs.filter(noWub => noWub != '')
    

    //Third join the split apart array into a new string 
    let ogSong = noWubClean.join(" ")
    return ogSong;

    //Let's reduced to an effective one line

 */

/* 
Dope Alternative Code Wars Solutions and Why I like them

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

//This solution is just smooth and smart as all hell. Need to get my trim game up.


function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

  //Super similar to the answer i thought, but their filter is simpler because empty strings evaluate to false, thus Boolean works just fine. Super smart and worth remembering.


*/

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
