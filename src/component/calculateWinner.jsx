import squares from "./square";

function calculateWinner(squares) {
  // the lines array below is for every winning combination
  // i.e. there is a winner if there is the same letter (i.e 'X') in boxes 0, 1, and 2 (the first combination below)
  const winningLines = [
    [0, 1, 2], // X,X,X or O,O,O
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // the if statement checks if the there are 3 of the same letters for the winning combos
  // i.e. for winning combo [0, 1, 2] it looks up the values in the squares array -> squares[0], squares[1], squares[2]
  // since we've set the array so that index 0, 1, 2 of squares is 'X' then the if statement should evaluate to true.
  // here's how it breaks down for the first winning combo [0, 1, 2] in lines
  // since a is 0, then squares[a] is squares[0] and the value of squares [0] is 'X'
  // squares[a] is true since it has a value, the value is 'X'
  // squares[a] === squares[b] is true because the value of squares[b] (i.e. squares[1]) is 'X', the same as squares[a]
  // squares[a] === squares[c] is true because squares[c] (i.e. squares[2] is 'X'), the same as squares [a]
  // since all three parts in the if are true the function returns the value of squares[a], which is 'X' and thus the player 'X'
  return null;
}

export default calculateWinner;
