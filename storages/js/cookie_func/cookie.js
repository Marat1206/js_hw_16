// console.log( document.cookie); // cookie1=value1; cookie2=value2;...
// console.log( typeof document.cookie ); // string


// Запись в document.cookie
// document.cookie = "user=John"; // обновляем только куки с именем 'user'
// console.log(document.cookie); // показываем все куки

// специальные символы (пробелы), требуется кодирование
// let name = "my name";
// let value = "John Smith"

// кодирует в my name=John Smith
// кодирует в my%20name=John%20Smith
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
//
// console.log(document.cookie); // ...; my%20name=John%20Smith


// Настройки

// document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

// path
// URL-префикс пути, куки будут доступны для страниц под этим путём.
// По умолчанию используется текущий путь.

// domain
// Домен, на котором доступны наши куки. На практике,
// однако, есть ограничения – мы не можем указать здесь какой угодно домен.

// expires, max-age
// По умолчанию, если куки не имеют ни одного из этих параметров, то они
// удалятся при закрытии браузера. Такие куки называются сессионными («session cookies»).

// Чтобы помочь куки «пережить» закрытие браузера,
// мы можем установить значение опций expires или max-age.

// +1 день от текущей даты
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;


// secure

// Куки следует передавать только по HTTPS-протоколу.

// предполагается, что сейчас мы на https://
// установим опцию secure для куки (куки доступно только через HTTPS)

// document.cookie = "user=John; secure";


// samesite
// Это ещё одна настройка безопасности, применяется для защиты от атак подделывающих cookie

// httpOnly

// Эта настройка запрещает любой доступ к куки из JavaScript. Мы не можем видеть
// такое куки или манипулировать им с помощью document.cookie.