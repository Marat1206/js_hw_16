// let a = JSON.stringify(values);
// console.log(a);
// console.log(JSON.parse(a));
// console.log(a)

document.getElementById('form-example')
    .addEventListener('submit', function (event) {
        event.preventDefault();


        let inputs = event.target.querySelectorAll('input, textarea, select');

        let values = {};

        inputs.forEach(function (item)  {
            values[item.name] = item.value;
        })
        localStorage.setItem('form', JSON.stringify(values));
});

document.addEventListener('DOMContentLoaded', function (event) {
    if(!localStorage.form) return;

    let values = JSON.parse(localStorage.form);

    let inputs = document.querySelectorAll('#form-example input, #form-example textarea, #form-example select');

    let checkBox = document.querySelector('input[type=checkbox]');
    // console.log(values[checkBox.name]);
    // console.log(checkBox);

    if (values[checkBox.name] === 'on'){
        checkBox.checked = true;
        checkBox.setAttribute('checked', 'checked');
    }


    for(let input of inputs) {
        if (input.type === 'file' ||  input.type === 'checkbox') continue;
        input.value = values[input.name];
        console.log(input);
    }
    console.log(inputs);
});



    // script.js:40 Uncaught DOMException: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
    //     at HTMLDocument.<anonymous> (http://localhost:63342/js_course_2_lesson_16-main/eventListener_storage/js/script.js:40:20)
    // (anonymous) @ script.js:40

    // let file =  event.target.querySelector('input[type=file]');
    //
    // if (values[file.name]){
    //     file.value = values[file.name];
    // }
    //







// let checkBox = document.querySelector('input[type=checkbox]');
//  checkBox.setAttribute('checked');
// console.log(checkBox);
//
// if (sessionStorage.getItem('autosave')){
//     checkBox.value = sessionStorage.getItem('autosave');
// }
//
// checkBox.addEventListener( 'change', function (){
//     sessionStorage.setItem('autosave', checkBox.value)
//     if (checkBox.value){
// return checkBox.getAttribute('checked=true')
//     }
// });
