# Acampamento ICPBB Jardim Miriam 2027 — Landing Page

Landing page responsiva feita com React, TypeScript, Vite e Lucide Icons.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Antes de publicar

Abra `src/main.tsx` e atualize o objeto `CONFIG`:

- `inscricao`: URL pública **do participante** do Google Forms (não a URL de edição).
- `whatsapp`: URL do grupo oficial, se houver.
- `instagram`: endereço do perfil oficial.
- `prazoPagamento`: confirmar a data com a organização.

Não incluí chave PIX nem CPF na página: prefira manter os dados de pagamento no formulário oficial e confirmar com a organização.

## Publicar na Vercel

1. Crie um repositório no GitHub e envie os arquivos.
2. Na Vercel, selecione **Add New > Project** e importe o repositório.
3. Framework: Vite; comando de build: `npm run build`; pasta de saída: `dist`.
4. Clique em Deploy.

## Observações

- O contador considera a meia-noite de 22/01/2027 no horário de Brasília.
- A galeria está preparada para receber fotos futuras. Antes de publicar imagens de participantes, especialmente menores, obtenha as autorizações necessárias.
- As ilustrações são feitas em CSS; não dependem de imagens de terceiros.
