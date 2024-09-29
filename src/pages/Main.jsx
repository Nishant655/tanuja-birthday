import React from 'react';
import './Main.css';
import AudioPlayer from 'react-audio-player';
import newMp3 from '../assets/neww.mp3';
import new2Mp3 from '../assets/new2.mp3';


const Main = () => {
  return (
    <div className="main-container">
      <div className="section1">
        <h1>Welcome To The Main Section Of The Website</h1>
        <h2>Here's the first wish of your Birthday!!!
          <br />
          More Aheaddddd
        </h2>

        <p>"Happy Birthday to the most amazing person in my life! Every moment with you is a beautiful memory, and today,I just want to remind you how much you mean to me. Your laughter, your kindness, and the way you light up a room—it's
          all magic. I'm so lucky to know you, and even luckier to celebrate another year of your incredible journey.
          Here's to more laughter, more love, and more unforgettable moments together. Have the best birthday ever🎂✨️🎉❤️!"
        </p>
      </div>

      <div className="section2">
        <h2>These songs are Specially For You❤️❤️!!</h2>
        <AudioPlayer
          src={newMp3}
          controls
          className="audio-player"
        />
        <AudioPlayer
          src={new2Mp3}
          controls
          className="audio-player"
        />
    
        <p>Do Use HEADPHONES for better experience✨️✨️ <br />
          I dont know when will you get this to hear i mean or in the very early morning or at night after the day is spent but i just want that this brings a big smile on your face.....
          and yeah even i dont know jab mei tumhe yeh surprise website tumhe bhejunga tab mei tumhare saath rahunga ki nai but if i'll be by your side i would love to see the reaction of yours
          and would like to hear the overall review.
          As these songs are customized specially for you i have tried my level best for this..This is the first time i have tried a song and hope you like this song.....Yes maine nai sing kiya hai but likhne ka try
          kiya hai hope yeh choti choti chije tumhara Birthday thoda special banade.....
          Let me know if you like this.
          ab dekho mei Engineer hu toh mei mere ways mei surprise kr sakta hu na😂😂..So just enjoy the surprise and batao meko if kuch batane jaisa laga toh aur iske baad next page pe jao fir</p>
      </div>

      <div className="section3">
        <p>So this will be the last section of this page ik jyada kuch bhara bhara nai hai yeh website but i just wanted is ki harr baar mei normally paras likhta hu in chat so why not try this on your birthday special day and make it saved as a memory for lifetime yaad bhi rahega and jab chahe access bhi kr sakte hai, haina accha dimaag dekha 😂😂
          anyways jyada ik maine likha nai hai coz already itna likhta hu paras ki tumhe sab pata hai i dont want wahi chije repeat ho wahi sab suno bass utna bolunga "YOU ARE DAMN IMPORTANT FOR ME SO JUST ALWAYS STAY WITH ME NO MATTER WHATEVER HAPPENS🥺",
          Kabhi kuch hota hai we will sort it out, baaki toh gussa kro rutho sab chalega but tumse durr hona yeh sehna mushkil hoga...
        </p>
      </div>
      <a href="/login" className="button">Special Access</a>
    </div>
  );
};

export default Main;