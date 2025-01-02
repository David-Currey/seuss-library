const lib = document.querySelector('#library')

createBooks(books)

function createElement(type, props, ...children) {
	const el = document.createElement(type)
	Object.keys(props).forEach((prop) => (el[prop] = props[prop]))
	el.append(...children)
	return el
}

function createBooks(bookArray) {
	bookArray.forEach((book) => {
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
