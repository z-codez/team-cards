
const team = document.getElementById("team-name");
const sportType = document.getElementById("sport-type");
const year = document.getElementById("year");
const coach = document.getElementById("coach-name");


const filter = document.getElementById("filter");

const displayArticle = document.getElementById("team-cards")
const allPlayers = document.querySelectorAll(".card");

console.log(allPlayers.item(0).querySelector("p:last-of-type").innerText.split(": ")[1]);

team.innerText = " Argentina";
sportType.innerText = " Football";
year.innerText = " 1986";
coach.innerText = " Carlos Bilardo";


// Event Listeners
filter.addEventListener('change', ()=> {
  switch (filter.value) {
    case "nicknames":
      display("nicknames");
      break;
    case "forward":
      display("forwards");
      break;
    case "midfielder":
      display("midfielders");
      break;
    case "defender":
      display("defenders");
      break;
    case "goalkeeper":
      display("goalkeepers");
      break;
    default:
      display();
  }
});

function display(value) {
  let players = [...allPlayers];

  if(value === "nicknames") {
    players = players.filter((player) => {
      const nickname = player.querySelector("p:last-of-type").innerText.split(": ")[1];
      return nickname !== "N/A";
    });
  }
  else if (value === "forwards") {
    players = players.filter(player => {
      const position = player.querySelector("p:first-of-type").innerText.split(": ")[1];
      return position === "forward";
    });
  }
  else if (value === "midfielders") {
    players = players.filter(player => {
      const position = player.querySelector("p:first-of-type").innerText.split(": ")[1];
      return position === "midfielder";
    });
  }
  else if (value === "defenders") {
    players = players.filter(player => {
      const position = player.querySelector("p:first-of-type").innerText.split(": ")[1];
      return position === "defender";
    });
  }
  else if (value === "goalkeepers") {
    players = players.filter(player => {
      const position = player.querySelector("p:first-of-type").innerText.split(": ")[1];
      return position === "goalkeeper";
    });
  }

  // This removes all nodes in "disPlayArticle" from the DOM
  while(displayArticle.hasChildNodes()) {
    displayArticle.removeChild(displayArticle.firstChild);
  }
  players.forEach(player => displayArticle.appendChild(player));
  // else {
  //   //location.reload();
  // }
}


