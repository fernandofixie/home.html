function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit?");
    let fruit_price = Number(prompt("What is the price of the fruit?"));
    let fruit_stock = "0";

    if (fruit_price >= 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);

      //you need to also set this fruit's stock to 0

      fruit_stocks.push(fruit_stock);

      //you need to display via the console the name of the fruit, price, and stock
      console.log(
        fruit_name +
          "added an item for sale. Each apple sells for " +
          fruit_price +
          ". Stock set to " +
          fruit_stock
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let choice = prompt("What would you like to add stock to?");
    let qty = prompt("How many of apple would you like to check the price of?");
    let fruit_found = false;

    //since you're searching for a fruit, you can use a similar logic with the sell() function
    if (qty >= 0) {
      for (let i = 0; i < fruit_names.length; i++) {
        if (choice == fruit_names[i]) {
          let total_stocks = fruit_stocks[i] + qty;
          console.log(
            total_stocks +
              " stocks has bee added to " +
              fruit_names[i] +
              "New stock: " +
              fruit_stocks[i]
          );
          fruit_found = true;
        }
      }
    } else {
      console.error("ERROR: Can not have negative amount.");
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  function checkPrice() {
    let choice = prompt("What would you like to check the price of?");
    let qty = prompt("How many of apple would you like to check the price of?");
    let fruit_found = false;

    if (qty >= 0) {
      for (let i = 0; i < fruit_names.length; i++) {
        if (choice == fruit_names[i]) {
          let total_amount = fruit_prices[i] * qty;
          console.log(
            qty + " of " + fruit_names[i] + " is worth " + total_amount
          );
          fruit_found = true;
        }
      }
    } else {
      console.error("ERROR: Can not have negative amount.");
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }

    //since you're searching for a fruit, you can use a similar logic with the sell() function
  }

  function sell() {
    let choice_name = prompt("What would you like to buy?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let amount = Number(
          prompt("How many " + choice_name + " would you like buy?")
        );
        if (amount >= 0) {
          let total = amount * fruit_prices[i];
          //you have to make it so that you don't sell if not enough stock
          //you also have to make it so that stocks are deducted when you buy fruit
          //you also have to display how much the fruit was sold for as well as remaining stock
          //you have to do validation
        } else {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  alert("Daiben's Fruit Store");
  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    switch (choice) {
      case 1:
        addItem();
        break;
      case 2:
        restock();
        break;
      case 3:
        checkPrice();
        break;
      case 4:
        sell();
        break;
      case 5:
        i = 1;
        break;
      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
