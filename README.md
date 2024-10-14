# Тестовое задание на позицию Frontend-разработчика

## Суть задания

Сделайте ToDo-приложение, позволяющее управлять текущим списком дел.

Что должно быть в интерфейсе:
- Поле для ввода новой задачи
- Списки всех задач, невыполненных и выполненных задач (по отдельности)


## Возникшие проблемы и принятые решения в формате ADR

- [Использование Feature-Sliced Design](./docs/adrs/001-feature-sliced-design.md)
- [Выбор бандлера для проекта](./docs/adrs/002-module-bundler.md)
- [Использование Vitest в качестве test runner](./docs/adrs/003-vitest-as-test-runner.md)
- [Использование createEntityAdapter](./docs/adrs/004-createEntityAdapter.md)
- [Сборка проекта с использованием Docker](./docs/adrs/005-project-building.md)

## GitHub Pages

Приложение доступно на GitHub Pages по ссылке: https://iti-rina.github.io/todo-list-app/

## Сборка проекта
### Локальная сборка через npm

Требования:

- node 20 и выше
- npm 10 и выше
- отсутствие приложений на `:5173`

Порядок запуска:

- ставим зависимости: `npm install`
- запускаем приложение: `npm run start`
- переходим на http://127.0.0.1:5173
- запуск unit-тестов: `npm run test`

### Docker

Требования:

- наличие Docker (20+)
- отсутствие приложений на `:5173`

Команды:

- запуск проекта `make run`, проект будет доступен на http://127.0.0.1:5173
- остановка проекта `make stop`
- просмотр логов  `make log`
- удаление собранных образов `make clean`


