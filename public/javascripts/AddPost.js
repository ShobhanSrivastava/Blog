const titleInputEl = document.getElementById('title');
// const textAreaEl = document.getElementById('my-expressjs-tinymce-app');
const saveButtonEl = document.getElementById('savePost');

async function savePost() {
    const title = titleInputEl.value;
    const content = tinyMCE.get('mce_0').getContent();
    const author = 'Shobhan',
    console.log('Data', { title, content });

    const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            content,
            author,
        }),
    });
}

saveButtonEl.addEventListener('click', savePost);
