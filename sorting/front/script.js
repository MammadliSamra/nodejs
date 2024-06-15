document.addEventListener('DOMContentLoaded', function () {
    function GetAll() {
        fetch('http://localhost:3000/workers/')
            .then(response => response.json())
            .then(data => {
                const workersList = document.getElementById('workers-list');
                workersList.innerHTML = '';

                data.forEach(worker => {
                    const workerElement = document.createElement('div');
                    workerElement.className = 'worker';
                    workerElement.innerHTML = `
                        <h2>Name: ${worker.name}</h2>
                        <p>Position: ${worker.position}</p>
                        <p>Department: ${worker.department}</p>
                    `;
                    workersList.appendChild(workerElement);
                });
            })
            .catch(error => {
                console.error('Error fetching workers:', error);
            });
    }

    GetAll();
});
