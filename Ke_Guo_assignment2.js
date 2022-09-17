//Question1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//Question1.1: Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
function doubleQuantityPrice(itemsObject) {
  return itemsObject.map(({ quantity, price }) => {
    return {
      quantity: quantity * 2,
      price: price * 2,
    };
  });
}
console.log("Question1.1:", doubleQuantityPrice(itemsObject));

//Question1.2: Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
function filterQuantityPrice(itemsObject) {
  return itemsObject.filter(({ quantity, price }) => {
    return quantity > 2 && price > 300;
  });
}
console.log("Question1.2:", filterQuantityPrice(itemsObject));

//Question1.3: Given the array, implement a function to calculate the total value of the items.
function totalValue(itemsObject) {
  let totalValue = 0;
  itemsObject.map(({ quantity, price }) => {
    totalValue += quantity * price;
  });
  return totalValue;
}
console.log("Question1.3:", totalValue(itemsObject));

//Question2:
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const string1 = string
  .replace(/[^\w\s]/gi, " ")
  .replace(/  +/g, " ")
  .toLowerCase();

console.log("Question2:", string1);

//Question3:
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function mergeTwoArray(first, second) {
  const result = [];

  for (const item1 of second) {
    const index = first.findIndex((eid) => eid.uuid == item1.uuid);
    if (index !== -1) {
      const { uuid, role, name } = { ...item1, ...first[index] };
      result.push({ uuid, role, name });
    } else {
      const { uuid, role } = item1;
      result.push({ uuid, role, name: null });
    }
  }
  for (const item2 of first) {
    const index = second.findIndex((eid) => eid.uuid == item2.uuid);
    if (index == -1) {
      const { uuid, name } = item2;
      result.push({ uuid, role: null, name });
    }
  }

  return result.sort((first, second) => first.uuid - second.uuid);
}
console.log("Question3:", mergeTwoArray(first, second));
