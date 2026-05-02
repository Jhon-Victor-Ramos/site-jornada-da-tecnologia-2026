// data.js
const workshops = {
    "logica": {
        title: "Lógica de Programação",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-python.svg",
        colorClass: "sep-green",
        downloadLink: "https://github.com/Jhon-Victor-Ramos/minicurso-logica-programacao-2026/archive/refs/heads/main.zip",
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
                desc: "Um excelente resumão para pegar a lógica rápido."
            },
            { 
                title: "Algorithms and Data Structures Tutorial", 
                type: "Vídeo", 
                channel: "freeCodeCamp.org", 
                link: "https://www.youtube.com/watch?v=8hly31xKli0", 
                desc: "Para quem quer se aprofundar e treinar o inglês."
            },
            { 
                title: "Bônus: Python 3 – Mundo 1[40 Horas]",
                type: "Vídeo", 
                channel: "Curso em Vídeo", 
                link: "https://www.youtube.com/watch?v=S9uPNppGsGo", 
                desc: "Ótimo curso de Python do curso em vídeo"
            }
        ]
    },
    "git": {
        title: "Git & GitHub do zero",
        category: "Minicurso",
        duration: "2h",
        icon: "./assets/icons/logo-material-didatico.svg",
        colorClass: "sep-orange",
        downloadLink: "https://github.com/Jhon-Victor-Ramos/minicurso-git-github-2026/archive/refs/heads/main.zip",
        description: "Aprenda a versionar seus projetos e colaborar em equipe utilizando as ferramentas padrão da indústria.",
        recommendations:[
                {    
                    title: "Git Tutorial for Beginners: Learn Git in 1 Hour", 
                    type: "Vídeo", 
                    channel: "Programming With Mosh", 
                    link: "https://www.youtube.com/watch?v=8JJ101D3knE", 
                    desc: "Tutorial direto ao ponto em inglês."
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
                    desc: "Um ótimo minicurso para começar no Git."
                },
                {    
                    title: "APRENDA GIT e GITHUB DO ZERO - guia completo", 
                    type: "Vídeo", 
                    channel: "Fernanda Kipper | Dev", 
                    link: "https://www.youtube.com/watch?v=pyM5QLS2h6M", 
                    desc: "Vídeo incrível, excelente didática."
                }
            ]
    },
    "visao-computacional": {
        title: "Eagle's Eye: Visão Computacional Aplicada à Drones",
        category: "Palestra",
        duration: "1h30min",
        icon: "./assets/icons/eagle-icon.svg",
        colorClass: "sep-purple",
        downloadLink: "#",
        description: "Uma introdução ao processamento de imagens e IA aplicada ao reconhecimento de padrões.",
        speakers:[
            { 
                name: "Camilla Torquato",
                photo: "./assets/images/camila-torquato.webp",
                link: "https://www.linkedin.com/in/camila-torquato-5b5356354?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
                name: "Jhon Victor",
                photo: "./assets/images/jhon-victor.webp",
                link: "https://www.linkedin.com/in/jhon-victor-ramos/"
            },
            { 
                name: "João Pedro",
                photo: "./assets/images/joao-pedro.webp",
                link: ""
            },
            { 
                name: "Maria Clara",
                photo: "./assets/images/maria-clara.webp",
                link: "https://www.linkedin.com/in/maria-clara-de-oliveira-barbosa-07457b364/"
            },
            { 
                name: "Maria Luiza",
                photo: "./assets/images/maria-luiza.webp",
                link: "https://www.linkedin.com/in/maria-luiza-monteiro-6a7246280/"
            },
            { 
                name: "Rielly Luiza",
                photo: "./assets/images/rielly-luiza.webp",
                link: "https://www.linkedin.com/in/rielly-luiza-370282332?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            }
        ],

        recommendations:[
            {
                title: "Construa seu Drone",
                type: "Playlist",
                channel: "a Revisada",
                thumb: "https://i.ytimg.com/vi/972Z_QBTgM8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtGB9GjrxxWMt8NfL6eIWdg281DQ",
                link: "https://youtube.com/playlist?list=PLRCchDl13FVkp0AHYTX3Gcn1S1PhBTcea&si=bHvuLYqzav1ZsW_w",
                desc: "Playlist que ensina a montar drones e configurá-los."
            },
            {    
                title: "OpenCV Course - Full Tutorial with Python", 
                type: "Vídeo", 
                channel: "freeCodeCamp.org", 
                link: "https://www.youtube.com/watch?v=oXlwWbU8l2o",
                desc: "Curso completo de OpenCV."
            },
            {
                title: "Introdução à Visão Computacional",
                type: "Playlist",
                channel: "Programação Dinâmica",
                thumb: "https://i.ytimg.com/vi/RSkbjZZb-1c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlKt-TfOf0aCLg8DWBNAQu490-dA",
                link: "https://youtube.com/playlist?list=PL5TJqBvpXQv729nb3vdeP4E87hLark5q9",
                desc: "Nesta playlist você vai entender o que é visão computacional e aprendizado de máquina."
            },
            {
                title: "Primeiros passos com Pytorch | Deep Learning #1",
                type: "Live",
                channel: "Programação Dinâmica",
                thumb: "https://i.ytimg.com/vi/cGxv8tOaA7I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZQnr1TEB2rqnfBznINbtj0YZnYw",
                link: "https://www.youtube.com/watch?v=cGxv8tOaA7I",
                desc: "Live feita para introduzir o conteúdo de PyThorch e também redes neurais."
            },
            {
                title: "Explicação sobre a detecção de objetos YOLO",
                type: "Site",
                channel: "datacamp",
                thumb: "https://images.datacamp.com/image/upload/v1664382700/Object_detection_illustrated_from_image_recognition_and_localization_704ca34bd8.png",
                link: "https://www.datacamp.com/pt/blog/yolo-object-detection-explained",
                desc: "Entenda a detecção de objetos YOLO, seus benefícios, como ela evoluiu nos últimos anos e alguns aplicativos da vida real."
            }
        ]
    }
};