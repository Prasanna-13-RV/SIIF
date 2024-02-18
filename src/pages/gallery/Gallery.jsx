import React from "react";
import Card from "../../components/gallery/Card.component";

export const Gallery = () => {
  const gallery = [
    {
      image:
        "https://res.cloudinary.com/difpe3hca/image/upload/v1708254305/SIIF/IMG_1420_pftawz.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/difpe3hca/image/upload/v1708254292/SIIF/IMG_1352_ejei69.jpg",
    },
	{
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254197/SIIF/IMG_20231030_115905_vxujme.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254196/SIIF/IMG_20231031_104932_yqe4kt.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254182/SIIF/IMG_20230721_141728_hessyh.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254179/SIIF/IMG_20230812_114131_fkqbki.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254160/SIIF/IMG_20230721_140642_rtsal0.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708254128/SIIF/IMG-20230607-WA0017_iglm6m.jpg",
	  },
	  {
		image:
		  "https://res.cloudinary.com/difpe3hca/image/upload/v1708253644/SIIF/IMG_20230614_163203_327_clivig.webp",
	  },
	 
  ];
  return (
    <div className="px-10 lg:px-14 xl:px-16 my-5 grid grid-cols-3 gap-10">
      {gallery.map((x, index) => (
        <Card gallery={x}/>
      ))}
    </div>
  );
};
