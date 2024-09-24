document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.querySelector('.read-more');
    const fullArticle = document.querySelector('.full-article');

    readMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        fullArticle.classList.toggle('hidden');
        readMoreButton.innerText = fullArticle.classList.contains('hidden') ? 'Read More' : 'Read Less';
    });
});
