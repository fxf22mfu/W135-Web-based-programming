function onTextReady(text) {
    const PostMessage = document.getElementById('post-response');
    PostMessage.innerHTML = text;
    PostMessage.style = 'color: red';
}

function onResponse(response) {
    return response.text();
}

var form = document.querySelector('#form');

form.addEventListener("submit", processSubmit)

function processSubmit(e) {
    e.preventDefault();

    const message = {
        firstname: document.querySelector('#firstName').value,
        lastname: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        message: document.querySelector('#message').value
    };
    
    console.log(message);
    
    const serializedMessage = JSON.stringify(message); 
    
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serializedMessage
    }
    
    fetch('http://localhost:3000/contact',fetchOptions )
    .then(onResponse)
    .then(onTextReady);
}