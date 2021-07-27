// sessionStorage существует только в рамках текущей вкладки браузера.

// sessionStorage.setItem('test', 1);
// alert( sessionStorage.getItem('test') );

sessionStorage.setItem('test', 'test info');
sessionStorage.setItem('test1', 'test info');
sessionStorage.setItem('test2', 'test info');
sessionStorage.setItem('test3', 'test info');
alert( sessionStorage.getItem('test') ); // 1


// Объекты хранилища localStorage и sessionStorage
// предоставляют одинаковые методы и свойства:

//      setItem(key, value) – сохранить пару ключ/значение.
//      getItem(key) – получить данные по ключу key.
//      removeItem(key) – удалить данные с ключом key.
//      clear() – удалить всё.
//      key(index) – получить ключ на заданной позиции.
//      length – количество элементов в хранилище.