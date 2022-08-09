import styled,{keyframes} from 'styled-components'

export const Board = styled.div`
    display: grid;
    margin:0px auto;
    grid-template: repeat(10, 3rem) / repeat(10, 3rem);
    text-align: center;
    gap: 3px;
    position : relative;
    @media (max-width: 768px) {
        grid-template: repeat(10, 2rem) / repeat(10, 2rem);
    }
`
export const Cell = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background : ${({ highlight }) => highlight ? 'rgba(255,255,255,0.4)' : ''};
    cursor : ${({ llegal }) => llegal ? 'pointer' : 'not-allowed'};
`
export const BordContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    transition : all 0.6s linear;
    opacity : ${({op}) => op}
}
`

export const GameWindow = styled.div`
    width: 100%;
    display : flex;
    flex-direction : column;
    position : relative;
    min-height : 100vh;
    overflow-y:auto;
`

export const Ship = styled.div`
    display: flex;
    height: 100%;
    grid-area:${({ col, row, axis, len }) => axis === 'x' ? `${row + 1} / ${col + 1} / span 1 / span ${len} `
        : `${row + 1} / ${col + 1} / span ${len} / span 1 `
    };
`
export const ShipContainer = styled.div`
    position: absolute;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    left: 0px;
    right: 0px;

`

export const GameContainer = styled.div`
    display:flex;
    grid-template-columns: auto;
    justify-content : space-around;
    align-items:center;
    height : 32rem;
    @media (max-width: 768px) {
        flex-direction : column;
        height : 46rem;
        min-height : 100%;
    }
`
export const AttackPosition = styled.div`
   &{ display : flex;
    justify-content:center;
    align-items : center;
    position : relative;
    grid-area :${({col,row}) => `${row + 1} / ${col + 1} / span 1 / span 1` } ;
   }
    &:after{
        content: "";
        position : absolute;
        width : 40%;
        height : 40%;
        border-radius : 50%;
        background-color : ${({hit}) => hit ? 'darkred' : 'darkblue' }
    }
`

const animatetop = keyframes`
from {top:-100px; opacity:0} 
to {top:100px; opacity:1}
`
export const Modal = styled.div`
position: absolute;
background-color: white;
padding: 12px;
border: 1px solid #888;
text-align:center;
width: 80%;
top:100px;
border-radius : 1em;
z-index:1;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
-webkit-animation-name: animatetop;
-webkit-animation-duration: 0.4s;
animation-name: ${animatetop};
animation-duration: 0.4s;

`