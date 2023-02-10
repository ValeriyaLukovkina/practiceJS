;(function square (selectorSquare) {
    let square = document.querySelector(selectorSquare);
    let inp = square.querySelector('.square_inp');
    let per = square.querySelector('.square_per');
    let perTxt = per.innerHTML;
    let s = square.querySelector('.square_s');
    let sTxt = s.innerHTML;
    inp.addEventListener('blur', function() {
        let num = Number(inp.value);
        perRes = num * 4;
        sRes = num ** 2;
        per.innerHTML = `${perTxt} ${perRes}`
        s.innerHTML = `${sTxt} ${sRes}`
    })
})('.square_wrp');

;(function rectangle (selectorRectangle) {
    let rectangle = document.querySelector(selectorRectangle);
    let rectangleWidth = rectangle.querySelector('.rectangle_inp_per');
    let rectangleHeight = rectangle.querySelector('.rectangle_inp_s');
    let per = rectangle.querySelector('.rectangle_per');
    let perTxt = per.innerHTML;
    let s = rectangle.querySelector('.rectangle_s');
    let sTxt = s.innerHTML;
    rectangleHeight.addEventListener('blur', function() {
        let numWidth = Number(rectangleWidth.value);
        let numHeight = Number(rectangleHeight.value);
        perRes = 2 * (numWidth + numHeight);
        sRes = numWidth * numHeight;
        per.innerHTML = `${perTxt} ${perRes}`
        s.innerHTML = `${sTxt} ${sRes}`
    })
})('.rectangle_wrp')