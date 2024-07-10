import React from "react";
import bg from "../assets/homeBG.png";

function Home() {
  return (
    <div className="items-center text-center">
      <div className="border-[#004225] border-2 inline-block w-1/2 h-min p-4 mx-2 my-4 rounded-md dark:border-[#F1C376]">
        <p className="font-sanskritTitle text-4xl text-textPrimary dark:text-titleDark2">
          यदा यदा हि धर्मस्य ग्लानिर् भवति भारत <br />
          अभ्युथानं अधर्मस्य तदात्मानं सृजाम्यहम्
        </p>
        <p className="font-sanskritText p-2 my-2 font-semibold text-lg dark:text-titleDark">
          हे भारत! जब-जब धर्म का नाश होता है, और जब अधर्म की वृद्धि होती है, तब
          मैं स्वयं प्रकट होता हूँ; सज्जनों की रक्षा के लिए, दुष्टों के विनाश के
          लिए, धर्म की दृढ़तापूर्वक स्थापना करने के लिए मैं युग-युग में जन्म
          लेता हूँ।
        </p>
        <img src={bg} alt="" className="m-auto w-1/3 h-60" />
      </div>
    </div>
  );
}

export default Home;
