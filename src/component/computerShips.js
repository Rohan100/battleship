import React, { useContext, useEffect, useState } from 'react'
import { shipContext } from '../context'
import { AttackPosition, Board, BordContainer, Cell, ShipContainer } from './style/grids'
import ComputerLogic from '../gameHelper/computerLogic'
import { shipTypes } from '../gameHelper/shipTypes'

function COmputerSHips({ attack, setTurn }) {
    const { opponentBoard, hitOpponent, opponentShips, myBoard, hitPlayer, setWinner, winner, myShips } = useContext(shipContext)
    const [hover, setHover] = useState();
    const [previousHit, setPreviousHit] = useState();
    const [filled, setFilled] = useState([])
    const hitThisBoard = (i) => {
        if(!opponentBoard[i]){
            hitOpponent(i)
            setTurn(false)
        }
   
    }
    useEffect(() => {
        if(!winner)
        if (filled.every(i => opponentBoard[i]) && filled.length) {
            setWinner("Rohan")
        }
    }, [filled, opponentBoard, setWinner, winner])

    useEffect(() => {
        let a = [];
        opponentShips.map(i => i.positions.map(p => a.push(p)))
        setFilled(a)
    }, [opponentShips])

    useEffect(() => {
        if (!attack) {
            const timer = setTimeout(() => {

                const cLogic = new ComputerLogic(myBoard)
                let rp = cLogic.findRandomPosition(previousHit, setPreviousHit)
                console.log(rp)
                hitPlayer(rp)
                if (myShips.some(i => i.positions.includes(rp)))
                    setPreviousHit(rp)
                setTurn(true)
            }, 700);
            return () => clearTimeout(timer)
        }
    }, [attack, myBoard, filled, previousHit, hitPlayer, setTurn])


    return (
        <BordContainer>
            <ShipContainer>
                <Board>
                    {
                        opponentBoard.map((i, k) => i &&
                            <AttackPosition
                                key={k}
                                row={Math.floor(k / 10)}
                                col={k % 10}
                                hit={filled.includes(k)}
                            />

                        )
                    }
                    {
                        opponentShips.map((item, k) =>
                            item.positions.every(i => opponentBoard[i]) && shipTypes[k].getShip(item)
                        )
                    }
                </Board>
            </ShipContainer>
            <ShipContainer>
                <Board>
                    {
                        Array.from(Array(100).keys()).map(i =>
                            <Cell
                                onClick={() => hitThisBoard(i)}
                                key={i}
                                highlight={attack && hover === i}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => setHover(i)}
                            />
                        )
                    }
                </Board>
            </ShipContainer>
        </BordContainer>

    )
}

export default COmputerSHips