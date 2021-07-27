// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// console.log(getCookie('user'));


function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// let obj = {
//     expires: 'Tue, 19 Jan 2038 03:14:07 GMT',
//     samesite: true
// }
//
// setCookie('vlad', 'sha', obj);

// document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

//
// // Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

// deleteCookie('vlad');