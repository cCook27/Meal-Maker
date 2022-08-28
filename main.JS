let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse: function (courseName, dishName, dishPrice){
    dish = {
      name: dishName,
      price: dishPrice
    }
    return menu.courses[courseName].push(dish);
  },

  getRandomDishFromCourse: function (courseName){
    dishes = menu.courses[courseName]
      let count = 0;
        for (let prop in dishes) {
          count = count + 1;
        };
    randomIndex = Math.floor(Math.random() * count);
    return Object.values(dishes)[randomIndex];
  },

  generateRandomMeal: function (){
    appetizer = this.getRandomDishFromCourse('appetizers');
    main = this.getRandomDishFromCourse('mains');
    dessert = this.getRandomDishFromCourse('desserts');

    totalCostOfMeal = appetizer.price + main.price + dessert.price;
    console.log(`You're meal includes:
                  Appetizer: ${appetizer.name}
                  Main Dish: ${main.name}
                  Dessert: ${dessert.name}
                  Your total cost will be: $${totalCostOfMeal}`);
  }

};


menu.addDishToCourse('appetizers', 'French Fries', 4);
menu.addDishToCourse('appetizers', 'Soup', 6);
menu.addDishToCourse('appetizers', 'Veggies', 4);

menu.addDishToCourse('mains', 'Steak', 20);
menu.addDishToCourse('mains', 'Elk Steak', 52);
menu.addDishToCourse('mains', 'Pork', 15);

menu.addDishToCourse('desserts', 'Chocolate Cake', 10);
menu.addDishToCourse('desserts', 'Pie', 7);
menu.addDishToCourse('desserts', 'Pazookie', 11);


console.log(menu.generateRandomMeal());
