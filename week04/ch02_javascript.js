// 구조 분해 할당

var candyMachine = {
        status: {
            name: 'node',
            count: 5,
        },
        getCandy: function () {
            this.status.count--;
            return this.status.count;
        },
    };
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 위 코드와 같은 동작
const candyMachine = {
        status: {
            name: 'node',
            count: 5,
        },
        getCandy() {
            this.status.count--;
            return this.status.count;
        },
    };
const { getCandy, status: { count } } = candyMachine;


// 프로미스

const condition = true; // true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
        console.log('무조건');
});

// 프로미스 체이닝
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
        resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
        resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })

    .catch((error) => {
        console.error(error);
});

// async/await 문법
async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
}

// try/catch문
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
}


// axios GET 요청
(async () => {
    try {
        const result = await axios.get('https://www.zerocho.com/api/get');
        console.log(result);
        console.log(result.data); // {}
    } catch (error) {
        console.error(error);
    }
})();

// axios POST 요청
(async () => {
    try {
        const result = await axios.post('https://www.zerocho.com/api/post/json', {
            name: 'zerocho',
            birth: 1994,
        });
        console.log(result);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();


// FormData POST 전송
(async () => {
    try {
        const formData = new FormData();
        formData.append('name', 'zerocho');
        formData.append('birth', 1994);
        const result = await axios.post('https://www.zerocho.com/api/post/formdata', formData);
        console.log(result);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();