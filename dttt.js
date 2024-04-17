var color;
var WHITE = -1;
var NOT_CHOSEN = -2;
var playerRed;
var playerBlue;
var WINNINGCOMBO = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var turn = 0;

window.onload = function(){
	color = new Array();
	for (var i = 0; i < 9; ++i) {
		color[i] = WHITE;
	}

	playerRed = new Array();
	for (var i = 0; i < 3; ++i) {
		playerRed[i] = NOT_CHOSEN;
	}

	playerBlue = new Array();
	for (var i = 0; i < 3; ++i) {
		playerBlue[i] = NOT_CHOSEN;
	}
}

function canvasClicked(canvasNumber) {
	var clickedCanvas = document.getElementById("canvas" + canvasNumber);
	if (color[canvasNumber] == WHITE) {
		var disappearingCNum;
		var disappearingCanvas;
		if (turn % 2 == 0) {
			var turn0 = turn / 2;

			// one disappears
			disappearingCNum = playerRed[turn0 % 3];
			if (disappearingCNum != NOT_CHOSEN) {
				disappearingCanvas = document.getElementById("canvas" + disappearingCNum);
				disappearingCanvas.style.background = "white";
				color[disappearingCNum] = WHITE;
			}

			// one appears
			color[canvasNumber] = 0;
			playerRed[turn0 % 3] = canvasNumber;
			clickedCanvas.style.background = "red";
		} else {
			var turn1 = (turn - 1) / 2;

			// one disappears
			disappearingCNum = playerBlue[turn1 % 3];
			if (disappearingCNum != NOT_CHOSEN) {
				disappearingCanvas = document.getElementById("canvas" + disappearingCNum);
				disappearingCanvas.style.background = "white";
				color[disappearingCNum] = WHITE;
			}
			
			// one appears
			color[canvasNumber] = 1;
			playerBlue[turn1 % 3] = canvasNumber;
			clickedCanvas.style.background = "blue";
		}
		++turn;
		checkForWinners(color[canvasNumber]);
	} else {
		alert("That space is already taken.");
	}
}

function checkForWinners(playerNumber) {
	for (var i = 0; i < WINNINGCOMBO.length; ++i) {
		if (color[WINNINGCOMBO[i][0]] == playerNumber
			&& color[WINNINGCOMBO[i][1]] == playerNumber
			&& color[WINNINGCOMBO[i][2]] == playerNumber) {
			alert("Player " + (playerNumber+1) + " won!");
			location.reload();
		}
	}
}

function restart() {
	location.reload();
}
