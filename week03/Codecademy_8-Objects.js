// 객체 생성과 프로퍼티 참조
let spaceship1 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship1.numCrew;
let planetArray = spaceship1.flightPath;
let fuel = spaceship1['Fuel Type'];


// 메서드 만들기
const alienShip = {
    invade: function () { 
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
    /*
    invade () { 
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
    */
};


// 매개변수에 객체 전달
const spaceship2 = {
        homePlanet : 'Earth',
        color : 'silver'
    };
let paintIt = obj => {
    obj.color = 'glorious gold'
};
paintIt(spaceship2);


// for문에서 객체 사용
let spaceship = {
    crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got this!') } 
        },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree, captain!') } 
        },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}


// this 키워드 사용
const robot1 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    } // 화살표 함수는 this. 참조 불가
};


// getter
const person1 = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}
person1.fullName; // 'John Doe'


// setter
const person2 = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
};
person2.age = 40;


// Factory Functions
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name, // 'name: '생략 가능
        age: age,  // 'age: ' 생략 가능
        energySource: energySource, // 'energySource: ' 생략 가능
        scare() {
            console.log(catchPhrase);
        } 
    }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


// Destructured Assignment
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};
const { day } = vampire.preferences; 
console.log(day); // 'stay inside'


// Object 메서드
const robot2 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// .keys()
const robotKeys = Object.keys(robot2);
// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// .entries()
const robotEntries = Object.entries(robot2);
/*
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
*/

// .assign()
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot2);
/*
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
*/