;(function getNum(selectorTitle){
    let blockTitle = document.querySelectorAll(selectorTitle);
    let count = 1;
    for (elem of blockTitle) {
        elem.setAttribute('data-count', count++ + '.')
    }
})('.block_title');

;(function getNum(selectorFixed, selectorBlock){
    let fixed = document.querySelectorAll(selectorFixed);
    let block = document.querySelectorAll(selectorBlock);
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('click', function() {
            event.stopPropagation();
        })
        fixed[i].addEventListener('click', function() {
            if (block[i].hasAttribute('open') === true) {
                block[i].removeAttribute('open');
            } else {
                block[i].setAttribute('open', 'open');
            }
        });        
    }
})('.wrpp', '.block');