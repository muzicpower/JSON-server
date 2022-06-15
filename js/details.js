
const deleteBtn = document.querySelector('.delete');
const id = new URLSearchParams(window.location.search).get('id');

const renderDetailedPost = async ()=>{
    const res = await fetch (`http://localhost:3000/posts/${id}`);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <a href="./index.html" class=>Go back..</a>
        `;
    document.querySelector('.details').innerHTML=template;
    
}
window.addEventListener('DOMContentLoaded', ()=>renderDetailedPost());

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id,
    {
        method: 'DELETE'
    });

    window.location.replace('./index.html');
})
