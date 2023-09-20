import React, { useState } from 'react';
import { Monster } from './Monster';
import "./MonstersContainer.css";
import data from "../monsters.json";

const monsters = data.slayerMonsters.sort(
  (a, b) => a.slayerLevel - b.slayerLevel
);

export const MonstersContainer = ({ setModalOn }) => {

  const [modalData, setModalData] = useState(null);

  const openModal = (monster) => {
    setModalData(monster);
    setModalOn(true);
  };


  return (
    <div className="flex flex-wrap flex-auto p-8 bg-slate-800">
      {monsters.map((monster) => (
        <Monster 
          key={monster.name} 
          name={monster.name} 
          level={monster.combatLevel} 
          slayer={monster.slayerLevel}
          img={monster.img} 
          hitpoints={monster.hitpoints}
          itemReq={monster.itemRequirement}
          drops={monster.drops}
          setModalOn={setModalOn}
        />
      ))}

      {modalData && (
        <Modal
          setModalOn={() => {
            setModalData(null); // Clear modal data
            setModalOn(false); // Close the modal
          }}
          {...modalData} // Pass the selected monster's data as props
        />
      )}

    </div>
  );
};
