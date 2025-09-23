import React from "react";

const Agence = () => {
  return (
    <>
      <div className="section-1">
        <div className="absolute overflow-hidden h-[20vw] w-[15vw] top-80 left-[30vw] rounded-4xl">
          <img
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative font-[LA-500]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] leading-[18vw] text-center uppercase">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </>
  );
};

export default Agence;
