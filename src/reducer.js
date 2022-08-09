const reducer = (state,action) => {
    switch(action.type){
        case actions.SET_MY_SHIPS:
            let positions = []
            for(let i=0;i<action.ship.size;i++){
                if(action.ship.axis === 'x'){
                    positions.push(action.ship.position+i)
                }
                else{
                    positions.push(action.ship.position +i*10)
                }
            }
           return {
                startGame : state.you.ships.length === 5,
                winner :state.winner,
                opponent : {...state.opponent},
                you : {
                    board : [...state.you.board],
                    ships : [...state.you.ships,{...action.ship,positions}]
                }
           }
        
        case actions.SET_OPPONENT_SHIPS:
            return {
                    winner : state.winner,
                    startGame : state.startGame,
                    opponent : {
                        board : [...state.opponent.board],
                        ships : [...action.ship]
                    },
                    you :{ ...state.you}
                }
        case actions.HIT_PLAYER :
            return {
                winner : state.winner,
                startGame : state.startGame,
                opponent : {...state.opponent},
                you : {
                    ...state.you,
                    board : state.you.board.map((i,k) => k === action.position ? true : i )
                }
            }
            case actions.HIT_OPONENT :
                return {
                    winner : state.winner,
                    startGame : state.startGame,
                    opponent : {
                        ...state.opponent,
                        board:state.opponent.board.map((i,k)=>k === action.position ? true : i )
                    },
                    you : {
                        ...state.you
                    }
                }
            case  actions.SET_WINNER:
                return {
                    ...state,
                    winner : action.winner,
                }
            case actions.RESTART:
                return{
                    winner : '',
                    startGame : false,
                    opponent: {
                        board: Array.from(new Array(100)).fill(false),
                        ships: [],
                        avatar: ""
                    },
                    you: {
                        board: Array.from(new Array(100)).fill(false),
                        ships: [],
                        avatar: ""
                    }
                }
        default:
            return state
    }
}
export const actions = {
    SET_MY_SHIPS : "SET_SHIPS_ON_BOARD",
    SET_OPPONENT_SHIPS : "SET_OPPONENT_SHIPS",
    SET_AVATAR : "SET_AVATAR",
    HIT_OPONENT : "HIT_OPONENT",
    HIT_PLAYER : "HIT_PLAYER",
    RESTART : "RESTART",
    SET_WINNER : "SET_WINNER"
}
export default reducer