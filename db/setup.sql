/* CREATE ALL TABLES */
CREATE TABLE new (
  Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Title VARCHAR(400),
  Author VARCHAR(100),
  Body TEXT,
  Source VARCHAR(20),
  Url TEXT,
  CreatedAt VARCHAR(40),
  OverallSentiment FLOAT,
  OverallMagnitude FLOAT
);

CREATE TABLE sentence (
  Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  NewId INT NOT NULL,
  Sentence VARCHAR(500),
  FOREIGN KEY (NewId) REFERENCES new(Id)
);

CREATE TABLE sentiment (
  Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  SentenceId INT NOT NULL,
  Sentiment TINYINT,
  FOREIGN KEY (SentenceId) REFERENCES sentence(Id)
);

/* INSERT DATA SAMPLE */
INSERT INTO new VALUES
(1, 'Grupo da Lava Jato rebate ataques de Gilmar Mendes: \"Desbordou o equilíbrio\"', 'iG São Paulo', 'A força-tarefa de procuradores que atuam na Operação Lava Jato divulgou nota nesta quinta-feira (12) rebatendo ataques desferidos pelo ministro do Supremo Tribunal Federal (STF) Gilmar Mendes.  O magistrado disse, durante a  sessão destinada à discussão do habeas corpus de Antonio Palocci nessa quarta-feira (11), que a \"corrupção chegou ao Ministério Público\". Gilmar embasou sua afirmação citando investigação contra o ex-procurador Marcelo Miller, ligado a nomes da JBS,  e levantou suspeitas sobre o procurador da Lava Jato Diogo Castor de Mattos, que é irmão de um dos sócios do escritório de advocacia que atendeu o ex-marqueiteiro do PT João Santana.Os procuradores que atuam em Curitiba, berço da investigação sobre os crimes na Petrobras, afirmaram que Gilmar Mendes faz \"acusações genéricas e sem provas\" e que o ministro do STF \"desbordou o equilíbrio e responsabilidade exigidos pelo seu cargo \".  O Ministério Público Federal (MPF) garante que o procurador Diogo Castor não atuou em nenhum dos processos envolvendo João Santana e que, inclusive, o acordo de delação do publicitário foi feito com a Procuradoria-Geral da República (PGR) antes de o escritório do irmão de Castor ter assumido a defesa do ex-marqueteiro do PT. Leia também: STJ frustra Lava Jato e envia processo contra Alckmin para Justiça Eleitoral Os procuradores também contra-acatacaram Gilmar ao mencionar a relação do ministro com o empresário Jacob Barata Filho, alvo de investigações na Lava Jato no Rio de Janeiro. Conhecido como o \"Rei do ônibus\", Barata Filho já foi libertado da prisão em ao menos três vezes por Gilmar Mendes, que foi padrinho de casamento da filha do empresário.\"O procurador Diogo Castor de Mattos não atuou na investigação de João Santana por decisão própria, indo além das exigências éticas e legais da magistratura, comportamento esse que o próprio ministro Gilmar Mendes não observou quanto ao seu impedimento em medidas judiciais relativas ao investigado Jacob Barata Filho\", diz a nota do MPF.Por fim, os procuradores se dizem indignados com o \"destemperado uso de falsas notícias e supostas intrigas\" feito por Gilmar Mendes. \"A força-tarefa Lava Jato do MPF no Paraná presta estes esclarecimentos à população para não ficar indefesa diante do reiterado sentimento negativo do ministro Gilmar Mendes com o sucesso da operação em desbaratar organizações criminosas que atuavam no poder público federal e com as mudanças positivas que o combate à corrupção trazem para a Justiça brasileira.\"','ig','http://ultimosegundo.ig.com.br/politica/2018-04-12/lava-jato-gilmar-mendes.html','12/04/2018 17:38', -0.2, 2.3),

(2, 'Defensoria Pública de SP se manifesta contra prisão após 2ª instância', 'iG São Paulo', 'A Defensoria Pública do estado de São Paulo enviou um parecer ao Supremo Tribunal Federal ( STF) em que se coloca preocupada com a possibilidade aberta pela corte em 2016 de prisão de réus condenados em 2ª instância. Leia também: Ato em SP pede liberdade de Lula e resolução de caso Marielle O parecer destaca o alto grau de reversão de penas em instâncias superiores – no próprio STF e no Superior Tribunal de Justiça ( STJ) - para embasar sua preocupação. De acordo com dados levantados pela Defensoria, dos quase 11 mil pedidos de liberdade feitos pelos defensores em 2017, 44% foram aceitos pelos ministros. Ou seja, muitos daqueles que estavam presos após a decisão da 2ª instância tiveram suas condenações e penas revistas nas instâncias superiores. O princípio da presunção de inocência, que de acordo com a Constituição vale até que todos os recursos judiciais sejam exauridos pela defesa, teria sido, portanto, prejudicado pela decisão de 2016 em que o STF reconheceu a possibilidade de cumprimento da pena após a 2ª instância.“O índice muito grande de reforma das decisões indica que aquelas pessoas que têm o início do cumprimento das suas penas acabam cumprindo suas penas de maneira ilegal”, disse o defensor público Thiago de Luna Cury ao jornal Brasil de Fato.Ainda de acordo com a Defensoria de São Paulo, desde 2016, quando o STF se manifestou sobre o tema, o Tribunal de Justiça do estado expediu 13.887 mandados de prisão antes do trânsito em julgado, todos eles embasados na decisão do Supremo. Leia também: Temer vê cerco se fechar e viaja a SP para \"tratar de assuntos particulares\" Para os defensores, a medida, que a princípio visou combater a corrupção, acabou contribuindo para o crescimento do encarceramento no país. E, em muitos casos – de 16% a 80% -, os ministros do STJ e STF acabaram revertendo as prisões de réus, quando estes têm acesso e dinheiro para pagar advogados.Por isso, apontou Cury ao Brasil de Fato, os mais atingidos pela regra são oriundos das classes sociais com menor poder econômico. “Em regra, as pessoas acusadas formalmente são da classe trabalhadora. São geralmente pobres”, disse.O documento enviado pela defensoria será incluído na Ação Declaratória de Constitucionalidade 44, de relatoria do ministro Marco Aurélio de Mello. O Supremo deverá se reunir para decidir, novamente, se mantêm ou revoga a possibilidade de prisões após decisões da 2ª instância. Leia também: STJ frustra Lava Jato e envia processo contra Alckmin para Justiça Eleitoral ','ig','http://ultimosegundo.ig.com.br/politica/2018-04-12/defensoria-sp-2a-instancia.html','12/04/2018 17:06', -0.1, 4.3),

(3, 'Temer confirma reunião com delator, mas diz que não discutiu valores ou \'negócios escusos\'', 'Por G1, Brasília', 'O presidente Michel Temer divulgou vídeo nesta quinta-feira (13) no qual confirmou ter se reunido com um dos delatores da empreiteira Odebrecht. Na mesma gravação, Temer acrescentou que, nesse encontro, em 2010, não discutiu valores nem \"negócios escusos\" da empreiteira com políticos (assista no vídeo acima).  No depoimento prestado, Márcio Faria, ex-dirigente da Odebrecht, afirmou ter participado de uma reunião comandada por Temer na qual foi discutida a \"compra do PMDB\" por US$ 40 milhões. Ainda no acordo de delação premiada, Faria disse que não discutiu valores com o presidente (assista no vídeo mais abaixo, a partir do minuto 14).  \"É fato que participei de uma reunião em 2010 com um representante de uma das maiores empresas do país. A mentira é que nessa reunião eu teria ouvido referência a valores financeiros ou a negócios escusos da empresa com políticos. Isso jamais aconteceu. Nem nessa reunião nem em qualquer outra reunião que eu tenha feito ao longo de minha vida pública com qualquer pessoa física ou jurídica. Jamais colocaria a minha biografia em risco\", afirmou o presidente no vídeo divulgar nesta quinta.  \"O verdadeiro homem público tem que estar à altura dos seus desafios que envolvem bons momentos e momentos de profundo desconforto. Minha maior aliada é a verdade, matéria-prima do Poder Judiciário, que revelerá toda a verdade dos fatos\", acrescentou.  Nesta quarta (12), Temer já havia divulgado uma nota na qual dizia que \"jamais tratou de valores com o senhor Márcio Faria\". Além disso, acrescentou que \"a narrativa divulgada hoje não corresponde aos fatos e está baseada em uma mentira absoluta\".  Assista no vídeo abaixo o que disse o delator Márcio Faria (a partir do minuto 14):  Segundo Márcio Faria, o valor de US$ 40 milhões não foi discutido diretamente com o presidente, mas, sim, com um interlocutor do PMDB, não identificado.  Ainda no depoimento, o ex-dirigente afirma que o encontro foi marcado para \"abençoar\" um acordo que envolvia o pagamento de propina para garantir o andamento de um contrato da Odebrecht com a diretoria Internacional da Petrobras – que, segundo ele, era comandada à época pelo PMDB.  Faria relatou também que a reunião em 2010 começou com as apresentações, pois ele não conhecia Temer nem Henrique Eduardo Alves, e que depois houve uma breve conversa sobre \"amenidades e política\". Ele afirmou que foi a primeira e única vez que esteve com o presidente, à época candidato a vice-presidente na chapa formada com Dilma Rousseff.  Faria afirmou, na sequência, que, \"passadas as amenidades, Eduardo Cunha tomou a palavra\". Segundo ele, o então deputado falou sobre o contrato que estava sendo fechado na Petrobras e que deveria haver um compromisso de fazer uma \"contribuição muito importante para o partido\".  \"[Disse] olhando para mim, porque eu é que teria que confirmar esse entendimento. Fui lá para abençoar esse compromisso\", afirmou Faria. O delator disse que estava de acordo e que a empresa iria contribuir. \"Não se falou em valores [...], mas eu simplesmente confirmei que honraria o compromisso\".  Temer foi citado nos pedidos de abertura de dois inquéritos relacionados às delações da Odebrecht, mas, em razão da \"imunidade temporária\" que ele possui, a Procuradoria-Geral da República (PGR) não o incluiu na \"lista do Janot\".  O presidente não pode ser investigado por crimes que não aconteceram no exercício do mandato.  O primeiro inquérito investiga dois ministros do atual governo por suspeita de pedir propina para a campanha eleitoral de 2014: Eliseu Padilha (Casa Civil) e Moreira Franco (Secretaria-Geral), ambos do PMDB.  Segundo o Ministério Público, \"há fortes elementos que indicam a prática de crimes graves, consistente na solicitação por Eliseu Padilha e Moreira Franco de recursos ilícitos em nome do Partido do Movimento Democrático Brasileiro (PMDB) e de Michel Temer, a pretexto de campanhas eleitorais\".  O segundo investiga o senador Humberto Costa (PT-PE) por suspeita de recebimento de propina. Segundo documento assinado pelo ministro Luiz Edson Fachin, há \"menção à possível participação do atual presidente da República, Michel Temer, em virtude de suposta reunião da qual teriam participado Eduardo Cunha e Henrique Eduardo Alves, ocorrida em 15 de julho de 2010 em São Paulo\". ','g1','https://g1.globo.com/politica/noticia/temer-confirma-reuniao-com-delator-da-odebrecht-mas-diz-que-nao-discutiu-valores.ghtml',' 13/04/2017 15h58 ', -0.2, 7.2),

(4, 'Relator estuda reduzir prazo de 49 anos para obter a aposentadoria integral', 'Por G1 ', 'Em meio à avalanche causada pela abertura de inquéritos contra dezenas de políticos pelo STF, o governo prepara mais concessões na reforma da Previdência e concordou em retirar um dos pontos de mais difícil aceitação, a necessidade de contribuir por 49 anos para obter a aposentadoria integral, desde que se garanta a aprovação da reforma, destaca a Reuters.  A proposta inicial do governo defende que o valor do benefício para os trabalhadores seja de 76% da aposentadoria integral com 25 anos de contribuição. Com 26 anos de contribuição, 77%, e assim por diante até chegar aos 49 anos de trabalho para obter 100% do benefício.  Veja os cinco pontos que podem mudar na reforma da Previdência  O mais provável neste momento é que o tempo de contribuição para que o trabalhador receba a aposentadoria máxima a que tem direito seja um período de 40 anos.  \"O relator está analisando várias alternativas, fazendo as últimas contas\", afirmou o presidente da Comissão Especial da reforma, deputado Carlos Marun (PMDB-MS), segundo a Reuters. \"Ontem ficamos até o final da tarde analisando essas questões com a equipe econômica.\"  \"Mas essa questão dos 49 anos de contribuição, que tanto prejuízo causou à reforma, vai deixar de estar presente no relatório\", acrescentou.  Mais: 4,2% dos aposentados nos últimos 3 anos contribuíram mais de 40 anos para o INSS  A alternativa que está sendo trabalhada pelo relator da reforma, deputado Arthur Oliveira Maia (PPS-BA), é que o ponto de partida do cálculo da aposentadoria – mínimo que o trabalhador aposentado receberia –, proposto como 51%, passaria a 60%. Como com cada ano a mais de contribuição o trabalhador ganha um ponto percentual, passaria-se a 40 anos para chegar à aposentadoria integral.  A mudança tiraria o peso dos 49 anos de contribuição, uma guerra de comunicação que o governo não conseguiu ganhar, mesmo com o discurso que a vasta maioria dos trabalhadores atualmente não recebe a aposentadoria integral.  Com os olhos nas eleições de 2018 e acusados com denúncias de corrupção, os parlamentares pressionaram para mexer também neste ponto, que não estava inicialmente previsto entre os que seriam negociados, diz a Reuters.  No entanto, para aliviar o impacto financeiro dessa mudança – que poderia passar dos 17% de redução no custo da Previdência calculado inicialmente para a reforma – o governo propõe mudar o cálculo do valor da aposentadoria.  Atualmente, usa-se os 80% maiores salários que o trabalhador recebeu ao longo da vida para chegar ao valor do benefício. Passaria-se a usar 100% do salários para o novo cálculo. \"É uma das opções do relator. Mas ele ainda vai definir vários aspectos até segunda-feira\", disse Marun à Reuters.  Outro ponto que ainda estava em discussão, mas está praticamente definido, é a idade mínima para se aposentar para quem aderir ao novo processo de transição, que deve ficar em 50 anos para mulheres e 55 anos para homens, aumentando gradualmente em um período de 20 anos até chegar a idade mínima de 65 anos, definida na regra geral da reforma.  Isso significa que quem estiver no período de transição terá um período menor de contribuição – os anos que faltam mais um pedágio – mas só poderá se aposentar com 50 e 55 anos, respectivamente.  Os principais envolvidos na negociação devem voltar a Brasília no próximo domingo para que Oliveira Maia apresente seu relatório. De acordo com uma fonte governista, a intenção é que o relatório seja apresentado na segunda-feira a líderes da base aliada, antes da apresentação à Comissão Especial, na terça-feira.  \"Mas vai depender do que ele realmente conseguir fechar. A gente não pode apresentar uma coisa que não esteja 100% fechada\", disse uma fonte do Palácio.  Esta semana, ao apresentar aos parlamentares da base sua concordância em alterar a reforma – tratada até agora como praticamente inegociável – o presidente Michel Temer afirmou que o texto enviado pelo governo era uma mudança para 30 ou 40 anos, mas que aceitava uma reforma para 20 anos, desde que fosse aprovada.  A Previdência, disse o presidente, virou o \"símbolo da vitória reformista, ou não, do governo\".  O discurso foi feito antes da divulgação da decisão do ministro do STF Edson Fachin de permitir a abertura de inquérito contra quase uma centena de pessoas, incluindo dezenas de parlamentares e oito ministros do governo Temer.  Depois disso, a avaliação no Palácio do Planalto, de acordo com uma fonte, é que a aprovação da reforma, passou a ser ainda mais essencial para o governo, sob pena de, ao não aprovar, ser acossado pelas investigações de corrupção e ainda perder a confiança de que poderá melhorar a economia.', 'g1', 'https://g1.globo.com/economia/noticia/relator-estuda-reduzir-prazo-de-49-anos-para-obter-a-aposentadoria-integral.ghtml', '13/04/2017 16h13', -0.1, 5.6);

INSERT INTO sentence VALUES
(1, 1, 'A força-tarefa de procuradores que atuam na Operação Lava Jato divulgou nota nesta quinta-feira (12) rebatendo ataques desferidos pelo ministro do Supremo Tribunal Federal (STF) Gilmar Mendes.'),
(2, 1, 'O magistrado disse, durante a  sessão destinada à discussão do habeas corpus de Antonio Palocci nessa quarta-feira (11), que a \"corrupção chegou ao Ministério Público\".'),
(3, 1, 'Gilmar embasou sua afirmação citando investigação contra o ex-procurador Marcelo Miller, ligado a nomes da JBS,  e levantou suspeitas sobre o procurador da Lava Jato Diogo Castor de Mattos, que é irmão de um dos sócios do escritório de advocacia que atendeu o ex-marqueiteiro do PT João Santana.'),
(4, 1, 'Os procuradores que atuam em Curitiba, berço da investigação sobre os crimes na Petrobras, afirmaram que Gilmar Mendes faz \"acusações genéricas e sem provas\" e que o ministro do STF \"desbordou o equilíbrio e responsabilidade exigidos pelo seu cargo\".'),
(5, 2, 'A Defensoria Pública do estado de São Paulo enviou um parecer ao Supremo Tribunal Federal ( STF) em que se coloca preocupada com a possibilidade aberta pela corte em 2016 de prisão de réus condenados em 2ª instância.'),
(6, 2, 'O parecer destaca o alto grau de reversão de penas em instâncias superiores – no próprio STF e no Superior Tribunal de Justiça ( STJ) - para embasar sua preocupação.'),
(7, 2, 'De acordo com dados levantados pela Defensoria, dos quase 11 mil pedidos de liberdade feitos pelos defensores em 2017, 44% foram aceitos pelos ministros.'),
(8, 2, 'Ou seja, muitos daqueles que estavam presos após a decisão da 2ª instância tiveram suas condenações e penas revistas nas instâncias superiores.'),
(9, 3, 'O presidente Michel Temer divulgou vídeo nesta quinta-feira (13) no qual confirmou ter se reunido com um dos delatores da empreiteira Odebrecht.'),
(10, 3, 'No depoimento prestado, Márcio Faria, ex-dirigente da Odebrecht, afirmou ter participado de uma reunião comandada por Temer na qual foi discutida a \"compra do PMDB\" por US$ 40 milhões.'),
(11, 3, 'Ainda no acordo de delação premiada, Faria disse que não discutiu valores com o presidente (assista no vídeo mais abaixo, a partir do minuto 14).'),
(12, 3, '\"É fato que participei de uma reunião em 2010 com um representante de uma das maiores empresas do país.'),
(13, 4, 'Em meio à avalanche causada pela abertura de inquéritos contra dezenas de políticos pelo STF, o governo prepara mais concessões na reforma da Previdência e concordou em retirar um dos pontos de mais difícil aceitação, a necessidade de contribuir por 49 anos para obter a aposentadoria integral, desde que se garanta a aprovação da reforma, destaca a Reuters.'),
(14, 4, 'A proposta inicial do governo defende que o valor do benefício para os trabalhadores seja de 76% da aposentadoria integral com 25 anos de contribuição.'),
(15, 4, 'Com 26 anos de contribuição, 77%, e assim por diante até chegar aos 49 anos de trabalho para obter 100% do benefício.  Veja os cinco pontos que podem mudar na reforma da Previdência  O mais provável neste momento é que o tempo de contribuição para que o trabalhador receba a aposentadoria máxima a que tem direito seja um período de 40 anos.'),
(16, 4, '\"O relator está analisando várias alternativas, fazendo as últimas contas\", afirmou o presidente da Comissão Especial da reforma, deputado Carlos Marun (PMDB-MS), segundo a Reuters.');
