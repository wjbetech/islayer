import React from 'react'
import "./MonstersContainer.css"
import { Monster } from './Monster'
import data from "../monsters.json"

const monsters = data.slayerMonsters;

const monsterCards = monsters.map((m) => {
  return (
    <Monster key={m.name} name={m.name} level={m.combatLevel} img={m.img} />
  )
})

export const MonstersContainer = () => {


  return (
    <div className="flex flex-wrap">
      {monsterCards}
    </div>
  )
}
