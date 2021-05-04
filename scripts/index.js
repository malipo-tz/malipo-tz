var mpesa = document.querySelector('.mpesa')
var tigoPesa = document.querySelector('.tigo')

mpesa.addEventListener('click', (() => {
    window.location = 'makato-ya-mpesa.html'
}))

tigoPesa.addEventListener('click', (() => {
    window.location = 'makato-tigo-pesa.html'
}))