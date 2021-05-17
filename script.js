function showDiceVals() {
    dice = Array.from(document.getElementsByClassName('dice'))
    diceValText = document.getElementById('diceVal')
    console.log('Run')
    var string = ''
    dice.forEach(element => {
        if (element.classList.contains('1')) {
            string += '1 '
        } else if (element.classList.contains('2')) {
            string += '2 '
        } else if (element.classList.contains('3')) {
            string += '3 '
        } else if (element.classList.contains('4')) {
            string += '4 '
        } else if (element.classList.contains('5')) {
            string += '5 '
        } else if (element.classList.contains('6')) {
            string += '6 '
        } else if (element.classList.contains('7')) {
            string += '7 '
        } else if (element.classList.contains('8')) {
            string += '8 '
        } else if (element.classList.contains('9')) {
            string += '9 '
        } else { string += '404 '}
        diceValText.innerText = string
    });
}