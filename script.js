const text = document.getElementById('text')
const inputText = document.getElementById('input_text')
let timerId
const outputText = (str)=>{
	text.textContent = str
}
inputText.addEventListener('input', function() {
	clearTimeout(timerId)
	// timerId = setTimeout(outputText, 300, this.value);
	timerId = setTimeout(()=> {outputText(this.value)}, 300);
	
})
