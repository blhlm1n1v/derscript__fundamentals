let x = prompt("Nomreni daxil edin:")

function isvalidnumber() {
        if (x.length === 11 && x[0] === "+" && x[1] === '7') {
            return true
        }
        else if (x.length > 12 && x.length < 12) {
            return false
        }
        else{ return false }
}
alert(isvalidnumber( ))