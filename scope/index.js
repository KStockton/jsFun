const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      // A = 75

      function newNumber() {
        number = 64;

        // Log B: number
        // B = 64
      }

      newNumber();

      // Log C: number
      // C = 64
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num // 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum // 9
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num // 9

      num = num + 1;

      // Log E: num // 10
    };

    fn1();

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger 1: 75 , 55
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger // 2: 0, 0
      }

      // Log C: hunger 3: // 75, 55
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger 4: // 80

    eatSnack();
    // Log E: hunger , 55

    const result = [
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 },
      { 'A': 55 },
      { 'B': 0 },
      { 'C': 55 },
      { 'E': 55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich // 'ketchup sandwich 1

    const addChipotle = () => {
      // Log B: toppings // 3 chipotle sauce
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich 4 not a mediocre sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping // gouda 2

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich // 5 not a mediocre sandwich
    // Log F: amandaBynes //6 

    const result = [
      { 'A': 'ketchup sandwich' },
      { 'D': 'gouda' },
      { 'B': undefined },
      { 'C': 'not a mediocre sandwich' },
      { 'E': 'not a mediocre sandwich' },
      { 'F': 'National Treasure' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num // 1 will see reassigned 7
    }

    foo();

    // Log B: num 2

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade // 1 will see line const grade = 95
      }

      addPoints();

      // Log B: grade // 2 is 90
    }

    losePoints();

    // Log C: grade // 3 is 90

    const result = [
      { 'A': 95 }, 
      { 'B': 90 },
      { 'C': 90 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num // 1 will be 5
      num = 6;
      // Log B: num //2 will be 6
    }

    function second() {
      // Log C: num // 3 will be 6
      let num = 7;
    }

    first();
    second();

    // Log D: num  // 4 will be 6

    const result = [
      { 'A': 5 }, 
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor //2 'Pam'

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor // 3 'Pam'

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor //4 Louisa
      }

      rename();

      // Log D: instructor //5 Louisa

    }

    // Log E: instructor //1 'Pam'

    changeInstructor();

    // Log F: instructor // 5 'Louisa

    const result = [
      { 'E': 'Pam' }, 
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa' },
      { 'F': 'Louisa' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe // 2 'undefined'
      var shoe = 'boot';
    }

    // Log B: shoe // 1 'flipflop'
    putOnShoe();
    // Log C: shoe

    const result = [
      { 'B': 'flipflop' }, 
      { 'A': undefined },
      { 'C': 'flipflop' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch // 1 reference error
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch // 2 'soup'
    }

    orderLunch();

    // Log C: lunch // 3

    const result = [
      { 'B': 'soup' },
      { 'C': 'soup' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid //1 Pandora
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { 'E': 'Pam' }, 
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa' },
      { 'F': 'Louisa' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;