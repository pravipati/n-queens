/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  //declare finalSolArray
  var finalSolArray = [];
  //instantiate an empty board
  var boardx = new Board({n: n});
  //set R1 to (0,0)
  boardx.togglePiece(0,0);

  var recurseBoard = function(board, numRooks, n){
  //recursive function: recurseBoard
    //input: board obj, numRooks, n
    //output: an array of boards with numRooks+1 rooks
    //if numRooks = n,
      //push the board to finalSolArray
      //return
    if (numRooks === n) {
      finalSolArray.push(board);
      return;
    }
    //initialize outputSolArray
    var  outputSolArray =[];
    //loop through numRooksth row
    for (var j = 0; j < n; j++) {
      // create a copy of the board
      var boardArray = arrayTrueCopy(board.rows());
      var newBoard = new Board(boardArray);
      // add rook to board at (numRooks, j)
      newBoard.togglePiece(numRooks, j);
      // check for conflict
        // board.hasAny....
      var conflictPool = !newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()
      // if no conflict (all false), then push to outputSolArray
      if(conflictPool === true){
        outputSolArray.push(newBoard);
      }
    }
    //for each board in outputSolArray
    for(var k = 0; k < outputSolArray.length; k++){
      recurseBoard(outputSolArray[k], numRooks + 1, n);
    }

    //recurseBoard(outputSolArray[i], numRooks )
    //
  };

  recurseBoard(boardx,1,n);



  var solution = finalSolArray[0].rows(); //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.arrayTrueCopy = function(array){
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    outputArray[i] = array[i].slice();
  }
  return outputArray;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
