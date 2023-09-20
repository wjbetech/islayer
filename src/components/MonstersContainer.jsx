import React from 'react';
import "./MonstersContainer.css";
import { Monster } from './Monster';
import data from "../monsters.json";
import { Modal } from "./Modal";

const monsters = data.slayerMonsters.sort(
  (a, b) => a.slayerLevel - b.slayerLevel
);

export const MonstersContainer = ({ modalOn, setModalOn, name, level, slayer, img, hitpoints, itemReq, drops }) => {
  return (
    <div className="flex flex-wrap flex-auto p-8 bg-slate-800">
      {monsters.map((m) => (
        <Monster 
          key={m.name} 
          name={m.name} 
          level={m.combatLevel} 
          slayer={m.slayerLevel}
          img={m.img} 
          hitpoints={m.hitpoints}
          itemReq={m.itemRequirement}
          drops={m.drops}
          setModalOn={setModalOn}
        />
      ))}
      {modalOn ? <Modal /> : ""}
    </div>
  );
};
