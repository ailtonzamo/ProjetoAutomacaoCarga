# ProjetoAutomacaoCarga

Objetivo: Avaliar a experiência com testes de performance e ferramentas de carga, como
 K6 ou JMeter.
 
 Tarefas Práticas:
  Tarefa 1: Utilizando K6, e crie um teste de carga básico para uma API pública
 (pode ser uma API de mock). Configure para simular 500 usuários simultâneos por
 5 minutos.

 
  Avaliação: Qualidade do script, uso correto de métricas e identificação de
 potenciais gargalos.

 
 Tarefa 2: Gerar um relatório de teste de carga e apresentar uma análise do
 resultado.


Teste Realizado 
![image](https://github.com/user-attachments/assets/e703a68a-2752-4ba0-aa0c-f0a7ba132ac0)




Aqui está a análise dos resultados fornecidos, baseado nos indicadores de desempenho durante o teste de carga:

---

### **1. Uso de Dados**
- **`data_received`**: 83 MB, média de 276 kB/s
  - Isso indica o volume total de dados recebidos pelo cliente ao longo do teste. Uma taxa consistente como essa pode indicar que os servidores estão respondendo eficientemente sem atrasos excessivos.
- **`data_sent`**: 12 MB, média de 39 kB/s
  - O volume de dados enviados parece significativamente menor, o que é esperado em testes onde o cliente faz principalmente requisições e espera respostas do servidor.

---

### **2. Duração das Requisições (`http_req_duration`)**
- **Média**: 142.7 ms
- **Mínimo**: 71.36 ms | **Máximo**: 1.18 s
- **Percentis**: 
  - `p(90)` = 151.96 ms
  - `p(95)` = 162.75 ms

Essas métricas mostram que:
1. A maioria das requisições foram processadas em menos de 200 ms (ótima performance para muitos sistemas).
2. O valor máximo (`max=1.18s`) pode indicar algumas instâncias onde o servidor enfrentou congestionamento ou latência elevada, embora raras.

---

### **3. Taxa de Erros**
- **`http_req_failed`**: **0.00%** (2 falhas em 105,223 requisições)
  - Excelente resultado. Apenas 2 falhas em mais de 100 mil requisições é um nível de erro insignificante, indicando que o sistema conseguiu lidar muito bem com o tráfego.

---

### **4. Tempo de Conexão**
- **`http_req_connecting`**: `avg=54.06µs`
  - O tempo médio de conexão é extremamente rápido, sugerindo que o servidor e a rede estão bem configurados e não têm gargalos significativos.
  
---

### **5. Requisições por Segundo**
- **`http_reqs`**: 105,223 total, com uma taxa de 349.85 requisições por segundo.
  - Essa taxa mostra que o servidor consegue lidar com tráfego de alto volume, com um ótimo throughput.

---

### **6. Espera e Recebimento de Requisições**
- **`http_req_waiting` (Tempo para resposta no backend)**: Média de 142.49 ms
  - Corrobora que as respostas do servidor estão dentro de um intervalo muito bom, sendo consistentes com a `http_req_duration`.
- **`http_req_receiving`**: Média de 154.4 µs
  - Muito rápido, o que indica que o cliente está processando as respostas do servidor sem problemas.

---

### **7. Usuários Virtuais Simultâneos (VUs)**
- **`vus`**: Entre 6 a 500
  - A carga de 500 usuários simultâneos foi sustentada durante o teste, mostrando que o sistema suporta a carga configurada.
- **`vus_max`**: 500
  - A configuração máxima de usuários foi atingida, confirmando que o teste foi configurado corretamente.

---

### **8. Iterações e Duração**
- **`iteration_duration`**: Média de 1.14 s por iteração
  - Isso mostra o tempo médio que cada iteração levou para ser concluída, e a média de mais de 100 mil iterações reflete boa performance.

---

### **Conclusões**
1. **Sistema Estável**: A performance geral está excelente, com latência baixa, alto throughput e taxa de erro quase zero.
2. **Pontos de Atenção**:
   - Apesar da maioria das requisições serem rápidas, o valor máximo (`http_req_duration=1.18s`) merece análise. Pode ser causado por picos de carga, instâncias específicas do servidor ou problemas em endpoints específicos.
3. **Próximos Passos**:
   - Verificar logs do servidor para identificar o motivo dos tempos máximos elevados.
   - Considerar expandir o teste para mais de 500 usuários para explorar os limites do sistema.
