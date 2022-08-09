export default class ComputerLogic {
    constructor(board) {
        this.positions = board
    }

    findRandomPosition(previousHit, setPreviousHit) {
        if (previousHit) {
            let possibleHit = [];
            for (let k in this.positions) {
                if (!this.positions[k])
                    if (k == previousHit - 10 ||
                        k == previousHit + 10 ||
                        k == previousHit + 1 ||
                        k == previousHit - 1)
                        possibleHit.push(k)
            }
            if (possibleHit.length !== 0) {
                let i = Math.round(Math.random() * (possibleHit.length - 1))
                let p = possibleHit[i]
                return parseInt(p)
            } else {
                setPreviousHit()
            }
        }
        let possibleHit = []
        for(let k in this.positions)
        {
            if(!this.positions[k])
            possibleHit.push(k)
        }
        let i = Math.round(Math.random() * (possibleHit.length - 1))

        return parseInt(possibleHit[i])
    }
}

