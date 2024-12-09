# Apresentação da Solução

## Problema

Uma grande parte das perdas de insumos farmacêuticos em setores hospitalares se deve à má gestão de estoques em suas farmácias. As perdas seriam mitigadas caso houvesse um melhor controle dos medicamentos disponíveis.

Atendimento mais rápido aos pacientes: agiliza o processo de saída de medicamentos. Facilidade dentro do ambiente hospitalar e agilidade.

Redução de perdas e desperdícios, controle sobre prazos de validade dos medicamentos, controle no abastecimento (monitoramento de estoque), identificar lotes, rastrear a origem de medicamentos, etc…

O objetivo é produzir uma aplicação distribuída para auxiliar os profissionais na gestão de estoque e, consequente, ajudar na redução de perdas de fármacos.

## Solução

Produzir uma aplicação distribuída para auxiliar os profissionais, envolvidos no ramo farmacêutico dentro de hospitais, na gestão de recursos disponíveis em estoque nestas instituições e a consequente redução de perdas de fármacos devido a diversos fatores.

Produção de uma aplicação que possa retornar métricas e informações úteis aos farmacêuticos sobre os recursos disponíveis e necessários à instituição.

## Arquitetura

O usuário acessa a aplicação através de uma interface WEB ou MOBILE no padrão cliente-servidor.
As requisições HTTP estão conectadas a uma API que está hospedada em um servidor na AWS.
Esta API está conectada a um segundo servidor na AWS que mantém um banco de dados SQL Server.
O banco de dados é composto por diversas entidades relacionadas, incluindo 'Entrada', 'Fornecedor', 'Lote', 'Medicamento', 'Usuário' e 'Saída'.

- Cada Entrada está associada a um Lote.
- Lotes contêm informações sobre a quantidade, data de fabricação e validade do Medicamento.
- Medicamentos são fornecidos por Fornecedores específicos.
- Saídas registram a data e quantidade de medicamento retirado, vinculando-se a Lotes.
- Usuários são responsáveis apenas pelo login e autenticação no sistema.

## Tecnologias

### API

- C#
- ASP.NET Core
- Entity Framework Core
- Banco em SQL Server

### Aplicação Web

- Node.js
- React
- Next.js
- Material-UI

### Aplicação Mobile

- Node.js
- React
- Next.js
- Material-UI

## Apresentação

[Apresentacao_Final_G12.pdf](https://github.com/user-attachments/files/18069218/Apresentacao_Final_G12.pdf)
