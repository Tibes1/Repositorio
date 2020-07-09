const $elementExampleFirst = document.querySelector('.elementExample_first')

const $elementExampleSecond = document.querySelector('.elementExample_second')

$elementExampleFirst.addEventListener('click', function(event) {
    this.classList.toggle('elementExample_isActive')
    $elementExampleSecond.classList.add('elementExample_isActive')
})

$elementExampleSecond.addEventListener('click', function(event) {
    this.classList.toggle('elementExample_isActive')
    $elementExampleFirst.classList.add('elementExample_isActive')
})