function runActivity() {
  // let x = confirm("Do you like Harry Potter?");

  // if (x) {
  //   alert("Hey! A fellow wizard.");
  // } else {
  //   alert("Muggle.");
  // }
  // let x = "aeiou";
  // let y = Array.from(x);
  // console.log(y);

  const x = [4, 9, 16, 25, 100];
  // let y = x.find(checkNumbers);
  let y = x.filter(checkNumbers);
  function checkNumbers(val) {
    return val > 15;
  }
  console.log(y);
}
