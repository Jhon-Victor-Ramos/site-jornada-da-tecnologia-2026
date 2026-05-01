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

    const headerPill = document.querySelector('.header-pill');
    if (data.category === 'Palestra' || data.speakers) {
        headerPill.style.visibility = 'hidden';
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

        const speakersSection = document.getElementById('js-speakers-section');
    if (data.speakers && data.speakers.length > 0) {
        speakersSection.style.display = 'flex';
        
        const teamIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;

        speakersSection.innerHTML = `
            <div class="column-header materials-header">
                ${teamIcon}
                <h3>Apresentadores</h3>
            </div>
            <div class="speakers-grid">
                ${data.speakers.map(speaker => `
                    <div class="speaker-card">
                        <a href="${speaker.link}" target="_blank" class="speaker-link">
                        <div class="speaker-photo">
                            <img src="${speaker.photo}" alt="Foto de ${speaker.name}">
                        </div>
                        <span class="speaker-name">${speaker.name}</span></a>
                    </div>
                `).join('')}
            </div>
        `;
    }
});