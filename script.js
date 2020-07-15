;(async () => {
	const app = document.getElementById('app')
	const loader = document.getElementById('loader')
	const assetLoader = loader.querySelector('h2')

	const fetch_xml = (route, options={}) => {
		let xhr = new XMLHttpRequest()
		xhr.open(options.method || 'GET', `https://cors-anywhere.herokuapp.com/${route}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send(JSON.stringify(options.body || {}))
		return new Promise((resolve, reject) => {
			xhr.onload = () => {
				if(xhr.status === 200){
					let response = JSON.parse(xhr.responseText)
					resolve(response)
				}
				else if(xhr.status) reject(xhr.responseText)
			}
		})
	}

	const api = await fetch(`/api.json`).then(res => res.json())

	const init = toAppend => {
		toAppend.forEach(elem => app.appendChild(elem))
		const images = document.querySelectorAll('[data-src]')
		const imgArray = Array.from(images)

		const checkImage = (image, index) => {
			if (image.getBoundingClientRect().top < window.innerHeight * 1.25) {
				image.setAttribute('src', image.getAttribute('data-src'))
				image.onload = () => image.removeAttribute('data-src')
				image.onerror = () => image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlAA9xSFyL6drb7mlB9fjhV59btrHZlXlt7A&usqp=CAU'
				imgArray.splice(index, 1)
			}
		}
		let move
		const scrollHandler = () => {
			imgArray.forEach(checkImage)
			if (!imgArray.length) {
				clearInterval(move)
			}
		}
		move = setInterval(scrollHandler, 300)
		imgArray.forEach(checkImage)
	}


	const convert = params => {
		let esc = encodeURIComponent
		return Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&')
	}

	let toAppend = [],
		used = []
	
	let assetLength = Object.keys(api).length
	let index = 0


	for(const [key, val] of Object.entries(api)) {
		let src = val.images
		

		let div = document.createElement('div')
		div.className = 'card'
		div.setAttribute('data-title', val.summary == '' ? val.title : val.summary)

		let a = document.createElement('a')
		a.href = key.includes('http') ? key : `https://${key}`

		let image = document.createElement('img')
		image.setAttribute('data-src', src)

		a.appendChild(image)
		div.appendChild(a)
		toAppend.push(div)

		index++
		assetLoader.innerHTML = `${index}/${assetLength} <br>Fetching images...`
	}

	loader.className = 'fade-out'
	loader.onanimationend = () => {
		init(toAppend)
		loader.remove()
	}
})()