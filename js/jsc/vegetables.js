function runActivity() {
  const fruit_prices = new Map([
    ["apple", 10],
    ["banana", 20],
    ["orange", 30],
  ]);
  console.log(fruit_prices.size);
  console.log(fruit_prices.has("banana"));
  console.log(fruit_prices.values());
  console.log(fruit_prices.keys());
  console.log(fruit_prices.entries());
  console.log(fruit_prices.get("apple"));
  fruit_prices.set("melon", 40);
  fruit_prices.delete("orange");
  fruit_prices.forEach(function (value, key) {
    console.log(key + ": " + value + " each");
  });
}
// JSON
function runActivity() {
  const actors = [
    {
      first_name: "Xyriel",
      last_name: "Manabat",
      years_acting: 6,
      movie_list: ["Sisterakas", "Amarosa", "24/7 in Love"],
    },
    {
      first_name: "Sue",
      last_name: "Ramirez",
      years_acting: 5,
      movie_list: ["Aswang", "Dead Kids"],
    },
    {
      first_name: "Ogie",
      last_name: "Diaz",
      years_acting: 12,
      movie_list: ["Pare Ko"],
    },
  ];

  //   console.log(actors[0].first_name);
  //   console.log(actors[1].last_name);
  //   console.log(actors[2].years_acting);
  //   console.log(actors[0].movie_list[0]);
  for (let i = 0; i < actors[0].movie_list.length; i++) {
    console.log(actors[0].movie_list[i]);
  }

  actors.push({
    first_name: "Kim",
    last_name: "Domingo",
    years_acting: 4,
    movie_list: [],
  });

  for (let i = 0; i < actors.length; i++) {
    console.log(actors[i].first_name + " " + actors[i].last_name);
  }
}
// Set
function runActivity() {
  const vegetables_temp = ["kale", "okra", "moringa"];
  const vegetables = new Set(vegetables_temp);
  vegetables.add("pumpkin");
  console.log(vegetables);
  vegetables.add("kale");
  console.log(vegetables);
  vegetables.forEach(function (vegetable) {
    console.log(vegetable);
  });
  console.log(vegetables.delete("moringa"));
  console.log(vegetables.has("kale"));
  console.log(vegetables.clear());
}
