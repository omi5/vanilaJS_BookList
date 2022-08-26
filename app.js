// Dom Selectors

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

// event Listner

btn.addEventListener('click' , (e) =>{
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please enter your details and then submit !')
    }
    else{
        const CreateElement = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        CreateElement.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        CreateElement.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        CreateElement.appendChild(newYear);

        bookList.append(CreateElement)
    }
})