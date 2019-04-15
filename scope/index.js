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
        // Log A: personB // 1 'BEN'
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC // 2 Cardi B
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB'},
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];
    return result;

    // Annotation:
    // First we declare three global variables
    // Next, we declare a function called changePerson and the text are saved in global memory.
    // Next, the changePerson funciton is declared which runs because the global variables are defined
    // next the beautiful person function is added to the call stacked and is invoked.
    // Log personA will refer to the global variable Ben
    // Log B will look for the variable person which was not defined within the beutiful function so it will
    // look back using the call stack and see that the changePerson method has defined person as cardiB.
    // Log C of personC has reassigned personB defined from Tom to the person which is CardiB making personC cardiB.
    // Log D log of personC is global scoped so it will log `paul`

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
    // Log A is functional scoped so it will log the number 75.
    // Log B is blocked scoped so it will look for number to be defined within the method 
    // first which number is 64.
    // Log C happens after the `newNumber` function is declared. So it will look within the function for 
    // whether number is defined which is 64. 
    // Log D number is global scoped so it will only have access to the global variable 30
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
    // Log A is function scoped within greetingFunction and will refer to the gretting = 'yo'.
    // Log B is function scoped within newPhrase will refer greeting with newPhrase
    // `hey`
    // Log C is function scoped within ngrettingFunctions and upon the invocation of newPhrase greeting
    // has been reassigned from Yo to Hey
    // Log D is global scoped and can only access the global variable 'Hello'
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
    // Log A is function scopped and can only access the greeting variable 'hi'.
    // Log B is function scoped within gretting and will look for the variable greeting
    // it wont find it so it will see it within the greetingGenerator function and reassing it from
    // hi to welcome.
    // Log C is function scoped within greeting gnerator and will also see the funciton
    // newGreeting has reassigned `hi` upon invocation.
    // Log D will is global scoped and has access only to the global variable greeting of 'howdy'.
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
    // The console.log order is C,A,B,D
    // console.log C is before sayName is invoke during execution phase and only has
    // access to the global variable name on line 1.
    // Console log A is next and is blocked scopped. It onlyu has acces to the variable 'pam but has been 
    // reassigned in the line 3 condition in which the console.log lies making log A nathaniel'.
    // Console log B is Nathaniel because after the function has been invoked the first condition is met
    // and Pam has been reassigned to Nathaniel.
    // Console log D is global scoped and because nothing was returned within the sayName function or reassigned
    // Console log D is Brittany 
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
    // console log A happens first after invocation of petDog() and is apart of first line of execution
    // phase. Log A will not see dog defined and will look for a global variable which is 'spot'.
    // Log B has no access to the first conditional of petDog() and a global functional dog variable wasn't defined
    //  so it will look for a global variable which is 'Spot' at line 1.
    // Log C reassigns the global variable from spot to biscuit.
    // Log D in execution phase reassigns the global variable(dog) from 'spot' to Biscuit.
    // Log E is invoked and will create a new variabel called let dog = Fluffy but will not be accessable or of use for this console.log
    // then after rollOver is invoked 'spot' is reassigned to Biscuit
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
    // Log A is a reference Error because during execution phase when fruit is passed in
    // the variable hasn't been created before the console.log
    // Log B is mango and is block scoped within the condition. During execution phase 'mango' is created
    // fruit variable.
    // Log C will console log 'mango' because var is hoisted to a global function scope.
    // Log D will log apple because it eat fruit doesn't reassign or return a global variable, resulting in Log D
    // grabing the global scope variable `apple`
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
    // Log A will return the function scoped variable that was labeled during creation phase of invocation at the bottom.
    // After the first condion is met during execution and fn2 is envoked. The interpreter will try to pass the num 9 into
    // fn2 but will see that fn2 has not been declared. It then will look outside the block scope and see that it was declared
    // at const fn2. It will pass in num 9 where Log D console logs 9
    // in fn2 num(9) will add 1  and Log E will console log 10 under the expression.
    // The interpreter will go back and execute under fn2(num) and will look for num to be defined within the block scope.
    // where it defined as 9 and will assign it to newNum.
    // Log B interperter will look block scope and access const var = 9 and log 9
    // Log C will refer to num at fn1 function scope and will log 4
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
    // Log A when invoked during execution phase will run eatSnack and in creation phase will see a variable hunger
    // will not see where its located but have a value and reassing the value to 75 from the global scope value at line 2.
    // Log B will log 0 because when the function is involked during eatSnack execution phase hunger is gorgeYourself() functional scoped
    // Log C will then be executed afer gorgeYorself() is invoked and will see a declaration hunger with a value of 25 and will
    // look global scoped and will reassign  var hunger to 75.
    // Next, Log D line of code will run under eatSnack().
    // hunger declaration with its value will refer to line 1 and will add 5 to the reassigned from eatSnack funtion 75 to now 80.
    // Next, eat Snack is invoked which will see hunger declaration and will look for a global variable and see 85. Which
    // will subtract 25 and Log A will again log 55.
    // Next the gorgeYourself() will be invoked and log B will log 0.
    // Next log C will see a declaration of hunger with a value of 80 and will subtract 25 and log 55. Its imporatant to note
    // the funciton will not resign the global variable. Only console log from what was last reassigned with the previous executed code.
    // Next Log E will show a value of the reassigned hunger value of 55 after the eatSnack() reassigned the value from 80 - 25 = 55
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
    // Log A will access the global variable 'ketchup sandwich'
    // Next, Log D is executed after log A and will invoke the function add cheese.
    // Log D will see a function scoped variable of cheeseTopping and console.log gouda
    // Next, addChipotle function is invoked within execution phase and 
    // Log B will look for a variable of toppings function scoped and global scoped and will log undefined.
    // Next, the conditional statment will execute  and global sandwich will be reassigned to `not a mediocre sandwich`
    // Next, Log C will not a declaration or variable of sandwich and will look outside of function scope addChipotle to global
    // and will see a reassigned variable with `not a mediocre sandwich`.
    // Log F will return the variable 'National Treasure' because it was saved in global memory after invocation
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
    // In execution phase when foo() is invoked creation phase happens but nothing goes on.
    // Next, execution phase happens and the conditional occurs where num variable has been reassigned to 7.
    // Log A will not see a num variable and will look global scoped and see a variable of 7 which was reassigned from the coditional.
    // Next, Log B will also see a reassigned variable of 7 from the foo function
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
    // Line 1 is reasigned to 90 but first lose points is invoked during global execution.
    // Next addPoints is invoked which during creation grade is labeled then execution happens to the conditional
    // Next, Log A will look for the variable which is function scoped below addPoints function. 
    // Next line of code will console.log 
    // Log B which wil have a reassigned value of 90.
    // Next Log C will also have a reassigned value of 90 form losePoints function.
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
    // Log A will refer to the global variable and log 5
    // Log B will refer to reassign global variable of 6
    // Log C will give a reference error because the function contains num but is being console before its created.
    // Log D will refer to the reassigned global varible of 6 that was changed during execution form the first() line of code.
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
    // Log E,A,B will see the global variable. The conditions of changeInstructor() never occur.
    // Log C will see a declared and reassigned value for instructor and will find the variable in the global scope and will log the variable that was reassigned from execution
    // Log D will now see the reassigned variable of Louisa.
    // Log F will now execute and will allso see the reassigned varible of Louisa.
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
    // Log B will log 'flipflop' from the global variable b/c its globally scoped.
    // Log A will execute when putOnShoes is invoked and will be functionally scopped and undefined.
    // Log C will be globally scoped and still see the value 'flipflop'
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
    // Log A, will no log because its an incomplete condition or the condition wasnt met so it will
    // move to the next if condition.
    // Log B will have first check functional scope then see a reassigned value of 'soup'. This reassigned value
    // occured when the orderLunch function was invoked during execution phase.
    // Log C will see the reassigned global variable of `soup` because its global scoped.
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid //1 Pandora
      wildKids.push(kid);
      // Log B: wildKids //2 ['Antigone', 'Pandora' ]
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid // 3 'Mandy'
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid // 4 'Antigone'
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid; // Pandora
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { 'A': 'Pandora' }, 
      { 'B': ['Antigone', 'Pandora' ] },
      { 'C': 'Mandy' },
      { 'D': 'Antigone' },
      { 'E': 'Pandora' }
    ];
    return result;

    // Annotation:
    // During execution phase this function myCrazyKidAntics() is invoked.
    // Log A will first refer to the function scope of a non existent kid  which is a call back function and was passed in 
    // from the function myCrazyKidAntics which is a variable in the global scope and is 'Pandora'.
    // Next, the wildkids array is accessed golobally and a new kid is pushed into the array upon invocation in the execution phase of the function 
    // myCrazyKidAntics.
    // Log B will be an array ['Antigone', 'Pandora'] showing he was pushed in in the previous line of code.
    // Next, drawOnTheWall() is invoked and a new variable is created and labeled. 
    // Log C is functional scoped and will log a 'Mandy'.
    // Next, The function myAmazingKid() is invoked and will go to the line of code where it was a label it will run. 
    // Next, Log D will look for the variable myKid which is function scoped insode of the value of the function myAmazingKid() and will
    // have a value that was shifted out (using a array prototype method) of the array from the global scoped array, which was mutated and will return 'Antigone'
    // Log D is 'Antigone'
    // LogE will then be executed and will return Pandora as a globally scopped variable 
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName // 1 'Rody'

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName 2// RodyToy

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName // 3 'Tesla'
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName // 4 'RodyToyDaniels'

    const result = [
      { 'A': 'Rody' }, 
      { 'B': 'RodyToy' },
      { 'C': 'Tesla' },
      { 'D': 'RodyToyDaniels' }
    ];
    return result;

    // Annotation:
    // Log A will return 'Rody' from the global scope variable.
    // Log B will see the variable declaration (function scoped) of myName and will look for the variable globaly and will append the value of 'RodyToy' when the function parentFunc() was invoked
    // Next innerFunc() is invoked and
    // Log C will be 'Tesla'.
    // The next line of will execute and will be function scoped and will see andother reference of myName then it will check globaly for the variable and will append Daniels to 
    // an already reassigned value of 'RodyToy'
    // Log D will be 'RodyToyDaniels'
  }
};

module.exports = scope;