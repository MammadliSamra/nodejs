const express = require('express');
const router = express.Router();

let arr = [
    {
        "name": "Алексей Иванов",
        "department": "Маркетинг",
        "position": "Менеджер по маркетингу"
    },
    {
        "name": "Ольга Петрова",
        "department": "Маркетинг",
        "position": "Аналитик по маркетингу"
    },
    {
        "name": "Ирина Сидорова",
        "department": "Финансы",
        "position": "Финансовый аналитик"
    },
    {
        "name": "Максим Кузнецов",
        "department": "ИТ",
        "position": "Разработчик программного обеспечения"
    },
    {
        "name": "Наталья Смирнова",
        "department": "Человеческие ресурсы",
        "position": "HR-менеджер"
    },
    {
        "name": "Дмитрий Васильев",
        "department": "Финансы",
        "position": "Бухгалтер"
    },
    {
        "name": "Екатерина Михайлова",
        "department": "ИТ",
        "position": "Системный администратор"
    },
    {
        "name": "Андрей Попов",
        "department": "Маркетинг",
        "position": "Специалист по рекламе"
    },
    {
        "name": "Татьяна Ковалёва",
        "department": "Финансы",
        "position": "Контролёр"
    },
    {
        "name": "Сергей Новиков",
        "department": "ИТ",
        "position": "Аналитик данных"
    },
    {
        "name": "Марина Федорова",
        "department": "Человеческие ресурсы",
        "position": "Рекрутер"
    },
    {
        "name": "Виктор Захаров",
        "department": "Маркетинг",
        "position": "Менеджер по контенту"
    },
    {
        "name": "Анна Баранова",
        "department": "ИТ",
        "position": "Разработчик мобильных приложений"
    },
    {
        "name": "Игорь Соловьев",
        "department": "Человеческие ресурсы",
        "position": "Специалист по обучению"
    },
    {
        "name": "Юлия Лебедева",
        "department": "Финансы",
        "position": "Финансовый консультант"
    },
    {
        "name": "Владимир Борисов",
        "department": "Маркетинг",
        "position": "PR-специалист"
    },
    {
        "name": "Елена Воробьёва",
        "department": "Человеческие ресурсы",
        "position": "Специалист по компенсациям и льготам"
    },
    {
        "name": "Александр Герасимов",
        "department": "ИТ",
        "position": "Инженер по безопасности"
    },
    {
        "name": "Светлана Чернова",
        "department": "Маркетинг",
        "position": "Менеджер по продукту"
    },
    {
        "name": "Роман Григорьев",
        "department": "Финансы",
        "position": "Риск-менеджер"
    }
]

router.get('/', (req, res) => {
    res.json(arr)
})

module.exports = router;