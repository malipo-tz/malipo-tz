var tuma = document.querySelector('.tuma')
var toa = document.querySelector('.toa')
var inputToa = document.querySelector('.inputToa')
var inputTuma = document.querySelector('.inputTuma')
var makosaToa = document.getElementById('makosaToa')
var inputKutoa = document.getElementById('kiasiToa')

toa.addEventListener('click', (() => {
    tuma.classList.remove('chagua')
    tuma.classList.add('rangi')
    toa.classList.remove('rangi')
    toa.classList.add('chagua')

    document.querySelector('.maelezoToa').style.display = 'block'
    document.querySelector('.maelezo').style.display = 'none'

    inputTuma.style.display = 'none'
    inputToa.style.display = 'block'
}))

function ingizaToa() {
    const kiasiToa = Number(document.getElementById('kiasiToa').value)
    var kiasiChaKuToa = document.getElementById('kiasiChaKuToa')
    var makatoYaKutoa = document.getElementById('makatoYaKutoa')
    var salioWezeshi = document.getElementById('salioWezeshi')
    var kisichopungua2 = document.getElementById('kisichopungua2')

    kiasiChaKuToa.innerHTML = `<b>Tsh. ${(kiasiToa * 1).toLocaleString()}/=</b>`
    salioWezeshi.innerHTML = `<b>Tsh. ${(kiasiToa * 1).toLocaleString()}/=</b>`

    // check if input is empty
    if (kiasiToa == '') {
        makatoYaKutoa = 'Tsh. ' + 0
        kiasiChaKuToa = 'Tsh. ' + 0

        kisichopungua2.innerText = 'Tsh. ' + 0
        salioWezeshi.innerText = 'Tsh. ' + 0
    }

    //calculations
    if (kiasiToa >= 1 && kiasiToa <= 999) {
        let makato = 0
        makatoYaKutoa.innerHTML = `<b>None</b>`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }
    
    else if (kiasiToa >= 1000 && kiasiToa <= 1999) {
        let makato = 350
        makatoYaKutoa.innerText = `Tsh. ${makato}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 2000 && kiasiToa <= 2999) {
        let makato = 400
        makatoYaKutoa.innerText = `Tsh. ${makato}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 3000 && kiasiToa <= 3999) {
        let makato = 600
        makatoYaKutoa.innerText = `Tsh. ${makato}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 4000 && kiasiToa <= 4999) {
        let makato = 650
        makatoYaKutoa.innerText = `Tsh. ${makato}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 5000 && kiasiToa <= 6999) {
        let makato = 950
        makatoYaKutoa.innerText = `Tsh. ${makato}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 7000 && kiasiToa <= 9999) {
        let makato = 1000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 10000 && kiasiToa <= 14999) {
        let makato = 1450
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 15000 && kiasiToa <= 19999) {
        let makato = 1450
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 20000 && kiasiToa <= 29999) {
        let makato = 1850
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 30000 && kiasiToa <= 39999) {
        let makato = 1850
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 40000 && kiasiToa <= 49999) {
        let makato = 2350
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 50000 && kiasiToa <= 99999) {
        let makato = 2700
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 100000 && kiasiToa <= 199999) {
        let makato = 3650
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 200000 && kiasiToa <= 299999) {
        let makato = 5300
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 300000 && kiasiToa <= 399999) {
        let makato = 6500
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 400000 && kiasiToa <= 499999) {
        let makato = 7000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 500000 && kiasiToa <= 599999) {
        let makato = 7500
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 600000 && kiasiToa <= 699999) {
        let makato = 8000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 700000 && kiasiToa <= 799999) {
        let makato = 8000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 800000 && kiasiToa <= 899999) {
        let makato = 8000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 900000 && kiasiToa <= 1000000) {
        let makato = 8000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa >= 1000001 && kiasiToa <= 3000000) {
        let makato = 8000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else if (kiasiToa > 3000000) {
        let makato = 10000
        makatoYaKutoa.innerText = `Tsh. ${(makato).toLocaleString()}/=`
        kisichopungua2.innerHTML = `<b>Tsh. ${(kiasiToa+makato).toLocaleString()}</b>`
    }

    else {
        makosaToa.innerText = 'Tafadhali ingiza kiasi sahihi!'
        makosaToa.style.display = 'block'
        makosaToa.style.color = 'red'
        inputKutoa.style.border = 'red 2px solid'
    }

    if (kiasiToa >= 1) {
        inputKutoa.style.border = 'green 2px solid'
        makosaToa.style.display = 'none'
        makatoYaKutoa.style.display = 'inline'
    }

    else {
        makatoYaKutoa.style.display = 'none'
    }
}