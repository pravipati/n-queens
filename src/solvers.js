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

  for(var i = 0; i < n; i++){
    var initBoard = new Board({n: n});
    initBoard.togglePiece(0,i);
    recurseBoard(initBoard,1,n);
  }
  //set R1 to (0,0)




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

  //declare finalSolArray
  var finalSolArray = [];
  //instantiate an empty board

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

  for(var i = 0; i < n; i++){
    var initBoard = new Board({n: n});
    initBoard.togglePiece(0,i);
    recurseBoard(initBoard,1,n);
  }
  //set R1 to (0,0)


  var solutionCount = finalSolArray.length; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0 || n === 2 || n === 3) {
    var solution = new Board({n: n}).rows();
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    return solution;
  }

  //declare finalSolArray
  var finalSolArray = [];
  //instantiate an empty board

  var recurseBoard = function(board, numQueens, n){
  //recursive function: recurseBoard
    //input: board obj, numQueens, n
    //output: an array of boards with numQueens+1 rooks
    //if numQueens = n,
      //push the board to finalSolArray
      //return
    if (numQueens === n) {
      finalSolArray.push(board);
      return;
    }
    //initialize outputSolArray
    var  outputSolArray =[];
    //loop through numQueensth row
    for (var j = 0; j < n; j++) {
      // create a copy of the board
      var boardArray = arrayTrueCopy(board.rows());
      var newBoard = new Board(boardArray);
      // add rook to board at (numQueens, j)
      newBoard.togglePiece(numQueens, j);
      // check for conflict
        // board.hasAny....
      var conflictPool = !newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts() && !newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts();
      // if no conflict (all false), then push to outputSolArray
      if(conflictPool === true){
        outputSolArray.push(newBoard);
      }
    }
    //for each board in outputSolArray
    for(var k = 0; k < outputSolArray.length; k++){
      recurseBoard(outputSolArray[k], numQueens + 1, n);
    }

    //recurseBoard(outputSolArray[i], numQueens )
    //
  };

  for(var i = 0; i < n; i++){
    var initBoard = new Board({n: n});
    initBoard.togglePiece(0,i);
    recurseBoard(initBoard,1,n);
  }
  //set R1 to (0,0)

  var solution = finalSolArray[0].rows(); //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  if (n === 0 || n === 1){
    var solutionCount = 1;
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }
  if (n === 2 || n === 3) {
    var solutionCount = 0;
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }


  //declare finalSolArray
  var finalSolArray = [];
  //instantiate an empty board

  var recurseBoard = function(board, numQueens, n){
  //recursive function: recurseBoard
    //input: board obj, numQueens, n
    //output: an array of boards with numQueens+1 rooks
    //if numQueens = n,
      //push the board to finalSolArray
      //return
    if  (numQueens === n) {
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
      // add rook to board at (numQueens, j)
      newBoard.togglePiece(numQueens, j);
      // check for conflict
        // board.hasAny....
      var conflictPool = !newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts() && !newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts();
      // if no conflict (all false), then push to outputSolArray
      if(conflictPool === true){
        outputSolArray.push(newBoard);
      }
    }
    //for each board in outputSolArray
    for(var k = 0; k < outputSolArray.length; k++){
      recurseBoard(outputSolArray[k], numQueens + 1, n);
    }

    //recurseBoard(outputSolArray[i], numQueens )
    //
  };

  for(var i = 0; i < n; i++){
    var initBoard = new Board({n: n});
    initBoard.togglePiece(0,i);
    recurseBoard(initBoard,1,n);
  }
  //set R1 to (0,0)

  var solutionCount = finalSolArray.length; //fixme



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensSolutionsOptimized = function(n) {

  if (n === 0 || n === 1){
    var solutionCount = 1;
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }
  if (n === 2 || n === 3) {
    var solutionCount = 0;
    console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    return solutionCount;
  }


  var finalSolArray = [];
  //pass the indexes of the col we want to test
  //call it colIndexArr
  var recurseBoard = function(board, numQueens, n, colIndexArray){
    if  (numQueens === n) {
      finalSolArray.push(board);
      return;
    }
    var  outputSolArray =[];
    for (var j = 0; j < colIndexArray.length; j++) {
      var boardArray = arrayTrueCopy(board.rows());
      var newBoard = new Board(boardArray);
      newBoard.togglePiece(numQueens, colIndexArray[j]);
      var conflictPool = !newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts() && !newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts();
      if(conflictPool === true){
        outputSolArray.push(newBoard);
        colIndexArray.slice(colIndexArray[j],1);
      }
    }
    for(var k = 0; k < outputSolArray.length; k++){
      recurseBoard(outputSolArray[k], numQueens + 1, n, colIndexArray);
    }

  };

  var initColArray = [];
  for(var i = 0; i < n; i++){
    initColArray.push(i);
  }

  for(var i = 0; i < n; i++){
    var initBoard = new Board({n: n});
    initBoard.togglePiece(0,i);
    recurseBoard(initBoard, 1, n, initColArray);
  }

  var solutionCount = finalSolArray.length; //fixme



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
