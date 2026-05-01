# Jornada da Tecnologia 2026 | Hub de Materiais 🚀

Bem-vindo ao repositório oficial do hub de materiais da minha participação na **Jornada da Tecnologia de 2026**. 
Este projeto foi desenvolvido e projetado do zero para entregar uma experiência imersiva, acessível e de altíssima performance para os alunos acessarem os conteúdos dos minicursos e palestras.

🔗 **[Acesse o Site ao Vivo Aqui](https://jhon-victor-ramos.github.io/site-jornada-da-tecnologia-2026/)**

---

## Preview da Interface

| Página Inicial (Desktop) | Detalhes do Minicurso (Desktop) |
| :---: | :---: |
| <img src="./pagina-inicial-desktop.png" width="400"> | <img src="./pagina-curso-desktop.png" width="400"> |

| Página Inicial (Mobile) | Detalhes do Minicurso (Mobile) |
| :---: | :---: |
| <img src="./pagina-inicial-mobile.png" width="200"> | <img src="./pagina-curso-mobile.png" width="200"> |

---

## Tecnologias e Decisões de Engenharia

Para este projeto, optei por uma abordagem **Vanilla (HTML5, CSS3, JavaScript puro)**, dispensando o uso de frameworks ou bibliotecas externas pesadas. O objetivo foi garantir um carregamento quase instantâneo, ideal para conexões 4G/3G móveis durante o evento.

### 1. UI/UX
* A interface utiliza um Design System no formato "Dark Mode" com tokens de variáveis CSS, regras de espaçamento, grid e entre outras funções.
* Heurísticas de designs foram aplicadas para melhor fluxo de navegação do usuário, além de tornar a interface equilibrada entre um design bonito e boa usabilidade.

### 2. Extração Dinâmica de Thumbnails (Regex)
* Para facilitar a manutenção do banco de dados local (`data.js`), o JavaScript conta com um parser de Expressão Regular (Regex) que detecta URLs do YouTube.
* Se um vídeo for recomendado, o sistema extrai o ID do vídeo em tempo real e consome o endpoint `hqdefault.jpg` do YouTube para gerar a capa do material automaticamente, sem a necessidade de hospedar imagens adicionais.

### 3. Arquitetura Distribuída de Arquivos (Hub and Spoke)
* Os PDFs e códigos-fonte das aulas **não** pesam neste repositório principal, evitando *repo bloat*.
* O site conecta-se à repositórios exclusivos para cada palestra/minicurso. 
* O botão de download utiliza a API de arquivamento nativa do Git (`/archive/refs/heads/main.zip`). Para que um arquivo `.zip` limpo fosse entregue para os alunos, regras foram definidas nos arquivos `.gitattributes` em cada repositório.

---

## Desenvolvedor

**Jhon Victor**
* Estudante de Ciência da Computação e Desenvolvedor **→** [Linkedin](https://www.linkedin.com/in/jhon-victor-ramos/) ; [GitHub](https://github.com/Jhon-Victor-Ramos/) ; [Instagram](https://www.instagram.com/jhonvictor_dev) ; [Lattes](http://lattes.cnpq.br/2282663214204464)
