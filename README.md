 
# 🚀 Landing Page - Currículo Interativo

Este é um projeto de landing page interativa para apresentação de um currículo. Ele conta com um efeito de **flip card**, permitindo que os visitantes alternem entre as informações pessoais e os projetos do desenvolvedor.

## Estrutura do Projeto
Website-Eduardo Lentz/ 
├── index.html 
├── scripts.js 
├── styles.css 
├── README.md 
├── bucket.policy.json 
├── Currículo.2025.01.pdf 
└── imagens/ 


## 🚀 Atualizações

### [📅 2025-02-18] - Refatoração e melhorias

- Refatoração do Código: Código dividido em três arquivos: `index.html`, `style.css` e `script.js`

- Mudanças no estilo: Botões com estilo "outline" e ajustes nas dimensões para um visual mais equilibrado.

- Adição da Terceira Tela: Nova tela de Projetos integrada ao layout.


### [📅 2025-02-13] - Melhorias no layout e efeitos
- Aumentei o tamanho da foto de perfil.
- Alterei a tipografia para uma combinação mais marcante.
- Adicionei um efeito *hover* nos ícones de redes sociais.
- Ajustei o posicionamento dos botões dentro do cartão.
- Adicionei o documento JSON com a permissão para a bucker do S3.

### [📅 2025-02-12] - Primeira versão lançada
- Site criado e hospedado na AWS S3.
- Cartão de visita digital com links para redes sociais.
- Página de projetos interativa com efeito de virar.


## 📌 Funcionalidades

- Exibição de foto, nome e cidade.
- Links diretos para WhatsApp, LinkedIn, GitHub, Instagram e e-mail.
- Botão para download do currículo em PDF.
- Efeito de **virar cartão** para mostrar os projetos cadastrados.
- Tela de projetos para cada tecnologia

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estruturação da página.
- **CSS3 (Tailwind CSS)** - Estilização moderna e responsiva.
- **JavaScript** - Implementação do efeito de virar o cartão.
- **AWS S3** - O projeto será hospedado como um site estático na AWS.

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

