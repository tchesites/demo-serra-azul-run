# Serra Azul Run 2027 (demo)

- **Cliente:** Serra Azul Run — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** html-css-js
- **Status:** ativo
- **Repo:** `tchesites/demo-serra-azul-run` — `git@github.com-tchesites:tchesites/demo-serra-azul-run.git`
- **No ar:** https://tchesites.github.io/demo-serra-azul-run/
- **Como rodar:** abrir `index.html` no navegador, ou `npx serve .` na pasta.

## Sobre

Demo de página única para um evento de corrida, derivado do layout de uma
proposta da agência. Mantém a direção “pôster serigrafado” — preto de tinta,
verde fluorescente, papel cru, tipografia condensada e fotos em duotone — com
marca, edição, datas, endereço e contatos fictícios.

**Nada aqui é dado real de cliente:** organização, atleta, cidade, endereço,
telefone, e-mail, redes e links de inscrição são inventados. O rodapé traz o
aviso de projeto demonstrativo.

## Dados fictícios

| Item | Valor |
|---|---|
| Evento | Serra Azul Run 2027 — Edição Vale do Cedro |
| Data | 14/03/2027, largada às 6h30 |
| Distância | 5,2 km, percurso misto (calçamento + chão batido) |
| Local | Academia Serra Azul — R. das Acácias, 240, Centro, Vale do Cedro (CE) |
| Inscrições | até 28/02/2027 |
| Retirada de kit | 13/03/2027, 9h às 16h, na Academia |
| Contato | (88) 90000-0000 · contato@serraazulrun.com.br · Marina Alcântara |

## Estrutura

- `index.html` — página única (hero, prova, percurso, agenda, kit, premiação, galeria, FAQ, local, CTA)
- `css/styles.css` — todo o estilo, sem framework
- `js/main.js` — menu mobile, contagem regressiva, desenho do traçado, ano do rodapé
- `assets/img/` — imagens do banco Pexels, tratadas em duotone verde
- `.github/workflows/deploy.yml` — build estático e deploy no GitHub Pages

## Decisões

- **Datas fictícias:** 14/03/2027 (domingo) e inscrições até 28/02/2027, para a
  contagem regressiva funcionar na primeira fase.
- **Links de destino fictícios:** inscrição, regulamento, grupo, canal e atleta
  confirmado apontam para `example.com`.
- **Fotos:** mantidas do banco Pexels da proposta (IDs 2803158, 2402777, 2526878
  e 1555350). Alguns números de peito aparecem na imagem; trocar por fotos
  próprias antes de usar como peça final.
- **Traçado ilustrativo**, marcado como tal — sem inventar mapa oficial.
- **Contagem em duas fases:** inscrições e, depois, largada.

## Deploy

Em **https://tchesites.github.io/demo-serra-azul-run/**, via GitHub Pages com
`.github/workflows/deploy.yml` (site estático copiado para `_site/` e publicado
com `upload-pages-artifact` + `deploy-pages`). O repo é público, com o topic
`demo`, e o Pages usa **GitHub Actions** como source.

Qualquer push na `main` publica.
