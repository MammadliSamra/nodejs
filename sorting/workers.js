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


function CheckData(req, res, next) {
    if (req.query.department === 'nothing' && req.query.name === '') {
        res.status(400).send('Enter data');
    }
    else {
        next();
    }
}

function CheckName(req, res, next) {
    if (arr.filter((worker) => worker.name.toLowerCase().indexOf(req.query.name.toLowerCase()) >= 0).length === 0 && req.query.department==='nothing') {
        res.status(400).send('Nothing found by this name');
    }
    else {
        next();
    }
}

function Sort(req, res) {
    if (req.query.department === 'nothing') {
        res.json(arr.filter((worker) => worker.name.toLowerCase().indexOf(req.query.name.toLowerCase()) >= 0))
    }
    else if (req.query.name === '') {
        res.json(arr.filter((worker) => worker.department === req.query.department))
    }
    else {
        res.json(arr.filter((worker) => worker.name.toLowerCase().indexOf(req.query.name.toLowerCase()) >= 0 && worker.department === req.query.department))
    }
}

router.get('/sort/', [CheckData, CheckName, Sort]);

module.exports = router;
