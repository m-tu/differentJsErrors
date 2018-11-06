document
	.getElementById('click')
	.addEventListener('click', function () {
		functionOne()
	});

document
	.getElementById('click1')
	.addEventListener('click', function () {
		functionThree()
	});


function functionOne() {
	functionTwo()

}function functionThree() {
	functionTwo()
}

function functionTwo() {
	throw new Error(`Error message: ${Date.now()}`)
}