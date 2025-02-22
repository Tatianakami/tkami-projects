 
# 🚀 Landing Page - Currículo Interativo

Este é um projeto de landing page interativa para apresentação de um currículo. Ele conta com um efeito de **flip card**, permitindo que os visitantes alternem entre as informações pessoais e os projetos do desenvolvedor. As atualizações desse projeto podem ser vistas no documento [ATUALIZACOES.md](https://github.com/eduardolentz/website-eduardolentz/blob/main/ATUALIZACOES.md).

## Estrutura do Projeto
```
/website-eduardolentz/
├── .github/
|    ├── workflows/
|    |    ├── deploy.yml
├── index.html # Estrutura principal do site
├── styles.css
├── scripts.js
├── projectsData.js
├── README.md
├── ATUALIZACOES.md
├── bucket.policy.json
├── Currículo.2025.01.pdf
└── imagens/ 
```

## 📌 Funcionalidades

- Exibição de foto, nome, localização e informações de contato.
- Links diretos para WhatsApp, LinkedIn, GitHub, Instagram, e-mail e Medium.
- Download do currículo em PDF.
- Efeito de flip card para alternar entre a tela de perfil e a tela de tecnologias.
- Tela de projetos interativa com filtros, paginação e responsividade:
  - Em dispositivos móveis: 1 coluna, 3 mini cards por página.
  - Em desktops: 2 colunas, 6 mini cards por página.
- Tela dedicada para exibição de badges de certificações.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estruturação da página.
- **CSS3 (Tailwind CSS)** - Estilização moderna e responsiva.
- **JavaScript** - Implementação do efeito de virar o cartão.
- **AWS S3** - O projeto será hospedado como um site estático na AWS.
- **GitHub Actions** – Automação do deploy.

## 🌍 Hospedagem

Este projeto será hospedado na **AWS S3**, utilizando a funcionalidade de **Static Website Hosting**, garantindo alta disponibilidade e escalabilidade.

### Configuração do Bucket S3 para Acesso Público

Para garantir que os arquivos do seu site sejam acessíveis ao público, é necessário configurar a política de acesso do seu bucket S3 na AWS. Você pode encontrar a política de acesso do bucket S3 no arquivo [bucket-policy.json](https://github.com/eduardolentz/website-eduardolentz/blob/main/bucket-policy.json).


### Explicação Rápida:

- **Version**: Define a versão da política. Use sempre `2012-10-17`.
- **Sid**: Identificador único para a política. Pode ser qualquer nome.
- **Effect**: Especifica o efeito da política. `Allow` permite a ação; `Deny` nega.
- **Principal**: Quem tem permissão para acessar. `*` permite acesso público.
- **Action**: A ação permitida. Neste caso, `s3:GetObject` permite leitura dos objetos.
- **Resource**: O recurso ao qual a política se aplica. `arn:aws:s3:::eduardolentz-website/*` permite o acesso a todos os arquivos dentro do bucket.


## 🔧 Como Rodar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/eduardolentz/website-eduardolentz.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Abra o arquivo `index.html` diretamente no navegador.

## 🚀 Deploy na AWS S3

Caso queira hospedar um site estático na AWS S3, siga os passos:

1. Crie um **bucket** no S3 com nome único.
2. Habilite a opção **Static Website Hosting** no bucket.
3. Faça upload dos arquivos do projeto.
4. Defina as permissões corretas para tornar o site público.
5. Acesse a URL gerada pelo S3.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo como desejar.

---

Feito por [Eduardo Lentz](https://github.com/eduardolentz).

