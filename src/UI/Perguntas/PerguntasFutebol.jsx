import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Lost from '../Lost/Lost'
import NavBar from '../../Layout/NavBar'
const PerguntasFutebol = () => {
    const perguntas = [
        {   id: 0,
            question: "Como se chama o estádio do Man United?",
            opcoes: ["Old Traford", "Allianz Arena", "Parc dos Principes", "Camp Nou"],
        correta:0 },
        {   id: 1,
            question: "Como se chama o estádio do Liverpool?",
            opcoes: ["Angola", "Anfield", "Arena P", "Livrepoll"],
        correta:1 },
        {   id: 2,
            question: "Como se chama o estádio do Man City?",
            opcoes: ["Ethiad Stadium", "PC Stadium", "Manchester Nou", "Vasco da Gama"],
        correta:0 },
        {   id: 3,
            question: "Como se chama o estádio do Barcelona?",
            opcoes: ["Estadio da Luz", "Jules Rimet", "Camp Nou", "BVB Stadium"],
        correta:2 },
        {   id: 4,
            question: "Como se chama o estádio do Atelietico de Madrid?",
            opcoes: ["Wanda Metropolitano", "Anfield", "Estadio 11 de Novembro", "Estadio do Ferrovia"],
        correta:0 },
        {
  id: 5,
  question: "Quem usava a dorsal 10 do Barcelona na época 2011/12?",
  opcoes: ["Xavi", "Lionel Messi", "Andrés Iniesta", "David Villa"],
  correta: 1
},
{
  id: 6,
  question: "Quem usava a dorsal 7 do Real Madrid na época 2016/17?",
  opcoes: ["Gareth Bale", "Karim Benzema", "Cristiano Ronaldo", "Isco"],
  correta: 2
},
{
  id: 7,
  question: "Quem usava a dorsal 11 do Barcelona na época 2014/15?",
  opcoes: ["Neymar", "Pedro", "Luis Suárez", "Iniesta"],
  correta: 0
},
{
  id: 8,
  question: "Quem usava a dorsal 7 do PSG na época 2019/20?",
  opcoes: ["Neymar", "Ángel Di María", "Edinson Cavani", "Kylian Mbappé"],
  correta: 3
},
{
  id: 9,
  question: "Quem usava a dorsal 10 do Barcelona na época 2005/06?",
  opcoes: ["Ronaldinho", "Deco", "Samuel Eto'o", "Xavi"],
  correta: 0
},
{
  id: 10,
  question: "Qual dorsal David Beckham usava no Real Madrid na época 2003/04?",
  opcoes: ["7", "10", "23", "11"],
  correta: 2
},
{
  id: 11,
  question: "Quem usava a dorsal 5 do Real Madrid na época 2001/02?",
  opcoes: ["Roberto Carlos", "Zinedine Zidane", "Fernando Hierro", "Raúl"],
  correta: 1
},
{
  id: 12,
  question: "Quem usava a dorsal 8 do Barcelona na época 2010/11?",
  opcoes: ["Xavi", "Busquets", "Andrés Iniesta", "David Villa"],
  correta: 2
},
{
  id: 13,
  question: "Quem usava a dorsal 6 do Barcelona na época 2008/09?",
  opcoes: ["Xavi", "Iniesta", "Puyol", "Busquets"],
  correta: 0
},
{
  id: 14,
  question: "Quem usava a dorsal 9 do Barcelona na época 2015/16?",
  opcoes: ["Neymar", "Lionel Messi", "Luis Suárez", "Munir"],
  correta: 2
},
{
  id: 15,
  question: "Quem venceu a Champions League na época 2011/12?",
  opcoes: ["Bayern de Munique", "Chelsea", "Barcelona", "Real Madrid"],
  correta: 1
},
{
  id: 16,
  question: "Quem venceu a Champions League na época 2012/13?",
  opcoes: ["Borussia Dortmund", "Real Madrid", "Bayern de Munique", "Barcelona"],
  correta: 2
},
{
  id: 17,
  question: "Quem venceu a Champions League na época 2013/14?",
  opcoes: ["Atlético de Madrid", "Real Madrid", "Bayern de Munique", "Chelsea"],
  correta: 1
},
{
  id: 18,
  question: "Quem venceu a Champions League na época 2014/15?",
  opcoes: ["Juventus", "Real Madrid", "Barcelona", "Bayern de Munique"],
  correta: 2
},
{
  id: 19,
  question: "Quem venceu a Champions League na época 2015/16?",
  opcoes: ["Barcelona", "Real Madrid", "Atlético de Madrid", "Bayern de Munique"],
  correta: 1
},
{
  id: 20,
  question: "Quem venceu a Champions League na época 2018/19?",
  opcoes: ["Tottenham", "Liverpool", "Manchester City", "Ajax"],
  correta: 1
},
{
  id: 21,
  question: "Quem venceu a Champions League na época 2019/20?",
  opcoes: ["PSG", "Bayern de Munique", "Liverpool", "Real Madrid"],
  correta: 1
},
{
  id: 22,
  question: "Quem venceu a Champions League na época 2020/21?",
  opcoes: ["Chelsea", "Manchester City", "PSG", "Bayern de Munique"],
  correta: 0
},
{
  id: 23,
  question: "Quem venceu a Champions League na época 2021/22?",
  opcoes: ["Liverpool", "Chelsea", "Real Madrid", "Manchester City"],
  correta: 2
},
{
  id: 24,
  question: "Quem venceu a Champions League na época 2022/23?",
  opcoes: ["Inter de Milão", "Real Madrid", "Manchester City", "Bayern de Munique"],
  correta: 2
},
{
  id: 25,
  question: "Quem venceu a Premier League na época 2015/16?",
  opcoes: ["Chelsea", "Manchester City", "Leicester City", "Arsenal"],
  correta: 2
},
{
  id: 26,
  question: "Quem venceu a Premier League na época 2011/12?",
  opcoes: ["Manchester United", "Manchester City", "Chelsea", "Liverpool"],
  correta: 1
},
{
  id: 27,
  question: "Quem venceu a Premier League de forma invicta na época 2003/04?",
  opcoes: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"],
  correta: 2
},
{
  id: 28,
  question: "Quem venceu a La Liga na época 2013/14?",
  opcoes: ["Real Madrid", "Barcelona", "Atlético de Madrid", "Valencia"],
  correta: 2
},
{
  id: 29,
  question: "Quem venceu a La Liga na época 2011/12?",
  opcoes: ["Barcelona", "Real Madrid", "Atlético de Madrid", "Sevilla"],
  correta: 1
},
{
  id: 30,
  question: "Quem venceu a Serie A italiana na época 2009/10?",
  opcoes: ["Juventus", "Milan", "Inter de Milão", "Roma"],
  correta: 2
},
{
  id: 31,
  question: "Quem venceu a Serie A na época 2022/23?",
  opcoes: ["Inter de Milão", "Milan", "Juventus", "Napoli"],
  correta: 3
},
{
  id: 32,
  question: "Quem venceu a Bundesliga na época 2011/12?",
  opcoes: ["Bayern de Munique", "Borussia Dortmund", "Schalke 04", "Leverkusen"],
  correta: 1
},
{
  id: 33,
  question: "Quem venceu a Ligue 1 na época 2016/17?",
  opcoes: ["PSG", "Lyon", "Monaco", "Marseille"],
  correta: 2
},
{
  id: 34,
  question: "Quem venceu a Eredivisie na época 2018/19?",
  opcoes: ["PSV", "Ajax", "Feyenoord", "AZ Alkmaar"],
  correta: 1
},
{
  id: 35,
  question: "Quem treinava o Barcelona na histórica época 2008/09?",
  opcoes: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Tito Vilanova"],
  correta: 1
},
{
  id: 36,
  question: "Quem treinava o Real Madrid na época 2016/17?",
  opcoes: ["Carlo Ancelotti", "José Mourinho", "Zinedine Zidane", "Rafa Benítez"],
  correta: 2
},
{
  id: 37,
  question: "Quem treinava a Inter de Milão na época da tríplice coroa de 2009/10?",
  opcoes: ["Antonio Conte", "José Mourinho", "Roberto Mancini", "Massimiliano Allegri"],
  correta: 1
},
{
  id: 38,
  question: "Quem treinava o Leicester City quando venceu a Premier League em 2015/16?",
  opcoes: ["Brendan Rodgers", "Claudio Ranieri", "Rafael Benítez", "Roy Hodgson"],
  correta: 1
},
{
  id: 39,
  question: "Quem treinava o Chelsea quando venceu a Premier League em 2004/05?",
  opcoes: ["Carlo Ancelotti", "José Mourinho", "Guus Hiddink", "Avram Grant"],
  correta: 1
},
{
  id: 40,
  question: "Quem treinava o Liverpool quando venceu a Premier League em 2019/20?",
  opcoes: ["Rafael Benítez", "Brendan Rodgers", "Jürgen Klopp", "Roy Hodgson"],
  correta: 2
},
{
  id: 41,
  question: "Quem treinava o Manchester City na temporada da tríplice coroa de 2022/23?",
  opcoes: ["Roberto Mancini", "Manuel Pellegrini", "Pep Guardiola", "Mikel Arteta"],
  correta: 2
},
{
  id: 42,
  question: "Quem treinava o Bayern de Munique quando venceu a Champions League em 2019/20?",
  opcoes: ["Thomas Tuchel", "Hansi Flick", "Julian Nagelsmann", "Jupp Heynckes"],
  correta: 1
},
{
  id: 43,
  question: "Quem treinava o Atlético de Madrid quando venceu a La Liga em 2013/14?",
  opcoes: ["Diego Simeone", "Unai Emery", "Quique Flores", "Luis Enrique"],
  correta: 0
},
{
  id: 44,
  question: "Quem era o treinador do Arsenal dos Invencíveis de 2003/04?",
  opcoes: ["Alex Ferguson", "Arsène Wenger", "José Mourinho", "Claudio Ranieri"],
  correta: 1
},
{
  id: 45,
  question: "Em que clube Cristiano Ronaldo jogava na época 2002/03?",
  opcoes: ["Manchester United", "Sporting CP", "Real Madrid", "Benfica"],
  correta: 1
},
{
  id: 46,
  question: "Em que clube Thierry Henry jogava na época 2003/04?",
  opcoes: ["Barcelona", "Juventus", "Arsenal", "Monaco"],
  correta: 2
},
{
  id: 47,
  question: "Em que clube Luka Modric jogava na época 2007/08?",
  opcoes: ["Tottenham", "Real Madrid", "Dinamo Zagreb", "Inter de Milão"],
  correta: 2
},
{
  id: 48,
  question: "Em que clube Mohamed Salah jogava na época 2017/18?",
  opcoes: ["Chelsea", "Roma", "Liverpool", "Fiorentina"],
  correta: 2
},
{
  id: 49,
  question: "Em que clube Erling Haaland jogava na época 2020/21?",
  opcoes: ["Manchester City", "Borussia Dortmund", "RB Leipzig", "Salzburg"],
  correta: 1
},
{
  id: 50,
  question: "Em que clube Robert Lewandowski jogava na época 2012/13?",
  opcoes: ["Bayern de Munique", "Borussia Dortmund", "Barcelona", "Leverkusen"],
  correta: 1
},
{
  id: 51,
  question: "Em que clube Neymar jogava antes de se transferir para o Barcelona em 2013?",
  opcoes: ["Flamengo", "São Paulo", "Santos", "Palmeiras"],
  correta: 2
},
{
  id: 52,
  question: "Em que clube Ronaldinho jogava na época 2002/03?",
  opcoes: ["Barcelona", "PSG", "Milan", "Grêmio"],
  correta: 1
},
{
  id: 53,
  question: "Em que clube Luís Figo jogava na época 1999/2000?",
  opcoes: ["Real Madrid", "Barcelona", "Inter de Milão", "Sporting CP"],
  correta: 1
},
{
  id: 54,
  question: "Em que clube Zlatan Ibrahimović jogava na época 2010/11?",
  opcoes: ["Inter de Milão", "Barcelona", "AC Milan", "PSG"],
  correta: 2
},
{
  id: 55,
  question: "Em que clube Kaká jogava quando venceu a Bola de Ouro de 2007?",
  opcoes: ["Real Madrid", "São Paulo", "AC Milan", "Juventus"],
  correta: 2
},
{
  id: 56,
  question: "Em que clube Gareth Bale jogava na época 2012/13?",
  opcoes: ["Southampton", "Tottenham", "Real Madrid", "Manchester United"],
  correta: 1
},
{
  id: 57,
  question: "Em que clube Wayne Rooney jogava na época 2003/04?",
  opcoes: ["Manchester United", "Everton", "Liverpool", "Newcastle"],
  correta: 1
},
{
  id: 58,
  question: "Em que clube Didier Drogba jogava na época 2003/04?",
  opcoes: ["Chelsea", "Marseille", "Lyon", "Galatasaray"],
  correta: 1
},
{
  id: 59,
  question: "Em que clube Thibaut Courtois jogava na época 2013/14?",
  opcoes: ["Chelsea", "Real Madrid", "Atlético de Madrid", "Genk"],
  correta: 2
},
{
  id: 60,
  question: "Em que clube Kevin De Bruyne jogava na época 2014/15?",
  opcoes: ["Chelsea", "Manchester City", "Wolfsburg", "Werder Bremen"],
  correta: 2
},
{
  id: 61,
  question: "Qual seleção venceu a Copa do Mundo de 2002?",
  opcoes: ["Alemanha", "Brasil", "França", "Argentina"],
  correta: 1
},
{
  id: 62,
  question: "Qual seleção venceu a Copa do Mundo de 2006?",
  opcoes: ["França", "Brasil", "Itália", "Alemanha"],
  correta: 2
},
{
  id: 63,
  question: "Qual seleção venceu a Copa do Mundo de 2010?",
  opcoes: ["Holanda", "Alemanha", "Espanha", "Brasil"],
  correta: 2
},
{
  id: 64,
  question: "Qual seleção venceu a Copa do Mundo de 2014?",
  opcoes: ["Argentina", "Brasil", "Alemanha", "Holanda"],
  correta: 2
},
{
  id: 65,
  question: "Qual seleção venceu a Copa do Mundo de 2018?",
  opcoes: ["Croácia", "França", "Bélgica", "Inglaterra"],
  correta: 1
},
{
  id: 66,
  question: "Qual seleção venceu a Copa do Mundo de 2022?",
  opcoes: ["França", "Brasil", "Argentina", "Croácia"],
  correta: 2
},
{
  id: 67,
  question: "Qual seleção surpreendeu a Europa ao vencer a Euro 2004?",
  opcoes: ["Portugal", "Grécia", "Espanha", "Itália"],
  correta: 1
},
{
  id: 68,
  question: "Quem venceu a Euro 2008?",
  opcoes: ["Alemanha", "Itália", "Espanha", "França"],
  correta: 2
},
{
  id: 69,
  question: "Quem venceu a Euro 2016?",
  opcoes: ["França", "Portugal", "Alemanha", "Espanha"],
  correta: 1
},
{
  id: 70,
  question: "Quem venceu a Euro 2020, disputada em 2021?",
  opcoes: ["Inglaterra", "França", "Itália", "Portugal"],
  correta: 2
},
{
  id: 71,
  question: "Quem venceu a Copa América de 2019?",
  opcoes: ["Argentina", "Brasil", "Chile", "Uruguai"],
  correta: 1
},
{
  id: 72,
  question: "Quem venceu a Copa América de 2021?",
  opcoes: ["Brasil", "Argentina", "Uruguai", "Colômbia"],
  correta: 1
},
{
  id: 73,
  question: "Qual seleção venceu a Taça Africana das Nações de 2012?",
  opcoes: ["Costa do Marfim", "Zâmbia", "Gana", "Nigéria"],
  correta: 1
},
{
  id: 74,
  question: "Qual seleção venceu a Taça Africana das Nações de 2019?",
  opcoes: ["Senegal", "Egito", "Argélia", "Camarões"],
  correta: 2
},
{
  id: 75,
  question: "Qual seleção venceu a CAN 2021, disputada em 2022?",
  opcoes: ["Egito", "Senegal", "Marrocos", "Camarões"],
  correta: 1
},
{
  id: 76,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Real Madrid tinha após vencer a edição 2023/24?",
  opcoes: ["13", "14", "15", "16"],
  correta: 2
},
{
  id: 77,
  question: "Quantas Taças dos Campeões Europeus/Champions League o AC Milan tinha até ao fim da época 2023/24?",
  opcoes: ["5", "6", "7", "8"],
  correta: 2
},
{
  id: 78,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Liverpool tinha até ao fim da época 2023/24?",
  opcoes: ["5", "6", "7", "8"],
  correta: 1
},
{
  id: 79,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Bayern de Munique tinha até ao fim da época 2023/24?",
  opcoes: ["4", "5", "6", "7"],
  correta: 2
},
{
  id: 80,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Barcelona tinha até ao fim da época 2023/24?",
  opcoes: ["4", "5", "6", "7"],
  correta: 1
},
{
  id: 81,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Ajax tinha até ao fim da época 2023/24?",
  opcoes: ["2", "3", "4", "5"],
  correta: 2
},
{
  id: 82,
  question: "Quantas Taças dos Campeões Europeus/Champions League a Inter de Milão tinha até ao fim da época 2023/24?",
  opcoes: ["2", "3", "4", "5"],
  correta: 1
},
{
  id: 83,
  question: "Quantas Taças dos Campeões Europeus/Champions League o Manchester United tinha até ao fim da época 2023/24?",
  opcoes: ["2", "3", "4", "5"],
  correta: 1
},
{
  id: 84,
  question: "Quantas Taças dos Campeões Europeus o Benfica tinha conquistado até ao fim da época 2023/24?",
  opcoes: ["1", "2", "3", "4"],
  correta: 1
},
{
  id: 85,
  question: "Quantas Taças dos Campeões Europeus/Champions League o FC Porto tinha conquistado até ao fim da época 2023/24?",
  opcoes: ["1", "2", "3", "4"],
  correta: 1
},
{
  id: 86,
  question: "Como se chama o estádio do Liverpool?",
  opcoes: ["Old Trafford", "Anfield", "Emirates Stadium", "Stamford Bridge"],
  correta: 1
},
{
  id: 87,
  question: "Como se chama o estádio do Manchester United?",
  opcoes: ["Etihad Stadium", "Old Trafford", "Anfield", "Villa Park"],
  correta: 1
},
{
  id: 88,
  question: "Qual é o estádio tradicionalmente conhecido como casa do Borussia Dortmund?",
  opcoes: ["Allianz Arena", "Signal Iduna Park", "Olympiastadion", "BayArena"],
  correta: 1
},
{
  id: 89,
  question: "Como se chama o estádio do Bayern de Munique?",
  opcoes: ["Allianz Arena", "Signal Iduna Park", "San Siro", "Red Bull Arena"],
  correta: 0
},
{
  id: 90,
  question: "Qual estádio é tradicionalmente partilhado por AC Milan e Inter de Milão?",
  opcoes: ["San Siro", "Stadio Olimpico", "Allianz Stadium", "Diego Armando Maradona"],
  correta: 0
},
{
  id: 91,
  question: "Qual é o famoso estádio do Boca Juniors?",
  opcoes: ["Monumental", "La Bombonera", "Maracanã", "Centenario"],
  correta: 1
},
{
  id: 92,
  question: "Como se chama o estádio do Benfica?",
  opcoes: ["Estádio do Dragão", "Estádio da Luz", "José Alvalade", "Bessa"],
  correta: 1
},
{
  id: 93,
  question: "Como se chama o estádio do FC Porto?",
  opcoes: ["Estádio da Luz", "José Alvalade", "Estádio do Dragão", "Jamor"],
  correta: 2
},
{
  id: 94,
  question: "Como se chama o estádio da Juventus?",
  opcoes: ["San Siro", "Stadio Olimpico", "Allianz Stadium", "Artemio Franchi"],
  correta: 2
},
{
  id: 95,
  question: "Como se chama o estádio do Arsenal?",
  opcoes: ["Stamford Bridge", "Emirates Stadium", "Etihad Stadium", "Anfield"],
  correta: 1
},
{
  id: 96,
  question: "Quem venceu a Bola de Ouro de 2007?",
  opcoes: ["Cristiano Ronaldo", "Ronaldinho", "Kaká", "Lionel Messi"],
  correta: 2
},
{
  id: 97,
  question: "Quem venceu a Bola de Ouro de 2008?",
  opcoes: ["Lionel Messi", "Cristiano Ronaldo", "Kaká", "Fernando Torres"],
  correta: 1
},
{
  id: 98,
  question: "Quem venceu a Bola de Ouro de 2009?",
  opcoes: ["Cristiano Ronaldo", "Xavi", "Kaká", "Lionel Messi"],
  correta: 3
},
{
  id: 99,
  question: "Quem venceu a Bola de Ouro de 2018?",
  opcoes: ["Cristiano Ronaldo", "Luka Modric", "Antoine Griezmann", "Kylian Mbappé"],
  correta: 1
},
{
  id: 100,
  question: "Quem venceu a Bola de Ouro de 2022?",
  opcoes: ["Lionel Messi", "Kylian Mbappé", "Karim Benzema", "Robert Lewandowski"],
  correta: 2
},
{
  id: 101,
  question: "Quem ganhou a Chuteira de Ouro da Copa do Mundo de 2010?",
  opcoes: ["David Villa", "Diego Forlán", "Thomas Müller", "Wesley Sneijder"],
  correta: 2
},
{
  id: 102,
  question: "Quem foi o melhor marcador da Copa do Mundo de 2014?",
  opcoes: ["Thomas Müller", "Lionel Messi", "James Rodríguez", "Neymar"],
  correta: 2
},
{
  id: 103,
  question: "Quem ganhou a Chuteira de Ouro da Copa do Mundo de 2018?",
  opcoes: ["Kylian Mbappé", "Harry Kane", "Antoine Griezmann", "Romelu Lukaku"],
  correta: 1
},
{
  id: 104,
  question: "Quem ganhou a Chuteira de Ouro da Copa do Mundo de 2022?",
  opcoes: ["Lionel Messi", "Olivier Giroud", "Julián Álvarez", "Kylian Mbappé"],
  correta: 3
},
{
  id: 105,
  question: "Quem venceu o Girabola em 2000?",
  opcoes: ["ASA", "Petro de Luanda", "1º de Agosto", "Interclube"],
  correta: 1
},
{
  id: 106,
  question: "Quem foi o melhor marcador do Girabola de 2000?",
  opcoes: ["Flávio Amado", "Blanchard", "Love Kabungula", "Manucho"],
  correta: 1
},
{
  id: 107,
  question: "Por que clube Flávio Amado foi o melhor marcador do Girabola de 2002?",
  opcoes: ["ASA", "Interclube", "Petro de Luanda", "Kabuscorp"],
  correta: 2
},
{
  id: 108,
  question: "Por que clube Love Kabungula foi o melhor marcador do Girabola de 2004?",
  opcoes: ["ASA", "Petro de Luanda", "1º de Agosto", "Progresso"],
  correta: 0
},
{
  id: 109,
  question: "Por que clube Manucho Gonçalves foi o melhor marcador do Girabola de 2006?",
  opcoes: ["Interclube", "Petro de Luanda", "ASA", "Kabuscorp"],
  correta: 1
},
{
  id: 110,
  question: "Em que clube Mpele Mpele jogava quando foi o melhor marcador do Girabola de 2010?",
  opcoes: ["Petro de Luanda", "Recreativo do Libolo", "Kabuscorp", "ASA"],
  correta: 2
},
{
  id: 111,
  question: "Em que clube Albert Meyong jogava quando foi o melhor marcador do Girabola de 2013?",
  opcoes: ["Kabuscorp", "Petro de Luanda", "Interclube", "Bravos do Maquis"],
  correta: 0
},
{
  id: 112,
  question: "Que clube venceu o MTN8 sul-africano em 2013?",
  opcoes: ["Kaizer Chiefs", "Orlando Pirates", "Platinum Stars", "Mamelodi Sundowns"],
  correta: 2
},
{
  id: 113,
  question: "Quem venceu o MTN8 da África do Sul em 2009?",
  opcoes: ["Golden Arrows", "Orlando Pirates", "SuperSport United", "Ajax Cape Town"],
  correta: 0
},
{
  id: 114,
  question: "Quem venceu o MTN8 em 2005?",
  opcoes: ["Bloemfontein Celtic", "Kaizer Chiefs", "Santos", "Jomo Cosmos"],
  correta: 0
},

{
  id: 115,
  question: "Qual clube venceu a Liga dos Campeões da CAF em 2000?",
  opcoes: ["Al Ahly", "Hearts of Oak", "Raja Casablanca", "Zamalek"],
  correta: 1
},
{
  id: 116,
  question: "Qual clube nigeriano venceu a Liga dos Campeões da CAF em 2003?",
  opcoes: ["Kano Pillars", "Enyimba", "Shooting Stars", "Heartland"],
  correta: 1
},
{
  id: 117,
  question: "Quem venceu a Liga dos Campeões da CAF em 2007?",
  opcoes: ["Al Ahly", "Étoile du Sahel", "TP Mazembe", "ASEC Mimosas"],
  correta: 1
},
{
  id: 118,
  question: "Qual clube venceu a Liga dos Campeões da CAF em 2009?",
  opcoes: ["Espérance", "TP Mazembe", "Al Ahly", "Wydad Casablanca"],
  correta: 1
},
{
  id: 119,
  question: "Que clube argelino venceu a Liga dos Campeões da CAF em 2014?",
  opcoes: ["JS Kabylie", "MC Alger", "ES Sétif", "CR Belouizdad"],
  correta: 2
},
{
  id: 120,
  question: "Quem venceu a Liga dos Campeões da CAF em 2015?",
  opcoes: ["TP Mazembe", "Al Ahly", "Orlando Pirates", "USM Alger"],
  correta: 0
},
{
  id: 121,
  question: "Qual clube sul-africano venceu a Liga dos Campeões da CAF em 2016?",
  opcoes: ["Kaizer Chiefs", "Orlando Pirates", "Mamelodi Sundowns", "SuperSport United"],
  correta: 2
},
{
  id: 122,
  question: "Quem venceu a Supertaça Africana da CAF em 2012?",
  opcoes: ["MAS de Fez", "Al Ahly", "Espérance", "TP Mazembe"],
  correta: 0
},
{
  id: 123,
  question: "Quem venceu a Supertaça da CAF de 2015?",
  opcoes: ["Raja Casablanca", "ES Sétif", "Al Ahly", "Wydad"],
  correta: 1
},
{
  id: 124,
  question: "Qual clube venceu a Supertaça da CAF em 1999?",
  opcoes: ["ASEC Mimosas", "Raja Casablanca", "Zamalek", "Hearts of Oak"],
  correta: 0
},

{
  id: 125,
  question: "Quem venceu o Campeonato Egípcio na época 2001/02?",
  opcoes: ["Al Ahly", "Zamalek", "Ismaily", "Al Masry"],
  correta: 2
},
{
  id: 126,
  question: "Quem venceu o Campeonato Egípcio na época 2000/01?",
  opcoes: ["Zamalek", "Al Ahly", "Ismaily", "Pyramids"],
  correta: 0
},
{
  id: 127,
  question: "Quem venceu o Campeonato Egípcio em 2003/04?",
  opcoes: ["Ismaily", "Zamalek", "Al Ahly", "ENPPI"],
  correta: 1
},
{
  id: 128,
  question: "Quem interrompeu a hegemonia do Al Ahly e venceu a liga egípcia em 2014/15?",
  opcoes: ["Ismaily", "Zamalek", "Al Masry", "Smouha"],
  correta: 1
},
{
  id: 129,
  question: "Qual clube venceu a Botola marroquina em 2006/07?",
  opcoes: ["Raja Casablanca", "Wydad Casablanca", "Olympique Khouribga", "AS FAR"],
  correta: 2
},
{
  id: 130,
  question: "Quem venceu a Botola marroquina em 2007/08?",
  opcoes: ["AS FAR", "Raja Casablanca", "Wydad Casablanca", "FUS Rabat"],
  correta: 0
},
{
  id: 131,
  question: "Quem venceu a Botola do Marrocos em 2008/09?",
  opcoes: ["Wydad Casablanca", "Raja Casablanca", "AS FAR", "Maghreb de Fez"],
  correta: 1
},
{
  id: 132,
  question: "Qual clube venceu pela primeira vez a Botola em 2011/12?",
  opcoes: ["Moghreb Tétouan", "Olympique Safi", "FUS Rabat", "Hassania Agadir"],
  correta: 0
},
{
  id: 133,
  question: "Quem venceu o Campeonato Ganês em 2000?",
  opcoes: ["Asante Kotoko", "Hearts of Oak", "Ashanti Gold", "Medeama"],
  correta: 1
},
{
  id: 134,
  question: "Quem voltou a vencer o Campeonato Ganês em 2001 depois de ser campeão em 2000?",
  opcoes: ["Hearts of Oak", "Asante Kotoko", "King Faisal", "Liberty Professionals"],
  correta: 0
},

{
  id: 135,
  question: "Qual clube venceu a AFC Champions League de 2002/03?",
  opcoes: ["Al Hilal", "Al Ain", "Suwon Bluewings", "Al Ittihad"],
  correta: 1
},
{
  id: 136,
  question: "Qual clube saudita venceu a AFC Champions League em 2004?",
  opcoes: ["Al Nassr", "Al Hilal", "Al Ittihad", "Al Ahli"],
  correta: 2
},
{
  id: 137,
  question: "Qual clube sul-coreano venceu a AFC Champions League em 2006?",
  opcoes: ["Pohang Steelers", "Jeonbuk Hyundai Motors", "FC Seoul", "Ulsan Hyundai"],
  correta: 1
},
{
  id: 138,
  question: "Quem venceu a AFC Champions League em 2007?",
  opcoes: ["Urawa Red Diamonds", "Gamba Osaka", "Sepahan", "Pohang Steelers"],
  correta: 0
},
{
  id: 139,
  question: "Qual clube japonês venceu a AFC Champions League em 2008?",
  opcoes: ["Kashima Antlers", "Urawa Red Diamonds", "Gamba Osaka", "Yokohama F. Marinos"],
  correta: 2
},
{
  id: 140,
  question: "Quem venceu a AFC Champions League em 2009?",
  opcoes: ["Al Ittihad", "Pohang Steelers", "Jeonbuk Hyundai", "Al Ain"],
  correta: 1
},
{
  id: 141,
  question: "Que seleção surpreendeu ao vencer a Taça Asiática de 2007?",
  opcoes: ["Japão", "Coreia do Sul", "Iraque", "Arábia Saudita"],
  correta: 2
},
{
  id: 142,
  question: "Quem venceu a Taça Asiática de 2011?",
  opcoes: ["Austrália", "Japão", "Coreia do Sul", "Irão"],
  correta: 1
},
{
  id: 143,
  question: "Quem venceu a Taça Asiática de 2015?",
  opcoes: ["Japão", "Austrália", "Coreia do Sul", "Emirados Árabes Unidos"],
  correta: 1
},
{
  id: 144,
  question: "Qual seleção conquistou pela primeira vez a Taça Asiática em 2019?",
  opcoes: ["Qatar", "Iraque", "Emirados Árabes Unidos", "Uzbequistão"],
  correta: 0
},

{
  id: 145,
  question: "Quem venceu a J1 League japonesa em 2002?",
  opcoes: ["Kashima Antlers", "Júbilo Iwata", "Gamba Osaka", "Yokohama F. Marinos"],
  correta: 1
},
{
  id: 146,
  question: "Qual clube conquistou a J1 League pela primeira vez em 2005?",
  opcoes: ["Gamba Osaka", "Kawasaki Frontale", "Urawa Red Diamonds", "Nagoya Grampus"],
  correta: 0
},
{
  id: 147,
  question: "Quem venceu a J1 League em 2006?",
  opcoes: ["Urawa Red Diamonds", "Kashima Antlers", "Gamba Osaka", "Júbilo Iwata"],
  correta: 0
},
{
  id: 148,
  question: "Quem venceu a J1 League japonesa em 2007?",
  opcoes: ["Urawa Red Diamonds", "Kashima Antlers", "Kawasaki Frontale", "Gamba Osaka"],
  correta: 1
},
{
  id: 149,
  question: "Qual destes clubes é o maior campeão da história da J1 League?",
  opcoes: ["Kashima Antlers", "Yokohama F. Marinos", "Kawasaki Frontale", "Gamba Osaka"],
  correta: 0
},
{
  id: 150,
  question: "Quem venceu a K League sul-coreana em 2005?",
  opcoes: ["Ulsan Hyundai", "Suwon Bluewings", "FC Seoul", "Pohang Steelers"],
  correta: 0
},
{
  id: 151,
  question: "Quem venceu a K League em 2006?",
  opcoes: ["Jeonbuk Hyundai", "Seongnam Ilhwa Chunma", "Pohang Steelers", "Ulsan Hyundai"],
  correta: 1
},
{
  id: 152,
  question: "Quem foi campeão da K League em 2007?",
  opcoes: ["FC Seoul", "Pohang Steelers", "Suwon Bluewings", "Seongnam"],
  correta: 1
},
{
  id: 153,
  question: "Qual clube venceu a K League em 2008?",
  opcoes: ["Suwon Samsung Bluewings", "Pohang Steelers", "Jeonbuk Hyundai", "Ulsan Hyundai"],
  correta: 0
},
{
  id: 154,
  question: "Quem venceu a K League em 2009?",
  opcoes: ["Seongnam", "Jeonbuk Hyundai Motors", "FC Seoul", "Suwon Bluewings"],
  correta: 1
},

{
  id: 155,
  question: "Quem venceu a Süper Lig turca em 2002/03?",
  opcoes: ["Galatasaray", "Fenerbahçe", "Beşiktaş", "Trabzonspor"],
  correta: 2
},
{
  id: 156,
  question: "Qual clube surpreendeu ao vencer a Süper Lig em 2009/10?",
  opcoes: ["Sivasspor", "Bursaspor", "Başakşehir", "Kayserispor"],
  correta: 1
},
{
  id: 157,
  question: "Quantos títulos da Süper Lig o Bursaspor conquistou?",
  opcoes: ["1", "2", "3", "4"],
  correta: 0
},
{
  id: 158,
  question: "Quem venceu a Bundesliga austríaca em 2003/04?",
  opcoes: ["Rapid Wien", "Austria Wien", "Grazer AK", "Salzburg"],
  correta: 2
},
{
  id: 159,
  question: "Quem venceu o Campeonato Austríaco em 2004/05?",
  opcoes: ["Rapid Wien", "Austria Wien", "Sturm Graz", "Red Bull Salzburg"],
  correta: 0
},
{
  id: 160,
  question: "Quem venceu a Bundesliga austríaca em 2010/11?",
  opcoes: ["Red Bull Salzburg", "Rapid Wien", "Sturm Graz", "Austria Wien"],
  correta: 2
},
{
  id: 161,
  question: "Quem venceu o Campeonato Belga em 2002?",
  opcoes: ["Anderlecht", "Racing Genk", "Club Brugge", "Standard Liège"],
  correta: 1
},
{
  id: 162,
  question: "Quem venceu o Campeonato Belga em 2008?",
  opcoes: ["Club Brugge", "Anderlecht", "Standard Liège", "Genk"],
  correta: 2
},
{
  id: 163,
  question: "Que clube venceu pela primeira vez a liga belga na era moderna em 2015?",
  opcoes: ["Gent", "Genk", "Charleroi", "Zulte Waregem"],
  correta: 0
},
{
  id: 164,
  question: "Quem venceu o Campeonato Belga de 2023?",
  opcoes: ["Union Saint-Gilloise", "Antwerp", "Genk", "Club Brugge"],
  correta: 1
},

{
  id: 165,
  question: "Quem venceu a liga suíça em 2005/06?",
  opcoes: ["Basel", "Zürich", "Young Boys", "Grasshopper"],
  correta: 1
},
{
  id: 166,
  question: "Quem venceu a Super League suíça em 2008/09?",
  opcoes: ["Young Boys", "Basel", "Zürich", "Sion"],
  correta: 2
},
{
  id: 167,
  question: "Quem venceu a primeira edição da era Swiss Super League, em 2003/04?",
  opcoes: ["Basel", "Zürich", "Servette", "Young Boys"],
  correta: 0
},
{
  id: 168,
  question: "Quem venceu o Campeonato Grego em 2009/10, quebrando a sequência do Olympiacos?",
  opcoes: ["AEK", "PAOK", "Panathinaikos", "Aris"],
  correta: 2
},
{
  id: 169,
  question: "Em que clube Afonso Alves jogava quando foi artilheiro da Eredivisie em 2006/07?",
  opcoes: ["PSV", "Heerenveen", "AZ Alkmaar", "Twente"],
  correta: 1
},
{
  id: 170,
  question: "Quem venceu a Eredivisie em 2009?",
  opcoes: ["Ajax", "PSV", "AZ Alkmaar", "Feyenoord"],
  correta: 2
},
{
  id: 171,
  question: "Em que clube Mateja Kežman jogava quando marcou 35 golos na Eredivisie de 2002/03?",
  opcoes: ["Ajax", "PSV", "Feyenoord", "Vitesse"],
  correta: 1
},
{
  id: 172,
  question: "Por que clube Dirk Kuyt foi artilheiro da Eredivisie em 2004/05?",
  opcoes: ["Ajax", "Feyenoord", "PSV", "Utrecht"],
  correta: 1
},
{
  id: 173,
  question: "Em que clube Mounir El Hamdaoui jogava quando foi artilheiro da Eredivisie de 2008/09?",
  opcoes: ["Ajax", "AZ Alkmaar", "PSV", "Heerenveen"],
  correta: 1
},
{
  id: 174,
  question: "Em que clube Burak Yılmaz jogava quando marcou 33 golos na liga turca de 2011/12?",
  opcoes: ["Galatasaray", "Fenerbahçe", "Trabzonspor", "Beşiktaş"],
  correta: 2
},

{
  id: 175,
  question: "Quem venceu o Apertura argentino de 2004?",
  opcoes: ["River Plate", "Boca Juniors", "Newell's Old Boys", "Vélez Sarsfield"],
  correta: 2
},
{
  id: 176,
  question: "Qual clube venceu o Apertura argentino de 2007 pela primeira vez?",
  opcoes: ["Lanús", "Tigre", "Banfield", "Estudiantes"],
  correta: 0
},
{
  id: 177,
  question: "Quem venceu o Apertura argentino de 2009?",
  opcoes: ["Vélez Sarsfield", "Banfield", "Newell's Old Boys", "Estudiantes"],
  correta: 1
},
{
  id: 178,
  question: "Quem venceu o Clausura argentino de 2010?",
  opcoes: ["Estudiantes", "Argentinos Juniors", "Vélez Sarsfield", "Independiente"],
  correta: 1
},
{
  id: 179,
  question: "Quem venceu o Brasileirão de 2008?",
  opcoes: ["São Paulo", "Grêmio", "Cruzeiro", "Flamengo"],
  correta: 0
},
{
  id: 180,
  question: "Quem venceu o Campeonato Brasileiro em 2009?",
  opcoes: ["Internacional", "São Paulo", "Flamengo", "Cruzeiro"],
  correta: 2
},
{
  id: 181,
  question: "Quem venceu o Brasileirão de 2010?",
  opcoes: ["Corinthians", "Cruzeiro", "Fluminense", "Santos"],
  correta: 2
},
{
  id: 182,
  question: "Por qual clube Romário foi artilheiro do Brasileirão de 2005?",
  opcoes: ["Flamengo", "Vasco da Gama", "Fluminense", "Santos"],
  correta: 1
},
{
  id: 183,
  question: "Em que clube Jonas jogava quando foi artilheiro do Brasileirão de 2010?",
  opcoes: ["Santos", "Grêmio", "Cruzeiro", "Internacional"],
  correta: 1
},

{
  id: 184,
  question: "Qual clube peruano venceu a Copa Sul-Americana de 2003?",
  opcoes: ["Alianza Lima", "Sporting Cristal", "Cienciano", "Universitario"],
  correta: 2
},
{
  id: 185,
  question: "Quem treinava o Cienciano quando conquistou a Sul-Americana de 2003?",
  opcoes: ["Freddy Ternero", "Jorge Sampaoli", "Ricardo Gareca", "Juan Reynoso"],
  correta: 0
},
{
  id: 186,
  question: "Qual clube mexicano venceu a Copa Sul-Americana de 2006?",
  opcoes: ["Pumas UNAM", "América", "Pachuca", "Cruz Azul"],
  correta: 2
},
{
  id: 187,
  question: "Quem treinava o Pachuca na conquista da Sul-Americana de 2006?",
  opcoes: ["Enrique Meza", "Miguel Herrera", "Javier Aguirre", "Hugo Sánchez"],
  correta: 0
},
{
  id: 188,
  question: "Qual clube argentino venceu a Copa Sul-Americana de 2007?",
  opcoes: ["Lanús", "Arsenal de Sarandí", "Estudiantes", "San Lorenzo"],
  correta: 1
},
{
  id: 189,
  question: "Quem treinava o Arsenal de Sarandí na conquista da Sul-Americana de 2007?",
  opcoes: ["Gustavo Alfaro", "Marcelo Gallardo", "Diego Simeone", "Edgardo Bauza"],
  correta: 0
},
{
  id: 190,
  question: "Quem venceu a Copa Sul-Americana de 2008?",
  opcoes: ["Internacional", "Estudiantes", "LDU Quito", "Boca Juniors"],
  correta: 0
},
{
  id: 191,
  question: "Quem treinava o Internacional quando venceu a Sul-Americana de 2008?",
  opcoes: ["Abel Braga", "Tite", "Mano Menezes", "Celso Roth"],
  correta: 1
},
{
  id: 192,
  question: "Qual clube equatoriano venceu a Copa Sul-Americana de 2009?",
  opcoes: ["Barcelona SC", "Emelec", "LDU Quito", "Independiente del Valle"],
  correta: 2
},
{
  id: 193,
  question: "Quem treinava a LDU Quito durante a conquista da Sul-Americana de 2009?",
  opcoes: ["Edgardo Bauza", "Jorge Fossati", "Gustavo Alfaro", "Reinaldo Rueda"],
  correta: 1
},
{
  id: 194,
  question: "Em que estádio o Once Caldas disputou em casa o segundo jogo da final da Libertadores de 2004?",
  opcoes: ["Atanasio Girardot", "Palogrande", "El Campín", "Pascual Guerrero"],
  correta: 1
},

{
  id: 195,
  question: "Quem usava a dorsal 10 do FC Porto na época 2003/04?",
  opcoes: ["Maniche", "Deco", "Carlos Alberto", "Pedro Mendes"],
  correta: 1
},
{
  id: 196,
  question: "Qual dorsal Maniche usava no FC Porto na época 2003/04?",
  opcoes: ["8", "10", "18", "23"],
  correta: 2
},
{
  id: 197,
  question: "Quem usava a dorsal 10 do Monaco na época 2003/04?",
  opcoes: ["Ludovic Giuly", "Dado Pršo", "Fernando Morientes", "Jérôme Rothen"],
  correta: 2
},
{
  id: 198,
  question: "Qual dorsal Ludovic Giuly usava no Monaco na época 2003/04?",
  opcoes: ["7", "8", "10", "11"],
  correta: 1
},
{
  id: 199,
  question: "Quem usava a dorsal 7 do Shakhtar Donetsk na época 2008/09?",
  opcoes: ["Willian", "Fernandinho", "Jádson", "Ilsinho"],
  correta: 1
},
{
  id: 200,
  question: "Quem usava a dorsal 8 do Shakhtar Donetsk na época 2008/09?",
  opcoes: ["Jádson", "Fernandinho", "Willian", "Luiz Adriano"],
  correta: 0
},
{
  id: 201,
  question: "Quem usava a dorsal 33 do Shakhtar Donetsk na época 2008/09?",
  opcoes: ["Darijo Srna", "Dmytro Chyhrynskyi", "Răzvan Raț", "Tomáš Hübschman"],
  correta: 0
},
{
  id: 202,
  question: "Quem passou a usar a dorsal 10 do Ajax na época 2018/19?",
  opcoes: ["Hakim Ziyech", "Frenkie de Jong", "Dušan Tadić", "Donny van de Beek"],
  correta: 2
},
{
  id: 203,
  question: "Qual dorsal Hakim Ziyech passou a usar no Ajax durante a época 2018/19?",
  opcoes: ["10", "11", "21", "22"],
  correta: 3
},
{
  id: 204,
  question: "Quem usava a dorsal 21 do Ajax na época 2018/19?",
  opcoes: ["Frenkie de Jong", "Dušan Tadić", "Daley Blind", "David Neres"],
  correta: 0
},
{
  id: 205,
  question: "Quem venceu a La Liga na época 2001/02?",
  opcoes: ["Deportivo La Coruña", "Valencia", "Real Madrid", "Real Sociedad"],
  correta: 1
},
{
  id: 206,
  question: "Quem treinava o Valencia quando o clube venceu a La Liga de 2001/02?",
  opcoes: ["Héctor Cúper", "Claudio Ranieri", "Rafael Benítez", "Quique Sánchez Flores"],
  correta: 2
},
{
  id: 207,
  question: "Que clube o Valencia derrotou na final da Taça UEFA de 2003/04?",
  opcoes: ["Marseille", "Celtic", "Parma", "Benfica"],
  correta: 0
},
{
  id: 208,
  question: "Qual clube venceu a La Liga de 1999/2000?",
  opcoes: ["Valencia", "Real Zaragoza", "Deportivo La Coruña", "Celta de Vigo"],
  correta: 2
},
{
  id: 209,
  question: "Quem treinava o Deportivo La Coruña quando venceu a La Liga em 1999/2000?",
  opcoes: ["Javier Irureta", "Víctor Fernández", "John Toshack", "Luis Aragonés"],
  correta: 0
},
{
  id: 210,
  question: "Quem o Villarreal derrotou na final da Europa League de 2020/21?",
  opcoes: ["Arsenal", "Manchester United", "Roma", "Inter de Milão"],
  correta: 1
},
{
  id: 211,
  question: "Quem treinava o Villarreal na conquista da Europa League de 2020/21?",
  opcoes: ["Manuel Pellegrini", "Marcelino", "Unai Emery", "Quique Setién"],
  correta: 2
},
{
  id: 212,
  question: "Contra quem o Sevilla conquistou a Taça UEFA de 2005/06?",
  opcoes: ["Middlesbrough", "Espanyol", "Benfica", "Werder Bremen"],
  correta: 0
},
{
  id: 213,
  question: "Quem foi derrotado pelo Sevilla na final da Taça UEFA de 2006/07?",
  opcoes: ["Valencia", "Espanyol", "Villarreal", "Tottenham"],
  correta: 1
},
{
  id: 214,
  question: "Quem o Athletic Bilbao derrotou na final da Copa del Rey de 2023/24?",
  opcoes: ["Real Sociedad", "Valencia", "Mallorca", "Betis"],
  correta: 2
},
{
  id: 215,
  question: "Quem a Real Sociedad derrotou na final da Copa del Rey de 2019/20, disputada em 2021?",
  opcoes: ["Athletic Bilbao", "Barcelona", "Sevilla", "Villarreal"],
  correta: 0
},
{
  id: 216,
  question: "Quem o Real Betis derrotou na final da Copa del Rey de 2021/22?",
  opcoes: ["Sevilla", "Valencia", "Athletic Bilbao", "Real Sociedad"],
  correta: 1
},
{
  id: 217,
  question: "Quem o Valencia derrotou na final da Copa del Rey de 2018/19?",
  opcoes: ["Real Madrid", "Barcelona", "Sevilla", "Atlético de Madrid"],
  correta: 1
},
{
  id: 218,
  question: "Que clube eliminou o Celta de Vigo nas semifinais da Europa League de 2016/17?",
  opcoes: ["Ajax", "Manchester United", "Lyon", "Schalke 04"],
  correta: 1
},
{
  id: 219,
  question: "Que clube eliminou o Málaga nos quartos de final da Champions League de 2012/13?",
  opcoes: ["PSG", "Borussia Dortmund", "Juventus", "Galatasaray"],
  correta: 1
},
{
  id: 220,
  question: "Quem eliminou o Villarreal nas semifinais da Champions League de 2005/06?",
  opcoes: ["Arsenal", "Barcelona", "Milan", "Liverpool"],
  correta: 0
},
{
  id: 221,
  question: "Quem treinava o Villarreal durante a campanha até às semifinais da Champions League de 2005/06?",
  opcoes: ["Ernesto Valverde", "Manuel Pellegrini", "Marcelino", "Javier Irureta"],
  correta: 1
},
{
  id: 222,
  question: "Quem treinava o Sevilla quando venceu a Europa League de 2013/14?",
  opcoes: ["Juande Ramos", "Unai Emery", "Jorge Sampaoli", "Manolo Jiménez"],
  correta: 1
},
{
  id: 223,
  question: "Contra quem o Valencia perdeu a final da Champions League de 1999/2000?",
  opcoes: ["Bayern de Munique", "Manchester United", "Real Madrid", "Juventus"],
  correta: 2
},
{
  id: 224,
  question: "Quem derrotou o Valencia nos pênaltis na final da Champions League de 2000/01?",
  opcoes: ["Milan", "Bayern de Munique", "Liverpool", "Borussia Dortmund"],
  correta: 1
},

{
  id: 225,
  question: "Quem venceu a Serie A italiana na época 2000/01?",
  opcoes: ["Lazio", "Roma", "Parma", "Inter de Milão"],
  correta: 1
},
{
  id: 226,
  question: "Quem treinava a Roma na conquista da Serie A de 2000/01?",
  opcoes: ["Luciano Spalletti", "Fabio Capello", "Carlo Mazzone", "Claudio Ranieri"],
  correta: 1
},
{
  id: 227,
  question: "Quem treinava a Lazio quando venceu a Serie A de 1999/2000?",
  opcoes: ["Sven-Göran Eriksson", "Dino Zoff", "Roberto Mancini", "Alberto Zaccheroni"],
  correta: 0
},
{
  id: 228,
  question: "Quem a Lazio derrotou na final da Taça dos Vencedores das Taças de 1998/99?",
  opcoes: ["Mallorca", "Arsenal", "Parma", "Valencia"],
  correta: 0
},
{
  id: 229,
  question: "Quem o Parma derrotou na final da Taça UEFA de 1998/99?",
  opcoes: ["Lazio", "Marseille", "Inter", "Bordeaux"],
  correta: 1
},
{
  id: 230,
  question: "Quem treinava o Parma na conquista da Taça UEFA de 1998/99?",
  opcoes: ["Carlo Ancelotti", "Nevio Scala", "Alberto Malesani", "Cesare Prandelli"],
  correta: 2
},
{
  id: 231,
  question: "Quem eliminou a Fiorentina nos oitavos da Champions League de 2009/10?",
  opcoes: ["Bayern de Munique", "Lyon", "Manchester United", "Arsenal"],
  correta: 0
},
{
  id: 232,
  question: "Contra qual clube o Napoli conquistou a Taça UEFA de 1988/89?",
  opcoes: ["Stuttgart", "Werder Bremen", "Bayern de Munique", "Borussia Dortmund"],
  correta: 0
},
{
  id: 233,
  question: "Quem a Atalanta derrotou na final da Europa League de 2023/24?",
  opcoes: ["Liverpool", "Roma", "Bayer Leverkusen", "Marseille"],
  correta: 2
},
{
  id: 234,
  question: "Quem marcou os três golos da Atalanta na final da Europa League de 2023/24?",
  opcoes: ["Gianluca Scamacca", "Ademola Lookman", "Teun Koopmeiners", "Mario Pašalić"],
  correta: 1
},
{
  id: 235,
  question: "Quem a Roma derrotou na final da Conference League de 2021/22?",
  opcoes: ["Feyenoord", "West Ham", "Leicester", "Marseille"],
  correta: 0
},
{
  id: 236,
  question: "Quem treinava a Roma na conquista da Conference League de 2021/22?",
  opcoes: ["Paulo Fonseca", "José Mourinho", "Claudio Ranieri", "Luciano Spalletti"],
  correta: 1
},
{
  id: 237,
  question: "Contra quem a Lazio venceu a final da Coppa Italia de 2012/13?",
  opcoes: ["Roma", "Napoli", "Fiorentina", "Inter"],
  correta: 0
},
{
  id: 238,
  question: "Contra quem a Fiorentina perdeu a final da Conference League de 2022/23?",
  opcoes: ["Olympiacos", "West Ham", "Villarreal", "Basel"],
  correta: 1
},
{
  id: 239,
  question: "Contra quem a Fiorentina perdeu a final da Conference League de 2023/24?",
  opcoes: ["Olympiacos", "Club Brugge", "Aston Villa", "PAOK"],
  correta: 0
},
{
  id: 240,
  question: "Quem eliminou o Napoli nos quartos de final da Champions League de 2022/23?",
  opcoes: ["Inter de Milão", "Milan", "Real Madrid", "Benfica"],
  correta: 1
},
{
  id: 241,
  question: "Até que fase a Atalanta chegou na sua primeira participação na Champions League, em 2019/20?",
  opcoes: ["Oitavos de final", "Quartos de final", "Semifinais", "Final"],
  correta: 1
},
{
  id: 242,
  question: "Quem treinava o Bologna na histórica campanha da Serie A de 2023/24 que levou o clube à Champions League?",
  opcoes: ["Thiago Motta", "Vincenzo Italiano", "Roberto De Zerbi", "Ivan Jurić"],
  correta: 0
},
{
  id: 243,
  question: "Contra quem a Sampdoria perdeu a final da Taça dos Campeões Europeus de 1992?",
  opcoes: ["Milan", "Barcelona", "Ajax", "Porto"],
  correta: 1
},
{
  id: 244,
  question: "Contra quem o Torino perdeu a final da Taça UEFA de 1991/92?",
  opcoes: ["Ajax", "Inter", "Parma", "Juventus"],
  correta: 0
},

{
  id: 245,
  question: "Quem venceu a Bundesliga de 2003/04?",
  opcoes: ["Schalke 04", "Werder Bremen", "Stuttgart", "Bayer Leverkusen"],
  correta: 1
},
{
  id: 246,
  question: "Quem treinava o Werder Bremen na conquista da Bundesliga de 2003/04?",
  opcoes: ["Thomas Schaaf", "Felix Magath", "Christoph Daum", "Jupp Heynckes"],
  correta: 0
},
{
  id: 247,
  question: "Quem foi o melhor marcador da Bundesliga de 2003/04?",
  opcoes: ["Miroslav Klose", "Aílton", "Roy Makaay", "Kevin Kurányi"],
  correta: 1
},
{
  id: 248,
  question: "Quem venceu a Bundesliga de 2006/07?",
  opcoes: ["Schalke 04", "Werder Bremen", "Stuttgart", "Hamburgo"],
  correta: 2
},
{
  id: 249,
  question: "Quem treinava o Stuttgart na conquista da Bundesliga de 2006/07?",
  opcoes: ["Armin Veh", "Felix Magath", "Thomas Doll", "Huub Stevens"],
  correta: 0
},
{
  id: 250,
  question: "Qual clube venceu a Bundesliga pela primeira vez em 2008/09?",
  opcoes: ["Wolfsburg", "Schalke 04", "Hoffenheim", "Bayer Leverkusen"],
  correta: 0
},
{
  id: 251,
  question: "Quem treinava o Wolfsburg no título da Bundesliga de 2008/09?",
  opcoes: ["Dieter Hecking", "Felix Magath", "Thomas Schaaf", "Bruno Labbadia"],
  correta: 1
},
{
  id: 252,
  question: "Quem foi o melhor marcador da Bundesliga de 2008/09?",
  opcoes: ["Edin Džeko", "Mario Gómez", "Grafite", "Luca Toni"],
  correta: 2
},
{
  id: 253,
  question: "Qual clube conquistou a Bundesliga pela primeira vez na época 2023/24?",
  opcoes: ["RB Leipzig", "Bayer Leverkusen", "Union Berlin", "Hoffenheim"],
  correta: 1
},
{
  id: 254,
  question: "Quem treinava o Bayer Leverkusen na conquista da Bundesliga de 2023/24?",
  opcoes: ["Xabi Alonso", "Gerardo Seoane", "Roger Schmidt", "Peter Bosz"],
  correta: 0
},
{
  id: 255,
  question: "Quantas derrotas o Bayer Leverkusen sofreu na Bundesliga de 2023/24?",
  opcoes: ["0", "1", "2", "3"],
  correta: 0
},
{
  id: 256,
  question: "Quem o Schalke 04 derrotou na final da Taça UEFA de 1996/97?",
  opcoes: ["Inter de Milão", "Lazio", "Parma", "Roma"],
  correta: 0
},
{
  id: 257,
  question: "Contra quem o Borussia Dortmund perdeu a final da Champions League de 2012/13?",
  opcoes: ["Real Madrid", "Bayern de Munique", "Chelsea", "Barcelona"],
  correta: 1
},
{
  id: 258,
  question: "Contra quem o Borussia Dortmund perdeu a final da Taça UEFA de 2001/02?",
  opcoes: ["Feyenoord", "Porto", "Valencia", "Liverpool"],
  correta: 0
},
{
  id: 259,
  question: "Quem o Eintracht Frankfurt derrotou na final da Europa League de 2021/22?",
  opcoes: ["Rangers", "West Ham", "RB Leipzig", "Barcelona"],
  correta: 0
},
{
  id: 260,
  question: "Quem o RB Leipzig derrotou na final da Taça da Alemanha de 2021/22?",
  opcoes: ["Freiburg", "Eintracht Frankfurt", "Dortmund", "Union Berlin"],
  correta: 0
},
{
  id: 261,
  question: "Contra quem o RB Leipzig venceu a final da DFB-Pokal de 2022/23?",
  opcoes: ["Freiburg", "Stuttgart", "Eintracht Frankfurt", "Leverkusen"],
  correta: 2
},
{
  id: 262,
  question: "Quem o Bayer Leverkusen derrotou na final da Taça UEFA de 1987/88?",
  opcoes: ["Espanyol", "Barcelona", "Benfica", "Napoli"],
  correta: 0
},
{
  id: 263,
  question: "Contra quem o Werder Bremen perdeu a final da Taça UEFA de 2008/09?",
  opcoes: ["Zenit", "Shakhtar Donetsk", "Sevilla", "Hamburgo"],
  correta: 1
},
{
  id: 264,
  question: "Quem eliminou o Hamburgo nas semifinais da Taça UEFA de 2008/09?",
  opcoes: ["Werder Bremen", "Shakhtar Donetsk", "Dynamo Kyiv", "Galatasaray"],
  correta: 0
},

{
  id: 265,
  question: "Em que época o Lyon conquistou o seu primeiro título da Ligue 1?",
  opcoes: ["1999/2000", "2000/01", "2001/02", "2002/03"],
  correta: 2
},
{
  id: 266,
  question: "Quantos títulos consecutivos da Ligue 1 o Lyon conquistou entre 2002 e 2008?",
  opcoes: ["5", "6", "7", "8"],
  correta: 2
},
{
  id: 267,
  question: "Quem treinava o Lyon no primeiro título da Ligue 1 do clube, em 2001/02?",
  opcoes: ["Paul Le Guen", "Jacques Santini", "Gérard Houllier", "Alain Perrin"],
  correta: 1
},
{
  id: 268,
  question: "Quem treinava o Monaco quando venceu a Ligue 1 de 2016/17?",
  opcoes: ["Leonardo Jardim", "Claudio Ranieri", "Didier Deschamps", "Niko Kovač"],
  correta: 0
},
{
  id: 269,
  question: "Contra quem o Monaco perdeu a final da Champions League de 2003/04?",
  opcoes: ["Milan", "Porto", "Valencia", "Liverpool"],
  correta: 1
},
{
  id: 270,
  question: "Quem eliminou o Monaco nas semifinais da Champions League de 2016/17?",
  opcoes: ["Real Madrid", "Juventus", "Atlético de Madrid", "Bayern"],
  correta: 1
},
{
  id: 271,
  question: "Contra quem o Marseille perdeu a final da Europa League de 2017/18?",
  opcoes: ["Sevilla", "Atlético de Madrid", "Chelsea", "Arsenal"],
  correta: 1
},
{
  id: 272,
  question: "Contra quem o Marseille perdeu a final da Taça UEFA de 2003/04?",
  opcoes: ["Porto", "Valencia", "Sevilla", "Parma"],
  correta: 1
},
{
  id: 273,
  question: "Quem venceu a Ligue 1 na época 2008/09?",
  opcoes: ["Lyon", "Marseille", "Bordeaux", "Monaco"],
  correta: 2
},
{
  id: 274,
  question: "Quem treinava o Bordeaux quando venceu a Ligue 1 de 2008/09?",
  opcoes: ["Laurent Blanc", "Didier Deschamps", "Claude Puel", "Élie Baup"],
  correta: 0
},
{
  id: 275,
  question: "Quem venceu a Ligue 1 na época 2010/11?",
  opcoes: ["Lyon", "Lille", "Marseille", "Bordeaux"],
  correta: 1
},
{
  id: 276,
  question: "Quem treinava o Lille na conquista da Ligue 1 de 2010/11?",
  opcoes: ["Rudi Garcia", "Christophe Galtier", "Claude Puel", "René Girard"],
  correta: 0
},
{
  id: 277,
  question: "Quem treinava o Lille quando o clube venceu a Ligue 1 de 2020/21?",
  opcoes: ["Rudi Garcia", "Paulo Fonseca", "Christophe Galtier", "Bruno Génésio"],
  correta: 2
},
{
  id: 278,
  question: "Quem eliminou o Lyon nas semifinais da Champions League de 2009/10?",
  opcoes: ["Inter de Milão", "Bayern de Munique", "Barcelona", "Manchester United"],
  correta: 1
},
{
  id: 279,
  question: "Quem eliminou o Lyon nos pênaltis nos quartos de final da Champions League de 2004/05?",
  opcoes: ["PSV", "Milan", "Liverpool", "Chelsea"],
  correta: 0
},
{
  id: 280,
  question: "Quem é o maior marcador do Monaco na Champions League segundo os registos da UEFA?",
  opcoes: ["Thierry Henry", "Radamel Falcao", "Fernando Morientes", "David Trezeguet"],
  correta: 1
},
{
  id: 281,
  question: "Contra quem o Marseille venceu a final da Champions League de 1992/93?",
  opcoes: ["Milan", "Barcelona", "Juventus", "Benfica"],
  correta: 0
},
{
  id: 282,
  question: "Quem marcou o único golo da final da Champions League de 1993 pelo Marseille?",
  opcoes: ["Didier Deschamps", "Abedi Pelé", "Basile Boli", "Rudi Völler"],
  correta: 2
},
{
  id: 283,
  question: "Quem venceu a Ligue 1 francesa na época 2000/01?",
  opcoes: ["Nantes", "Lyon", "Monaco", "Auxerre"],
  correta: 0
},
{
  id: 284,
  question: "Quem treinava o Auxerre quando conquistou a Ligue 1 e a Coupe de France em 1995/96?",
  opcoes: ["Guy Roux", "Arsène Wenger", "Jean Tigana", "Raymond Domenech"],
  correta: 0
},

{
  id: 285,
  question: "Contra quem o Porto venceu a final da Taça UEFA de 2002/03?",
  opcoes: ["Celtic", "Rangers", "Valencia", "Feyenoord"],
  correta: 0
},
{
  id: 286,
  question: "Quem marcou o golo decisivo do Porto na final da Taça UEFA de 2002/03?",
  opcoes: ["Deco", "Derlei", "Hélder Postiga", "Maniche"],
  correta: 1
},
{
  id: 287,
  question: "Contra quem o Sporting perdeu a final da Taça UEFA de 2004/05?",
  opcoes: ["CSKA Moscovo", "Zenit", "Shakhtar", "Sevilla"],
  correta: 0
},
{
  id: 288,
  question: "Em que estádio foi disputada a final da Taça UEFA de 2004/05 entre Sporting e CSKA Moscovo?",
  opcoes: ["Estádio da Luz", "Estádio José Alvalade", "Estádio do Dragão", "Estádio Nacional do Jamor"],
  correta: 1
},
{
  id: 289,
  question: "Contra quem o Benfica perdeu a final da Europa League de 2012/13?",
  opcoes: ["Chelsea", "Sevilla", "Atlético de Madrid", "Porto"],
  correta: 0
},
{
  id: 290,
  question: "Contra quem o Benfica perdeu a final da Europa League de 2013/14?",
  opcoes: ["Valencia", "Sevilla", "Juventus", "Napoli"],
  correta: 1
},
{
  id: 291,
  question: "Contra quem o Braga perdeu a final da Europa League de 2010/11?",
  opcoes: ["Benfica", "Porto", "Sporting", "Villarreal"],
  correta: 1
},
{
  id: 292,
  question: "Quem treinava o Porto quando venceu a Europa League de 2010/11?",
  opcoes: ["José Mourinho", "Jesualdo Ferreira", "André Villas-Boas", "Vítor Pereira"],
  correta: 2
},
{
  id: 293,
  question: "Qual clube venceu o Campeonato Português de 2000/01?",
  opcoes: ["Porto", "Benfica", "Boavista", "Sporting"],
  correta: 2
},
{
  id: 294,
  question: "Quem foi a principal referência goleadora do Sporting campeão português de 2001/02?",
  opcoes: ["Mário Jardel", "João Pinto", "Sá Pinto", "Liedson"],
  correta: 0
},
{
  id: 295,
  question: "Quem eliminou o PSV nas semifinais da Champions League de 2004/05?",
  opcoes: ["Liverpool", "Milan", "Chelsea", "Juventus"],
  correta: 1
},
{
  id: 296,
  question: "Quem treinava o PSV na campanha até às semifinais da Champions League de 2004/05?",
  opcoes: ["Ronald Koeman", "Guus Hiddink", "Dick Advocaat", "Phillip Cocu"],
  correta: 1
},
{
  id: 297,
  question: "Quem o Feyenoord derrotou na final da Taça UEFA de 2001/02?",
  opcoes: ["Borussia Dortmund", "Inter de Milão", "Leeds United", "Parma"],
  correta: 0
},
{
  id: 298,
  question: "Contra quem o Ajax perdeu a final da Europa League de 2016/17?",
  opcoes: ["Manchester United", "Liverpool", "Sevilla", "Roma"],
  correta: 0
},
{
  id: 299,
  question: "Quem treinava o AZ Alkmaar quando o clube venceu a Eredivisie de 2008/09?",
  opcoes: ["Ronald Koeman", "Louis van Gaal", "Co Adriaanse", "Dick Advocaat"],
  correta: 1
},
{
  id: 300,
  question: "Quem treinava o FC Twente na conquista da Eredivisie de 2009/10?",
  opcoes: ["Frank de Boer", "Steve McClaren", "Fred Rutten", "Martin Jol"],
  correta: 1
},
{
  id: 301,
  question: "Quem treinava o Feyenoord no título da Eredivisie de 2016/17?",
  opcoes: ["Ronald Koeman", "Giovanni van Bronckhorst", "Arne Slot", "Jaap Stam"],
  correta: 1
},
{
  id: 302,
  question: "Quem o Galatasaray derrotou na final da Taça UEFA de 1999/2000?",
  opcoes: ["Arsenal", "Leeds United", "Parma", "Borussia Dortmund"],
  correta: 0
},
{
  id: 303,
  question: "Quem marcou o golden goal do Galatasaray contra o Real Madrid na Supertaça Europeia de 2000?",
  opcoes: ["Hakan Şükür", "Gheorghe Hagi", "Mário Jardel", "Ümit Davala"],
  correta: 2
},
{
  id: 304,
  question: "Contra quem o Rangers perdeu a final da Taça UEFA de 2007/08?",
  opcoes: ["Zenit", "Shakhtar Donetsk", "CSKA Moscovo", "Werder Bremen"],
  correta: 0
}
    ]

    const [indice, setIndice] = useState(Math.floor(Math.random() * perguntas.length))
    const [pontos, setPontos]= useState (0)
    const [selecionada, setSelecionada] = useState (null)
    const [vidas, setVidas] = useState (3)
    const [tempo, setTempo] = useState(10)
    const [perdeu, setPerdeu] = useState(false)
    

    useEffect(()=>{
        const cronometro = setInterval(()=>{
            setTempo(prev => prev - 1)
          }, 1000)
        
        return ()=>{
          clearInterval (cronometro)}
      },[tempo])

   const nave = useNavigate ()

useEffect(() => {
  if (perdeu || tempo <= 0 || vidas <= 0) {
    nave("/lost");
  }
}, [perdeu, tempo, vidas, nave])
   
  return (
    <div>
      <NavBar/>
        <nav 
      className="bg-[#020f59] p-5 shadow-lg">
         <h2
      className="text-center text-white font-bold ">{perguntas[indice].question}
      </h2>
      <h2>
          Faltam: {tempo}
        </h2>
      <h2
      className="text-center text-white font-bold ">
        Pontos: {pontos}
      </h2>
      <h2
      className="text-center text-white font-bold ">
        Vidas:{vidas}
      </h2>
        </nav>
      
      <div className='gap-4 flex flex-col items-center justify-between mt-4'>
        
     {perguntas[indice].opcoes.map((resposta, index) => (
      <button
      key={index}
      onClick={() =>{ setSelecionada(index)
        if (index === perguntas[indice].correta){
          setTimeout(() => {
            setIndice(Math.floor(Math.random() * perguntas.length))
            setPontos (p=> p + 20)
            setSelecionada(null)
            setTempo(10)
          }, 500);
         }
         else{
         setTimeout(() => {
            setIndice(Math.floor(Math.random() * perguntas.length))
            setSelecionada(null)
            setVidas( prev => prev - 1)
            setPerdeu(true)
          }, 500);;
         }
      
      } 
      }
      className={`
      p-4 rounded-lg w-[50%]
      ${
        selecionada === index
          ? index === perguntas[indice].correta
            ? "bg-green-500"
            : "bg-red-500"
          : "bg-blue-500"
         }
      `}
       >
      {resposta}
      </button>
       ))}
       
      

           
      </div>
    </div>
  )
}

export default PerguntasFutebol
