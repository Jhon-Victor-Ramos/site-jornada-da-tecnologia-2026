// data.js
const workshops = {
    "logica": {
        title: "Lógica de Programação",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-python.svg",
        colorClass: "sep-green",
        downloadLink: "#",
        description: "Fundamentos de algoritmos utilizando Python como linguagem base para o aprendizado.",
        recommendations:[
            { 
                title: "Algoritmos e Lógica de Programação [40 Horas]", 
                type: "Playlist", 
                channel: "Curso em Vídeo", 
                link: "https://www.cursoemvideo.com/curso/curso-de-algoritmo/", 
                desc: "A base perfeita para quem está começando do zero absoluto.",
                thumb: "./assets/icons/algoritmos-curso.svg" 
            },
            { 
                title: "Material didático IME", 
                type: "Docs", 
                channel: "IME — USP", 
                link: "https://www.ime.usp.br/~leo/mac2166/2017-1/", 
                desc: "A base perfeita para quem está começando do zero absoluto.",
                thumb: "./assets/icons/ime-curso.svg"
            },
            { 
                title: "Curso Lógica de Programação 2026 – Aprenda em 3 Horas", 
                type: "Vídeo", 
                channel: "Dev Aprender", 
                link: "https://www.youtube.com/watch?v=epf-WQdVis0", 
                desc: "Um excelente resumão para pegar a lógica rápido.",
            },
            { 
                title: "Algorithms and Data Structures Tutorial", 
                type: "Vídeo", 
                channel: "freeCodeCamp.org", 
                link: "https://www.youtube.com/watch?v=8hly31xKli0", 
                desc: "Para quem quer se aprofundar e treinar o inglês.",
            },
            { 
                title: "Bônus: Python 3 – Mundo 1 [40 Horas]",
                type: "Vídeo", 
                channel: "Curso em Vídeo", 
                link: "https://www.youtube.com/watch?v=S9uPNppGsGo", 
                desc: "Ótimo curso de Python do curso em vídeo",
            }
        ]
    },
    "git": {
        title: "Git & GitHub do zero",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-material-didatico.svg",
        colorClass: "sep-orange",
        downloadLink: "#",
        description: "Aprenda a versionar seus projetos e colaborar em equipe utilizando as ferramentas padrão da indústria.",
        recommendations:[
                {    
                    title: "Git Tutorial for Beginners: Learn Git in 1 Hour", 
                    type: "Vídeo", 
                    channel: "Programming With Mosh", 
                    link: "https://www.youtube.com/watch?v=8JJ101D3knE", 
                    desc: "Tutorial direto ao ponto em inglês.",
                },
                {
                    title: "Git e GitHub [20 Horas]",
                    type: "Playlist",
                    channel: "Curso em Vídeo",
                    link: "https://www.cursoemvideo.com/curso/curso-de-git-e-github/",
                    desc: "Um curso muito bom para quem está iniciando",
                    thumb: "https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/git-1-circle-b469e86e38ebb09f48ca09dbba863ca9-5d48cb37edbef.png"
                },
                {    
                    title: "GIT: Minicurso para Você Sair do Zero!", 
                    type: "Vídeo", 
                    channel: "Código Fonte TV", 
                    link: "https://www.youtube.com/watch?v=ts-H3W1uLMM", 
                    desc: "Um ótimo minicurso para começar no Git.",
                },
                {    
                    title: "APRENDA GIT e GITHUB DO ZERO - guia completo", 
                    type: "Vídeo", 
                    channel: "Fernanda Kipper | Dev", 
                    link: "https://www.youtube.com/watch?v=pyM5QLS2h6M", 
                    desc: "Vídeo incrível, excelente didática.",
                }
            ]
    },
    "visao": {
        title: "Eagle's Eye: Visão Computacional",
        category: "Palestra",
        duration: "1h30min",
        icon: "./assets/icons/eagle-icon.svg",
        colorClass: "sep-purple",
        downloadLink: "#",
        description: "Uma introdução ao processamento de imagens e IA aplicada ao reconhecimento de padrões.",
        recommendations:[
            { title: "OpenCV Tutorial", type: "Docs", channel: "OpenCV", link: "#", desc: "A biblioteca principal para visão computacional detalhada." },
            { title: "IA e Robótica", type: "Artigo", channel: "IEEE", link: "#", desc: "O futuro da percepção de máquinas em sistemas autônomos." }
        ]
    }
};