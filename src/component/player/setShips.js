import React, { useContext } from 'react'
import { shipContext } from '../../context'
import { Board,ShipContainer } from '../style/grids'
import {shipTypes} from '../../gameHelper/shipTypes'
function SetShips() {
   const {myShips} = useContext(shipContext)
  return (
      <ShipContainer>
        <Board>
            {
               myShips.map((item,k) => 
                  shipTypes[k].getShip(item)
               )
            }
        </Board>
        </ShipContainer>
  )
}

export default SetShips