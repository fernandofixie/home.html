function runActivity() {
  let choice = Number(prompt("Give me a number between 1-7."));
  // if (choice == 1) {
  //   console.log("This is Sunday!");
  // } else if (choice == 2) {
  //   console.log("this is Monday!");
  // }

  switch (choice) {
    case 1:
      console.log("This is Sunday");
      break;
    case 2:
      console.log("This is Monday");
      break;
    case 3:
      console.log("This is Tuesday");
      break;
    case 4:
      console.log("This is Wednsday");
      break;
    case 5:
      console.log("This is Thursday");
      break;
    case 6:
      console.log("This is Friday");
      break;
    case 7:
      console.log("This is Saturday");
      break;
    default:
      console.error("ERROR: Not a valid day");
  }
}
