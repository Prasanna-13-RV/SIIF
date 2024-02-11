import React from "react";
import CarouselHero from "./CarouselHero";
import ContactComponent from "./ContactComponent";
import TextRevealOnScroll from "./TextAnimation";

export const HomePage = () => {
  return (
    <div>
      <CarouselHero />
      <TextRevealOnScroll text="50+ Startups empowered by 2025" />

      {/* About us */}
      <div className="w-[90%] lg:w-[70%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-gray-900 rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[3rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5 text-3xl text-[#f6f6f6]">
            About Us
          </h1>
          <p className="leading-[2rem] text-[#f6f6f6] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.? Quodel
            alias et. Iusto et temporibus natus deleniti corporis incidunt,
            error quasi obcaecati dolore laudantium laboriosam fugit accusantium
            dolorem dignissimos esse cupiditate. Quos porro amet atque ratione
            minus cum dolorum, voluptatem voluptatibus? Aperiam, est nulla,
            atque inventore impedit distinctio libero quas fugiat id sit
            nesciunt quos accusantium in? Unde laboriosam mollitia iure
            assumenda! Ipsa obcaecati doloremque, explicabo dolore ullam dicta
            libero nemo soluta facere architecto.
          </p>
        </div>

        <img
          className="w-[90%] lg:w-[35%]  lg:my-[5rem] my-[3rem]"
          style={{ borderRadius: "3%" }}
          src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      <div className=" w-[90%] lg:w-[70%] relative m-10  flex flex-col lg:flex-row mx-auto items-center">
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          src="https://img.freepik.com/free-vector/minimalist-white-abstract-background_23-2148816315.jpg?w=1380&t=st=1706348269~exp=1706348869~hmac=ae61f2daa5ad5b200c6b8d2a65d39feb690e746ef4e1ede65d5fee104185e2b7"
          alt=""
        />
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADh0lEQVR4nO2ZbWiOYRTHfxSNeStjm5JiPnipbV+0SBRTlIRSopS8hhQpX8SoIT6I+aCJ8EGR+DKSt5mpKUbmPYm85GVpzbzt5Xl0dB7dPT3Pdd27r3tPj7r/db7s+l/nnP/ua+c61xlEiBAhggP6APOBauAu0Az8Bsbwn6AXsAJ4D8RT2GEghyxHDnAujQCvxYBGYDFZ+iXO+xCRbBVkGZYEECHWBZRnOtnewAzgKHAfeAfk6s+fBBQiVqv+B2hheAN8B8p6QsRE4E5SAld0bZKDiMTfzEj19czz8zpgNVAQlghJtC1FAlW6vspRiNhc9XUmxVoLsNBVxBDgU5rg25SzKwQhG9TXwTTrP4BxLkIqDMF3K2dLiEIOGDhHXIQ0GRwfU87SEIQsUl8nDJy3Lm1Gp8GxVCrBcAvPTwkepb4eWIpCv6CXXMzg+KtyBI8chDR44rVZuFLuA+G1welp5ZSHcLSkMgquGjjSeAZGlcFxovyuD0HIAvV11sA57iKkweBYeivBzBCEjFZfjQbODRchrQbHcr/0VXvqICLRIeQDHQbeBxchNy1JrPRUrnsBRFzTS1dQaeHWuAgp0/qdzrl8sckON/w63TsbaDfwpOiU4IidlmQuK6+0myI6Pc2i7WvuIAQUW4J06NESXO+GEHlNCsb64BYTEmosgeSroY1ds4/EPnsGEekaxbjaBUJEgSWYPITGK3efDyH7lVui0xUTtzBMIbk+ktuk3EM+uPIVBJt9cAvCFFLoI+Ba5Vb74AoH3WPjloYlQjrOk5ZgMS2hglM+khMOusfUmMa1gCTumsBzquXAK0ug58A8j2gbP66cxKBOJpIvLPyPwEZgaHcE5OvLMN0TN/GGuKi/UZmioCX4kg8RCZNKOEz3io856rPLsOeXvutnmQTIb3M78M3gqEUrTpFnX38961+6IcJbhtckPZiKNEaLZa9Mdaak+gqmTrddq1GeZ4/cA3t83hs2Ex97k4bceRqz3dIdyHDwX2l9bCA3ee4IwTQ9QqYjENRi6ltiJDDBkt9P7Q7YaiDV6QQQJdu64TCt1nOEBwL1Bq5M+f+OP1MtvgQGqaNlPt7TPWFtGlsw2FARZUKZNsGpnnGPrdb3pMU0B8F0Q4vErRQLcoQEIyxVLFPWqrmgxz15/TYW2F5tmbRKHPAwCwTEPdUzMPz8Ky1TVu8iJEKECBEi0BP4A9KuT41znQPmAAAAAElFTkSuQmCC" />
          <h1 className="font-bold">Who We Are</h1>
          <p className="text-center">
            India’s first United Nation sustainable development Goals Incubator
            supported by Atal Innovation Mission, NITI Aayog, Govt of India & UN
            SDSN
          </p>
        </div>
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2au2sUQRjAf2cUjJ4BtRQRy+ADxJQ+sBNbTQ5sxD8gxIj4AFERRZOoSHqjpRamU89HJ0ELRQsREdJIChONFgaNEVwZ+IRxyN7Otzuz3sH94INwO4/vtzszezMXaNOmTQg2A3XgJlAlPlXp66H0HQzTYCIx0KBcB7ALuAo8A6aBBYlp+ewKsFPKpjFo9fcgpMiY1XDvItc7gZPAjFUuK4zYcanrUrPK3Qj9qI+IRMW51gdMKQTc+AAccNqsSF8DZQxl09k54HcBib9h2rgMLKFkTId3Agi4cbtsmUuK5O4pZS6UJdGnSMqsVt05htn+2BKdMjl9k7ou9bRDbApYEVPklCKZL8DanCKJLM1R6FC+J/qtunlEPma8NHOzW5HEW2BZQZEE2BFD5Joigb1O3bwiIzFEniuWWwKJTORNtkvuwrD8bTOjWG5delNi3GOe+Ob3D8NWI0POtZ8eIqP4swaYzWhvXpFfMJFZSc6XUY8bM59XpEsKmFilHFrjDYaQS7cMwyTH0BpKyc+biQKT1uW+Z72nROBiIJF9inrnY4j0BBBZCrxR1NsWayP1vqBIv6LOu0V2o8E4WEBkNfBZUadGRMzu7VVOEZ/lNpF4WcZOcRPwQyniu9wm8u7YSkkcU4r4LrcJcJQSqchBQRI47sac4I22vS8CSrwGVsZOuirHmDXnjm0EPgWQMF9/NljtVuSQYzD0Ad0tq1PTgc0e4FcBiQXZfdrYR6bmMLu0Q2zNoYQbJzIOsesxflYYS3nUZs1/nEOinvK+qMqTqMtyXyrrgTmFxHdnXjQVZxQip2liljfYXLlhyrZpo8B3aDU9iWc0PXMeEt9oAZ54iDyiBdgCfM343SToPwHEZB1wFpi0BCblM3Ot5ThsiRyixekBtv/vJGgV/gDgcwfekiTAiAAAAABJRU5ErkJggg==" />{" "}
          <h1 className="font-bold">What We Do</h1>
          <p className="text-center">We work on accelerating the impact</p>
        </div>
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdUlEQVR4nO2ZW4hNURjHf+6SkcklaXKZxAxDZCaRa0hDXnhweVTCyK1c4kG5pMnTSFEeeONFyaQ8mCQ80Mikxii55DjGXBgyGDJms/SdWq325Zy913bOqfOvr2b2+vZe67fX96317XWgoILyRl2AY8GyrpHAMeBLvoFskVm4B6zUrk8D2vIFZAjwzRjAXWC2tG/KF5CBwCeXQbzSwiwvQJQWA4+NQbz71wJFuQoyE3gNvAcOAsPkej9gHdAkEOpvpbURQCbECXLV6EwB7ZZcMTUCeBYBZEecIJc8Ok0AW4FBmu+1iMtvU5wgYwTml0fnL4AV4rsmIogDzCFmqT3iCvDbpXMbie6I1dke+CzgBnAOmGQkvwqhPq3zl9JWbAGkwwjXyGrWHv4TOA+UaO2VQD3QCCy0sBk6mlXbBPno0kEPcAYY5+Kvls52SyC1NkE2Ah88OlIlyjbxGwzskpBw81WzeQIol9ArkwLT7UU5YnewLLUvHPUoST6Lz1ifASmIRR7PVgvDEY+XlSp3rKtY3qpepqvcUJrsA3JcfCYCDXL/LSMHioDDBtBXWwOvlrJETfFy7fpo4CRwESiVawd8QKaKT4NL2wNgtQGkcqNX2q3ordHpWQ+/+cB3H5Dh4meW/bo9NICWyczFAtKtJbaqhzYAF3x2+5SpTRSZ2aCV6qbMONpyHlkLgCdaJ9flenmGy6jKq1SONKbhnwCmYFn9gfXATi1E6jIE+QEskXsHAHtldv3ueepRWYeSeoNDtf/Vt8d2oyxJ19QSvF++LFMbZ33APftsgbQArVJnnQYehQBwK9GrtD42+/i+0cAjKWFh4G7Wa1S3fr6pkIykVbKPqHidK7uzTaB0QGqJQVVZAGmwDVHhUxCGDa/UAuLnl7QNYZbm7RHD7b48uyTAryduCHU9bLgltBrtUIBvp80l2AsiTLgltV17XkCN5gC3bYEkfCAyDbdWrRKu9Pi+cQyrsQWiL8EVEcKtTWo05Kgnnd9SuuUbKBaVySmj3mGHnKr4tVdopzKdaYbhqbgggmbCrV2HzCSnuoBRcYH4Jf6MAAi3dj/bQ4xK/CeIZtuHc+kk/nSXn9miQPQBS8mCWixCOMBlsqSkx+oUBqIbGJ8tkGo5pHgeEcKJc7kNozLZwZ0QVkqOqCaDzc7NckZhAXIOpKCC/r6BP70hvz71ThLzAAAAAElFTkSuQmCC" />
          <h1 className="font-bold">Whom We Support</h1>
          <p className="text-center">
            From early stage social enterprise, purpose-driven companies, to
            NGOs, innovators, change makers
          </p>
        </div>
      </div>

      {/* Events */}

      <div className="w-[90%] lg:w-[70%] h-fit relative   mb-10 flex lg:flex-row flex-col-reverse items-center mx-auto ">
        <div className="w-full lg:w-[30%] h-[300px] bg-zinc-600">
          <img
            className="w-full object-cover h-full "
            src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="w-full lg:w-[70%] flex flex-col justify-items-center items-start mb-3 lg:mb-0  lg:p-10  z-10">
          <h1 className="font-bold mb-2 lg:mb-5 text-3xl">Events</h1>
          <p className="leading-[2rem] ">
            Lorem ipsum dolor sit amro o et tem laboriosam fugit accusantium
            dolorem dignissimos esse cupiditate. Quos porro amet atque ratione
            minus cum dolorum, voluptatem voluptatibus? Aperiam, est nulla,
            atque inventore impedit distinctio libero quas fugiat id sit
            nesciunt quos accusantium in? Unde laboriosam mollitia iure
            assumenda! Ipsa obcaecati doloremque, explicabo dolore ullam dicta
            libero nemo soluta facere architecto.
          </p>

          <a href="#" className="navigate-btn">
            Read More
          </a>
        </div>
      </div>

      <ContactComponent />
    </div>
  );
};
