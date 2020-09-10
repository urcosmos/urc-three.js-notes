# Заметки по курсу THREE.js от [webvkube] + общие заметки
## Содержание

* [Вступление](#вступление)
* [Урок 2 (Модули, импорт, экспорт)](#урок-2-модули-импорт-экспорт)

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

## Урок 2 (Модули, импорт, экспорт)
[Вернуться к содержанию][toc]

Лучше организовать код и работу с ним через модули.

* Если **в файле только один класс, объект или переменная**, то экспорт можно делать через слово `default`, а при импорте просто указываем переменную, куда складываем импортированные данные

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
export dejault true;
```

* Если **в файле несколько переменных, объектов или классов**, то надо их

[toc]: #содержание
[webvkube]: http://webvkube.ru
[youtube_main_channel]: https://www.youtube.com/channel/UCBnK0ae8Wvu_TEkWmOIwWBw
[vk_kurspothreejs]: https://vk.com/kurspothreejs