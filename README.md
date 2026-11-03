# Império Pet Center

Site institucional em pt-BR, Vite + HTML/CSS/JavaScript vanilla. Sem framework, backend, cookies, analytics, formulário de coleta, compras ou reservas. Imagens e fontes são locais; a página não depende de CDNs em tempo de execução.

## Executar

Requer Node.js 20.19+ ou 22.12+ (validado com Node 24.21.0 e npm 11.19.0).

```sh
npm ci
npm run dev
```

O terminal informa o endereço local, normalmente `http://127.0.0.1:5173`.

```sh
npm test
npm run build
npm run preview
```

`dist/` contém o site estático pronto para uma hospedagem na raiz do domínio. Não foi realizado deploy. Para subdiretórios, ajustar `base` do Vite e os caminhos absolutos dos assets/links antes de publicar.

## Preencher dados reais

Edite `src/config.js`:
- `contact.phone`: telefone confirmado, com DDI/DDD; `whatsapp`: apenas dígitos com DDI; `email`: e-mail real; `instagram`: URL HTTPS de perfil no Instagram.
- `address` e `hours`: textos confirmados. Enquanto `null`, a interface informa que ainda não foram fornecidos.
- `services` e `categories`: revisar nomes e descrições. `available: null` exibe “Consulte disponibilidade”; `true` exige confirmação real; `false` informa indisponibilidade.
- `policies`: deliberadamente `null`. Ao receber regras reais, atualizar também as respostas de `faq`; os campos de política não geram termos legais automaticamente.
- O bloco de contato só gera ações para canais preenchidos em formato válido. Validação de formato não comprova titularidade: essa verificação é responsabilidade do responsável pela publicação.
- Ajuste as respostas de `faq` quando os dados mudarem, especialmente agendamento e serviços. Não apenas altere `available` e deixe textos antigos.

Título/descrição social estão em `index.html`. Canonical, `og:url`, imagem social absoluta e schema local foram omitidos porque domínio, endereço e operação não estão confirmados. Preencha somente após definição. Não há uma política de privacidade fictícia.

## Organização

- `DESIGN.md`: comparação de direções e decisões; tokens executáveis em `src/style.css`.
- `index.html`: estrutura semântica, hero, etapas, sobre e contato.
- `src/config.js`: dados comerciais, FAQ e funções de disponibilidade/contato.
- `src/main.js`: renderização segura dos dados, disclosure mobile, foco das âncoras, fallback de imagens.
- `src/style.css`: fontes, tokens, composição, responsividade e reduced-motion.
- `public/images/`: três fotos WebP locais.
- `public/fonts/`: fontes variáveis WOFF2 e licença OFL.
- `public/creditos.html`: créditos públicos e fontes de cada imagem.
- `tests/config.test.js`: três testes de contrato (sem testes de navegador).

## Assets e licenças

Downloads realizados em 28/10/2026. Fontes e URLs:

| Arquivo | Origem |
|---|---|
| dog-hero.webp | https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1920&q=85&fm=webp |
| dog-care.webp | https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=960&h=1100&q=85&fm=webp |
| cat.webp | https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&h=1100&q=85&fm=webp |

Uso das fotografias sob a licença padrão Unsplash: https://unsplash.com/license. A consulta automatizada da página de licença retornou HTTP 401 neste ambiente; downloads do CDN tiveram sucesso. Autores individuais não foram confirmados, portanto não foram inventados. Não são fotos do estabelecimento. Não sugerir endosso dos fotógrafos.

Fontes obtidas via https://fonts.googleapis.com/css2?family=Fraunces:wght@100..900&family=Manrope:wght@200..800&display=swap; arquivos WOFF2 do domínio fonts.gstatic.com. Subset latino cobre o texto pt-BR utilizado. Licenças verificadas nos repositórios `google/fonts`, diretórios `ofl/fraunces` e `ofl/manrope`, e incluídas em `public/fonts/OFL.txt`.

## Verificação realizada e pendências

- `npm install`: sucesso; auditoria reportou zero vulnerabilidades. npm avisou sobre aprovação de scripts de instalação de esbuild; o build funcionou sem mudança global de configuração.
- `npm run build`: sucesso com Vite 7.3.7.
- `npm test`: três testes passaram.
- Fotografias de abertura inspecionadas como arquivos; primeira opção descartada por recorte inadequado, substituída por imagem horizontal.
- Sem ferramenta de browser exposta e sem Playwright instalado: não foram executados screenshots da página, testes de console, axe ou navegação real. O coordenador fará QA independente.

Checklist recomendado: larguras 320/390/768/1440px, zoom 200%, menu por Tab/Enter/Escape, foco após âncoras, FAQ por teclado, reduced-motion, fallback de imagens e ausência de overflow horizontal. Inspecionar contraste sobre a fotografia nos diferentes recortes. Não declarar certificação de acessibilidade apenas com inspeção de código.

Sem JavaScript, as seções estáticas e a navegação continuam disponíveis; listas derivadas de config e FAQ exigem JavaScript, com aviso `noscript`. Não há carregamento remoto ou formulário que necessite simular estados de envio/sucesso.
