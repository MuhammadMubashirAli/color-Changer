
var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal','yellow'];

var myDiv = document.getElementById('box')
var btn = document.getElementById('box1')
 var colorName = document.getElementById('color')

function colorChange() {

        var randomColor = colors[(Math.floor(Math.random() * colors.length))]
        console.log(randomColor)

        myDiv.style.backgroundColor = randomColor

        colorName.innerText = "Color : " + randomColor



}


btn.addEventListener('click', colorChange)








