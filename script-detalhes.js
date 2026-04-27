// Função para extrair o ID do YouTube
function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    const data = workshops[courseId];

    if (!data) {
        window.location.href = 'index.html';
        return;
    }

    // Preenche o Hero
    document.getElementById('js-title').textContent = data.title;
    document.getElementById('js-category').textContent = data.category;
    document.getElementById('js-duration').textContent = data.duration;
    document.getElementById('js-hero-icon').src = data.icon;
    document.getElementById('js-download').href = data.downloadLink;
    document.getElementById('js-separator').className = `inner-sep ${data.colorClass}`;

    // Renderiza os Cards
    const track = document.getElementById('js-materials-grid');
    track.innerHTML = data.recommendations.map(item => {
        let finalThumb = item.thumb;
        if (!finalThumb && item.link && item.link.includes('youtu')) {
            const ytId = getYouTubeId(item.link);
            if (ytId) finalThumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`; 
        }

        const thumbHtml = finalThumb 
            ? `<img src="${finalThumb}" alt="Capa" class="material-thumb">`
            : `<div class="thumb-placeholder"></div>`;

        return `
            <article class="material-card glass">
                <div class="thumb-container">
                    ${thumbHtml}
                </div>
                <div class="card-content">
                    <div class="pill-meta">
                        <div class="cat-wrapper">
                            <span class="pill-cat">${item.type}</span>
                            <div class="inner-sep ${data.colorClass} card-sep" style="opacity: .6;"></div> 
                        </div>
                        <span class="pill-dur">${item.channel}</span>
                    </div>
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="material-title">
                        <span class="title-text">${item.title}</span>
                        <img src="./assets/icons/external-link.svg" alt="Link externo" class="external-icon">
                    </a>
                    <p class="material-desc">${item.desc}</p>
                </div>
            </article>
        `;
    }).join('');

    // --- LÓGICA DO CARROSSEL (INTERSECTION OBSERVER) ---
    const prevBtn = document.getElementById('js-prev-btn');
    const nextBtn = document.getElementById('js-next-btn');
    const cards = track.querySelectorAll('.material-card');

    // Opções do Olheiro: 60% do card precisa estar na tela para ser "ativo"
    const observerOptions = {
        root: track,
        threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove o brilho de todos
                cards.forEach(c => c.classList.remove('active-card'));
                // Adiciona o brilho no card que está no centro
                entry.target.classList.add('active-card');

                // Lógica para apagar a seta quando chegar no limite
                const index = Array.from(cards).indexOf(entry.target);
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === cards.length - 1;
            }
        });
    }, observerOptions);

    // Manda o olheiro vigiar todos os cards gerados
    cards.forEach(card => observer.observe(card));

    // Ação das Setinhas (Desliza 320px, que é o tamanho do card + gap)
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });
});