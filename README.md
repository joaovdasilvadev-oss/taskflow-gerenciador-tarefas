# TaskFlow — Gerenciador de Tarefas

Aplicação web de gerenciamento de tarefas desenvolvida com Next.js 15, React e TypeScript.

O TaskFlow permite visualizar tarefas, adicionar novas atividades e acompanhar a quantidade de tarefas pendentes e concluídas em uma interface moderna e responsiva.

## Funcionalidades

- Listagem de tarefas iniciais.
- Adição de novas tarefas.
- Atualização automática do contador de tarefas.
- Indicadores de tarefas pendentes e concluídas.
- Componente personalizado para contagem de tarefas.
- Interface responsiva.
- Testes automatizados com Jest e Testing Library.

## Tecnologias utilizadas

- Next.js 15
- React
- TypeScript
- CSS3
- Jest
- React Testing Library

## Estrutura do projeto

```text
lista-tarefas/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── GerenciadorTarefas.tsx
│   │   ├── ListaTarefas.tsx
│   │   └── NovaTarefa.tsx
│   ├── data/
│   │   └── tarefas.ts
│   └── hooks/
│       └── useContadorDeTarefas.ts
├── test/
│   ├── NovaTarefa.test.tsx
│   ├── page.test.tsx
│   └── useContadorDeTarefas.test.tsx
├── jest.config.ts
├── jest.setup.ts
└── package.json
```

## Como executar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd lista-tarefas
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse http://localhost:3000.

## Executar os testes

Para executar todos os testes:

```bash
npm test
```

Para acompanhar os testes automaticamente:

```bash
npm run test:watch
```

Para gerar relatório de cobertura:

```bash
npm run test:coverage
```

## Testes automatizados

O projeto possui testes para:

- Componente de adição de tarefas.
- Validação de tarefas vazias.
- Hook personalizado de contagem.
- Renderização da página inicial.

## Observação

Os dados são simulados localmente e as novas tarefas são mantidas no estado da aplicação. Não há integração com banco de dados nesta versão.

---

Desenvolvido como projeto prático de estudos em desenvolvimento web.