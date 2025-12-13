# 🎯 Guia de Implementação - Google Tag Manager (GTM)

## 📋 Configuração Inicial

### 1. Obter o Container ID do GTM

1. Acesse [Google Tag Manager](https://tagmanager.google.com)
2. Crie um novo container ou use um existente
3. Copie o Container ID (formato: `GTM-XXXXXXX`)

### 2. Configurar Variável de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**⚠️ Importante:** Substitua `GTM-XXXXXXX` pelo seu Container ID real.

### 3. Verificar Instalação

O GTM já está configurado no projeto. Verifique se está funcionando:

1. Abra o site em modo de desenvolvimento
2. Abra o DevTools (F12)
3. Vá na aba "Console"
4. Digite: `window.dataLayer`
5. Se aparecer um array, o GTM está funcionando!

---

## 🎪 Eventos Configurados

### Eventos de Conversão (Mais Importantes)

#### 1. `whatsapp_click`
Disparado quando o usuário clica em qualquer botão do WhatsApp.

**Parâmetros:**
- `source`: Origem do clique (`"hero"`, `"form"`, `"destinations"`, `"footer"`)
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `whatsapp_click`
- Tag: Google Analytics 4 (ou sua tag de conversão)

#### 2. `form_submit`
Disparado quando o usuário envia o formulário de contato.

**Parâmetros:**
- `form_location`: Localização do formulário (`"home"`)
- `has_email`: Se o usuário preencheu email (boolean)
- `has_phone`: Se o usuário preencheu telefone (boolean)
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `form_submit`
- Tag: Google Analytics 4 (ou sua tag de conversão)

### Eventos de Engajamento

#### 3. `destination_view`
Disparado quando o usuário visualiza uma página de destino.

**Parâmetros:**
- `destination_name`: Nome do destino (ex: "Vale do Pati 5 dias")
- `destination_type`: Tipo do destino (`"trekking"`, `"cachoeira"`, `"gruta"`)
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `destination_view`
- Tag: Google Analytics 4

#### 4. `scroll_depth`
Disparado quando o usuário atinge 25%, 50%, 75% ou 100% da página.

**Parâmetros:**
- `depth`: Profundidade do scroll (25, 50, 75, 100)
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `scroll_depth`
- Tag: Google Analytics 4

#### 5. `time_on_page`
Disparado quando o usuário permanece mais de 10 segundos na página.

**Parâmetros:**
- `time_seconds`: Tempo em segundos
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `time_on_page`
- Tag: Google Analytics 4

### Eventos de Interação

#### 6. `carousel_interaction`
Disparado quando o usuário navega no carrossel de avaliações.

**Parâmetros:**
- `action`: Ação realizada (`"next"` ou `"prev"`)
- `current_index`: Índice atual do carrossel

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `carousel_interaction`
- Tag: Google Analytics 4

#### 7. `external_link_click`
Disparado quando o usuário clica em links externos (Instagram, email, etc).

**Parâmetros:**
- `link_type`: Tipo do link (`"instagram"`, `"whatsapp"`, `"email"`, `"tripadvisor"`)
- `link_url`: URL do link
- `page`: URL da página atual

**Onde configurar no GTM:**
- Trigger: Custom Event
- Event name: `external_link_click`
- Tag: Google Analytics 4

---

## 🔧 Como Configurar no GTM

### Passo 1: Criar Triggers

1. No GTM, vá em **Triggers** > **New**
2. Escolha **Custom Event**
3. Configure:
   - **Event name**: Nome do evento (ex: `whatsapp_click`)
   - **This trigger fires on**: All Custom Events (ou configure condições específicas)

### Passo 2: Criar Tags

1. Vá em **Tags** > **New**
2. Escolha **Google Analytics: GA4 Event**
3. Configure:
   - **Configuration Tag**: Sua tag do GA4
   - **Event Name**: Use o mesmo nome do evento
   - **Event Parameters**: Adicione os parâmetros do evento
4. Selecione o **Trigger** criado no passo anterior

### Passo 3: Testar

1. Use o **Preview Mode** do GTM
2. Navegue pelo site e teste os eventos
3. Verifique se os eventos estão sendo disparados corretamente

---

## 📊 Exemplo de Configuração no GA4

### Evento: `whatsapp_click`

**Configuração no GA4:**
1. Vá em **Admin** > **Events**
2. Crie um evento personalizado ou use o evento automático
3. Configure conversões se necessário

**Parâmetros recomendados:**
- `source` (texto)
- `page` (texto)

### Evento: `form_submit`

**Configuração no GA4:**
1. Marque como **Conversão** se for um objetivo principal
2. Configure parâmetros:
   - `form_location` (texto)
   - `has_email` (boolean)
   - `has_phone` (boolean)

---

## 🎯 Funnels Recomendados

### Funnel de Conversão

1. **Page View** → Página inicial
2. **Scroll Depth (50%)** → Engajamento inicial
3. **Destination View** → Interesse em destinos
4. **WhatsApp Click** → Conversão

### Funnel de Formulário

1. **Page View** → Página inicial
2. **Scroll Depth (75%)** → Chegou ao formulário
3. **Form Submit** → Conversão

---

## 📝 Notas Importantes

- Todos os eventos incluem o parâmetro `page` para rastreamento de origem
- Os eventos são disparados automaticamente, não é necessário código adicional
- Use o Preview Mode do GTM para testar antes de publicar
- Configure conversões no GA4 para eventos importantes (`whatsapp_click`, `form_submit`)

---

## 🐛 Troubleshooting

### GTM não está carregando?

1. Verifique se `NEXT_PUBLIC_GTM_ID` está configurado no `.env.local`
2. Verifique se o Container ID está correto (formato: `GTM-XXXXXXX`)
3. Limpe o cache do navegador
4. Verifique o console do navegador para erros

### Eventos não estão sendo disparados?

1. Use o Preview Mode do GTM para debug
2. Verifique o console do navegador: `window.dataLayer`
3. Certifique-se de que os componentes estão usando os hooks corretos
4. Verifique se os triggers estão configurados corretamente no GTM

---

## 📚 Recursos Adicionais

- [Documentação do GTM](https://support.google.com/tagmanager)
- [Documentação do GA4](https://support.google.com/analytics/answer/10089681)
- [GTM Debugger](https://tagassistant.google.com/)
