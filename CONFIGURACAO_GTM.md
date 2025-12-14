# 🎯 Configuração do GTM - Passo a Passo

## 📋 Eventos que o Site Já Está Enviando

O código já está configurado para enviar os seguintes eventos automaticamente:

### 🎯 Eventos de Conversão (PRIORITÁRIOS)

#### 1. `whatsapp_click`
**Quando dispara:** Clique em qualquer botão do WhatsApp
**Parâmetros enviados:**
- `source`: "hero", "form", "destinations", "footer"
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `whatsapp_click`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `whatsapp_click`
   - Configuration Tag: (sua tag do GA4)
   - Event Parameters:
     - `source` → `{{source}}`
     - `page` → `{{page}}`
   - Trigger: (selecione o trigger criado acima)
3. **No GA4:** Marque como **Conversão** (Admin → Events → Marcar como conversão)

#### 2. `form_submit`
**Quando dispara:** Envio do formulário de contato
**Parâmetros enviados:**
- `form_location`: "home"
- `has_email`: true/false
- `has_phone`: true/false
- `source`: "form"
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `form_submit`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `form_submit`
   - Configuration Tag: (sua tag do GA4)
   - Event Parameters:
     - `form_location` → `{{form_location}}`
     - `has_email` → `{{has_email}}`
     - `has_phone` → `{{has_phone}}`
     - `source` → `{{source}}`
     - `page` → `{{page}}`
   - Trigger: (selecione o trigger criado acima)
3. **No GA4:** Marque como **Conversão**

### 📊 Eventos de Engajamento

#### 3. `scroll_depth`
**Quando dispara:** Usuário atinge 25%, 50%, 75% ou 100% da página
**Parâmetros enviados:**
- `depth`: 25, 50, 75 ou 100
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `scroll_depth`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `scroll_depth`
   - Event Parameters:
     - `depth` → `{{depth}}`
     - `page` → `{{page}}`

#### 4. `time_on_page`
**Quando dispara:** Usuário permanece mais de 10 segundos na página
**Parâmetros enviados:**
- `time_seconds`: Tempo em segundos
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `time_on_page`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `time_on_page`
   - Event Parameters:
     - `time_seconds` → `{{time_seconds}}`
     - `page` → `{{page}}`

#### 5. `destination_view`
**Quando dispara:** Usuário visualiza uma página de destino específica
**Parâmetros enviados:**
- `destination_name`: Nome do destino
- `destination_type`: Tipo do destino
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `destination_view`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `destination_view`
   - Event Parameters:
     - `destination_name` → `{{destination_name}}`
     - `destination_type` → `{{destination_type}}`
     - `page` → `{{page}}`

### 🎮 Eventos de Interação

#### 6. `carousel_interaction`
**Quando dispara:** Usuário navega no carrossel de avaliações
**Parâmetros enviados:**
- `action`: "next" ou "prev"
- `current_index`: Índice atual

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `carousel_interaction`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `carousel_interaction`
   - Event Parameters:
     - `action` → `{{action}}`
     - `current_index` → `{{current_index}}`

#### 7. `external_link_click`
**Quando dispara:** Clique em links externos (Instagram, etc)
**Parâmetros enviados:**
- `link_type`: "instagram", "whatsapp", "email"
- `link_url`: URL do link
- `page`: URL da página

**Configuração no GTM:**
1. **Triggers** → **New** → **Custom Event**
   - Event name: `external_link_click`
2. **Tags** → **New** → **Google Analytics: GA4 Event**
   - Event Name: `external_link_click`
   - Event Parameters:
     - `link_type` → `{{link_type}}`
     - `link_url` → `{{link_url}}`
     - `page` → `{{page}}`

---

## 🔧 Como Criar as Variáveis no GTM

Para usar os parâmetros dos eventos, você precisa criar **Variáveis** no GTM:

1. **Variáveis** → **New** → **Data Layer Variable**
2. Para cada parâmetro, crie uma variável:
   - **Variable Name**: `source` (ou o nome do parâmetro)
   - **Data Layer Variable Name**: `source` (mesmo nome)
   - **Data Layer Version**: Version 2

**Variáveis necessárias:**
- `source`
- `page`
- `form_location`
- `has_email`
- `has_phone`
- `depth`
- `time_seconds`
- `destination_name`
- `destination_type`
- `action`
- `current_index`
- `link_type`
- `link_url`

---

## ✅ Checklist de Configuração

### Passo 1: Configurar Variáveis
- [ ] Criar todas as variáveis listadas acima

### Passo 2: Configurar Triggers
- [ ] `whatsapp_click`
- [ ] `form_submit`
- [ ] `scroll_depth`
- [ ] `time_on_page`
- [ ] `destination_view`
- [ ] `carousel_interaction`
- [ ] `external_link_click`

### Passo 3: Configurar Tags
- [ ] Tag para `whatsapp_click` (marcar como conversão no GA4)
- [ ] Tag para `form_submit` (marcar como conversão no GA4)
- [ ] Tag para `scroll_depth`
- [ ] Tag para `time_on_page`
- [ ] Tag para `destination_view`
- [ ] Tag para `carousel_interaction`
- [ ] Tag para `external_link_click`

### Passo 4: Testar
- [ ] Usar Preview Mode do GTM
- [ ] Testar cada evento no site
- [ ] Verificar se os eventos aparecem no GA4 em tempo real

### Passo 5: Publicar
- [ ] Revisar todas as configurações
- [ ] Publicar a versão no GTM
- [ ] Verificar no GA4 se os eventos estão chegando

---

## 🎯 Prioridades

**ALTA PRIORIDADE (Configurar primeiro):**
1. ✅ `whatsapp_click` - Conversão principal
2. ✅ `form_submit` - Conversão secundária

**MÉDIA PRIORIDADE:**
3. ✅ `destination_view` - Entender interesse em destinos
4. ✅ `scroll_depth` - Medir engajamento

**BAIXA PRIORIDADE (Opcional):**
5. ✅ `time_on_page` - Engajamento adicional
6. ✅ `carousel_interaction` - Interação com avaliações
7. ✅ `external_link_click` - Cliques em links externos

---

## 📝 Notas Importantes

1. **Todos os eventos já incluem `page`** - Não precisa configurar separadamente
2. **Os eventos são disparados automaticamente** - Não precisa adicionar código
3. **Use Preview Mode** antes de publicar para testar
4. **Marque como conversão no GA4** apenas os eventos importantes (`whatsapp_click` e `form_submit`)

---

## 🐛 Testando os Eventos

### No Console do Navegador:
```javascript
// Ver todos os eventos enviados
window.dataLayer

// Ver último evento
window.dataLayer[window.dataLayer.length - 1]
```

### No Preview Mode do GTM:
1. Clique em "Preview" no GTM
2. Digite a URL do seu site
3. Navegue pelo site e veja os eventos sendo disparados em tempo real

---

## 📊 Exemplo de Funnel no GA4

Após configurar, você pode criar funnels no GA4:

**Funnel de Conversão:**
1. Page View (página inicial)
2. Scroll Depth 50% (engajamento)
3. Destination View (interesse)
4. WhatsApp Click (conversão)

**Funnel de Formulário:**
1. Page View (página inicial)
2. Scroll Depth 75% (chegou ao formulário)
3. Form Submit (conversão)

