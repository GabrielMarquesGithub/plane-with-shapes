# [Plane-With-Shapes](https://timely-pony-72338e.netlify.app/)

## Deploy

Você pode acessar a versão implantada deste projeto [aqui](https://timely-pony-72338e.netlify.app/).

## Imagens

![Imagem da página inicial do projeto](https://github.com/NikisGabriel/plane-with-shapes/blob/main/documents/plane-with-shapes.png)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o Node.js e o Git em sua máquina.

## Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/NikisGabriel/plane-with-shapes.git
   ```

2. Navegue até a pasta da aplicação:

   ```bash
   cd plane-with-shapes
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- JavaScript
- TypeScript
- Git
- Vite
- React
- Styled-components

## Padrões de Codificação

- **Nomenclatura:**

  - Componentes: Utilizam o padrão PascalCase.
  - Hooks: Seguem o padrão camelCase com o prefixo "use".
  - Funções: Seguem o padrão camelCase.
  - Constantes e variáveis: Seguem o padrão camelCase.
  - Tipos: Recebem o sufixo "Type".

- **Estrutura de Arquivos:**
  - `src`: Contém o código-fonte da aplicação.
    - `assets`: Inclui recursos estáticos como imagens, fontes e estilos.
    - `components`: Reúne componentes React reutilizáveis.
    - `hooks`: Agrupa hooks personalizados do React.
    - `pages`: Mantém as páginas da aplicação.
    - `templates`: Mantém templates de código para facilitar reuso.
    - `types`: Contém tipos definidos em TypeScript.
    - `utils`: Mantém funções utilitárias da aplicação.
    - `App.tsx`: O componente raiz da aplicação React.
    - `main.tsx`: Ponto de entrada principal da aplicação, responsável por configurar os principais Providers.
    - `styled.d.ts`: Declarações TypeScript para aprimorar a tipagem do styled-components.
  - `index.html`: A página principal da aplicação.
  - `vite.config.ts`: Configurações do Vite.
  - `tsconfig.json`: Configurações do TypeScript.
  - `documents`: Pasta destinada à documentação do projeto.
  - `package.json`: Arquivo para gerenciamento de dependências e informações do projeto.

## Observações

Este projeto é uma ideia simples e foi criado visando a prática sobre alterações de States em aplicações React.
