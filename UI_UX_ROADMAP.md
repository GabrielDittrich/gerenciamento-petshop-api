# Roadmap UI/UX e Evolução de Produto — Gerenciamento PetShop

Este documento organiza recomendações práticas para transformar o projeto em uma experiência mais útil para usuários finais (atendentes, gestores e equipe de banho/tosa).

## 1) Melhorias de UI imediatas (rápido impacto)

1. **Unificar o design visual em um Design System simples**
   - Definir tokens de cor, tipografia, espaçamento e estados (hover, focus, disabled, error).
   - Evitar estilos globais que impactem tudo sem controle.

2. **Transformar a tela de cadastros em interface orientada por tarefas**
   - Separar em abas: `Clientes`, `Pets`, `Produtos`.
   - Exibir busca e filtros no topo.
   - Mostrar feedback de carregamento, sucesso e erro em todas as ações.

3. **Melhorar responsividade mobile/tablet**
   - Tabelas com rolagem horizontal e colunas essenciais no mobile.
   - Botões com tamanho mínimo de toque e formulário em uma coluna.

4. **Acessibilidade mínima obrigatória**
   - Contraste AA, foco visível, rótulos e mensagens de validação claras.
   - Estados vazios com orientação (“Nenhum cliente cadastrado ainda”).

## 2) Ajustes de experiência para o usuário “fazer sentido”

1. **Fluxo real de pet shop (jornada)**
   - Cadastro de cliente → cadastro de pet vinculado ao cliente → agendamento/atendimento → venda de produto/serviço.
   - Hoje os módulos estão isolados; ideal é conectar entidades para refletir o uso real.

2. **Dashboard operacional**
   - Indicadores simples: atendimentos do dia, novos clientes, serviços pendentes, ticket médio.
   - Lista de “próximas ações” para o atendente (agendamentos do turno).

3. **Histórico por cliente e por pet**
   - Exibir compras, serviços e observações por timeline.
   - Ajuda fidelização e personalização do atendimento.

4. **Nomenclatura e navegação mais claras**
   - Trocar “Cadastros” por algo orientado ao negócio, como “Gestão”.
   - Menu com grupos: `Operação`, `Cadastro`, `Relatórios`, `Configurações`.

## 3) Evolução técnica fullstack recomendada

1. **Frontend**
   - Introduzir biblioteca de UI (MUI/Chakra/Tailwind + componentes próprios).
   - Camada de dados com React Query para cache, loading e retry.
   - Componentização dos formulários e tabelas para reduzir repetição.

2. **Backend**
   - Padronizar erros e validações (ex.: ProblemDetails + FluentValidation).
   - Versionar API (`/v1`) e documentar contratos de resposta.
   - Incluir paginação, ordenação e filtros nos endpoints de listagem.

3. **Produto e dados**
   - Modelar entidades de negócio faltantes: `Agendamento`, `Servico`, `Atendimento`, `Venda`, `ItemVenda`.
   - Registrar auditoria básica (quem criou/editou e quando).

4. **Qualidade**
   - Testes de integração no backend e testes de interface críticos no frontend.
   - CI para lint, build e testes.

## 4) Backlog priorizado (90 dias)

### Fase 1 (semanas 1-3)
- Organizar layout e tokens visuais.
- Adicionar toasts, loading/skeleton e estados de erro.
- Refatorar tela de cadastros para abas e busca.

### Fase 2 (semanas 4-7)
- Criar vínculo Cliente ↔ Pet.
- Implementar agendamento simples.
- Dashboard inicial com métricas do dia.

### Fase 3 (semanas 8-12)
- Evoluir fluxo de atendimento e venda.
- Criar histórico por cliente/pet.
- Introduzir permissões por perfil (admin, atendente, banho/tosa).

## 5) Métricas para validar se a UI melhorou

- Tempo médio para cadastrar cliente + pet.
- Taxa de erro em preenchimento de formulário.
- Tempo para localizar cadastro existente.
- Número de ações concluídas por usuário por dia.
- Satisfação do usuário interno (NPS interno mensal).

## 6) Recomendação estratégica

Se o objetivo é “fazer mais sentido para o negócio”, o próximo salto não é só estético: é **organizar o sistema por fluxo operacional** (atender, agendar, vender e acompanhar histórico), mantendo uma UI simples e previsível.
