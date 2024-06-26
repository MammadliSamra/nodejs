const container = document.querySelector('.container');

const form = document.querySelector('form');

function ShowImage() {
    fetch('http://localhost:3000/Get')
        .then(response =>
            response.json()
        )
        .then(files => {
            files.forEach(file => {
                let div = document.createElement('div');

                div.className = 'image';

                let image = document.createElement('img');

                image.src = file.name;

                div.appendChild(image);

                container.appendChild(div);
            });
        });
}

ShowImage();

form.addEventListener('submit', ShowImage);