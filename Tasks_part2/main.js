;(function task1 (selectorTask1) {
    let task = document.querySelector(selectorTask1);
    let button1 = task.querySelector('#button1');
    button1.addEventListener('click', function() {
        alert('1');
    });
    let button2 = task.querySelector('#button2');
    button2.addEventListener('click', function () {
        alert(2);
    });
    let button3 = task.querySelector('#button3');
    button3.addEventListener('click', function() {
        alert(3);
    });

})('.task1');

;(function task2 (selectorTask2) {
    let task = document.querySelector(selectorTask2);
    let btn = task.querySelector('.btn');
    let par1 = task.querySelector('.par1');
    let par2 = task.querySelector('.par2');
    btn.addEventListener('click', function() {
        alert(+par1.innerHTML + +par2.innerHTML);
    });

})('.task2');

;(function task3 (selectorTask3) {
    let task = document.querySelector(selectorTask3);
    let btn = task.querySelector('.btn');
    let par = task.querySelector('.par');
    btn.addEventListener('click', function() {
        let parsqu = par.innerHTML ** 2;
        par.innerHTML = parsqu;
    });
})('.task3');

;(function task4 (selectorTask4) {
    let task = document.querySelector(selectorTask4);
    let link = task.querySelector('.link');
    let button = task.querySelector('.button');
    let par = task.querySelector('.par');
    button.addEventListener('click', function() {
        alert(par.innerHTML = link.href);
    });
})('.task4');

;(function task5 (selectorTask5) {
    let task = document.querySelector(selectorTask5);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function() {
        elem2.value = elem1.value ** 2;    
    });
})('.task5');

;(function task6 (selectorTask6) {
    let task = document.querySelector(selectorTask6);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let elem3 = task.querySelector('.elem3');
    let elem4 = task.querySelector('.elem4');
    let elem5 = task.querySelector('.elem5');
    let par = task.querySelector('.par');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function() {
        let middle = (+elem1.value + +elem2.value + +elem3.value + +elem4.value + +elem5.value) / 5;
        par.innerHTML = middle;
    });
})('.task6');

;(function task7 (selectorTask7) {
    let task = document.querySelector(selectorTask7);
    let elem = task.querySelector('#elem');
    elem.addEventListener('focus', function() {
        elem.value = '';
    });
})('.task7');

;(function task8 (selectorTask8) {
    let task = document.querySelector(selectorTask8);
    let par1 = task.querySelector('.par1');
    let par2 = task.querySelector('.par2');
    let par3 = task.querySelector('.par3');
    let par4 = task.querySelector('.par4');
    let par5 = task.querySelector('.par5');
    par1.addEventListener('click', func);
    par2.addEventListener('click', func);
    par3.addEventListener('click', func);
    par4.addEventListener('click', func);
    par5.addEventListener('click', func);
    function func () {
        this.innerHTML = this.innerHTML + '!';
    }
})('.task8');

;(function task9 (selectorTask9) {
    let task = document.querySelector(selectorTask9);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let elem3 = task.querySelector('.elem3');
    function func () {
        this.value = this.value ** 2;
    }
    elem1.addEventListener('blur', func);
    elem2.addEventListener('blur', func);
    elem3.addEventListener('blur', func);
})('.task9');

;(function task10 (selectorTask10) {
    let task = document.querySelector(selectorTask10);
    let text = task.querySelectorAll('.text');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function() {
        for (let i = 0; i < text.length; i++) {
            let texts = text[i];
            texts.innerHTML = texts.innerHTML + (i + 1);
        }
    });

})('.task10');

;(function task11 (selectorTask11) {
    let task = document.querySelector(selectorTask11);
    let texts = task.querySelectorAll('.text');
    function func () {
        this.innerHTML += '!';
        this.removeEventListener ('click', func);
    }
    for (let text of texts) {
        text.addEventListener('click', func);
    }
})('.task11');

;(function task12 (selectorTask12) {
    let task = document.querySelector(selectorTask12);
    let elem = task.querySelector('#elem');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function() {
        if (elem.value == elem.getAttribute('value')) {
            alert('Значение не поменялось');
        } else {
            alert('Значение поменялось'); 
        }
    });
})('.task12');

;(function task13 (selectorTask13) {
    let task = document.querySelector(selectorTask13);
    let elem = task.querySelector('#elem');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function() {
        elem.value = 'text';
    });
})('.task13');

;(function task14 (selectorTask14) {
    let task = document.querySelector(selectorTask14);
    let btn = task.querySelector('.btn');
    let block = task.querySelector('.block');
    btn.addEventListener('click', function () {
        block.style.width = '100px';
        block.style.height = '100px';
        block.style.border = '1px black solid';
    });
})('.task14');

;(function task15 (selectorTask15) {
    let task = document.querySelector(selectorTask15);
    let item = task.querySelectorAll('.item');
    let btn = task.querySelector('.btn');
    btn.addEventListener('click', function () {
        for (let it of item) {
            it.style.cssFloat = 'left';  
        }
    });
})('.task15');

;(function task16 (selectorTask16) {
    let task = document.querySelector(selectorTask16);
    let text = task.querySelector('.text');
    let btnBold = task.querySelector('.btnBold');
    let btnCross = task.querySelector('.btnCross');
    let btnRed = task.querySelector('.btnRed');
    btnBold.addEventListener ('click', function() {
        text.classList.add('bolded');
        text.classList.remove('cross')
        text.classList.remove('colored')
    });
    btnCross.addEventListener ('click', function() {
        text.classList.add('cross');
        text.classList.remove('bolded')
        text.classList.remove('colored')
    });
    btnRed.addEventListener ('click', function() {
        text.classList.add('colored');
        text.classList.remove('cross')
        text.classList.remove('bolded')
    });
})('.task16');

;(function task17 (selectorTask17) {
    let task = document.querySelector(selectorTask17);
    let text = task.querySelector('.text');
    let btnBold = task.querySelector('.btnBold');
    let btnCross = task.querySelector('.btnCross');
    let btnRed = task.querySelector('.btnRed');
    btnBold.addEventListener ('click', function() {
        text.classList.toggle('bolded');
        text.classList.remove('cross')
        text.classList.remove('colored')
    });
    btnCross.addEventListener ('click', function() {
        text.classList.toggle('cross');
        text.classList.remove('bolded')
        text.classList.remove('colored')
    });
    btnRed.addEventListener ('click', function() {
        text.classList.toggle('colored');
        text.classList.remove('cross')
        text.classList.remove('bolded')
    });
})('.task17');

;(function task18 (selectorTask18) {
    let task = document.querySelector(selectorTask18);
    let elem = task.querySelector('#elem');
    elem.firstElementChild.classList.add('colored');
})('.task18');

;(function task19 (selectorTask19) {
    let task = document.querySelector(selectorTask19);
    let elem = task.querySelector('#elem');
    let child = elem.children;
    for (let i of child) {
        i.innerHTML = i.innerHTML + '!';
    }
})('.task19');

;(function task20 (selectorTask20) {
    let task = document.querySelector(selectorTask20);
    let elem = task.querySelector('#elem');
    elem.addEventListener('click', function() {
        elem.innerHTML += elem.dataset.text;
    });
})('.task20');

;(function task21 (selectorTask21) {
    let task = document.querySelector(selectorTask21);
    let btn = task.querySelector('.btn');
    btn.setAttribute('data-num', 0);
    let count;
    btn.addEventListener('click', function() {
        let stop = setTimeout(function(q) {
            btn.dataset.num = Number(btn.dataset.num) + 1;
            console.log(btn.dataset.num)
            count = btn.dataset.num;
        }, 300)
    });
    btn.addEventListener('dblclick', function() {
        btn.value = count;
    });
})('.task21');

;(function task22 (selectorTask22) {
    let task = document.querySelector(selectorTask22);
    let elem = task.querySelector('#elem');
    elem.addEventListener ('blur', function() {
        if ( elem.value.length < elem.dataset.length) {
            alert ('Вы ввели меньше 5 символов');
        } else if (elem.value.length > elem.dataset.length) {
            alert ('Вы ввели больше 5 символов');
        }
    });
})('.task22');

;(function task23 (selectorTask23) {
    let task = document.querySelector(selectorTask23);
    let elem = task.querySelector('#elem');
    elem.addEventListener('blur', function () {
        if (elem.value.length < elem.dataset.min || elem.value.length > elem.dataset.max) {
            alert('Не попадает в диапазон');
        }
    });
})('.task23');

;(function task24 (selectorTask24) {
    let task = document.querySelector(selectorTask24);
    let elem = task.querySelector('.elem');
    let text = task.querySelectorAll('.text');
    elem.addEventListener('blur', function () {
        let arr = elem.value.split(' ');
        for (let i = 0; i < arr.length; i++) {
            text[i].value = arr[i];
        }
    });
})('.task24');

;(function task25 (selectorTask25) {
    let task = document.querySelector(selectorTask25);
    let elem = task.querySelector('.elem');
    let arr;
    elem.addEventListener('blur', function () {
        arr = elem.value.split(' ');
        function getUpper (str) {
            return str[0].toUpperCase() + str.slice(1);
        }
        for (let i = 0; i < arr.length; i++) {
        arr[i] = getUpper(String(arr[i]));
        }
    elem.value = arr.join(' ');
    });
})('.task25');

;(function task26 (selectorTask26) {
    let task = document.querySelector(selectorTask26);
    let elem = task.querySelector('.elem');
    elem.addEventListener('blur', function() {
        let arr = elem.value.split('');
        alert(arr.length);
    });
})('.task26');

;(function task27 (selectorTask27) {
    let task = document.querySelector(selectorTask27);
    let elem = task.querySelector('.elem');
    elem.addEventListener('blur', function() {
        let arr = elem.value.split('.');
        let arrNew = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            arrNew.push(arr[i]);
        }
        elem.value = arrNew.join('-');
    });
})('.task27');

;(function task28 (selectorTask28) {
    let task = document.querySelector(selectorTask28);
    let a = task.querySelector('.a');
    let b = task.querySelector('.b');
    let c = task.querySelector('.c');
    let btn = task.querySelector('.btn');
    let text = task.querySelector('.text');
    btn.addEventListener('click', function() {
        let numA = +a.value;
        let numB = +b.value;
        let numC = +c.value;
        let numD = numB ** 2 - 4 * numA * numC;
        let numX1 = (-numB + Math.sqrt(numD)) / 2 * numA;
        let numX2 =  (-numB - Math.sqrt(numD)) / 2 * numA;
        if (numD > 0) {
            text.innerHTML = numX1 + ' и ' + numX2;
        } else if (numD == 0) {
            text.innerHTML = numX1;
        } else if (numD < 0) {
            text.innerHTML = 'Нет решения';
        } else {
            text.innerHTML = 'Произошла ошибка'; 
        }
    });
})('.task28');

;(function task29 (selectorTask29) {
    let task = document.querySelector(selectorTask29);
    let elem = task.querySelector('.elem');
    let btn = task.querySelector('.btn');
    let text = task.querySelector('.text');
    btn.addEventListener('click', function () {
        if (elem.checked == true) {
            text.innerHTML = 'Привет';
        } else {
            text.innerHTML = 'Пока';
        }
    });
})('.task29');

;(function task30 (selectorTask30) {
    let task = document.querySelector(selectorTask30);
    let elem = task.querySelector('.elem');
    elem.addEventListener('change', function() {
        if (elem.value.length < 5) {
            elem.classList.add('green');
            elem.classList.remove('red');
        } else {
            elem.classList.add('red');
            elem.classList.remove('green');
        }
    });
})('.task30');

;(function task31 (selectorTask31) {
    let task = document.querySelector(selectorTask31);
    let elem = task.querySelector('.elem');
    elem.addEventListener('input', function() {
        if (elem.value.length == 5){
            alert('Вы ввели 5 символов');
            elem.disabled = true;
        }
    });
})('.task31');

;(function task32 (selectorTask32) {
    let task = document.querySelector(selectorTask32);
    let elem = task.querySelector('.elem');
    let text = task.querySelector('.text');
    let count = 5;
    elem.addEventListener('input', function() {
        count--;
        if (count < 0) {
            text.innerHTML = 'Вы превысили количесво символов на ' + (-count)
        } else if (count >= 0) {
            text.innerHTML = count;        
        }
    });
})('.task32');

;(function task33 (selectorTask33) {
    let task = document.querySelector(selectorTask33);
    let select = task.querySelector('#select');
    let text = task.querySelector('.text');
    select.addEventListener ('change', function() {
        let dateFebruary = new Date(select.value, 2, 0);
        if (dateFebruary.getDate() == 29){
            text.innerHTML = 'Это високосный год'
        } else {
            text.innerHTML = 'Не високосный год'
        }
    })
})('.task33');

;(function task34 (selectorTask34) {
    let task = document.querySelector(selectorTask34);
    let select = task.querySelector('#select');
    let text = task.querySelector('.text');
    select.addEventListener('change', function(){
        if (select.value <= 5) {
            text.innerHTML = 'Сегодня рабочий день'
        } else {
            text.innerHTML = 'Сегодня выходной день'        
        }
    });
})('.task34');

;(function task35 (selectorTask35) {
    let task = document.querySelector(selectorTask35);
    let select = task.querySelector('#select');
    let date = new Date();
    select.value = date.getMonth() + 1;
})('.task35');

;(function task36 (selectorTask36) {
    let task = document.querySelector(selectorTask36);
    let elem = task.querySelector('.elem');
    document.addEventListener('mousemove', function() {
        elem.innerHTML = event.clientX + ' : ' + event.clientY;
    });

})('.task36');

;(function task37 (selectorTask37) {
    let task = document.querySelector(selectorTask37);
    let elem = task.querySelector('#elem');
    let lis = task.querySelectorAll('#elem li');
    elem.addEventListener('click', function() {
    console.log (event.target.tagName)
            if (event.target.tagName == 'LI') {
                event.target.innerHTML += '!';
            } else if (event.target.tagName == 'UL') {
                let li = document.createElement('li');
                li.innerHTML = 'новая li';
                elem.appendChild(li);
            }
        });
})('.task37');

;(function task38 (selectorTask38) {
    let task = document.querySelector(selectorTask38);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let elem3 = task.querySelector('.elem3');
    elem1.addEventListener('click', function() {
        alert('Зеленый');
    });
    elem2.addEventListener('click', function() {
        alert('Голубой');
    });
    elem3.addEventListener('click', function() {
        alert('Красный');
    });
})('.task38');

;(function task39 (selectorTask39) {
    let task = document.querySelector(selectorTask39);
    let div = task.querySelector('div');
    div.addEventListener('click', function() {
        if (event.target.matches('div')) {
            alert('DIV');
        } else if (event.target.matches('ul')) {
            alert('UL');
        } else if (event.target.matches('li')) {
            alert('LI')
        }
    });
})('.task39');

;(function task40 (selectorTask40) {
    let task = document.querySelector(selectorTask40);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let elem3 = task.querySelector('.elem3');
    elem1.addEventListener('click', function() {
        alert('Зеленый - стадия погружения');
    }, true);
    elem1.addEventListener('click', function() {
        alert('Зеленый - стадия всплытия');
    }, false);
    elem2.addEventListener('click', function() {
        alert('Голубой - стадия погружения');
    }, true);
    elem2.addEventListener('click', function() {
        alert('Голубой - стадия всплытя');
    }, false);
    elem3.addEventListener('click', function() {
        alert('Красный - стадия погружения');
    }, true);
    elem3.addEventListener('click', function() {
        alert('Красный - стадия всплытия');
    }, false);
})('.task40');

;(function task41 (selectorTask41) {
    let task = document.querySelector(selectorTask41);
    let elem = task.querySelector('#elem');
    let start = task.querySelector('#start');
    start.addEventListener('click', function() {
        let timerID = setInterval(function() {
            elem.value = Number(elem.value) - 1;
            if (elem.value == 0) {
                clearInterval(timerID);
            }
        },1000)
    });
})('.task41');

;(function task42 (selectorTask42) {
    let task = document.querySelector(selectorTask42);
    let text = task.querySelector('.text');
    let start = task.querySelector('.start');
    let stop = task.querySelector('.stop');
    let timerID;
    function func () {
        timerID = setInterval(function () {
            text.innerHTML = Number(text.innerHTML) + 1;
        }, 1000)
        start.removeEventListener('click', func)
    }
    start.addEventListener('click', func);
    stop.addEventListener('click', function() {
        clearInterval(timerID);
        start.addEventListener('click', func);
    });

})('.task42');

;(function task43 (selectorTask43) {
    let task = document.querySelector(selectorTask43);
    let text = task.querySelector('.text');
    setInterval (function() {
        let date = new Date();
        let hour = addZero(date.getHours());
        let minutes = addZero(date.getMinutes());
        let seconds = addZero(date.getSeconds());
        text.innerHTML = hour + ':' + minutes + ':' + seconds
    }, 1000)
    function addZero(num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }
})('.task43');

;(function task44 (selectorTask44) {
    let task = document.querySelector(selectorTask44);
    let elem = task.querySelector('#elem');
    let button = task.querySelector('#button');
    let li;
    button.addEventListener('click', function() {
        li = document.createElement('li');
        li.innerHTML = 'пункт';
        li.addEventListener('click', function() {
        this.innerHTML += '!';
        });
        elem.appendChild(li);
    });
})('.task44');

;(function task45 (selectorTask45) {
    let task = document.querySelector(selectorTask45);
    let elem1 = task.querySelector('.elem1');
    let elem2 = task.querySelector('.elem2');
    let table = task.querySelector('#table');
    let button = task.querySelector('.button');
    button.addEventListener('click', function func() {
        for (let i = 1; i <= Number(elem1.value); i++) {
        let tr = document.createElement('tr');
        for (let i = 1; i <= Number(elem2.value); i++) {
            let td = document.createElement('td');
            td.innerHTML = 'x';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    button.removeEventListener('click', func)
    })
})('.task45');

;(function task46 (selectorTask46) {
    let task = document.querySelector(selectorTask46);
    let table = task.querySelector('#table');
    let k = 1;
    for (let i = 1; i <= 5; i++) {
        let tr = document.createElement('tr');
        for (let i = 1; i <= 5; i++) {
            let td = document.createElement('td');
            td.innerHTML = k;
            k++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})('.task46');

;(function task47 (selectorTask47) {
    let task = document.querySelector(selectorTask47);
    let table = task.querySelector('#table');
    let k = 2;
    for (let i = 1; i <= 5; i++) {
        let tr = document.createElement('tr');
        for (let i = 1; i <= 5; i++) {
            let td = document.createElement('td');
            td.innerHTML = k;
            k += 2;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})('.task47');

;(function task48 (selectorTask48) {
    let task = document.querySelector(selectorTask48);
    let table = task.querySelector('#table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})('.task48');

;(function task49 (selectorTask49) {
    let task = document.querySelector(selectorTask49);
    let table = task.querySelector('#table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        td2.addEventListener('click', function() {
            td2.innerHTML = Number(td2.innerHTML) + 1;
        })
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})('.task49');

;(function task50 (selectorTask50) {
    let task = document.querySelector(selectorTask50);
    let table = task.querySelector('#table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        td2.addEventListener('click', function() {
            td2.innerHTML = Number(td2.innerHTML) + 1;
        })
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        td3.addEventListener('click', function() {
            td3.innerHTML = Number(td3.innerHTML) + (Number(td3.innerHTML) * 0.1)
        })
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})('.task50');

;(function task51 (selectorTask51) {
    let task = document.querySelector(selectorTask51);
    let table = task.querySelector('#table');
    let button = task.querySelector('.button');
    button.addEventListener('click', function() {
        let tr = document.createElement('tr');
        for (let i = 1; i <= 2; i++) {
            let td = document.createElement('td');
            td.innerHTML = i;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    });
})('.task51');

;(function task52 (selectorTask52) {
    let task = document.querySelector(selectorTask52);
    let table = task.querySelector('#table');
    let button = task.querySelector('.button');
    let trs  = task.querySelectorAll('#table tr');
    let tbody = task.querySelector('#table tbody');
    let count = 2;
    let arr = [];
    for (let tr of trs) {
        arr.push(tr);
    }   
    button.addEventListener('click', function() {
        let trNew = document.createElement('tr');
        tbody.appendChild(trNew); 
        arr.push(trNew);
        for (let i = 1; i <= count; i++) {
            let td = document.createElement('td');
            td.innerHTML = i;
            trNew.appendChild(td);
        }
        count++;
        for (let elem of arr) {
            let td = document.createElement('td');
            td.innerHTML = 1;
            elem.appendChild(td);
        }
    });
})('.task52');

;(function task53 (selectorTask53) {
    let task = document.querySelector(selectorTask53);
    let parent = task.querySelector('#parent');
    let button = task.querySelector('#button');
    let lis = task.querySelectorAll('#parent li')
    let count = 4;
    button.addEventListener('click', function() {
        let li = document.createElement('li');
        li.innerHTML = count++;
        parent.appendChild(li);
        li.addEventListener('click', function() {
            parent.removeChild(this);
        })
    });
    for (let li of lis) {
        li.addEventListener('click', function() {
            parent.removeChild(this); 
        });
    }
    
})('.task53');

;(function task54 (selectorTask54) {
    let task = document.querySelector(selectorTask54);
    let elems = task.querySelectorAll('#parent li');
    for (let elem of elems) {
        let remove = document.createElement('a');
        remove.href = '';
        remove.innerHTML = 'remove';
        elem.appendChild(remove);
        remove.addEventListener('click', function() {
            elem.parentElement.removeChild(elem);
            event.preventDefault();
        });
    }
    
})('.task54');

;(function task55 (selectorTask55) {
    let task = document.querySelector(selectorTask55);
    let trs = task.querySelectorAll('#table tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        let remove = document.createElement('a');
        remove.href = '';
        remove.innerHTML = 'remove';
        td.appendChild(remove);
        tr.appendChild(td);
        remove.addEventListener('click', function() {
            tr.parentElement.removeChild(tr);
            event.preventDefault();
        });
    }
})('.task55');

;(function task56 (selectorTask56) {
    let task = document.querySelector(selectorTask56);
    let tds = task.querySelectorAll('#table td');
    for (let td of tds) {
        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);
            input.addEventListener('blur', function() {
                td.innerHTML = this.value;
                td.addEventListener('click', func)
            });
            td.removeEventListener('click', func);        
        });
    }
})('.task56');

;(function task57 (selectorTask57) {
    let task = document.querySelector(selectorTask57);
    let spans = task.querySelectorAll('#parent span');
    let ps = task.querySelectorAll('#parent p');
    for (let p of ps) {
        let remove = document.createElement('a');
        remove.href = '';
        remove.innerHTML = 'remove';
        remove.addEventListener('click', function() {
            event.preventDefault();
            p.parentElement.removeChild(p);
        });
        p.appendChild(remove);
    }
    for (let span of spans) {
        span.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = span.innerHTML;
            span.innerHTML = '';
            span.appendChild(input);
            input.addEventListener('blur', function() {
                span.innerHTML = input.value;
                span.addEventListener('click', func);
            });
            span.removeEventListener('click', func);
        });
    }
})('.task57');

;(function task58 (selectorTask58) {
    let task = document.querySelector(selectorTask58);
    let tds = task.querySelectorAll('#table td');
    let color = 'bgcred';
    for (let td of tds) {
        td.addEventListener('click', function() {
            if (color == 'bgcred') {
                color = 'bgcgreen';
            } else {
                color = 'bgcred';
            }
            this.classList.add(color);
        });
    }
})('.task58');

;(function task59 (selectorTask59) {
    let task = document.querySelector(selectorTask59);
    let tds = task.querySelectorAll('#table td');
    let colors = ['bgcred', 'bgcgreen', 'bgcyellow'];
    let i = 0;
    for (let td of tds) {
        td.addEventListener('click', function() {
            this.classList.add(colors[i]);
            i++;
            if (i == colors.length) {
                i = 0;
            }
        });
    }
})('.task59');

;(function task60 (selectorTask60) {
    let task = document.querySelector(selectorTask60);
    let trs = task.querySelectorAll('#table tr');
    for (let tr of trs) {
        let tds = tr.querySelectorAll('#table td');
        for (let td of tds) {
            td.addEventListener('click', function() {
                let tdActive = tr.querySelectorAll('td.bgcred');
                if (tdActive.length < 5) {
                    this.classList.add('bgcred')
                }
            });
        }
    }
})('.task60');

;(function task61 (selectorTask61) {
    let task = document.querySelector(selectorTask61);
    let trs = task.querySelectorAll('#table tr');
    for (let tr of trs) {
        let tds = tr.querySelectorAll('#table td');
        for (let td of tds) {
            td.addEventListener('click', function() {
                if ((this.previousElementSibling == null || this.previousElementSibling.classList.contains('bgcred') == false) && (this.nextElementSibling == null || this.nextElementSibling.classList.contains('bgcred') == false)) {
                    this.classList.add('bgcred')
                }
            });
        }
    }
})('.task61');

;(function task62 (selectorTask62) {
    let task = document.querySelector(selectorTask62);
    let trs = task.querySelectorAll('#table tr');
    let pasttd;
    let nextd;
    for (let i = 0; i < trs.length; i++) {
        let tds = trs[i].querySelectorAll('#table td');
        for (let k = 0; k < tds.length; k++) {
            tds[k].addEventListener('click', function() {
                if (i > 0) {
                    let pasttds = trs[i-1].querySelectorAll('#table td');
                    pasttd = pasttds[k];                
                } else {
                    pasttd = undefined;
                }
                if (i < trs.length - 1) {
                    let nextds = trs[i+1].querySelectorAll('#table td');
                    nextd = nextds[k];
                } else {
                    nextd = undefined;
                }
                if ((pasttd == undefined || pasttd.classList.contains('bgcred') == false) && (nextd == undefined || nextd.classList.contains('bgcred') == false)){
                    tds[k].classList.add('bgcred');               
                }
            });
        }
    }
})('.task62');

;(function task63 (selectorTask63) {
    let task = document.querySelector(selectorTask63);
    let arr = ['1', '2', '3', '4', '5'];
    let ul = task.querySelector('ul')
    for (let elem of arr) {
        let li = document.createElement('li');
        li.innerHTML = elem;
        ul.appendChild(li);
    }
})('.task63');

;(function task64 (selectorTask64) {
    let task = document.querySelector(selectorTask64);
    let arr = ['1', '2', '3', '4', '5'];
    let ul = task.querySelector('ul')
    for (let elem of arr) {
        let li = document.createElement('li');
        li.innerHTML = elem;
        li.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = li.innerHTML;
            li.innerHTML = '';
            li.appendChild(input);
            li.removeEventListener('click', func);
            input.addEventListener('blur', function() {
                li.innerHTML = input.value;
                li.addEventListener('click', func);
            })
        })
        ul.appendChild(li);
    }
})('.task64');

;(function task65 (selectorTask65) {
    let task = document.querySelector(selectorTask65);
    let arr = ['1', '2', '3', '4', '5'];
    let ul = task.querySelector('ul');
    for (let elem of arr) {
        let li = document.createElement('li');
        li.innerHTML = elem;
        ul.appendChild(li);
    }
    let add = document.createElement('input');
    add.value = 'Добавить пункт списка';
    add.type = 'submit';
    add.addEventListener('click', function() {
        let liNew = document.createElement('li');
        liNew.innerHTML = add.value;
        ul.appendChild(liNew);
        ul.removeChild(add);
        ul.appendChild(add);
        liNew.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            this.removeEventListener('click', func);
            input.addEventListener('blur', function() {
                liNew.innerHTML = input.value;
                liNew.addEventListener('click', func);
            });
        });
    })
    ul.appendChild(add);
    let lis = task.querySelectorAll('li');
    for (let li of lis) {
        li.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            this.removeEventListener('click', func);
            input.addEventListener('blur', function() {
                li.innerHTML = input.value;
                li.addEventListener('click', func);
            });
        });
    }
    
})('.task65');

;(function task66 (selectorTask66) {
    let task = document.querySelector(selectorTask66);
    let arr = ['1', '2', '3', '4', '5'];
    let ul = task.querySelector('ul');
    for (let elem of arr) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = elem;
        li.appendChild(span);
        let remove = document.createElement('a');
        remove.innerHTML = 'remove';
        remove.href = '';
        remove.addEventListener('click', function() {
            remove.parentElement.remove(li);
            event.preventDefault();
        })
        li.appendChild(remove);
        ul.appendChild(li);
    }
    let add = document.createElement('input');
    add.value = 'Добавить пункт списка';
    add.type = 'submit';
    add.addEventListener('click', function() {
        let liNew = document.createElement('li');
        let span = document.createElement('span');    
        let remove = document.createElement('a');
        remove.innerHTML = 'remove';
        remove.href = '';
        remove.addEventListener('click', function() {
            remove.parentElement.remove(liNew);
            event.preventDefault();
        })
        span.innerHTML = add.value;
        liNew.appendChild(span);
        liNew.appendChild(remove);
        ul.appendChild(liNew);
        ul.removeChild(add);
        ul.appendChild(add);
        span.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            this.removeEventListener('click', func);
            input.addEventListener('blur', function() {
                span.innerHTML = input.value;
                span.addEventListener('click', func);
            });
        });
    });
    ul.appendChild(add);
    let spans = task.querySelectorAll('span');
    for (let span of spans) {
        span.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            this.removeEventListener('click', func);
            input.addEventListener('blur', function() {
                span.innerHTML = input.value;
                span.addEventListener('click', func);
            });
        });
    }
})('.task66');

;(function task67 (selectorTask67) {
    let task = document.querySelector(selectorTask67);
    let table = task.querySelector('table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400}, 
        {name: 'employee2', age: 31, salary: 500}, 
        {name: 'employee3', age: 32, salary: 600}, 
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})('.task67');

;(function task68 (selectorTask68) {
    let task = document.querySelector(selectorTask68);
    let table = task.querySelector('table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400}, 
        {name: 'employee2', age: 31, salary: 500}, 
        {name: 'employee3', age: 32, salary: 600}, 
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    let tds = task.querySelectorAll('td')
    for (let td of tds) {
        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.removeEventListener('click', func)
            td.appendChild(input)
            input.addEventListener('blur', function() {
                td.innerHTML = input.value;
            })
        });
    }
})('.task68');

;(function task69 (selectorTask69) {
    let task = document.querySelector(selectorTask69);
    let table = task.querySelector('table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400}, 
        {name: 'employee2', age: 31, salary: 500}, 
        {name: 'employee3', age: 32, salary: 600}, 
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    let tds = task.querySelectorAll('td')
    for (let td of tds) {
        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.removeEventListener('click', func)
            td.appendChild(input)
            input.addEventListener('blur', function() {
                td.innerHTML = input.value;
            })
        });
    }
    let trs = task.querySelectorAll('tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        let remove = document.createElement('a');
        remove.href = '';
        remove.innerHTML = 'remove';
        remove.addEventListener('click', function() {
            event.preventDefault();
            td.parentElement.remove(tr);
        })
        td.appendChild(remove);
        tr.appendChild(td);
    }
})('.task69');

;(function task70 (selectorTask70) {
    let task = document.querySelector(selectorTask70);
    let table = task.querySelector('table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400}, 
        {name: 'employee2', age: 31, salary: 500}, 
        {name: 'employee3', age: 32, salary: 600}, 
    ];
    for (let employe of employees) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = employe.name;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = employe.age;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = employe.salary;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    let tds = task.querySelectorAll('td')
    for (let td of tds) {
        td.addEventListener('click', function func() {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.removeEventListener('click', func)
            td.appendChild(input)
            input.addEventListener('blur', function() {
                td.innerHTML = input.value;
            })
        });
    }
    func()
    let button = task.querySelector('.button');
    let name = task.querySelector('.name');
    let age = task.querySelector('.age');
    let salary = task.querySelector('.salary');
    button.addEventListener('click', function(){
        function func1(elem) {
            elem.addEventListener('click', function func() {
                let input = document.createElement('input');
                input.value = elem.innerHTML;
                elem.innerHTML = '';
                elem.removeEventListener('click', func)
                elem.appendChild(input)
                input.addEventListener('blur', function() {
                    elem.innerHTML = input.value;
                });
            });
        }
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = name.value;
        func1(td1);
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = age.value;
        func1(td2);
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = salary.value;
        func1(td3);
        tr.appendChild(td3);
        table.appendChild(tr);
        func()
    })
    function func() {
    let trs = task.querySelectorAll('tr');
    for (let tr of trs) {
        let lasttd = tr.lastElementChild;
        let child = lasttd.lastElementChild;
        if (child == null) {
            let td = document.createElement('td');
            let remove = document.createElement('a');
            remove.href = '';
            remove.innerHTML = 'remove';
            remove.addEventListener('click', function() {
                event.preventDefault();
                td.parentElement.remove(tr);
            })
            td.appendChild(remove);
            tr.appendChild(td);        
        }
    }    
    }
})('.task70');

;(function task71 (selectorTask71) {
    let task = document.querySelector(selectorTask71);
    let employees = [
        {name: 'employee1', age: 30, salary: 
            400}, 
        {name: 'employee2', age: 31, salary: 
            500}, 
        {name: 'employee3', age: 32, salary: 
            600}, 
    ];
    let ul = task.querySelector('ul');
    for (let employe of employees) {
        let li = document.createElement('li');
        li.innerHTML = 'Имя: ' + employe.name + '; Возраст: ' + employe.age + '; Зарплата:' + employe.salary;
        ul.appendChild(li);
    }
})('.task71');

;(function task72 (selectorTask72) {
    let task = document.querySelector(selectorTask72);
    let tds = task.querySelectorAll('#table td');
    for (let td of tds) {
        td.addEventListener('click', function() {
            let col = td.dataset.col;
            let tds2 = task.querySelectorAll('#table td[data-col="' + col + '"]');
            for (let td2 of tds2) {
                td2.classList.add('colorTask')
            }
        });
    }
})('.task72');

;(function task73 (selectorTask73) {
    let task = document.querySelector(selectorTask73);
    let trs = task.querySelectorAll('#table tr');
    for (let k = 0; k < trs.length; k++) {
        let tds = trs[k].querySelectorAll('td');
        for (let i = 0; i < tds.length; i++) {
            tds[i].setAttribute('data-col', i + 1);
            tds[i].setAttribute('data-row', k + 1)
        }
    }
    let tds = task.querySelectorAll('#table td');
    for (let td of tds) {
        td.addEventListener('click', function() {
            this.innerHTML = 'Строчка: ' + this.dataset.row + '. Колонка: ' + this.dataset.col;
        });
    }
})('.task73');

;(function task74 (selectorTask74) {
    let task = document.querySelector(selectorTask74);
    let trs = task.querySelectorAll('#table tr');
    for (let k = 0; k < trs.length; k++) {
        let tds = trs[k].querySelectorAll('td');
        for (let i = 0; i < tds.length; i++) {
            tds[i].setAttribute('data-col', i + 1);
            tds[i].setAttribute('data-row', k + 1)
        }
    }
    let tds = task.querySelectorAll('#table td');
    for (let td of tds) {
        td.addEventListener('click', function() {
            if (this.dataset.col == this.dataset.row) {
                this.classList.add('colorTask')
            } else {
                this.classList.add('colorTask2')
            }
        });
    }
})('.task74');

;(function task75 (selectorTask75) {
    let task = document.querySelector(selectorTask75);
    let tds = task.querySelectorAll('#table tr:nth-child(even) td:nth-child(odd)');
    for (let td of tds) {
        td.classList.add('colorTask');
    }
})('.task75');