import React from "react";
import CarouselHero from "./CarouselHero";
import ContactComponent from "./ContactComponent";
import TextRevealOnScroll from "./TextAnimation";
import LogoVision from "../../img/image.png";
export const HomePage = () => {
  return (
    <div>
      <CarouselHero />
      <TextRevealOnScroll text="50+ Startups empowered by 2025" />

      {/* About us */}
      <div className="w-[90%] lg:w-[80%] my-10 h-fit relative flex flex-col lg:flex-row mx-auto items-center justify-center bg-gray-900 rounded-md">
        <div className="w-[90%] lg:w-[45%] lg:py-[5rem] py-[1.5rem] lg:mr-16">
          <h1 className="font-bold  mb-2 lg:mb-5  text-xl md:text-3xl text-[#f6f6f6]">
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
      <div className="bg-black  py-[5rem] md:py-[10rem] flex justify-center items-center relative my-20">
        <img
          className="absolute w-full h-full left-0 top-0 z-0 "
          src="https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="w-[80%] flex md:flex-row flex-col  z-10 justify-evenly">
          <div className="w-[100%] md:w-[40%] p-4  flex flex-col">
            <img
              className="mb-3 w-1/6"
              src="data:image/png;base64,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"
            />
            <h1 className="mb-4 text-white font-bold text-xl md:text-3xl">
              Our Vision
            </h1>
            <p className=" text-white leading-[2rem] text-justify">
              Our vision is to assist budding entrepreneurs to develop their
              business ideas to commercialization through a feasible one-stop
              center.
            </p>
          </div>
          <div className="w-[100%] md:w-[40%] p-4 flex flex-col">
            <img
              className="mb-3 w-1/6"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEq0lEQVR4nO2c228VVRTGJwIiRAkXHxTrJaX0UaOiGI0vGrBEY7kqAd+MBomGB0RNBE28xIK+GPUFJTFqBIrEGBHUf8B71CeprT6KGLCUYkAp/ZmVLmItnj3TOd+czhz3L2lyMp3ub8139uy915o9TZJIJBKJRCKRSCQSiUQikaoBzABuBR4EngZeA94Auv3ndeBV4CngAT93RvJ/BbgS2ODm9ALDjJ9h/9tub+uKpJkBrgKeAL7KaVgWQ78EHrcvKGkWgGuAt4DTNI4zwIfAjUlVARYAnzLxfAJcn1QFYCbwMjBEeTjjd8HFSZkB1gC/UV4OA6uTsgFc4L2uKlhvnJ6UAaAd+J7q8R3QNtHm3VDyWzaNo8DNE2XencAf4gsaAPYBXcBDPqau8c9d/js7R8kg0NFo85YJ13WngZ3AImBSBu3JwB3ALuFM/xdwd6PMsws9JQp8D9BaRyzzgL2iWE4Ct2vdOjfgm4ATorGnU3xH/C66nReq4hob5OXAr4Ige+vpdYH42oA+QXyHgBZ1cNOBb0TmXSIN7t9xXioy0Qoe05SBvSm6bVtlQYV7Yr8g3h2qgFajoTOD1vnAvcC7wEEfb0/4Zzt2j52ToZ0VophXKcY9xbe5J+NF/5ShLbtFl2do731B3P11jYfAe6J1XmtAYxLwUo52XwTOC7Q7X7RO7M5rXgcadqbo5DHvLNtS2t4tuobFeaorNmMqWFTwWLW0AZ3gR2DqeAzcIhI+Vis98wkjy5iXRm+ticXTvuNo2JzVvDlC0X0BHZttKXq2BPaLNMyT2VkMfB4dLwR0rICg4p2AzjahzrNp5s0Sl4vWBbR6hDoHAzrrhTo2JM0KGfgYWtYGtCxxVzEY0LkPLZtCBm6qqIEDDTRwY9otbN1UxbomvIVn1jTQBZ8TCnYFdCy3VfF2QMcyFhXPBM1zwdnCZcxHAR0rDKhYGdA5INIYyLSMcdHNQtHJgYV0n2ghPaWGxhRhZ3gyk3kuPNXTl0LzSGB5kWUyYAkaesaVyrn4YpH4rhSdesaorSlt297BQvP5pAEBDIV2AFhJKme2sDWlnNUuKmftzmWeB9EiKqjuzaC1NGMFqDdjdfsDQdz2pG9ubgPFs+WyDFo26K+y3Bb4wRfbg/7Zjq2sNWGMacfaULCiLvNGBbRD9G22SQIKx9ouSga2K4OaBnwtCKrPHj3KAjs3zrnAz4I4v7Cisjq4Fn/orDCxraCepzDvF+AydXxng1woKgL0y8aXf8Y8xW07WPjGdNuA4xtxFNijx/l19jrFbItf021at2oH3ulbwhQM+dOzjlpp33/M1Et8jara3vYncFdDzBt1IR3imh6et+73hbWVodb6z3o/dqAgzXyZhuhdkMNUlyO2ZW9CzBuzmedbqoftNpuXlAFGqjdVe81Bt31NBSNpn2ITZlEcChVfSwHlftVrTlIVgOuAjwt6tTUrwz5zX5tUFeBq//ZV68bxvO66IGkWGNmsac+dPy/whevPgEflm8RLauYjnoH0eI/J08t6/IWbh5vetBDARcAtwP2+te4Vq8eN+qcT2/3YFj/Hzr0w2GgkEolEIpFIJBKJRCKRSFJC/gYcOVEZfQhgUQAAAABJRU5ErkJggg=="
            />
            <h1 className="mb-4  text-white font-bold text-xl md:text-3xl">
              Our Mission
            </h1>
            <p className=" text-white leading-[2rem] text-justify">
              Our mission is to provide a nurturing environment where
              entrepreneurial spirits can flourish, and groundbreaking concepts
              can take root, transforming into impactful and enduring ventures.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-[90%] lg:w-[80%] relative m-10  flex flex-col lg:flex-row mx-auto items-center">
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          src="https://img.freepik.com/free-vector/minimalist-white-abstract-background_23-2148816315.jpg?w=1380&t=st=1706348269~exp=1706348869~hmac=ae61f2daa5ad5b200c6b8d2a65d39feb690e746ef4e1ede65d5fee104185e2b7"
          alt=""
        />
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-10 md:p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADh0lEQVR4nO2ZbWiOYRTHfxSNeStjm5JiPnipbV+0SBRTlIRSopS8hhQpX8SoIT6I+aCJ8EGR+DKSt5mpKUbmPYm85GVpzbzt5Xl0dB7dPT3Pdd27r3tPj7r/db7s+l/nnP/ua+c61xlEiBAhggP6APOBauAu0Az8Bsbwn6AXsAJ4D8RT2GEghyxHDnAujQCvxYBGYDFZ+iXO+xCRbBVkGZYEECHWBZRnOtnewAzgKHAfeAfk6s+fBBQiVqv+B2hheAN8B8p6QsRE4E5SAld0bZKDiMTfzEj19czz8zpgNVAQlghJtC1FAlW6vspRiNhc9XUmxVoLsNBVxBDgU5rg25SzKwQhG9TXwTTrP4BxLkIqDMF3K2dLiEIOGDhHXIQ0GRwfU87SEIQsUl8nDJy3Lm1Gp8GxVCrBcAvPTwkepb4eWIpCv6CXXMzg+KtyBI8chDR44rVZuFLuA+G1welp5ZSHcLSkMgquGjjSeAZGlcFxovyuD0HIAvV11sA57iKkweBYeivBzBCEjFZfjQbODRchrQbHcr/0VXvqICLRIeQDHQbeBxchNy1JrPRUrnsBRFzTS1dQaeHWuAgp0/qdzrl8sckON/w63TsbaDfwpOiU4IidlmQuK6+0myI6Pc2i7WvuIAQUW4J06NESXO+GEHlNCsb64BYTEmosgeSroY1ds4/EPnsGEekaxbjaBUJEgSWYPITGK3efDyH7lVui0xUTtzBMIbk+ktuk3EM+uPIVBJt9cAvCFFLoI+Ba5Vb74AoH3WPjloYlQjrOk5ZgMS2hglM+khMOusfUmMa1gCTumsBzquXAK0ug58A8j2gbP66cxKBOJpIvLPyPwEZgaHcE5OvLMN0TN/GGuKi/UZmioCX4kg8RCZNKOEz3io856rPLsOeXvutnmQTIb3M78M3gqEUrTpFnX38961+6IcJbhtckPZiKNEaLZa9Mdaak+gqmTrddq1GeZ4/cA3t83hs2Ex97k4bceRqz3dIdyHDwX2l9bCA3ee4IwTQ9QqYjENRi6ltiJDDBkt9P7Q7YaiDV6QQQJdu64TCt1nOEBwL1Bq5M+f+OP1MtvgQGqaNlPt7TPWFtGlsw2FARZUKZNsGpnnGPrdb3pMU0B8F0Q4vErRQLcoQEIyxVLFPWqrmgxz15/TYW2F5tmbRKHPAwCwTEPdUzMPz8Ky1TVu8iJEKECBEi0BP4A9KuT41znQPmAAAAAElFTkSuQmCC" />
          <h1 className="font-bold">Who We Are</h1>
          <p className="text-center">
            India’s first United Nation sustainable development Goals Incubator
            supported by Atal Innovation Mission, NITI Aayog, Govt of India & UN
            SDSN
          </p>
        </div>
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-10 md:p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2au2sUQRjAf2cUjJ4BtRQRy+ADxJQ+sBNbTQ5sxD8gxIj4AFERRZOoSHqjpRamU89HJ0ELRQsREdJIChONFgaNEVwZ+IRxyN7Otzuz3sH94INwO4/vtzszezMXaNOmTQg2A3XgJlAlPlXp66H0HQzTYCIx0KBcB7ALuAo8A6aBBYlp+ewKsFPKpjFo9fcgpMiY1XDvItc7gZPAjFUuK4zYcanrUrPK3Qj9qI+IRMW51gdMKQTc+AAccNqsSF8DZQxl09k54HcBib9h2rgMLKFkTId3Agi4cbtsmUuK5O4pZS6UJdGnSMqsVt05htn+2BKdMjl9k7ou9bRDbApYEVPklCKZL8DanCKJLM1R6FC+J/qtunlEPma8NHOzW5HEW2BZQZEE2BFD5Joigb1O3bwiIzFEniuWWwKJTORNtkvuwrD8bTOjWG5delNi3GOe+Ob3D8NWI0POtZ8eIqP4swaYzWhvXpFfMJFZSc6XUY8bM59XpEsKmFilHFrjDYaQS7cMwyTH0BpKyc+biQKT1uW+Z72nROBiIJF9inrnY4j0BBBZCrxR1NsWayP1vqBIv6LOu0V2o8E4WEBkNfBZUadGRMzu7VVOEZ/lNpF4WcZOcRPwQyniu9wm8u7YSkkcU4r4LrcJcJQSqchBQRI47sac4I22vS8CSrwGVsZOuirHmDXnjm0EPgWQMF9/NljtVuSQYzD0Ad0tq1PTgc0e4FcBiQXZfdrYR6bmMLu0Q2zNoYQbJzIOsesxflYYS3nUZs1/nEOinvK+qMqTqMtyXyrrgTmFxHdnXjQVZxQip2liljfYXLlhyrZpo8B3aDU9iWc0PXMeEt9oAZ54iDyiBdgCfM343SToPwHEZB1wFpi0BCblM3Ot5ThsiRyixekBtv/vJGgV/gDgcwfekiTAiAAAAABJRU5ErkJggg==" />{" "}
          <h1 className="font-bold">What We Do</h1>
          <p className="text-center">We work on accelerating the impact</p>
        </div>
        <div className="w-full lg:w-2/6 flex-col flex items-center  justify-items-start p-10 md:p-14 z-10">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdUlEQVR4nO2ZW4hNURjHf+6SkcklaXKZxAxDZCaRa0hDXnhweVTCyK1c4kG5pMnTSFEeeONFyaQ8mCQ80Mikxii55DjGXBgyGDJms/SdWq325Zy913bOqfOvr2b2+vZe67fX96317XWgoILyRl2AY8GyrpHAMeBLvoFskVm4B6zUrk8D2vIFZAjwzRjAXWC2tG/KF5CBwCeXQbzSwiwvQJQWA4+NQbz71wJFuQoyE3gNvAcOAsPkej9gHdAkEOpvpbURQCbECXLV6EwB7ZZcMTUCeBYBZEecIJc8Ok0AW4FBmu+1iMtvU5wgYwTml0fnL4AV4rsmIogDzCFmqT3iCvDbpXMbie6I1dke+CzgBnAOmGQkvwqhPq3zl9JWbAGkwwjXyGrWHv4TOA+UaO2VQD3QCCy0sBk6mlXbBPno0kEPcAYY5+Kvls52SyC1NkE2Ah88OlIlyjbxGwzskpBw81WzeQIol9ArkwLT7UU5YnewLLUvHPUoST6Lz1ifASmIRR7PVgvDEY+XlSp3rKtY3qpepqvcUJrsA3JcfCYCDXL/LSMHioDDBtBXWwOvlrJETfFy7fpo4CRwESiVawd8QKaKT4NL2wNgtQGkcqNX2q3ordHpWQ+/+cB3H5Dh4meW/bo9NICWyczFAtKtJbaqhzYAF3x2+5SpTRSZ2aCV6qbMONpyHlkLgCdaJ9flenmGy6jKq1SONKbhnwCmYFn9gfXATi1E6jIE+QEskXsHAHtldv3ueepRWYeSeoNDtf/Vt8d2oyxJ19QSvF++LFMbZ33APftsgbQArVJnnQYehQBwK9GrtD42+/i+0cAjKWFh4G7Wa1S3fr6pkIykVbKPqHidK7uzTaB0QGqJQVVZAGmwDVHhUxCGDa/UAuLnl7QNYZbm7RHD7b48uyTAryduCHU9bLgltBrtUIBvp80l2AsiTLgltV17XkCN5gC3bYEkfCAyDbdWrRKu9Pi+cQyrsQWiL8EVEcKtTWo05Kgnnd9SuuUbKBaVySmj3mGHnKr4tVdopzKdaYbhqbgggmbCrV2HzCSnuoBRcYH4Jf6MAAi3dj/bQ4xK/CeIZtuHc+kk/nSXn9miQPQBS8mCWixCOMBlsqSkx+oUBqIbGJ8tkGo5pHgeEcKJc7kNozLZwZ0QVkqOqCaDzc7NckZhAXIOpKCC/r6BP70hvz71ThLzAAAAAElFTkSuQmCC" />
          <h1 className="font-bold">Whom We Support</h1>
          <p className="text-center">
            From early stage social enterprise, purpose-driven companies, to
            NGOs, innovators, change makers
          </p>
        </div>
      </div>

      {/* Events */}

      <div className="w-[90%] lg:w-[80%] h-fit relative   mb-10 flex lg:flex-row flex-col-reverse items-center mx-auto ">
        <div className="w-full lg:w-[30%] h-[300px] bg-zinc-600">
          <img
            className="w-full object-cover h-full "
            src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="w-full lg:w-[80%] flex flex-col justify-items-center items-start mb-3 lg:mb-0  lg:p-10  z-10">
          <h1 className="font-bold mb-2 lg:mb-5 text-xl md:text-3xl">Events</h1>
          <p className="leading-[2rem] ">
            Lorem ipsum dolor sit amro o et tem laboriosam fugit accusantium
            dolorem dignissimos esse cupiditate. Quos porro amet atque ratione
            minus cum dolorum, voluptatem voluptatibus? Aperiam, est nulla,
            atque inventore impedit distinctio libero quas fugiat id sit
            nesciunt quos accusantium in? Unde laboriosam mollitia iure
            assumenda! Ipsa obcaecati doloremque, explicabo dolore ullam dicta
            libero nemo soluta facere architecto.
          </p>

          {/* <a href="#" className="navigate-btn">
            Read More
          </a> */}
        </div>
      </div>

      <ContactComponent />
      <div className="fixed right-5 bottom-5">
        <a href="" className="mb-1">
          <img src="data:image/png;base64,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"></img>
        </a>

        <a href="" className="mb-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2ZzUrDQBDH82S7Vby1JTsoPpAieFBv0qMP4UyEQq03L4KWWh/Am4eASXupYEeiWL9o6W5jdgPzgzku+f/2m00UCYIgBE3DYKwArxTgRANxFaUAJwqor+KkvVZ4beiwqtB6URk8cO557+HhU4Ja1gLFtAlI4NJewODYe3CYV24tEEBo/l4ioEvoxc2dhI86Q767TznLpzyb8Q+CHoGN7YSvb554GTpkgePOcGn44AUGo5RrLZCPX/4E3ju55a3di5Xaexd4/b1imd/XxartvQvYThktAvA/vb6I52wa3gjYMBil9RY47z7WW+D07CE8AdmFQEaAZAppOYlJdiGWbRTkNspyEuu6XSVUyU+L6wlgZi8A1C/7QudcBnv2AnHS9h4cPqoB2IxcKH4u+A6vgPadwn9JUKt4n6/yuV0V3zLYc+55QRCEqCreAAESa+zxbT1rAAAAAElFTkSuQmCC"/></a>
        <a href="" className="mb-1">
          <img src="data:image/png;base64,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"></img>
        </a>
      </div>
    </div>
  );
};
