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
            // CORREÇÃO: A URL MÁGICA FOI RESTAURADA AQUI!
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

    const prevBtn = document.getElementById('js-prev-btn');
    const nextBtn = document.getElementById('js-next-btn');
    const cards = track.querySelectorAll('.material-card');

    const observerOptions = { root: track, threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(c => c.classList.remove('active-card'));
                entry.target.classList.add('active-card');

                const index = Array.from(cards).indexOf(entry.target);
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === cards.length - 1;
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });
});