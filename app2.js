
// CODE ALONG WITH MATEEN NOTES


// here we are setting the beginning of the game
//also creating our variables to have someplace to store them
const greet = () => {
    alert(
      "You are starting a landscaping business, but all you have are your teeth"
    );
  };
  greet();
  // variable to store values in
  let lawnsCut;
  let money;
  let tool;
  let toolBox = [];
  
  
  
  // the start function
  const start = () => {
    lawnsCut = 0;
    money = 0;
    tool = "teeth";
    askForAction();
  };
  
  // shows how many lawns have been cut and how much money is earned
  const showStatus = () => {
    alert(`You have cut ${lawnsCut} lawns and have $ ${money}`);
    //alert("You have cut " + lawnsCut + " lawns and have $" + money);
  };
  
  
  
  // actions to handle each event
  const askForAction = () => {
    // if our money equals 1000 then we will get an alert that we won
    if (money === 1000) {
      alert("You are a winner!!!");
    } else {
      showStatus();
      // check money value to purchase new tool
      if (money === 5 || money >=50|| money >= 100 || money >= 500) {
        toolStore();
      }
      const choice = prompt("Will you cut the lawn?", "Yes/No/Restart");
      if (choice === "Yes" || choice === "yes") {
        cutLawns();
      }
    }
  };


  const toolStore = () => {
    // check if money is equal to 5 and if toolBox doesn't have rusty Scissors
    if (money === 5 && toolBox.includes("rustyScissors") === false) {
        askForScissors();
        //checks if the user has enough money, $25, and if the toolBox does
        //NOT have oldMower, then run the oldMower function, which replaces rustyScissors 
        // with old mower
    } else if (money === 25 && toolBox.includes("oldMower") === false) {
        askForOldMower();
    } else if (money === 250 && !toolBox.includes("newMower")) {
        askForNewMower();
    }else if (money >= 500 && !toolBox.includes("starvingStudents")) {
        askForStudent();
    }
  };


  //  here we are saying we have a cutLawns function that says if our tool 
  // is teeth then run the function eatLawns
  // or if the tool is "rusty scissors" run the cutWithScissors function
  // that will log a diffrent amount of money every time and so on
  const cutLawns = () => {
    if (tool === "teeth") {
      eatLawns();
    } else if ( tool === "rustyScissors") {
        cutWithScissors();
    }else if (tool ==="oldMower") {
            cutWithOldMower();
    }else if (tool === "newMower") {
            cutWithNewMower();
        }else if (tool ==="starvingStudents") {
            cutWithStudents();
        }
    };


  // here we made functions to make loop through how many lawns cut and to add money for each 
  //diffrent tool we used
  const eatLawns = () => {
    lawnsCut++;
    money += 1;
    askForAction();
  };
// 
  const cutWithScissors = () => {
        lawnsCut++;
        money += 5;
        askForAction();
  };

 const cutWithOldMower = () => {
    lawnsCut++;
    money += 50;
    askForAction();
 };

 const cutWithNewMower = () => {
     lawnsCut++;
     money+=100
     askForAction();
 };

 const cutWithStudents = () => {
     lawnsCut++;
     money+=250;
     askForAction();
 };

 

// here we made the fucntions for each of the diffrent tools in our toolStore
// for exanple, in askForScissors if we want to buy, we will have 5 dollars take from us, 
//we had to make of "rusty scissors" value and then push it into our tool box which replaces 
//our teeth


    const askForScissors = () => {
    const wantScissors = prompt("Do you want to buy some rusty scissors for $5?","Yes/No");
    if (wantScissors === "Yes" || wantScissors === "yes") {
      money -= 5;
      tool = "rustyScissors";
      toolBox.push("rustyScissors");
      showStatus();
    } else if (wantScissors === "No" || wantScissors === "no") {
      askForAction();
    }
  };

const askForOldMower = () => {
    const wantOldMower = prompt ("Do you want to buy an old lawnmower $25", "yes/no");
    if(wantOldMower === "Yes" || wantOldMover ==="yes"){
        money -= 25;
        tool = "oldMower";
        toolBox.push("oldMower");
        showStatus();
    } else if (wantOldMower === "No" || wantOldMower === "no")
    askForAction();
};

//ask if you want new mower
const askForNewMower = () => {
    const wantNewMower = prompt ("Do you want to buy a new mower for $250", "Yes,No");
    if(wantNewMower ==="Yes" || wantNewMower ==="yes") {
        money -= 250;
        tool = "newMower";
        toolBox.push("newMower");
        showStatus();
    }else if (wantNewMower === "No" || wantNewMower ==="no");
    askForAction();
};
// ask if you want to employ student
const askForStudent = () => {
    const employStudent = prompt ("Would you like to pay a student to cut lawn for $500", "yes,no");
    if (wantEmployStudent === "Yes" || wantEmployStudent === "yes") {
        money -= 500;
        tool = "starvingStudents";
        toolBox.push("starvingStudents");
        showStatus();
    }else if (wantEmployStudent === "No" || wantEmployStudent === "no");
    askForAction();

}


  start();
  
  
  





//Here is the code we did with Fatima last night. 


// console.log("hello landscaper world!")
// // use prompt() and alert()
// const tools = {
//     teeth: {
//         cost: 0,
//         earnings: 1
//     },
//     scissors: {
//         cost: 5,
//         earnings: 5
//     },
//     pushLawnmower: {
//         cost: 25,
//         earnings: 50
//     },
//     electricLawnmower: {
//         cost: 250,
//         earnings: 100
//     },
//     students: {
//         cost: 500,
//         earnings: 250
//     }
// }
// let lawnsMowed = 0
// let money = 0
// let tool = "teeth"
// function start() {
//     alert("Welcome to Landscaper! You are working through the summer mowing lawns and are starting off using your teeth. Good luck!")
//     mowLawn()
// }
// function mowLawn() {
//     let userInput = prompt(`Do you want to mow a lawn using your ${tool}?`, `Yes or No`)
//     if (userInput.toLowerCase() === 'yes') {
//         lawnsMowed = lawnsMowed + 1 // lawnsMowed++
//         money = money + tools[tool][earnings]
//         // money = money + tools.tool.earnings <-- this doesn't work!!!!
//         alert(`Nice! You made money using your ${tool}. You now have $${money} from mowing ${lawnsMowed} lawn.`)
//         mowLawn()
//     } else if (userInput.toLowerCase() === 'no') {
//         alert(`Tired already? You've mowed ${lawnsMowed} lawns and made $${money} this summer. Play again next summer!`)
//         // truly start over -- reset all variables
//         lawnsMowed = 0
//         money = 0
//         tool = "teeth"
//         start()
//     } else {
//         alert("That wasn't an option, try again.")
//         mowLawn()
//         // let playAgain = prompt(`Do you want to play again?`, `Yes or No`)
//         // if yes, do this
//         // if no, do that
//         // if something weird, do the other thing
//     }
//     console.log(`lawns mowed ${lawnsMowed}`)
//     console.log(`money ${money}`)
// }

// if (tool === "students") {
//   checkWin()
// } else {
//   upgradeTool()
// }
// function upgradeTool() {
//   const keys = Object.keys(tools)
//   //teeth scissors pushLawnMower,elecric mower students
//   const currentToolIndex = keys.indexOf(tool)
//   if (money >= tools[keys[currrentToolIndex +1]] ["cost"] && tool === "teeth") {
//         const userUpgrade = prompt(`Awesome! You can upgrade your tool to rusty scissors. Do you want to upgrade now?`, `Yes or No`)
        
        
//     if (userUpgrade.toLowerCase() === "yes") {
//             tool = nextTool
//             money = money - tools[nextTool] ["cost"]
//         } else if (userUpgrade.toLowerCase() === "no");
//         alert("Sticking with teeth") }
//         else {
//           alert()
//         }
    
//     }





//     fucntion checkWin() {
//       if (money>= 1000) {
//         alert("You Win")
//       } else 
//        mowLawn()
//     }
// start()





















  