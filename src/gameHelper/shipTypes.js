import Carrier from '../component/ships/Carrier'
import Patrol from '../component/ships/Carrier'
import Battleship from '../component/ships/battleship'
import Submarin from '../component/ships/submarin'
import Destroyer from '../component/ships/destroyer'

export const shipTypes = [
    {
        name : "carrier",
        len: 5,
        getShip : (props)=>
            <Carrier 
            col={props.position%10}
            row={Math.floor(props.position/10)}
            axis={props.axis}
            len={5}
            key="carrier"
        />
        
    },
    {
        name:"battleship",
        len: 4,
        getShip : (props)=>
            <Battleship 
             col={props.position%10}
            row={Math.floor(props.position/10)}
            axis={props.axis}
            len={4}
            key="battleship"
        />
    },
    {
        name : "submarin",
        len: 3,
        getShip : (props)=>
            <Submarin 
             col={props.position%10}
            row={Math.floor(props.position/10)}
            axis={props.axis}
            len={3}
            key="submarin"
        />
    },
    {
        name : "destroy",
        len: 3,
        getShip : (props)=>
            <Destroyer
             col={props.position%10}
            row={Math.floor(props.position/10)}
            axis={props.axis}
            len={3}
            key="destroy"
        />
    },
    {
        name : "patrol",
        len: 2,
        getShip : (props)=>
            <Patrol 
             col={props.position%10}
            row={Math.floor(props.position/10)}
            axis={props.axis}
            len={2}
            key="patrol"
        />
    }
]