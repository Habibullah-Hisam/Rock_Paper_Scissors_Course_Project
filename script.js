let score = {
  Ties: 0,
  Wins: 0,
  Loses: 0
 };

 if (score === null){
  score = {
  Ties: 0,
  Wins: 0,
  Loses: 0
 };
 };

let outputhtml = ``;
let output = document.getElementById("displayResult");




 
 
 
 let cMove = '';
 function ComputerMove() {
   let randomNumber = (Math.random());
   if (randomNumber >= 0 && randomNumber < 1/3){
     cMove = '✊';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
      cMove = '🖐';
    } else {
      cMove = '✌';
    };

  };
  
  let result = '';
function playGame(pMove) {
  ComputerMove();
  if (pMove == cMove) { 
    result = 'Tie';
  } else if (pMove == '✊' && cMove == '🖐') {
    result = 'You lose';
  }else if (pMove == '✊' && cMove == '✌') {
    result = 'You win';
  }else if (pMove == '✌' && cMove == '🖐') {
    result = 'You win';
  }else if (pMove == '✌' && cMove == '✊') {
   result = 'You lose';
  }else if (pMove == '🖐' && cMove == '✊') {
    result = 'You win';
  }else if (pMove == '🖐' && cMove == '✌') {
    result = 'You lose';
  };
 
  
  if (result === 'Tie'){
    score.Ties += 1;
  } else if (result === 'You win'){
    score.Wins += 1;
  } else if (result === 'You lose') {
    score.Loses += 1;
  };
  
  // saving items   
  //  localStorage.setItem('score', JSON.stringify(score));
  outputhtml = `<p class = "resultP">${result}. </p>
  <div class = "moveOutPut"> 
  You <p class = "moves">${pMove}</p>
  <p class = "moves">${cMove}
  </p> 
  Computer 
  </div> 
  <p>
  Score :-   Wins : ${score.Wins}, Losses : ${score.Loses}, Ties : ${score.Ties}</p>`;
  output.innerHTML = outputhtml;
  
};


document.querySelector('.actionButton').addEventListener('click', () => {
  playGame('✊')
});

document.querySelector('.actionButton2').addEventListener('click', () => {
  playGame('🖐')
});

document.querySelector('.actionButton3').addEventListener('click', () => {
  playGame('✌')
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('✊');
  } else if (event.key === 'p') {
    playGame('🖐')
  } else if (event.key === 's') {
    playGame('✌')
  };
});



let pRMove = '';
function PlayersRandomMoveByComputer() {
  let randomNumber = (Math.random());
  if (randomNumber >= 0 && randomNumber < 1/3){
  pRMove = '✊';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
  pRMove = '🖐';
  } else {
  pRMove = '✌';
  };
};

let autoplaying = false;
let intervalId;
function AutoPlay(){
  if(!autoplaying){
    intervalId = setInterval(() => {
      PlayersRandomMoveByComputer();
      playGame(pRMove);
    }, 1000);

    autoplaying = true;
    
  } else {
    clearInterval(intervalId);
    autoplaying = false;
  }

  if(document.getElementById("autoplay").textContent == 'Auto play'){
    document.getElementById("autoplay").textContent = 'Stop';
  }else if(document.getElementById("autoplay").textContent == 'Stop'){
    document.getElementById("autoplay").textContent = 'Auto play';
  }
}

//  let score = JSON.parse(localStorage.getItem('score'));
 

function Reaset(params) {
 score.Ties = 0;
 score.Wins = 0;
 score.Loses = 0;
  outputhtml = `<p> score was reset </p>
  <p>    
  Wins :${score.Wins}  
  Loses :${score.Loses}  
  Ties :${score.Ties} 
  </p>`;
  
  output.innerHTML = outputhtml;

}

let resetDiv = document.getElementById("reaset");
document.getElementById("reasetButton").addEventListener('click', () => {
  resetDiv.innerHTML = `<p>Are you sure you want ot reset the score ? <button id="resetY">Yes</button><button id="resetN">No</button>`;

  document.getElementById("resetY").addEventListener('click', () => {
    Reaset();
    resetDiv.textContent = '';
  });

  document.getElementById("resetN").addEventListener('click', () => {
    resetDiv.textContent = '';
  });
});



  
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'a') {
    AutoPlay();
  };
}
);
