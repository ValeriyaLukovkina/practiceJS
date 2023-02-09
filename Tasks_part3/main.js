;(function task1 (selectorTask1) {
    let task = document.querySelector(selectorTask1);
    let year = task.querySelector('.year');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function () {
        let res = /^(19\d\d|20\d\d|2100)$/.test(year.value) ? 'Вы ввели правильно' : 'Вы ввели не правильно';
        alert(res);
    })
})('.task1');

;(function task2 (selectorTask2) {
    let task = document.querySelector(selectorTask2);
    let time = task.querySelector('.time');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function () {
        let res = /^([01]\d|2[0-3]):([0-5]\d)$/.test(time.value) ? 'Вы ввели правильно' : 'Вы ввели не правильно';
        alert(res);
    })
})('.task2');

;(function task3 (selectorTask3) {
    let task = document.querySelector(selectorTask3);
    let elem = task.querySelector('.elem');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function () {
        let res = elem.value.replace(/\w*(\w)\1\w*/g, '');
        elem.value = res;
    })
})('.task3');

;(function task4 (selectorTask4) {
    let task = document.querySelector(selectorTask4);
    let elems = task.querySelectorAll('.elem');
    let map = new Map;
    let i = 1;
    for (let elem of elems) {
        map.set(elem, i++);
        elem.addEventListener('click', function() {
            this.value = map.get(this);
        })
    }
})('.task4');

;(function task5 (selectorTask5) {
    let task = document.querySelector(selectorTask5);
    let par = task.querySelectorAll('p');
    let btn = task.querySelector('button');
    let set = new Set;
    for (let elem of par) {
        elem.addEventListener('click', function() {
            set.add(this);
        })
    }
    btn.addEventListener('click', function() {
        for (let elem of set) {
            elem.textContent = elem.textContent + '!'; 
        }
    })
    
})('.task5');

;(function task6 (selectorTask6) {
    let task = document.querySelector(selectorTask6);
    let json = `[
        {
            "name": "user1",
            "age": 25,
            "salary": 1000
        },
        {
            "name": "user2",
            "age": 26,
            "salary": 2000
        },
        {
            "name": "user3",
            "age": 27,
            "salary": 3000
        }
    ]`;
    let arr = JSON.parse(json);
    let table = task.querySelector('table');
    for (let subArr of arr) {
        let tr = document.createElement('tr');
        for (let elem in subArr) {
            let td = document.createElement('td');
            td.innerHTML = subArr[elem];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
})('.task6');

;(function task7 (selectorTask7) {
    let task = document.querySelector(selectorTask7);
    let input = task.querySelector('input');
    function sqrt (num) {
        if (num >= 0) {
            let result = Math.sqrt(num);
            return result;
        } else {
            throw new Error('ошибка извлечения корня')
        }
    }
    input.addEventListener('blur', function () {
        try {
            alert(sqrt(Number(input.value)))
        } catch (error) {
            alert('Вы пытаетесь извлечь корень из отрицательного числа')
        }        
    })
})('.task7');