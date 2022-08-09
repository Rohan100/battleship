import React, { useState, useContext, useEffect } from 'react'
import { Board, BordContainer, ShipContainer, Cell, AttackPosition } from './style/grids'
import Modal from 'react-modal'
import COmputerSHips from './computerShips'
import { shipContext } from '../context'
import { shipTypes } from '../gameHelper/shipTypes'
import Computer from '../gameHelper/computerShip'
function AttackFeild() {
  const { myShips, myBoard, setOpponentShips,setWinner,winner, restartGame } = useContext(shipContext)
  const [filled, setFilled] = useState([])
  const [playerTurn,setTurn] = useState(true)


  useEffect(() => {
    let cp = new Computer().shipPosition()
    setOpponentShips(cp.shipPositions, cp.board)
  }, [])

  useEffect(() => {
    let a = [];
    myShips.map(i => i.positions.map(p => a.push(p)))
    setFilled(a)
  }, [myShips])

  useEffect(() => {
    if(!winner)
    if (filled.every(i => myBoard[i]) && filled.length) {
      setWinner("computer")
      // alert("you are not winner")
    }
  }, [myBoard, filled, setWinner,winner])


  return (
    <>
      <BordContainer>
        {
          <Modal isOpen={winner && true} style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
            overlay : {
              background : 'transparent'
            }
          }}>
            <h1>{winner} is winner !!</h1>
            <button className='btn' onClick={() => restartGame()}>restart</button>
          </Modal>
        }
        <ShipContainer>
          <Board>
            <>
              {
                myShips.map((item, k) =>
                  shipTypes[k].getShip(item)
                )
              }

              {
                myBoard.map((i, k) => i &&
                  <AttackPosition
                    key={k}
                    row={Math.floor(k / 10)}
                    col={k % 10}
                    hit={filled.includes(k)}
                  />

                )
              }
            </>
          </Board>
        </ShipContainer>
        <ShipContainer >
          <Board>
            {
              Array.from(Array(100).keys()).map(i =>
                <Cell
                  key={i}
                />
              )}
          </Board>
        </ShipContainer>
      </BordContainer>
      <COmputerSHips attack={playerTurn} setTurn={setTurn} />
    </>
  )
}

export default AttackFeild