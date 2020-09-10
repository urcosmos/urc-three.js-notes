# Заметки по курсу THREE.js от [webvkube] + общие заметки
## Содержание

* [Вступление](#вступление)
* [Урок 2. Модули, импорт, экспорт](#урок-2-модули-импорт-экспорт)
  * [Экспорт и импорт](#экспорт-и-импорт)
  * [Подключение модулей и вызов на странице](#подключение-модулей-и-вызов-на-странице)
* [Урок 3. Создаем простую сцену](#урок-3-создаем-простую-сцену)

## Вступление
[Вернуться к содержанию][toc]

Заметки по бесплатному курсу по THREE.js от [webvkube].

* [Канал][youtube_main_channel] уроков на Youtube.
* [Группа ВК][vk_kurspothreejs] 

Список уроков на Youtube:
* Урок 1. [Введение.](https://www.youtube.com/watch?v=DRiVzLca3xc)
* Урок 2. [Модули, импорт, экспорт.](https://www.youtube.com/watch?v=scAiW8rzvLc)
* Урок 3. [Создаем простую сцену.](https://www.youtube.com/watch?v=ECAYu1mZUzM)
* Урок 4. [Объект3D, его параметры и методы.](https://www.youtube.com/watch?v=dADyZorNysU)

##### VS Code Intellisense для THREE.js

Я использую VS Code и Intellisense для библиотеки THREE.js заработал автоматически после импорта библиотеки. Но на всякий случай могу предложить почитать [здесь][vscode_intellisense] как сделать себе в редакторе Intellisense для THREE.js, если вдруг автоматически не заработал.

## Урок 2. Модули, импорт, экспорт
[Вернуться к содержанию][toc]

Лучше организовать код и работу с ним через модули.

Начало дерева учебного проекта:

📦www
 ┣ 📂build
 ┃ ┗ 📜three.module.js
 ┣ 📂js
 ┃ ┣ 📜app.js
 ┃ ┗ 📜data.js
 ┗ 📜index.html

##### Экспорт и импорт

* Если **в файле только один класс, объект или переменная**, то экспорт можно делать через слово `default`, а при импорте просто указываем переменную, куда складываем импортированные данные.

```javascript
// файл ./js/data.js

export default 1; // например, экспортируем просто число

// или
export default class{}; // может быть класс

// или
export default {}; // может быть объект
```

```javascript
// файл ./js/app.js

import a from './js/data.js';
alert(a);
export default true;
```

* Если **в файле несколько переменных, объектов или классов**, то надо их сначала объявить, потом через { } экспортировать. При импорте тоже нужно указать фигурные скобки { }.

```javascript
// файл ./js/data.js

let a = 1;
export {a};
```

```javascript
// файл ./js/app.js

import {a} from './js/data.js';
alert(a);
export default true;
```

* Если **экспортируем несколько переменных**, указываем их через запятую , . Импортируем также через через запятую , .

```javascript
// файл ./js/data.js

let a = 1;
let b = 3:
export {a, b};
```

```javascript
// файл ./js/app.js

import {a, b} from './js/data.js';
alert(a);
alert(b);
export default true;
```

* Если нужно **экспортировать все**, то указываем через `* as` и указываем имя родителя.

```javascript
// файл ./js/app.js

import * as data from './js/data.js';
alert(data.a);
alert(data.b);
export default true;
```

* Иногда модули нужны только **для объединения других модулей** модулей. Тогда вместо `import` пишем `export`, а импорт также делам через `* as`.

```javascript
// файл ./js/data.js

let a = 1;
let b = 3:
export {a, b};
```

```javascript
// файл ./js/app.js

export * from './js/data.js'; // в данном случае файл является передаточным звеном
```

```html
<!-- файл ./index.html -->

<script type="module">
  import * as app from './js/app.js';
  console.log(app.a, app.b); 
</script>
``` 

* Также, **для объединении нескольких файлов** нужно просто их добавить.

```javascript
// файл ./js/app.js

export * from './js/data.js';
export * from './js/data1.js';
export * from './js/data2.js';
export * from './js/data3.js';
// и т.д.
```

##### Подключение модулей и вызов на странице

* **Вызов приложения** в текущем подходе осуществляется в index.html:

```html
<!-- файл ./index.html -->

<script type="module">
  import app from './js/app.js';
</script>
``` 

В данном случае, `app` может быть любым другим словом.

## Урок 3. Создаем простую сцену
[Вернуться к содержанию][toc]

Все 3d базируется на нескольких понятиях, о которых нужно помнить при создании приложения:
1. Объекты:
    * Геометрии;
    * Материалов.
2. Сцена.
3. Камера.
4. Свет.
5. Рендер.
6. Анимация (если есть).




<!-- Ссылки -->
[toc]: #содержание
[webvkube]: http://webvkube.ru
[youtube_main_channel]: https://www.youtube.com/channel/UCBnK0ae8Wvu_TEkWmOIwWBw
[vk_kurspothreejs]: https://vk.com/kurspothreejs
[vscode_intellisense]: http://shrekshao.github.io/2016/06/20/vscode-01/