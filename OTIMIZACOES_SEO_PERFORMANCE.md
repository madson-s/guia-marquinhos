# 📊 Análise e Otimizações - SEO e Performance

## 🔍 Análise do Projeto Atual

### Tecnologias Identificadas
- **Framework**: Next.js 15.4.6 (React 19)
- **Estilização**: Tailwind CSS 4
- **TypeScript**: Sim
- **Analytics**: Google Analytics (via @next/third-parties)

### Problemas Identificados

#### 🚨 SEO (Search Engine Optimization)

1. **Meta Tags Ausentes**
   - ❌ Falta `<meta name="description">` em todas as páginas
   - ❌ Falta Open Graph tags (og:title, og:description, og:image)
   - ❌ Falta Twitter Cards
   - ❌ Falta `<meta name="keywords">` (opcional, mas útil)
   - ❌ Idioma incorreto: `lang="en"` deveria ser `lang="pt-BR"`

2. **Estrutura de Dados**
   - ❌ Falta Schema.org (JSON-LD) para:
     - LocalBusiness
     - TouristAttraction
     - Review/AggregateRating
     - Person (para o guia)

3. **Títulos e Headings**
   - ⚠️ Título fixo no `_document.tsx` (deveria ser dinâmico por página)
   - ⚠️ Estrutura de headings pode ser melhorada

4. **URLs e Sitemap**
   - ❌ Falta `robots.txt`
   - ❌ Falta `sitemap.xml`
   - ⚠️ URLs não são otimizadas para SEO

5. **Imagens**
   - ⚠️ Falta `alt` descritivo em algumas imagens
   - ⚠️ Falta lazy loading em algumas imagens
   - ⚠️ Imagens não otimizadas (sem width/height explícitos em alguns casos)

#### ⚡ Performance

1. **Otimização de Imagens**
   - ⚠️ Imagens grandes sendo carregadas sem otimização adequada
   - ⚠️ Falta `priority` em imagens acima da dobra
   - ⚠️ Falta `loading="lazy"` em imagens abaixo da dobra
   - ⚠️ Background images usando `style` inline (não otimizado pelo Next.js)

2. **Bundle Size**
   - ⚠️ Não há análise de bundle size
   - ⚠️ Falta code splitting otimizado

3. **Next.js Config**
   - ⚠️ Falta configuração de compressão
   - ⚠️ Falta configuração de headers de cache
   - ⚠️ Falta configuração de imagens otimizadas

4. **Fontes**
   - ⚠️ Fontes não otimizadas (usando Arial padrão)

5. **JavaScript**
   - ⚠️ Componentes client-side desnecessários
   - ⚠️ Falta memoização em componentes pesados

---

## ✅ Plano de Ação - Passos Prioritários

### Fase 1: SEO Essencial (Alta Prioridade)

#### 1.1 Meta Tags e Headers
- [ ] Criar componente `SEO` reutilizável
- [ ] Adicionar meta description em todas as páginas
- [ ] Adicionar Open Graph tags
- [ ] Adicionar Twitter Cards
- [ ] Corrigir idioma para `pt-BR`
- [ ] Adicionar canonical URLs

#### 1.2 Schema.org (JSON-LD)
- [ ] Schema LocalBusiness para o guia
- [ ] Schema TouristAttraction para cada destino
- [ ] Schema Review/AggregateRating para avaliações
- [ ] Schema Person para o Marquinhos

#### 1.3 Sitemap e Robots
- [ ] Criar `sitemap.xml` dinâmico
- [ ] Criar `robots.txt`
- [ ] Adicionar sitemap no `robots.txt`

### Fase 2: Performance (Alta Prioridade)

#### 2.1 Otimização de Imagens
- [ ] Adicionar `priority` em imagens hero
- [ ] Adicionar `loading="lazy"` em imagens abaixo da dobra
- [ ] Converter background images para componentes Image quando possível
- [ ] Adicionar width/height explícitos
- [ ] Configurar domínios de imagens no `next.config.ts`

#### 2.2 Next.js Config
- [ ] Habilitar compressão
- [ ] Configurar headers de cache
- [ ] Configurar otimização de imagens
- [ ] Adicionar configurações de performance

#### 2.3 Code Splitting
- [ ] Lazy load de componentes pesados
- [ ] Otimizar imports

### Fase 3: Google Tag Manager (GTM)

#### 3.1 Instalação
- [ ] Adicionar GTM no `_document.tsx`
- [ ] Configurar GTM com ID do container

#### 3.2 Eventos Essenciais
- [ ] **Page View** (automático)
- [ ] **WhatsApp Click** (botões de orçamento)
- [ ] **Form Submit** (formulário de contato)
- [ ] **Destination View** (visualização de destino)
- [ ] **Instagram Click** (links do Instagram)
- [ ] **Email Click** (links de email)
- [ ] **Scroll Depth** (25%, 50%, 75%, 100%)
- [ ] **Time on Page** (tempo na página)
- [ ] **Carousel Interaction** (navegação no carrossel)
- [ ] **External Link Click** (links externos)

---

## 🎯 Eventos GTM Mais Importantes para Este Projeto

### 1. **Conversão Principal: Solicitação de Orçamento**
```javascript
// Evento: whatsapp_click
// Trigger: Clique em botões "Solicite seu orçamento"
// Parâmetros:
//   - source: "hero" | "form" | "footer" | "destinations"
//   - page: URL da página
```

### 2. **Engajamento: Formulário de Contato**
```javascript
// Evento: form_submit
// Trigger: Envio do formulário
// Parâmetros:
//   - form_location: "home" | "destination"
//   - has_email: boolean
//   - has_phone: boolean
```

### 3. **Exploração: Visualização de Destinos**
```javascript
// Evento: destination_view
// Trigger: Visualização de página de destino
// Parâmetros:
//   - destination_name: "Vale do Pati 5 dias" | etc.
//   - destination_type: "trekking" | "cachoeira" | "gruta"
```

### 4. **Navegação: Cliques em Links Externos**
```javascript
// Evento: external_link_click
// Trigger: Clique em links externos
// Parâmetros:
//   - link_type: "instagram" | "whatsapp" | "email" | "tripadvisor"
//   - link_url: URL do link
```

### 5. **Engajamento: Scroll Depth**
```javascript
// Evento: scroll_depth
// Trigger: Usuário atinge 25%, 50%, 75%, 100% da página
// Parâmetros:
//   - depth: 25 | 50 | 75 | 100
//   - page: URL da página
```

### 6. **Interação: Carrossel de Avaliações**
```javascript
// Evento: carousel_interaction
// Trigger: Navegação no carrossel
// Parâmetros:
//   - action: "next" | "prev"
//   - current_index: número
```

### 7. **Tempo na Página**
```javascript
// Evento: time_on_page
// Trigger: Usuário permanece X segundos na página
// Parâmetros:
//   - time_seconds: número
//   - page: URL da página
```

---

## 📋 Checklist de Implementação

### SEO
- [ ] Componente SEO criado
- [ ] Meta tags em todas as páginas
- [ ] Open Graph configurado
- [ ] Schema.org implementado
- [ ] Sitemap.xml criado
- [ ] Robots.txt criado
- [ ] Idioma corrigido para pt-BR
- [ ] Títulos dinâmicos por página

### Performance
- [ ] Imagens otimizadas
- [ ] Lazy loading configurado
- [ ] Next.js config otimizado
- [ ] Code splitting implementado
- [ ] Bundle size analisado

### GTM
- [ ] GTM instalado
- [ ] Eventos de conversão configurados
- [ ] Eventos de engajamento configurados
- [ ] Eventos de navegação configurados
- [ ] Testes realizados

---

## 🚀 Próximos Passos

1. **Implementar componente SEO**
2. **Adicionar GTM**
3. **Otimizar imagens**
4. **Configurar Next.js para performance**
5. **Adicionar Schema.org**
6. **Criar sitemap e robots.txt**

---

## 📝 Notas Adicionais

- O projeto já usa Next.js Image component, o que é ótimo
- Google Analytics já está instalado, mas GTM oferece mais flexibilidade
- As imagens estão na pasta `public`, o que é correto
- O projeto tem boa estrutura de componentes
