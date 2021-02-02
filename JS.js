
window.addEventListener('load', function () {
    let btn1 = document.getElementById('Btn1');
    let btn2 = document.getElementById('Btn2');
    let btn3 = document.getElementById('Btn3')
    let text = document.getElementById('text1')
///////////////////////////////
    
    btn1.style.padding = "15px 10px";
    btn2.style.padding = "15px 10px";
    btn3.style.padding = "15px 10px";
    
    btn1.addEventListener('click', function () {

        window.location.href = "https://www.google.com/";

    })
    
    btn2.addEventListener('click', function () {

        document.body.style.backgroundColor = "blue";

    })

    btn3.addEventListener('click', function () {
        
        text1.style.color = "red";
        alert("Обманул))");

    })



})