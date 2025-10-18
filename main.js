const grid = document.getElementById("grid");

fetch('https://hp-api.onrender.com/api/characters')
    .then(r => r.json())
    .then(d => {
        document.getElementById('loading').remove();
        d.filter(p => p.image).forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="portrait"><img src="${p.image}" alt="${p.name}"></div>
                <div class="name">${p.name}</div>
                <div class="house">${p.house || 'Sin casa'}</div>
                <div class="actor">${p.actor}</div>
            `;
            grid.append(card);
        })
    })

 
