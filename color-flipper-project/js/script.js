const colors = ['Red', 'Green', 'Blue', 'White', 'Black', 'Purple', 'Yellow', 'Orange'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // Получаем случайное число между 0 и 7 (переменная colors с массивом)
    // colors[0], colors[1] и тд
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * (colors.length - 0.99));
}