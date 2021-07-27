// localStorage.setItem('test', 'test info');
// localStorage.setItem('test1', 'test info');
// localStorage.setItem('test2', 'test info');
// localStorage.setItem('test3', 'test info');
// alert( localStorage.getItem('test') ); // 1


//Также можно получать/записывать данные, как в обычный объект:

// установить значение для ключа
// localStorage.setItem('test', '123');
// localStorage.test = 2;
// localStorage.newItem = 21312;

// получить значение по ключу
// alert( localStorage.getItem('test') );
// alert( localStorage.test );

// удалить ключ
// localStorage.removeItem('test')
// delete localStorage.test1;

//
// console.log(localStorage)

// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
// }




// Объекты хранилища localStorage и sessionStorage
// предоставляют одинаковые методы и свойства:

//      setItem(key, value) – сохранить пару ключ/значение.
//      getItem(key) – получить данные по ключу key.
//      removeItem(key) – удалить данные с ключом key.
//      clear() – удалить всё.
//      key(index) – получить ключ на заданной позиции.
//      length – количество элементов в хранилище.