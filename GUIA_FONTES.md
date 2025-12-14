# 🎨 Guia: Como Adicionar Fonte Customizada

## 📁 Estrutura de Pastas

Coloque seus arquivos de fonte na pasta `public/fonts/`:

```
public/
  └── fonts/
      ├── sua-fonte.woff2
      ├── sua-fonte.woff
      └── sua-fonte.ttf
```

## 🔧 Passo 1: Adicionar @font-face no CSS

Edite o arquivo `src/styles/globals.css` e adicione:

```css
@font-face {
  font-family: 'NomeDaFonte';
  src: url('/fonts/sua-fonte.woff2') format('woff2'),
       url('/fonts/sua-fonte.woff') format('woff'),
       url('/fonts/sua-fonte.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Se tiver variações (bold, light, etc):**

```css
/* Normal */
@font-face {
  font-family: 'NomeDaFonte';
  src: url('/fonts/sua-fonte-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Bold */
@font-face {
  font-family: 'NomeDaFonte';
  src: url('/fonts/sua-fonte-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Light */
@font-face {
  font-family: 'NomeDaFonte';
  src: url('/fonts/sua-fonte-light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

## 🔧 Passo 2: Aplicar a Fonte

### Opção A: Aplicar globalmente (todo o site)

No `globals.css`, altere o `body`:

```css
body {
  font-family: 'NomeDaFonte', Arial, Helvetica, sans-serif;
}
```

### Opção B: Usar no Tailwind CSS

No `globals.css`, adicione no `@theme inline`:

```css
@theme inline {
  --font-custom: 'NomeDaFonte', Arial, Helvetica, sans-serif;
}
```

Depois use no Tailwind:

```tsx
<h1 className="font-custom">Título com fonte customizada</h1>
```

### Opção C: Criar classe CSS

No `globals.css`:

```css
.font-custom {
  font-family: 'NomeDaFonte', Arial, Helvetica, sans-serif;
}
```

## 📝 Exemplo Completo

Se você tem uma fonte chamada `MinhaFonte`:

1. **Coloque os arquivos em:** `public/fonts/MinhaFonte.woff2`

2. **Adicione no `globals.css`:**
```css
@font-face {
  font-family: 'MinhaFonte';
  src: url('/fonts/MinhaFonte.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'MinhaFonte', Arial, Helvetica, sans-serif;
}
```

## 🎯 Formatos de Fonte Recomendados

- **woff2** (melhor compressão) - Use primeiro
- **woff** (fallback) - Use como segunda opção
- **ttf** (fallback antigo) - Use como última opção

## 💡 Dicas

1. **font-display: swap** - Mostra texto com fonte do sistema enquanto carrega
2. **Sempre inclua fallbacks** - Arial, Helvetica, sans-serif
3. **Use woff2 quando possível** - Melhor performance
4. **Teste em diferentes navegadores** - Garanta compatibilidade

## 🔍 Verificar se Funcionou

1. Abra o DevTools (F12)
2. Vá em **Network** → Filtre por "font"
3. Recarregue a página
4. Verifique se a fonte foi carregada
5. No **Elements**, veja se `font-family` está aplicado

