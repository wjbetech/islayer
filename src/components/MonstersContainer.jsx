import React from 'react'
import "./MonstersContainer.css"
import { Monster } from './Monster'
import data from "../monsters.json"

const monsters = data.slayerMonsters.sort(
  (a, b) => a.slayerLevel - b.slayerLevel
);

console.log(monsters);

const monsterCards = monsters.map((m) => {
  return (
    <Monster 
      key={m.name} 
      name={m.name} 
      level={m.combatLevel} 
      slayer={m.slayerLevel}
      img={m.img} 
      hitpoints={m.hitpoints}
      itemReq={m.itemRequirement}
      drops={m.drops}
    />
  )
})

export const MonstersContainer = () => {
  return (
    <div className="flex flex-wrap flex-auto p-8 bg-slate-800">
      {monsterCards}
    </div>
  )
}
