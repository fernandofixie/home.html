function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
    }

    start() {
      if (this.speed == 0) {
        this.speed = 30;
        console.log(this.name + " has started! Speed at " + this.speed);
      } else {
        console.log(this.name + " has already started!");
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        console.log(this.name + " has accelerated! New speed: " + this.speed);
      } else {
        console.log(this.name + " has not started yet.");
      }
    }

    decelerate() {
      if (this.speed > 0) {
        this.speed /= 2;
        if (this.speed < 1) {
          this.speed = 1;
        }
        console.log(this.name + " has decelerated! New speed: " + this.speed);
      } else {
        console.log(this.name + " has not started yet.");
      }
    }

    checkSpeed() {
      console.log("Current speed: " + this.speed);
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        console.log(this.name + " has stopped.");
      } else {
        console.log("The car has already stopped.");
      }
    }
  }

  let name = prompt("Give me the car's name.");
  let manufacturer = prompt("Give me the car's manufacturer.");
  let acceleration = Number(prompt("Give me the car's acceleration."));
  let myCar = new Car(name, manufacturer, acceleration);
  let car2 = new Car(name, manufacturer, acceleration);

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        myCar.start();
        break;
      case 2:
        myCar.accelerate();
        break;
      case 3:
        myCar.decelerate();
        break;
      case 4:
        myCar.checkSpeed();
        break;
      case 5:
        myCar.stop();
        break;
      case 6:
        i = 1;
        break;
      default:
        console.log("ERROR: Invalid choice!");
    }
  }
}
return approach
function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
    }

    start() {
      if (this.speed == 0) {
        this.speed = 30;
        return this.name + " has started! Speed at " + this.speed;
      } else {
        return this.name + " has already started!";
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        return this.name + " has accelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    decelerate() {
      if (this.speed > 0) {
        this.speed /= 2;
        if (this.speed < 1) {
          this.speed = 1;
        }
        return this.name + " has decelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    checkSpeed() {
      return "Current speed: " + this.speed;
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        return this.name + " has stopped.";
      } else {
        return "The car has already stopped.";
      }
    }
  }

  let name = prompt("Give me the car's name.");
  let manufacturer = prompt("Give me the car's manufacturer.");
  let acceleration = Number(prompt("Give me the car's acceleration."));
  let myCar = new Car(name, manufacturer, acceleration);
  let car2 = new Car(name, manufacturer, acceleration);

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        console.log(myCar.start());
        break;
      case 2:
        console.log(myCar.accelerate());
        break;
      case 3:
        console.log(myCar.decelerate());
        break;
      case 4:
        console.log(myCar.checkSpeed());
        break;
      case 5:
        console.log(myCar.stop());
        break;
      case 6:
        i = 1;
        break;
      default:
        console.log("ERROR: Invalid choice!");
    }
  }
}
Two cars (Kevin approach)
function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
    }

    start() {
      if (this.speed == 0) {
        this.speed = 30;
        return this.name + " has started! Speed at " + this.speed;
      } else {
        return this.name + " has already started!";
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        return this.name + " has accelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    decelerate() {
      if (this.speed > 0) {
        this.speed /= 2;
        if (this.speed < 1) {
          this.speed = 1;
        }
        return this.name + " has decelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    checkSpeed() {
      return "Current speed: " + this.speed;
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        return this.name + " has stopped.";
      } else {
        return "The car has already stopped.";
      }
    }
  }

  let name = "Bumblebee";
  let manufacturer = "Lamborghini";
  let acceleration = 30;
  let myCar = new Car(name, manufacturer, acceleration);

  name = "Optimus";
  manufacturer = "Ferrari";
  acceleration = 40;
  let myCar2 = new Car(name, manufacturer, acceleration);

  let choice = Number(
    prompt("Which car would you like to drive? 1 - Car 1, 2 - Car 2")
  );

  let active_car;

  if (choice == 1) {
    active_car = myCar;
  } else if (choice == 2) {
    active_car = myCar2;
  }

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        console.log(active_car.start());
        break;
      case 2:
        console.log(active_car.accelerate());
        break;
      case 3:
        console.log(active_car.decelerate());
        break;
      case 4:
        console.log(active_car.checkSpeed());
        break;
      case 5:
        console.log(active_car.stop());
        break;
      case 6:
        i = 1;
        break;
      default:
        console.log("ERROR: Invalid choice!");
    }
  }
}