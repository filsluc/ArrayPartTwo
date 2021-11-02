// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     console.log(num)
// })

function doubleNumbers(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

console.log(doubleNumbers([2, 5, 100])); 

function stringItUp (arr){
    return arr.map(function(num){
        return num.toString();
    });
}
console.log(stringItUp([2, 5, 100])); 

function capitalizeNames(arr){
    return arr.map(function(name){
        let lowercaseName = name.toLowerCase();
        return name.charAt(0).toUpperCase() + lowercaseName.substring(1);
    });
}
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  

  function namesOnly(arr){
    return arr.map(function(name){
        return name.name;
    });
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  
  function moviesOnly(arr){
      return arr.map(function(movie){
        return movie.genre
   });
}
    const movie = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" },
     ]
  
     console.log(moviesOnly(age))

  function ofAge(arr){
       return arr.map(function(age){
        return age >= 18
}
console.log(ageOnly)[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];