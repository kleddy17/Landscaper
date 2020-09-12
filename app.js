// The ability to take user input
// The ability for the user to earn money
// The ability to buy tools and use the new tool
// The ability to win the game and end it
// Hint: Try setting the win amount to $10 frst, then $50, and etc. until you get to the end to allow for easier testing!



const earnDollar = () => {
    return ++money;
 }
 
 const buyTool = () => {
     const goToStore = prompt("Would you like to buy a tool?", "Yes/No")
     if (goToStore === "yes") {
     return (buyScissors)
     } else if (goToStore === "no")
     console.log(buyPushMower)
 const buyScissors = prompt("Would you like to buy Scissors?","Yes/No")
       if (buyScissors === "yes") {
         console.log(money-5);
         money -=5
         alert (`You have just bought scissors, You have ${money} left `)
     } else if (buyScissors === "no") {
        prompt("Would you like to buy push mower?", "Yes/No")
     }
 }
 buyTool()
 
 
 const buyScissors = prompt("Would you like to buy Scissors?","Yes/No")
       if (buyScissors === "yes") {
         console.log(money-5);
         money -=5
         alert (`You have just bought scissors, You have ${money} left `)
     } else if (buyScissors === "no") {
        prompt("Would you like to buy push mower?", "Yes/No")
     }
 
 let money=0;
 let tools=1;
 
 const start = () => {
     money = 0;
     tools = 1;
     prompt("Would you like to become a landscaper?", "yes/no");
 if (start === "yes" || start ==="Yes") {
         useTeeth();
 }else if (start ==="no" || start === "No") {
         console.log("Goodbye!") 
 }
 };
 
 const useTeeth =  () => {
     prompt ("Would you like to cut grass with your teeth?","Yes/No");
    if (useTeeth === "yes") {
        console.log(++money);
          alert( "You have earned $1", money)
    }else if(useTeeth === "no"){
          alert("BYE")
 }
 };
 start();
 
 const lawnTwo = () => {
   const useTeeth = prompt("Would you like to cut grass with your teeth?","Yes/No");
     console.log(useTeeth);
      if (useTeeth === "yes") {
        console.log(++money);
     //    earnDollar()
 alert( "You have earned $1", money)
      }else if 
             (useTeeth === "no") 
                 alert("BYE")
             }
 lawnTwo()
 
 const lawnThree = () => {
     const useTeeth = prompt ("Would you like to cut grass with your teeth?","Yes/No");
     console.log(useTeeth);
      if (useTeeth === "yes") {
        console.log(++money);
        alert( "You have earned $1", money)
      }else if 
             (useTeeth === "no") 
                 alert("BYE")
             }
 lawnThree()
 
 const lawnFour = () => {
     const useTeeth = prompt ("Would you like to cut grass with your teeth?","Yes/No");
     console.log(useTeeth);
      if (useTeeth === "yes") {
        console.log(++money);
        alert( "You have earned $1", money)
      }else if 
             (useTeeth === "no") 
                 alert("BYE")
             }
 lawnFour()
 
 const lawnFive = () => {
     const useTeeth = prompt ("Would you like to cut grass with your teeth?","Yes/No");
     console.log(useTeeth);
      if (useTeeth === "yes") {
        console.log(++money);
 alert( "You have earned $1", money)
      }else if 
             (useTeeth === "no") 
                 alert("BYE")
             }
 //             // else if {
 //             //     (money = 5)
 //             // }
 lawnFive()
 
 
 
 
 
 
 
 const buyTool = () => {
     const goToStore = prompt("Would you like to buy a tool?", "Yes/No")
     if( goToStore === "no") {
     console.log("Have a nice day!")}
     else if (goToStore === "yes") {
     const buyScissors = prompt("Would you like to buy Scissors?","Yes/No")}
     console.log(buyScissors);
     // if (buyScissors === "no") {
     // prompt("Would you like to buy push mower?", "Yes/No")}
     if (buyScissors === "yes") {
         console.log(money-5);
         money -=5
         alert (`You have just bought scissors, You have ${money} left `)
     } else if (buyScissors === "no") {
        prompt("Would you like to buy push mower?", "Yes/No")}
     const buyPushMower = prompt("Would you like to buy a Push Mower?", "yes/no")
     if (goToStore === "yes") {
     return (buyScissors)
      else if (goToStore === "no")
     console.log(buyPushMower)
 const buyScissors = prompt("Would you like to buy Scissors?","Yes/No")
       if (buyScissors === "yes") {
         console.log(money-5);
         money -=5
         alert (`You have just bought scissors, You have ${money} left `)
     } else if (buyScissors === "no") {
        prompt("Would you like to buy push mower?", "Yes/No")
     }
 }
 
 buyTool()