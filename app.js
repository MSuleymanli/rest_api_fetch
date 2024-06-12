fetch('http://127.0.0.1:8000/blog-api/list')
	.then((res) => res.json())
	.then((json) => {
		const cardsContainer = document.getElementById('cards-container');

		const cards = json.map((data) => {
			const card = document.createElement('div');
			card.className = 'card';

			const nameElement = document.createElement('h4');
			nameElement.className = 'name';
			nameElement.textContent = data.name;

			const titleElement = document.createElement('p');
			titleElement.className = 'title';
			titleElement.textContent = data.title;

			const contentElement = document.createElement('p');
			contentElement.className = 'content';
			contentElement.textContent = data.content;

			const createdDateElement = document.createElement('small');
			createdDateElement.className = 'creadet_date';
			createdDateElement.textContent = `Created date: ${data.created_date}`;

			card.appendChild(nameElement);
			card.appendChild(titleElement);
			card.appendChild(contentElement);
			card.appendChild(createdDateElement);

			return card;
		});

		cards.map((card) => cardsContainer.appendChild(card));
	});
