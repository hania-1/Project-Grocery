#!  /usr/bin/env node

import inquirer from "inquirer";
let groceryList=[];
(async () => {
    
        console.log("  Welcome to our grocery store!  ");

        let askQue = await inquirer.prompt({
            name: "deal",
            message: "Hi sir, there's a deal going onward in our store, are you interested in it?",
            type: "list",
            choices: ["yes please!", "no not interested!"]
        });

        if (askQue.deal === "yes please!") {
            console.log("  Okay so sir, the deal is, if you shop more than 8k, then we will offer you\n 2k grocery discount. ");
        } else {
            console.log("Okay sir, no problem!");
        }

        let items = await inquirer.prompt({
            name: "items",
            message: "your grocery list",
            type: "checkbox",
            choices: [
                "flour RS. 1000",
                "sugar RS. 300",
                "rice  RS. 1,900",
                "oil   RS. 800",
                "tissue RS. 100",
                "sauce RS. 270",
                "popcorn RS. 160",
                "salt RS. 150",
                "tooth paste RS. 500",
                "bread RS. 100",
                "eggs RS. 250",
                "noodles RS. 120",
                "chips RS. 50",
                "biscuits RS. 50",
                "ice cream RS. 150",
                "cold drinks RS. 750",
                "frozen items RS. 1000",
                "chocolates RS. 140",
                "juices RS. 160",
                "bags RS. 1,500",
                "pens RS. 100",
                "spiral notes RS. 1000"
            ]
        });

        groceryList.push(...items.items);

        
    // Calculate total bill
    let totalBill = 0;
    for (let item of groceryList) {
        // Extract price from item string and parse it to a number
        let price = Number(item.split("RS.")[1].trim().replace(",", ""));
        totalBill += price;
    }
    console.log("Total Bill: RS.", totalBill);

    if (totalBill > 8000) {
        totalBill += 2000; 
        console.log("Congratulations! You've won 2k discount!");
    }

    
})();
