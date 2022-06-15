

const createPost = async (e)=>{
    e.preventDefault();

    const form = document.querySelector('form');

    const doc = {
        //"id" : 101, JSON will automatically assign id
        "title" : form.title.value,
        "body" : form.body.value,
        "likes" : 0
    };

    await fetch('http://localhost:3000/posts',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(doc)
    });

    window.location.replace('./index.html');
}
window.addEventListener('submit', createPost);