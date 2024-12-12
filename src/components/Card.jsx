import React from 'react'
import flagGermany from '../assets/flag-germany.png'
import flagUsa from '../assets/flag-usa.png'
import FlagOfGermany from '../assets/FlagOfGermany.png'
import islandia from '../assets/islandia.png'
import flagBrazil from '../assets/flag-brazil.png'
import albania from '../assets/albania.png'
import algeria from '../assets/algeria.png'
import germany from '../assets/flagGermany.png'

function Card() {
  return (
    <div>
      <div className="wrapper container mx-auto flex gap-[50px] pt-[50px] flex-wrap pb-[100px]">
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={flagGermany}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Germany</h1>
            <h1 className="text-xl">
              Population: 81,770,900
            </h1>
            <h1 className="text-xl">Region: Europe</h1>
            <h1 className="text-xl">
              Capital: Berlin
            </h1>
          </div>
        </div>

        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={flagUsa}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">United States of America</h1>
            <h1 className="text-xl">
                Population: 323,947,000
            </h1>
            <h1 className="text-xl">Region: Europe</h1>
            <h1 className="text-xl">
              Capital: Wahington, D,C
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={flagBrazil}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Brazil</h1>
            <h1 className="text-xl">
              Population: 206,135,893
            </h1>
            <h1 className="text-xl">Region: Americas</h1>
            <h1 className="text-xl">
              Capital: Brasilia
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={FlagOfGermany}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Icelend</h1>
            <h1 className="text-xl">
              Population: 334,300
            </h1>
            <h1 className="text-xl">Region: Europe</h1>
            <h1 className="text-xl">
              Capital: Reykjavik
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={germany}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Afghanistan</h1>
            <h1 className="text-xl">
              Population: 27,657,145
            </h1>
            <h1 className="text-xl">Region: Asia</h1>
            <h1 className="text-xl">
              Capital: Kabul
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={islandia}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Aland Islands</h1>
            <h1 className="text-xl">
              Population: 28,875
            </h1>
            <h1 className="text-xl">Region: Europe</h1>
            <h1 className="text-xl">
              Capital: Meriehamn
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={albania}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Albania</h1>
            <h1 className="text-xl">
              Population: 2,886,026
            </h1>
            <h1 className="text-xl">Region: Europe</h1>
            <h1 className="text-xl">
              Capital: Tirana
            </h1>
          </div>
        </div>
        <div
          className="cart flex flex-col rounded-md w-[264px] cursor-pointer bg-white"
        >
          <img
            src={algeria}
            className=" rounded-md w-[264px] h-[160px]"
            alt=""
          />
          <div className="text p-4">
            <h1 className="text-2xl font-bold">Algeria</h1>
            <h1 className="text-xl">
              Population: 40,400,000
            </h1>
            <h1 className="text-xl">Region: Africa</h1>
            <h1 className="text-xl">
              Capital: Algerias
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
