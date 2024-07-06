const { Transform, Readable } = require('stream');

let employees = [
    {
        name: null,
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: null,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];

const transformer = new Transform({
    transform(chunk, encoding, callback) {
        const obj = JSON.parse(String.fromCharCode(...chunk));
        const transformedChunk = obj.filter((e) => {
            return e.age !== null && e.salary !== null && e.name !== null 
        });
        console.log(transformedChunk)
    }
});

const readable = Readable.from(JSON.stringify(employees));

readable.pipe(transformer);  