import React, { useState,useContext, useEffect } from 'react'
import Background from './background/background'
import CellSelectionGrid from './player/cellSelectionGrid'
import SetShips from './player/setShips'
import { BordContainer, GameContainer, GameWindow } from './style/grids'
import {shipContext} from '../context'
import AttackFeild from './AttackFeild'

function SetupGame() {
    const [axis,setAxis] = useState('x')
    const {myShips} = useContext(shipContext)
    
  return (
    <GameWindow>
      <Background/>
      <h1 onClick={()=> setAxis(axis==='x' ? 'y' :'x')} className='axis_board'>Axis : {axis.toUpperCase()}</h1>
      <GameContainer>
        { !(myShips.length===5) ?
          <BordContainer >
          <SetShips/>
          <CellSelectionGrid axis={axis}/>
        </BordContainer> 
        : 
        <AttackFeild/>
        }
      </GameContainer>
    </GameWindow>
  )
}

export default SetupGame