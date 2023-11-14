document.addEventListener('DOMContentLoaded', (e) => {
	document.body.style.height = `${window.innerHeight}px`
	console.log('oi')
})


setTimeout(()=>{
	document
		.querySelector('.style_container')
		.dataset.container='animar'
},300)