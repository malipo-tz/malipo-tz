var tuma = document.querySelector('.tuma')
var toa = document.querySelector('.toa')
var inputToa = document.querySelector('.inputToa')
var inputTuma = document.querySelector('.inputTuma')

tuma.addEventListener('click', (() => {
    tuma.classList.add('chagua')
    toa.classList.remove('chagua')
    toa.classList.add('rangi')
    tuma.classList.remove('rangi')

    document.querySelector('.maelezoToa').style.display = 'none'
    document.querySelector('.maelezo').style.display = 'block'


    inputToa.style.display = 'none'
    inputTuma.style.display = 'block'
}))

function ingizaTuma() {
    const kiasiTuma = Number(document.getElementById('kiasiTuma').value)
    var inputKiasiTuma = document.getElementById('kiasiTuma')
    var kiasi = document.getElementById('kiasi')
    var makatoMpesa = document.getElementById('makatoMpesa')
    var makatoMingine = document.getElementById('makatoMingine')
    var salio1 = document.getElementById('salio1')
    var salio2 = document.getElementById('salio2')
    var kisichopunguaMpesa = document.getElementById('kisichopunguaMpesa')
    var kisichopunguaMingine = document.getElementById('kisichopunguaMingine')
    var makosaTuma = document.getElementById('makosaTuma')

    // check if input is empty
    if (kiasiTuma == '') {
        makatoMpesa.innerText = 'Tsh. '+ 0
        makatoMingine.innerText = 'Tsh. '+ 0

        kisichopunguaMpesa.innerText = 'Tsh. '+ 0
        kisichopunguaMingine.innerText = 'Tsh. '+ 0

        salio1.innerText = 0
        salio2.innerText = 0
    }


    //calculations
    if (kiasiTuma >= 1 && kiasiTuma <= 999) {
        makatoMpesa.innerText = 'Tsh. '+ 15
        makatoMingine.innerText = 'Tsh. '+ 15

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 15).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 15).toLocaleString()
    }
    
    else if (kiasiTuma >= 1000 && kiasiTuma <= 1999) {
        makatoMpesa.innerText = 'Tsh. '+ 30
        makatoMingine.innerText = 'Tsh. '+ 35

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 30).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 35).toLocaleString()
    }

    else if (kiasiTuma >= 2000 && kiasiTuma <= 2999) {
        makatoMpesa.innerText = 'Tsh. '+ 30
        makatoMingine.innerText = 'Tsh. '+ 45

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 30).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 45).toLocaleString()
    }

    else if (kiasiTuma >= 3000 && kiasiTuma <= 3999) {
        makatoMpesa.innerText = 'Tsh. '+ 50
        makatoMingine.innerText = 'Tsh. '+ 76

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 50).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 76).toLocaleString()
    }

    else if (kiasiTuma >= 4000 && kiasiTuma <= 4999) {
        makatoMpesa.innerText = 'Tsh. '+ 60
        makatoMingine.innerText = 'Tsh. '+ 90

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 60).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 90).toLocaleString()
    }

    else if (kiasiTuma >= 5000 && kiasiTuma <= 6999) {
        makatoMpesa.innerText = 'Tsh. '+ 130
        makatoMingine.innerText = 'Tsh. '+ 200

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 130).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 200).toLocaleString()
    }

    else if (kiasiTuma >= 7000 && kiasiTuma <= 9999) {
        makatoMpesa.innerText = 'Tsh. '+ 150
        makatoMingine.innerText = 'Tsh. '+ 200

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 150).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 200).toLocaleString()
    }

    else if (kiasiTuma >= 10000 && kiasiTuma <= 14999) {
        makatoMpesa.innerText = 'Tsh. '+ 350
        makatoMingine.innerText = 'Tsh. '+ 550

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 350).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 550).toLocaleString()
    }

    else if (kiasiTuma >= 15000 && kiasiTuma <= 19999) {
        makatoMpesa.innerText = 'Tsh. '+ 360
        makatoMingine.innerText = 'Tsh. '+ 550

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 360).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 560).toLocaleString()
    }

    else if (kiasiTuma >= 20000 && kiasiTuma <= 29999) {
        makatoMpesa.innerText = 'Tsh. '+ 380
        makatoMingine.innerText = 'Tsh. '+ 600

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 380).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 600).toLocaleString()
    }

    else if (kiasiTuma >= 30000 && kiasiTuma <= 39999) {
        makatoMpesa.innerText = 'Tsh. '+ 400
        makatoMingine.innerText = 'Tsh. '+ 680

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 400).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 680).toLocaleString()
    }

    else if (kiasiTuma >= 40000 && kiasiTuma <= 49999) {
        makatoMpesa.innerText = 'Tsh. '+ 410
        makatoMingine.innerText = 'Tsh. '+ 750

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 410).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 750).toLocaleString()
    }

    else if (kiasiTuma >= 50000 && kiasiTuma <= 99999) {
        makatoMpesa.innerText = 'Tsh. '+ 720
        makatoMingine.innerText = 'Tsh. '+ 1250

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 720).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 1250).toLocaleString()
    }

    else if (kiasiTuma >= 100000 && kiasiTuma <= 199999) {
        makatoMpesa.innerText = 'Tsh. '+ 1000
        makatoMingine.innerText = 'Tsh. '+ 1600

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 1000).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 1600).toLocaleString()
    }

    else if (kiasiTuma >= 200000 && kiasiTuma <= 299999) {
        makatoMpesa.innerText = 'Tsh. '+ 1200
        makatoMingine.innerText = 'Tsh. '+ 1900

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 1200).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 1900).toLocaleString()
    }

    else if (kiasiTuma >= 300000 && kiasiTuma <= 399999) {
        makatoMpesa.innerText = 'Tsh. '+ 1500
        makatoMingine.innerText = 'Tsh. '+ 2300

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 1500).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 2300).toLocaleString()
    }

    else if (kiasiTuma >= 400000 && kiasiTuma <= 499999) {
        makatoMpesa.innerText = 'Tsh. '+ 1500
        makatoMingine.innerText = 'Tsh. '+ 2500

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 1500).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 2500).toLocaleString()
    }

    else if (kiasiTuma >= 500000 && kiasiTuma <= 599999) {
        makatoMpesa.innerText = 'Tsh. '+ 2200
        makatoMingine.innerText = 'Tsh. '+ 3200

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 2200).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 3200).toLocaleString()
    }

    else if (kiasiTuma >= 600000 && kiasiTuma <= 699999) {
        makatoMpesa.innerText = 'Tsh. '+ 3300
        makatoMingine.innerText = 'Tsh. '+ 4300

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 3300).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 4300).toLocaleString()
    }

    else if (kiasiTuma >= 700000 && kiasiTuma <= 799999) {
        makatoMpesa.innerText = 'Tsh. '+ 3300
        makatoMingine.innerText = 'Tsh. '+ 4300

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 3300).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 4300).toLocaleString()
    }

    else if (kiasiTuma >= 800000 && kiasiTuma <= 899999) {
        makatoMpesa.innerText = 'Tsh. '+ 3500
        makatoMingine.innerText = 'Tsh. '+ 4300

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 3500).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 4300).toLocaleString()
    }

    else if (kiasiTuma >= 900000 && kiasiTuma <= 1000000) {
        makatoMpesa.innerText = 'Tsh. '+ 3500
        makatoMingine.innerText = 'Tsh. '+ 6000

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 3500).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 6000).toLocaleString()
    }

    else if (kiasiTuma >= 1000001 && kiasiTuma <= 3000000) {
        makatoMpesa.innerText = 'Tsh. '+ 5000
        makatoMingine.innerText = 'Tsh. '+ 6000

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 5000).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 6000).toLocaleString()
    }

    else if (kiasiTuma > 3000000) {
        makatoMpesa.innerText = 'Tsh. '+ 5000
        makatoMingine.innerText = 'Tsh. '+ 6000

        kisichopunguaMpesa.innerText = 'Tsh. '+ (kiasiTuma + 5000).toLocaleString()
        kisichopunguaMingine.innerText = 'Tsh. '+ (kiasiTuma + 6000).toLocaleString()
    }

    else {
        makosaTuma.innerText = 'Tafadhali ingiza kiasi sahihi!'
        makosaTuma.style.display = 'block'
        makosaTuma.style.color = 'red'
        inputKiasiTuma.style.border = 'red 2px solid'
    }

    if (kiasiTuma >= 1) {
        inputKiasiTuma.style.border = 'green 2px solid'
        makosaTuma.style.display = 'none'
        makatoMingine.style.display = 'inline'
        makatoMpesa.style.display = 'inline'
    }

    else {
        makatoMingine.style.display = 'none'
        makatoMpesa.style.display = 'none'
    }

    kiasi.innerText = 'Tsh. ' + kiasiTuma.toLocaleString() + '/='
    salio1.innerText = 'Tsh. ' + kiasiTuma.toLocaleString()
    salio2.innerText = 'Tsh. ' + kiasiTuma.toLocaleString()
}

