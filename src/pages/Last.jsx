import React from 'react';
import './Last.css';
import AudioPlayer from 'react-audio-player';
import mashup from '../assets/mashup.mp4';
import mashupnew from '../assets/mashup new.mp4';
import mashup3 from '../assets/mashup 3.mp4';

const LastPage = () => {
 
  return (
    <div className="LastPageContainer" style={{ backgroundColor: '#ffe6cc' }}>
      <p className="ThankYouParagraph">
        As tum yaha iss page pe aa gaye ho that means ki tumne "YESSSSS" bola haiiii😭❤️
        <br />Thank You So Muchhhh for acceptingggggggggg😭<br />
        khair mastiya apart if tumm sach mei yes bole ho and accept kiye ho toh meko iss page ka photo bhej dena samajh jaunga 😁😁<br />
        but yeah if issliye yes click kiya just to see ki kya hota hai aage toh that's very bad🤧......Aisa nai krte not good😂<br />
        chalo thik h as this is the last page of the website yaha tabhi pohochoge if tum "YESS" click kroge so idk tum yaha tak pohochoge aur yeh bakwaas padhoge ki nai meri,<br />
        but yeah if padhoge toh THANK YOUUU ❤️ for being such an amazing part of my life, You came into my life accidently but now you have been the most important person i can wish for(Ofcourse family ke baad you are the only one itni importance and priority pe) <br />
        so yeah a big thank you for jhelyingg me, meri bakwaas lines sunne ke liye, mei jo kuch bhi bolta hu woh sunne ke liye, meri harkate jhelne ke liye in short for everything. <br />
        And yeah sorry bhi bohot pareshan bhi kiya hai maine, but thoda pareshan toh krna bhi chahiye na😂, If kuch maine galat kr diya ho apart from masti kabhi and woh bura lag gaya ho toh am really sorry kabhi mera intention tumhe dukhi krna nahi hota hai so please bacche ko maaf kr diya kro😅😅<br />
        baaki mei tumhare saath hi rehna chahta hu yahi wish hai ab woh tum accept kro fir hoga kuch tho am trying to be perfect jaisa tum chahte ho but fir bhi kuch na kuch reh jaayega and maybe wahi chij special banayegi bond ko apne and relation ko coz imperfect relations lasts longer <br />
        in comparison with the perfect ones kyuki imperfect mei kuch na kuch naya milta hai nayi galtiya hoti hai coz you are imperfect wahi perfect honge toh sab chije perfect hongi toh maja nai aayega na...just saying😅😅<br />
        bass nothing to say more jo tha bol diya ab tumhari baari hai bolne ki so ab i'll be waiting tum kya bolte ho woh sunne ke liye😅<br />
        <br /><br />
        yun kehne ko toh bohot kuch hai par shabd kam hai,<br />
        tum meri aankho mei tumhare liye pyaar dekh lo itna kaafi hai,<br />
        hum tum kahi chalte hai, jaha dono kuch na bole bas mei tumhe dekhu tum mujhe dekhte raho,<br />
        na kuch baate ho,<br />
        bass dekhte rahe aur aankho hi aankho mei baate ho,<br />
        uff yeh mere mehenge khwaab.... <br /><br />
        <br /> Anyways BUBYEEEEEE the end of mera likhna and website too  ✨<br />
        WILL BE WAITINGGGG
        <span><br />And haa at last yeh kuch 1 2 mashups try kiya hai maine banane ka if tumhe pasand aaye sun ke accha lage toh badhiya h dekh lo sun lo aaaram se</span>
      </p>

      <div className="audio">      
        <AudioPlayer
          src={mashup}
          controls
          className="audio-player"
        />
        <AudioPlayer
          src={mashup3}
          controls
          className="audio-player"
        />
        <AudioPlayer
          src={mashupnew}
          controls
          className="audio-player"
        />
        <br />
      </div>
</div>
  );
};

export default LastPage;
