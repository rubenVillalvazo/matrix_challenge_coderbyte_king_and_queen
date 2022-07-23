const MatrixChallenge = (strArr) => {
    /* 
    **********************
    Pieces position 
    **********************
    */
    const queenX = parseInt(strArr[0][1])
    const queenY = parseInt(strArr[0][3])
    const kingX = parseInt(strArr[1][1])
    const kingY = parseInt(strArr[1][3])

    let result = 0

    if (kingInGame(kingX, kingY)) {
        if (!checkStatus(queenX, queenY, kingX, kingY)) {
            return -1
        }

        /* 
        **********************
        King movements 
        **********************
        */
        /* Rigth */
        if (!checkStatus(queenX, queenY, (kingX + 1), kingY)) {
            if (validMovement(kingX + 1, kingY)) {
                result++
            }
        }

        /* Left */
        if (!checkStatus(queenX, queenY, (kingX - 1), kingY)) {
            if (validMovement(kingX - 1, kingY)) {
                result++
            }
        }

        /* Up */
        if (!checkStatus(queenX, queenY, kingX, (kingY + 1))) {
            if (validMovement(kingX, kingY + 1)) {
                result++
            }
        }

        /* Down */
        if (!checkStatus(queenX, queenY, kingX, (kingY - 1))) {
            if (validMovement(kingX, kingY - 1)) {
                result++
            }
        }

        /* Top rigth */
        if (!checkStatus(queenX, queenY, (kingX + 1), (kingY + 1))) {
            if (validMovement(kingX + 1, kingY + 1)) {
                result++
            }
        }

        /* Bottom rigth */
        if (!checkStatus(queenX, queenY, (kingX + 1), (kingY - 1))) {
            if (validMovement(kingX + 1, kingY - 1)) {
                result++
            }
        }

        /* Top left */
        if (!checkStatus(queenX, queenY, (kingX - 1), (kingY + 1))) {
            if (validMovement(kingX - 1, kingY + 1)) {
                result++
            }
        }

        /* Bottom left */
        if (!checkStatus(queenX, queenY, (kingX - 1), (kingY - 1))) {
            if (validMovement(kingX - 1, kingY - 1)) {
                result++
            }
        }

        let kingXCanTakeQueenX;
        let kingYCanTakeQueenY;

        if ((queenX - kingX) < 0) {
            kingXCanTakeQueenX = (queenX - kingX) * -1
        } else {
            kingXCanTakeQueenX = (queenX - kingX)
        }

        if ((queenY - kingY) < 0) {
            kingYCanTakeQueenY = (queenY - kingY) * -1
        } else {
            kingYCanTakeQueenY = (queenY - kingY)
        }

        if ((kingXCanTakeQueenX >= 0 && kingXCanTakeQueenX <= 1) && (kingYCanTakeQueenY >= 0 && kingYCanTakeQueenY <= 1)) {
            result++
        }
    } else {
        return `The king is not on the chess borad: ${kingX}, ${kingY}`
    }

    return result
}

/* 
**********************
Validate if the king is in the chess board 
**********************
*/
const kingInGame = (kingX, kingY) => {
    if ((kingX <= 8 && kingX >= 1) && (kingY <= 8 && kingY >= 1)) {
        return true
    }
    return false
}

/* 
**********************
Get the valid movements 
**********************
*/
const validMovement = (kingX, kingY) => {
    if ((kingX >= 1 && kingX <= 8) && (kingY >= 1 && kingY <= 8)) {
        return true
    }
    return false
}

const checkStatus = (queenX, queenY, kingX, kingY) => {
    /* 
    **********************
    Check for horizontal and vertical 'check' 
    **********************
    */
    if (queenX === kingX || queenY === kingY) {
        return true
    }

    /*
    ********************** 
    Diagonal check 
    **********************
    */
    /* Top rigth check */
    for (let x = queenX, y = queenY; x <= 8, y <= 8; x++, y++) {
        if (x === kingX && y === kingY) {
            return true
        }
    }

    /* Top left check */
    for (let x = queenX, y = queenY; x >= 1, y <= 8; x--, y++) {
        if (x === kingX && y === kingY) {
            return true
        }
    }

    /* Bottom rigt check */
    for (let x = queenX, y = queenY; x <= 8, y >= 1; x++, y--) {
        if (x === kingX && y === kingY) {
            return true
        }
    }

    /* Bottom left check */
    for (let x = queenX, y = queenY; x >= 1, y >= 1; x--, y--) {
        if (x === kingX && y === kingY) {
            return true
        }
    }

    return false

}


// keep this function call here
console.log(MatrixChallenge(["(4,4)", "(6,6)"])); //Must return 6 possible movements
console.log(MatrixChallenge(["(4,4)", "(0,6)"])); //Must return error
console.log(MatrixChallenge(["(4,4)", "(2,6)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(4,6)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(6,6)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(6,4)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(6,2)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(4,2)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(2,2)"])); //Check and return possible movements
console.log(MatrixChallenge(["(4,4)", "(2,4)"])); //Check and return possible movements
console.log(MatrixChallenge(["(1,8)", "(3,5)"])); //Must return -1 because the king is not in check
console.log(MatrixChallenge(["(1,1)", "(1,4)"])); //Must return 3 because there is just 3 valid movements
console.log(MatrixChallenge(["(4,4)", "(3,4)"])); //Must return 3 taking the queen's position