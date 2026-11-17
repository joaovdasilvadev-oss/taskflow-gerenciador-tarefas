# TaskFlow – Gerenciador de Tarefas

Aplicação web para gerenciamento de tarefas, desenvolvida com Next.js, React e TypeScript.

## 🌐 Projeto publicado

Acesse: https://taskflow-gerenciador-tarefas.vercel.app/

## 🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- CSS
- Jest
- React Testing Library
- GitHub Actions
- Vercel

## ⚙️ Funcionalidades

- Adicionar novas tarefas.
- Visualizar tarefas cadastradas.
- Acompanhar o total de tarefas.
- Acompanhar tarefas concluídas.
- Interface simples e responsiva.

## 🧪 Testes automatizados

O projeto utiliza Jest e React Testing Library para verificar o funcionamento dos componentes e funcionalidades.

Para executar os testes localmente:

```bash
npm install
npm test
```

## 🔄 Pipeline CI/CD

O projeto possui uma pipeline automatizada configurada com GitHub Actions.

A cada atualização enviada para a branch `main`, o fluxo executa:

1. Instalação das dependências.
2. Verificação de código com ESLint.
3. Execução dos testes automatizados.
4. Geração do build de produção.
5. Deploy automático na Vercel após a validação bem-sucedida.

As credenciais de acesso à Vercel são armazenadas com segurança nos Secrets do GitHub.

## ▶️ Executar localmente

Clone o repositório:

```bash
git clone https://github.com/joaovdasilvadev-oss/taskflow-gerenciador-tarefas.git
```

Entre na pasta:

```bash
cd taskflow-gerenciador-tarefas
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Acesse http://localhost:3000 no navegador.

## 👨‍💻 Autor

Desenvolvido como projeto acadêmico para prática de desenvolvimento web e automação CI/CD.
