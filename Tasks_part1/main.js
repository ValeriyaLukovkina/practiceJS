;(function task1(selectorTask1) {
    let task = document.querySelector(selectorTask1);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let num = input.value;
        if (num >= 10 && num <=99) {
            let num1 = num % 10;
            let num2 = (num - num1)/10;
            let sum = num1 + num2;
            if (sum <= 9) {
                alert('Сумма цифр однозначна');
            } else{
                alert('Сумма цифр двузначна');
            }
        } else {
            alert('Число не входит в диапазон от 10 до 99')
        }        
    })
})('.task1');

;(function task2(selectorTask2) {
    let task = document.querySelector(selectorTask2);
    let input = task.querySelectorAll('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            arr[i] = +input[i].value;
        }
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > 0) {
                sum += arr[k];
            }
        }
        alert(sum);
    })
})('.task2');

;(function task3(selectorTask3) {
    let task = document.querySelector(selectorTask3);
    let input = task.querySelectorAll('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            arr[i] = +input[i].value;
        }
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        alert(sum / (arr.length));
    })
})('.task3');

;(function task4(selectorTask4) {
    let task = document.querySelector(selectorTask4);
    let input = task.querySelectorAll('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            arr[i] = input[i].value;
            if (String(arr[i]).startsWith('1') || String(arr[i]).startsWith('2') || String(arr[i]).startsWith('5')) {
                alert(arr[i]);
            }
        }
    })
})('.task4');

;(function task5(selectorTask5) {
    let task = document.querySelector(selectorTask5);
    let input = task.querySelectorAll('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            arr[i] = +input[i].value;
            if (arr[i] == i + 1) {
                alert(arr[i]);
            }
        }
    })
})('.task5');

;(function task6(selectorTask6) {
    let task = document.querySelector(selectorTask6);
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let sum = 0;
        for (i = 1; ; i++) {
            sum += i;
            if (sum > 100) {
                break;
            }
        }
        alert(i);
    })
})('.task6');

;(function task1(selectorTask7) {
    let task = document.querySelector(selectorTask7);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let num = +input.value;
        let flag = true;
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            alert('Число простое')
        } else {
            alert('Число не простое')
        }
    })
})('.task7');

;(function task8(selectorTask8) {
    let task = document.querySelector(selectorTask8);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let num = +input.value;
        for (i = 0; num < 1000; i++) {
            // num = +input.value
            num *= 3;
        }
        alert('Полученное число: ' + num);
        alert('Необходимое количество итераций: ' + i);
    })
})('.task8');

;(function task9(selectorTask9) {
    let task = document.querySelector(selectorTask9);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let num = +input.value;
        let one = 0;
        let two = 1;
        for (i = 1; i <= num; i++) {
            let current = one + two;
            one = two; 
            two = current;
            alert(current);
        }
    })
})('.task9');

;(function task10(selectorTask10) {
    let task = document.querySelector(selectorTask10);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let num = +input.value;
        let sum = 1;
        for (i = num - 3; i <= num; i++) {
            console.log('!')
            sum *= i;
        }
        alert('Факториал ' + num + ' = ' + sum);
    })
})('.task10');

;(function task11(selectorTask11) {
    let task = document.querySelector(selectorTask11);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let str = input.value;
        let word = str.split(' ');
        for (i = 0; i < word.length; i++) {
            word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
        }
        let result = word.join(' ');
        alert(result);
    })
})('.task11');

;(function task12(selectorTask12) {
    let task = document.querySelector(selectorTask12);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let str = input.value;
        let result = str.split('').reverse().join('');
        alert(result);
    })
})('.task12');

;(function task13(selectorTask13) {
    let task = document.querySelector(selectorTask13);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    function getDigitsSum (str) {
        let sum = 0;
        let arr = [];
        arr = str.split('');
        for (let elem of arr) {
            sum += +elem;
        }
        return sum;
    }
    btn.addEventListener('click', function() {
        alert(getDigitsSum(input.value));
    })
})('.task13');

;(function task14(selectorTask14) {
    let task = document.querySelector(selectorTask14);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function getNumSum (num) {
        let digits = String(num).split('');	
        let digitsSum = 0;
        for (let digit of digits) {
        digitsSum += Number(digit);
        }
        return digitsSum;
    }
    btn.addEventListener('click', function() {
        if (getNumSum(+num1.value) == getNumSum(+num2.value)) {
            alert('суммы цифр совпадают');
        } else {
            alert('суммы цифр не совпадают');
        }
    })
})('.task14');

;(function task15(selectorTask15) {
    let task = document.querySelector(selectorTask15);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    function getAvg(arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum / arr.length;
    }
    function getDivisors(num) {
        let result = [];
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                result.push(i);
            }
        }
        return result;
    }
    let a;
    btn.addEventListener('click', function() {
        a =  getAvg(getDivisors(+input.value));
        if (isNaN(a)) {
            alert('Нет чисел, на которое делится данное число');          
        } else {
            alert(getAvg(getDivisors(+input.value)) );      
        }
    })
})('.task15');

;(function task16(selectorTask16) {
    let task = document.querySelector(selectorTask16);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function getOwnDivisors(num) {
        let arr = [];
        for (let i = 1; i < num; i++){
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    function getSum (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    }
    function getFreindly (numStart, numEnd) {
        let hash = {};
        let arr = [];
        for (let i = numStart; i < numEnd; i++) {
            let sum = getSum(getOwnDivisors(i));
            let sumNumber = getSum(getOwnDivisors(sum));
            if (i === sumNumber && i !== sum && !hash[i]) {
                hash[i] = sum;
                hash[sum] = i;
                alert('FRIENDLY: ' + i + ' и ' + sum);
                arr.push[i];
            }
        }
    }
    btn.addEventListener('click', function() {
        getFreindly(+num1.value, +num2.value);
    })
})('.task16');

;(function task17(selectorTask17) {
    let task = document.querySelector(selectorTask17);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function getOwnDivisors(num) {
        let arr = [];
        for (let i = 1; i < num; i++){
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    function getSum (arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }
        return sum;
    }
    function getPerfect (num1, num2) {
        let arr = [];	
        for (let i = num1; i <= num2; i++) {
            let a = getSum(getOwnDivisors(i));
            if (a == i) {
                arr.push(i);
            }
        }
        return arr;
    }
    btn.addEventListener('click', function() {
        alert(getPerfect(+num1.value, +num2.value));
    })
})('.task17');

;(function task18(selectorTask18) {
    let task = document.querySelector(selectorTask18);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function getGreatestCommonDivisor(num1, num2) {
        let a = getInt(getOwnDivisors(num1), getOwnDivisors(num2));
        return Math.max.apply(null,a);
    }
    function getOwnDivisors (num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    function inArray (elem, arr) {
        return arr.includes(elem);
    }
    function getInt (arr1, arr2) {
        let result = [];
        for (let elem of arr1) {
            if (inArray(elem, arr2)) {
                result.push(elem);
            }
        }
        return result;
    }
    btn.addEventListener('click', function() {
        alert(getGreatestCommonDivisor(+num1.value, +num2.value));
    })
})('.task18');

;(function task19(selectorTask19) {
    let task = document.querySelector(selectorTask19);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function getOwnDivisors (num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    function getInt (arr1, arr2) {
        let result = [];
        for (let elem of arr1) {
            if (inArray(elem, arr2)) {
                result.push(elem);
            }
        }
        return result;
    }
    function inArray (elem, arr) {
        return arr.includes(elem);
    }
    function getSimpleNumber (num1, num2) {
        let a = getInt(getOwnDivisors(num1), getOwnDivisors(num2));
        return Math.max.apply(null, a) == 1;
    }
    btn.addEventListener('click', function() {
        if (getSimpleNumber(+num1.value, +num2.value)) {
            alert('числа взаимно простые')
        } else {
            alert('числа не взаимно простые')
        }
    })
})('.task19');

;(function task20(selectorTask20) {
    let task = document.querySelector(selectorTask20);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    function isLucky (str) {
        let sum1 = 0;
        let sum2 = 0;	
        for (let i = 0; i < str.length; i++) {
            if (i < (str.length) / 2) {
                sum1 += +str[i];			
            } else {
                sum2 += +str[i];
            }
        }
                return sum1 == sum2;
    }

    function normalizeNum (num, digitsAmount) {
        let str = String(num);
        return formStr('0', digitsAmount - str.length) + str;
    }

    function formStr(data, len) {
        let str = '';
        for (let i = 1; i <= len; i++){
            str += data;
        }
        return str;
    }

    function getFirst (digitsAmount) {
        let str = '1';
        let count = digitsAmount / 2 - 1;
        for (i = 1; i <= count; i++) {
            str += '0';
        }
        return Number(str + '1')
    }

    function getLast (digitsAmount) {
        let str = '';
        for (i = 1; i <= digitsAmount; i++) {
            str += '9';
        }
        return str;
    }

    function getLuckyTickets(digitsAmount) {
        let result = [];
        let first = getFirst(digitsAmount);
        let last = getLast(digitsAmount);
        for (i = first; i <= last; i++) {
            let ticket = normalizeNum(i, digitsAmount);
            if(isLucky(ticket)) {
                result.push(ticket);			
            }
        }
        return result;
    }
    btn.addEventListener('click', function() {
        alert(getLuckyTickets(+input.value))
    })
})('.task20');

;(function task21(selectorTask21) {
    let task = document.querySelector(selectorTask21);
    let num1 = task.querySelector('.num1');
    let num2 = task.querySelector('.num2');
    let btn = task.querySelector('button');
    function func (num1, num2) {
        function square(num) {
            return num ** 2;
        }
        return square(num1) + square(num2);
    }
    btn.addEventListener('click', function() {
        alert(func(+num1.value, +num2.value));
    })
})('.task21');

;(function task22(selectorTask22) {
    let task = document.querySelector(selectorTask22);
    let par = task.querySelector('.date');
    function addZero (num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }
    let date = new Date();
    par.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear();
})('.task22');

;(function task23(selectorTask23) {
    let task = document.querySelector(selectorTask23);
    let input = task.querySelector('input');
    let btn = task.querySelector('button');
    let par = task.querySelector('.date');
    btn.addEventListener('click', function() {
        let str = input.value;
        let result = str.split('-').reverse().join('/');
        par.innerHTML = result;
    })
})('.task23');

;(function task24(selectorTask24) {
    let task = document.querySelector(selectorTask24);
    let par = task.querySelector('.date');
    let date = new Date();
    let numWeek = date.getDay();
    if (numWeek >= 1 && numWeek <= 5) {
        par.innerHTML = 'Рабочий день';
    } else {
        par.innerHTML ='Выходной';
    }

})('.task24');

;(function task25(selectorTask25) {
    let task = document.querySelector(selectorTask25);
    let par = task.querySelector('.date');
    let date = new Date();
    let numWeek = date.getDay();
    if (numWeek != 0) {
        let lost = 6 - numWeek;
        let day;
        if (lost == 1) {
            day = 'день'
        } else if (lost == 5) {
            day = 'дней'
        } else {
            day = 'дня'
        }
        par.innerHTML = 'До воскресенья осталось ' + lost + ' ' + day;
        } else {
            par.innerHTML = 'Выходной';
        }

})('.task25');

;(function task26(selectorTask26) {
    let task = document.querySelector(selectorTask26);
    let year = task.querySelector('.year');
    let month = task.querySelector('.month');
    let data = task.querySelector('.day');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let date = new Date(+year.value, +month.value - 1, +data.value);
        let day = date.getDay();
        let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; 
        alert(days[day]);
    })
})('.task26');

;(function task27(selectorTask27) {
    let task = document.querySelector(selectorTask27);
    let year = task.querySelector('.year');
    let btn = task.querySelector('button');
    function isLeap(year) {
        let date = new Date(year, 2, 0);
        return date.getDate() == 29
    }
    btn.addEventListener('click', function() {
        alert(isLeap(+year.value))
    })
})('.task27');

;(function task28(selectorTask28) {
    let task = document.querySelector(selectorTask28);
    let selectorMonth = task.querySelector('.month');
    let selectorDay = task.querySelector('.day');
    let btn = task.querySelector('button');
    btn.addEventListener('click', function() {
        let day = +selectorDay.value;
        let month = +selectorMonth.value;
        if (day == 29) {
            day = 28;
        }
        let now = new Date();
        let happyBirthday = new Date(now.getFullYear(), month - 1, day);
        if (happyBirthday.getMonth() != month - 1 && happyBirthday.getDate() != day) {
            alert('Вы ввели неверную дату');
        }
        let dif = happyBirthday - now;
        if (dif > 0) {
            alert('Осталось ' + Math.floor(dif / (1000 * 60 * 60 * 24)) + ' до Дня Рождения');
        } else if (dif < 0) {
            let happyBirthdayNext = new Date(now.getFullYear() + 1, month - 1, day);
            alert('Осталось ' + Math.floor((happyBirthdayNext - now) / (1000 * 60 * 60 * 24)) + ' до Дня Рождения');
        } else if (dif == 0) {
            alert('Сегодня День Рождения');
        }

    })
})('.task28');