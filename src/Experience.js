// src/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Projects & Experience</h2>
      <div className="space-y-12">
        {/* TradeX */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">TradeX</h3>
          <p className="italic text-gray-500">Troy, MI - Founder & Developer (September 2023 - Present)</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-lg">
            <li>
              Created a trading bot using Python from scratch, leveraging advanced technical analysis and algorithmic trading principles such as Support/Resistance and Bollinger Bands; achieved consistent 3% monthly returns with a 40% trade success rate.
            </li>
            <li>
              Integrated the bot with Interactive Broker TWS API after transitioning from thinkorswim; rewrote parts of the bot in C++ to enhance performance, resulting in a 20% increase in trade execution speed.
            </li>
            <li>
              Conducted daily Profit/Loss Analysis using Python and libraries such as TWS and Pandas to refine trading strategies, improving the bot’s effectiveness.
            </li>
          </ul>
        </div>

        {/* HELAU LLC */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">HELAU LLC</h3>
          <p className="italic text-gray-500">Troy, MI - Founder & Developer (July 2023 - January 2024)</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-lg">
            <li>
              Engineered B2B and B2C ChatBot solutions using Pandas, NLTK, TensorFlow, and Firebase, generating $5,000 in revenue within 6 months.
            </li>
            <li>
              Customized ChatBot features for 5 local businesses and 3 nonprofits, improving engagement for clients like Troy School District and Brookdale Senior Living Centers.
            </li>
            <li>
              Developed a fully customizable ChatBot using NLP and ML algorithms, reducing deployment time to hours through a versatile embed snippet.
            </li>
          </ul>
        </div>

        {/* DASH Coin & OpenWave */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">DASH Coin & OpenWave</h3>
          <p className="italic text-gray-500">Troy, MI - Developer (May 2024 - August 2024)</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-lg">
            <li>
              Developed DASH (Decentralized Ashmit) coin, hosted on CoinBase, generating $200 over the summer using Motoko for backend development and the ICP network for deployment.
            </li>
            <li>
              Built OpenWave, a digital art marketplace inspired by OpenSea, utilizing the MERN stack for full-stack development and integrated with the ICP network.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;