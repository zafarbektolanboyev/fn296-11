import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { useTranslation} from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();

  function changeLanguage (lang){
    i18n.changeLanguage(lang);
  };
  return (
    <div className="h-full w-full">
      <Header />
      <div style={{ marginBottom: '20px', padding: '10px' }}>
        <label htmlFor="language-select">{t('select_language')}:</label>
        <select
          id="language-select"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="uz">O'zbekcha</option>
        </select>
      </div>
      <Card/>
      {/* <div className="wrapper container mx-auto flex gap-[50px] pt-[50px] flex-wrap pb-[100px]">
        <div
          key={index}
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
          onClick={handleCardClick}
        >
          <img
            src={country.flags.png}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">{country.name.common}</h1>
            <h1 className="text-xl">
              Population: {country.population.toLocaleString()}
            </h1>
            <h1 className="text-xl">Region: {country.region}</h1>
            <h1 className="text-xl">
              Capital: {country.capital ? country.capital[0] : "N/A"}
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
