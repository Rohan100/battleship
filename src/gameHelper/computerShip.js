export default class Computer {
    constructor() {
        this.board = new Array(100).fill(0);
        this.ships = [{ size: 5, name: "" }, { size: 4, name: "" }, { size: 3, name: "" }, {
            size: 3
            , name: ""
        }, {
            size: 2
            , name: ""
        }];
    }

    randomAxis() {
        return Math.random() < 0.5 ? 'x' : 'y'
    }
    isCollape(position, size, axis) {
        if (axis === 'x') {
            for (let i = 0; i < size; i++) {
                if (i && (position + i) % 10 === 0) return true
                if (position + i > 99 || this.board[position + i]===1 )
                    return true

            }
            return false
        }
        for (let i = 0; i < size * 10; i += 10) {
            if (position + i > 99 || this.board[position + i] ===1)
                return true
        }
        return false
    }

    shipPosition() {
        let shipPositions = []
        for (let i = 0; i < 5; i++) {
            shipPositions.push(this.nextShipPosition(i))
        }
        console.log(this.board)
        return { shipPositions, board: this.board }
    }
    nextShipPosition(ind) {
        let axis = this.randomAxis();
        let posiblePosition = [];

        if (ind === 0 && axis === 'x')
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 6; j++) {
                    posiblePosition.push(j + i * 10)
                }
            }
        else if (ind === 0 && axis === 'y')
            posiblePosition = Array.from(Array(59).keys());

        else {
            for (let i = 0; i < 99; i++) {
                !this.isCollape(i, this.ships[ind].size, axis) && posiblePosition.push(i)
            }
        }
        let rp = posiblePosition[Math.floor(Math.random() * posiblePosition.length)]
        let positions = [];
        for (let i = 0; i < this.ships[ind].size; i++) {
            if (axis === 'x') {
                this.board[i + rp] = 1
                positions.push(i+rp)
            }
            else {
                this.board[i * 10 + rp] = 1
                positions.push(i * 10+rp)
            }
        }
        //       console.log("posiblePosition : ",posiblePosition)
        return {
            axis: axis,
            position: rp,
            size: this.ships[ind].size,
            name : this.ships[ind].name,
            positions
        }

    }

}
