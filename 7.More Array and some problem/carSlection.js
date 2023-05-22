let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
      "price":1891299
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5,
      "price":189129
    },
    {
        "color": "yellow",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5,
        "price":18912992
    },
    
    {
        "color": "Black",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7,
        "price":1891884793473
    }
  ]

  function carcullection(cars){
    let lowPriceCar= cars[0]
    let sum = 0;
    for (const car of cars) {
        if (car.price<lowPriceCar.price) {
           lowPriceCar=car;
        }
        sum+=car.price;
    }
    console.log("Sob gula car's price : ",sum);
    // console.log(lowPriceCar);

  }
  carcullection(cars);



