
// javaCoding

function addValue(num){

    var inputField = document.getElementById("inputField")
    // console.log("inputField", inputField)
    inputField.value += num
}

function result(){
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)

}

function allClearValue(){
    var inputField = document.getElementById("inputField")
    inputField.value = ""

}

function singleClearValue(){

    var inputField  = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0, -1)
}


