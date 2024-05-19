//ex1:
let numbers = [1, 2, 3, 4, 5, 6, 7];
let numbersGreaterThanFive = numbers.filter(num => num == 5)
console.log(numbersGreaterThanFive)
//ex2:
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(num => num % 2 == 0)
console.log(evenNumbers)
//ex3:
let names = ["adem", "yasser", "osama", "salim", "hamza"]
let shortnames = names.filter(names => names.length <= 5)
console.log(shortnames)
//ex4:
let myclub= [
    { name: "Adem", age: 25, clubMember}
    { name: "yasser", age: 27, clubMember}
    { name: "osama", age: 31, clubMember}
    {name: "salim",age: 39,cpg}

  ];
  let clubMembers = myclub.filter(person => person.clubMember);
  console.log(clubMembers)
  //ex5:
  let people = [
    { name: "adem", age: 25 }
    { name: "yasser", age: 27 }
    { name: "zayen", age: 4 }
    { name: "aiden", age: 2 }
    { name: "amin", age: 15 }
  ];
let adults = people.filter(person => person.age > 18)
  console.log(adults)
  //ex6:
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((acc, num) => acc + num, 0)
console.log(total)
//ex7:
let numbers = [1, 2, 3, 4, 5]
let longString = numbers.reduce((acc, num) => acc + num.toString(), "")
console.log(longString)
//ex8:
let voters = [
    { name: "adem", voted: true },
    { name: "osama", voted: false },
    { name: "yasser", voted: true }
  ];
 let voteCount = voters.reduce((acc, voter) => acc + (voter.voted ?  1 : 0), 0);
  console.log(voteCount)
//ex9:
let wishlist = [
    { item: "Laptop", price: 3500 }
    { item: "Phone", price: 1500 }
    { item: "Headphones", price: 200 }
  ]
  let totalCost = wishlist.reduce((acc, item) => acc + item.price, 0)
  console.log(totalCost)
  //ex10:
let arrays = [[1, 2], [3, 4], [5, 6]];
let flattendArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattendArray)