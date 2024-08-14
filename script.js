document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector('.card-container');

    for (let i = 1; i <= 12; i++) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card h-100" data-id="${i}">
                <div class="card-body">
                    <h5 class="card-title">Card ${i}</h5>
                    <p class="card-text">Click to see more details</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.getAttribute('data-id');

            // alert(`You clicked on Card ${cardId}`);

            window.location.href = `details.html?id=${cardId}`;
        });
    });
});