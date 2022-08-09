import React, { useReducer } from 'react'
import reducer, { actions } from './reducer'
import { defaultAvatar } from './avatars'
export const shipContext = React.createContext()

const initialState = {
    winner : '',
    gameStart : false,
    opponent: {
        board: Array.from(new Array(100)).fill(false),
        ships: [],
        avatar: defaultAvatar.oponnent
    },
    you: {
        board: Array.from(new Array(100)).fill(false),
        ships: [],
        avatar: defaultAvatar.you
    }
}



function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        setShips: (ship) => {
            dispatch({ ship, type: actions.SET_MY_SHIPS })
        },
        setOpponentShips: (ship,board) => {
            dispatch({ ship,board, type: actions.SET_OPPONENT_SHIPS })
        },
        setAvatar: (avatar) => {
            dispatch({ avatar, type: actions.SET_AVATAR })
        },
        hitOpponent:(position)=>{
            dispatch({position,type : actions.HIT_OPONENT})
        }
        ,
        hitPlayer:(position)=>{
            dispatch({position,type : actions.HIT_PLAYER})
        }
        ,
        restartGame:()=>{
            dispatch({type:actions.RESTART})
        },
        setWinner:(winner)=>{
            dispatch({winner,type: actions.SET_WINNER})
        },
        myShips: state.you.ships,
        opponentShips: state.opponent.ships,
        myBoard : state.you.board,
        opponentBoard : state.opponent.board,
        startGame : state.startGame,
        winner : state.winner

    }
    return (
        <shipContext.Provider value={value}>
            {children}
        </shipContext.Provider>
    )
}

export default Provider
