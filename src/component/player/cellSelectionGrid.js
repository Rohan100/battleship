import React, { useContext, useEffect, useState } from 'react'
import { Board, ShipContainer, Cell } from '../style/grids'
import { shipContext } from '../../context'
function CellSelectionGrid({ axis }) {
  const [hoverlist, setHoverList] = useState([])
  const [llegal, SetLlegal] = useState(true)
  const [shipCount, setShipCount] = useState(0)
  const { setShips } = useContext(shipContext)
  const [shipList, setShipList] = useState([])

  const shipTypes = [{
    name: "carrier",
    len: 5,
  },
{
      name: "battleship",
      len: 4
    },
{
      name: "submarin",
      len: 3,
    },
{
      name: "destroy",
      len: 3,
    },
{
      name: "patrol",
      len: 2
    },]

  const handleHover = (i) => {
    if (shipCount < 5) {
      SetLlegal(true)
      let a = []
      if (axis === 'x') {
        for (let j = 0; j < shipTypes[shipCount].len; j++) {
          a.push(i + j)

          if ((i + j) % 10 === 9) {
            break
          }
          if (shipList.includes(i + j))
            SetLlegal(false)

        }
      }
      else {
        let c = i;
        for (let j = 0; j < shipTypes[shipCount].len; j++) {
          if (i + j > 99) {
            break
          }
          a.push(c)
          c += 10
          if (shipList.includes(c))
            SetLlegal(false)

        }
      }
      if ((i + (shipTypes[shipCount].len - 1)) % 10 < shipTypes[shipCount].len - 1 && axis === 'x') {
        SetLlegal(false)
      }
      else if (i + 40 > 99 && axis === 'Y') {
        SetLlegal(false)
      }

      setHoverList(a)
    }
  }

  const putShip = (i) => {

    if (shipCount < 5 && llegal) {
      setShips({ size: shipTypes[shipCount].len, position: i, axis ,name:shipTypes[shipCount].name })
      setShipCount(shipCount + 1)
      setShipList([...shipList, ...hoverlist])
      SetLlegal(false)

    }
  }

  return (
    <ShipContainer >
      <Board onMouseLeave={() => setHoverList([])}>
        {Array.from(Array(100).keys()).map(i =>
          <Cell
            onClick={() => putShip(i)}
            highlight={hoverlist.includes(i)}
            onMouseEnter={() => { handleHover(i) }}
            llegal={llegal}
          />
        )}
        <img src="../assets/images/carrier.svg" alt="" />
      </Board>
    </ShipContainer >
  )
}

export default CellSelectionGrid