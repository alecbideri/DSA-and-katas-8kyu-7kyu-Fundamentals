function countVegetables(input) {
  const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  const words = input.split(/\s+/);
  const vegCount = new Map();

  words.forEach(word => {
      if (vegetables.includes(word)) {
          vegCount.set(word, (vegCount.get(word) || 0) + 1);
      }
  });

  const vegArray = Array.from(vegCount.entries()).map(([vegetable, count]) => [count, vegetable]);
  vegArray.sort((a, b) => {
      if (b[0] === a[0]) {
          return b[1].localeCompare(a[1]);
      }
      return b[0] - a[0];
  });

  return vegArray;
}

const input = "cabbage carrot celery cucumber mushroom onion pepper potato tofu turnip onion carrot carrot pepper mushroom cucumber";
const result = countVegetables(input);
console.log(result);
