//---------------------Ternary Operator---------------------
//❌Bad Code❌
function getResult(scroe) {
  let result;
  if (score > 5) {
    result = "😁";
  } else if (score <= 5) {
    result = "😣";
  }
  return result;
}

//✅Good Code✅
function getResult(score) {
  return score > 5 ? "😁" : "😣";
}

// ---------------------Nullish Coalescing Operator---------------------
//❌Bad Code❌
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display!!";
  }
  console.log(message);
}

//✅Good Code✅
function printMessage(text) {
  const message = text ?? "Nothing tp display!!";
  console.log(message);
}

//------------------ Object Destructuring----------------------
const person = {
  name: "Julia",
  age: 20,
  phone: "01012345678",
};
//❌Bad Code❌
function displayPerson(person) {
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
//❌Bad Code❌
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

//✅Good Code✅
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// ---------------------Spread Syntax - Object---------------------
const item = { type: "T-shirt", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

//❌Bad Code❌
item["price"] = detail.price;

//❌Bad Code❌
const newObject = new Object();
newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = item.price;

//❌Bad Code❌
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
};

//✅Good Code✅
const shirt0 = Object.assign(item, detail);

//✅Good Code✅
const shirt = { ...item, ...detail, price: 40 };

// ---------------------Optional Chaining---------------------
const bob = {
  name: "NamJi",
  age: 26,
};
const anna = {
  name: "Julia",
  age: 20,
  job: {
    title: "Software Engineer",
  },
};

//❌Bad Code❌
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

//✅Good Code✅
function displayJobTitle(person) {
  if (person.job?.title ?? "No Job Yet") {
    console.log(title);
  }
}
// ------------Template Literals (Tmeplate String)----------
const person = {
  name: "Julia",
  score: 4,
};

//❌Bad Code❌
console.log(
  "Hello " + person.name + ", Your current score is : " + person.score
);

//✅Good Code✅
const { name, score } = person;
console.log(`Hello ${name}, Your current score is : ${score}`);
