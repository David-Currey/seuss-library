const lib = document.querySelector('#library')

createBooks()

// utility function for adding elements to webpage
function createElement(type, props, ...children) {
	const el = document.createElement(type)
	Object.keys(props).forEach((prop) => (el[prop] = props[prop]))
	el.append(...children)
	return el
}

// fetch books from api
async function fetchBooks() {
	const url = 'https://seussology.info/api/books'

	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const books = await response.json()

		if (!Array.isArray(books)) {
			throw new Error('Expected an array of books in the response')
		}

		const bookList = books.map((book) => ({
			id: book.id,
			title: book.title,
			image: book.image,
		}))

		return bookList
	} catch (error) {
		console.error('Fetch failed:', error)
		return []
	}
}

// display fetched data on webpage
async function createBooks() {
	const bookList = await fetchBooks()

	if (!bookList.length) {
		console.warn('No books found or an error occurred.')
	}

	bookList.forEach((book) => {
		const bookItem = createElement(
			'div',
			{ className: 'book' },
			createElement('img', {
				src: book.image,
				className: 'img-fluid',
				alt: `Cover of ${book.title}`,
			})
		)
		lib.appendChild(bookItem)
	})
}
