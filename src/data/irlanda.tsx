import reactElementToJSXString from 'react-element-to-jsx-string'

import { Data } from '.'

const irlanda: Data = {
  title: 'Irlanda',
  key: 'irlanda',
  pages: [
    {
      key: 'home',
      title: '',
      icon: '',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda, por vezes chamada (de maneira não oficial, para
            diferenciá-la da ilha de mesmo nome, que divide com a Irlanda do
            Norte) República da Irlanda é um estado soberano da Europa que ocupa
            cerca de cinco sextos da ilha homônima. É uma república
            constitucional governada como uma democracia parlamentar, com um
            presidente eleito para servir como chefe de Estado. Considerada um
            país desenvolvido, a Irlanda tem o terceiro maior Índice de
            Desenvolvimento Humano (IDH) do mundo, além de ótimas classificações
            em índices que medem o grau de democracia e liberdades como a de
            imprensa, econômica e política. Além da União Europeia (UE), a
            Irlanda também é membro do Conselho da Europa, da Organização para a
            Cooperação e Desenvolvimento Econômico (OCDE), da Organização
            Mundial do Comércio (OMC) e da Organização das Nações Unidas (ONU).
            Sua capital é Dublin e a população do país é estimada em 4,8 milhões
            de habitantes.
          </p>
        </div>
      )
    },
    {
      key: 'localizacao',
      title: 'Localização',
      icon: 'fa-map-marked-alt',
      imageBottom: '/images/irlanda/localizacao.jpg',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda é uma ilha localizada na Europa Ocidental, sendo a
            terceira maior ilha da Europa. A ilha é dividida em dois países, a
            República da Irlanda e a Irlanda no Norte.
          </p>
          <p>
            A República da Irlanda é um país independente e ocupa a maior parte
            da ilha situada a oeste da Grã-Bretanha. Divide-se em 4 províncias
            (Leinster, Munster, Connacht e Ulster) e 26 condados.
          </p>
          <p>
            É denominada de “Ilha Esmeralda” por sua paisagem de tons verdes
            exuberantes. Mas, além das paisagens e construções históricas, a
            Irlanda é conhecida pela cultura de grande influência celta e também
            pela famosa cerveja Guiness. Além disso, existem muitas curiosidades
            que tornam este destino surpreendente.
          </p>
        </div>
      )
    },
    {
      key: 'lingua_oficial',
      title: 'Língua Oficial',
      icon: 'fa-language',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda têm dois idiomas oficiais, o irlandês e inglês. Desde o
            final do século XIX que o inglês é a língua mais falada na Irlanda.
            Para além dessas duas, é possível encontrar um grande número de
            pessoas que fala Russo, Francês, Alemão, Polaco e Mandarim, devido
            ao grande número de emigrantes que fizeram da Irlanda a sua casa.
          </p>
          <p>
            Durante o domínio inglês, que foi de 1175 até 1921, os irlandeses
            foram muito perseguidos e seus costumes (danças e língua, por
            exemplo) foram fortemente combatidos.
          </p>
          <p>
            Apesar disso, os irlandeses sempre foram muito resistentes e a
            cultura irlandesa nunca se extinguiu. Hoje, todas as placas de
            trânsito da Irlanda estão escritas em ambas as línguas. O ensino do
            irlandês também é obrigatório das escolas e a maioria da população
            local tem, pelo menos, noções básicas do idioma.
          </p>
          <p>
            Apenas 2% da população tem o irlandês como principal língua, quase
            que totalmente localizadas em Conamara e nas Aran Islands, ambas no
            condado de Galway.
          </p>
          <p>
            Outro fato interessante é que o hino nacional da Irlanda é
            totalmente em irlandês.
          </p>
        </div>
      )
    },
    {
      key: 'moeda_e_economia',
      title: 'Moeda e Economia',
      icon: 'fa-dollar-sign',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda viveu um grande crescimento econômico nas últimas décadas.
            Com a entrada na União Europeia em 2002 houve um aumento na
            imigração. Entretanto, no final de 2008 a economia irlandesa entrou
            em colapso. Em 2010 o país aceitou ajuda financeira da União
            Europeia e voltou a recuperar-se.
          </p>
          <p>
            Atualmente o setor econômico está focado em tecnologia e serviços. A
            Irlanda consta entre os principais exportadores mundiais de
            software. O investimento financeiro recebido de países estrangeiros
            propiciou um grande desenvolvimento, e a instalação de empresas
            multinacionais alavancou a economia.
          </p>
          <p>
            Com um imposto corporativo de apenas 12,5%, empresas de tecnologia
            montaram suas sedes na Irlanda, o que colaborou significativamente
            para a redução do desemprego.
          </p>
          <p>
            Hoje a
            <a
              href="https://www.eurodicas.com.br/moeda-da-irlanda/"
              target="_blank"
              rel="noreferrer"
            >
              moeda oficial na Irlanda
            </a>
            é o Euro, mas antes da entrada do país na União Europeia, a moeda
            oficial era a Libra Irlandesa.
          </p>
        </div>
      )
    },
    {
      key: 'dublin',
      title: 'Dublin',
      icon: 'fa-city',
      content: reactElementToJSXString(
        <div>
          <p>
            A capital do país é a famosa
            <a
              href="https://www.eurodicas.com.br/viver-em-dublin/"
              target="_blank"
              rel="noreferrer"
            >
              cidade de Dublin,
            </a>
            que recebe turistas diariamente e pessoas para intercâmbio
            estudantil. Trata-se da maior cidade do país, em território e número
            de habitantes.
          </p>
          <p>
            Dublin é conhecida por ser uma cidade jovem e bastante movimentada,
            que resume quase tudo sobre a Irlanda. Apresenta grande diversidade
            cultural, embora ainda preserva características de cidades do
            interior.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Número de habitantes e localização',
          content: reactElementToJSXString(
            <div>
              <p>
                A capital tem cerca de 2 milhões de habitantes. A cidade é
                considerada uma das mais antigas da Europa. Portanto, há muitas
                construções antigas e históricas pela capital irlandesa.
              </p>
              <p>
                Dublin ainda conta com uma localização privilegiada, que a deixa
                ainda mais interessante. Ela se situa em uma região costeira
                cercada por montanhas.
              </p>
            </div>
          )
        },
        {
          title: 'Cultura de ir no pub e beber cerveja',
          content: reactElementToJSXString(
            <div>
              <p>
                Devido a essa cultura dos pubs, o público conta com inúmeras
                opções de bares noturnos, com música ao vivo e as
                valorizadíssimas cervejas irlandesas.
              </p>
              <p>
                Para quem aprecia a famosa cerveja Guiness, conhecer o
                <a
                  href="https://www.guinness-storehouse.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Guiness Storehouse
                </a>
                é um passeio indicado. Aliás, ele já foi considerado a principal
                atração turística da Europa.
              </p>
            </div>
          )
        },
        {
          title: 'Atrações turísticas de Dublin',
          content: reactElementToJSXString(
            <div>
              <p>
                A capital ainda oferece outras atrações turísticas
                interessantes, como parque e museus. Dentre os passeios que acho
                imperdíveis estão a visita a
                <a
                  href="https://www.stpatrickscathedral.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catedral de São Patrício
                </a>
                e o Castelo de Dublin.
              </p>
            </div>
          )
        },
        {
          title: '1. Phoenix Park',
          content: reactElementToJSXString(
            <div>
              <p>
                Outra atração é o lindo
                <a
                  href="https://www.tripadvisor.pt/Attraction_Review-g186605-d189068-Reviews-Phoenix_Park-Dublin_County_Dublin.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Phoenix Park,
                </a>
                que possui 707 hectares. Ele data a década de 1600 e é cerca de
                30% coberto por árvores. Também é a moradia de muitos animais
                que podem ser vistos por quem passeia no parque.
              </p>
            </div>
          )
        },
        {
          title: '2. Dublin Zoo',
          content: reactElementToJSXString(
            <div>
              <p>
                Além disso, dentro do Phoenix Park está localizado o Dublin Zoo
                – um dos zoológicos mais completos da Europa. Acomoda milhares
                de espécies de animais.
              </p>
            </div>
          )
        },
        {
          title: '3. Temple Bar',
          content: reactElementToJSXString(
            <div>
              <p>
                Em Dublin temos também o Temple Bar, que se trata de uma área
                formada por vários quarteirões e é conhecida como o “quarteirão
                cultural”. Aqui concentram-se muitos turistas em busca de
                diversão
              </p>
              <p>
                A região conta com diversos restaurantes, casas noturnas, cafés,
                pubs, entre outras atrações. É uma área bastante frequentada à
                noite, tanto por moradores quanto turistas.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'clima',
      title: 'Clima',
      icon: 'fa-cloud-sun-rain',
      content: reactElementToJSXString(
        <div>
          <p>
            Peculiar<b>clima úmido e ameno.</b>O território conta sempre com
            altas probabilidades de chuva – apesar de não serem intensas. As
            temperaturas também são baixas, praticamente ao longo de todo o ano.
            Raramente ultrapassam os 25ºC, mesmo no Verão (julho a agosto) –
            apesar de alguns dias mais serem quentes que isso.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'O Inverno não é tão frio como noutras regiões da Europa',
          content: reactElementToJSXString(
            <div>
              <p>
                No Inverno, as menores temperaturas registradas costumam ser de
                4 ou 5ºC. Tais índices são considerados amenos, se compararmos
                com as temperaturas de outras regiões da Europa.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'bandeira',
      title: 'Bandeira',
      icon: 'fa-flag',
      imageBottom: '/images/irlanda/bandeira.svg',
      content: reactElementToJSXString(
        <div>
          <p>
            A bandeira da Irlanda é um ponto a parte. Os irlandeses costumam
            chamá-la de a “tricolor irlandesa”. A bandeira nacional da Irlanda
            apresenta formato retangular e é composta por 3 faixas verticais do
            mesmo tamanho. A faixa da esquerda tem a cor verde, a faixa do meio,
            branca e a faixa da direita tem a cor laranja.
          </p>
          <p>As cores da bandeira representam:</p>
          <ul>
            <li>
              <b>Verde:</b>a tradição gaélica da Irlanda e também o
              republicanismo;
            </li>
            <li>
              <b>Branco:</b>representa o desejo por paz;
            </li>
            <li>
              <b>Laranja:</b>os seguidores de William III, de Orange – que foi
              rei da Inglaterra e da Irlanda no final do XVII;
            </li>
          </ul>
          <p>
            A origem da bandeira irlandesa, no seu formato e cores, vem da
            década de 1910. Foi a própria República Irlandesa que a criou
            durante a guerra de sua independência da Inglaterra.
          </p>
        </div>
      )
    },
    {
      key: 'diferenca_entre_irlanda_e_irlanda_do_norte',
      title: 'Irlanda do Norte',
      icon: 'fa-map-signs',
      imageBottom: '/images/irlanda/bandeira.svg',
      content: reactElementToJSXString(
        <div>
          <p>
            Muita gente acha que a República da Irlanda e a Irlanda do Norte se
            tratam de um mesmo país, mas não são.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Irlanda é um país autônomo e independente',
          content: reactElementToJSXString(
            <div>
              <p>
                Em primeiro lugar, a Irlanda é um país autônomo e independente.
                Já a Irlanda do Norte pertence a Grã-Bretanha. A Irlanda ocupa
                5/6 do território, sendo que 1/6 é ocupado pela Irlanda do
                Norte. A Irlanda tem uma população aproximada de 4,7 milhões de
                pessoas e a Irlanda do Norte, cerca de 1,8 milhões.
              </p>
              <p>
                Outra diferença também é em relação a conflitos, a Irlanda do
                Norte teve muitas pessoas mortas durante a segunda metade do
                século XX. O conflito foi mais interno do que externo.
              </p>
              <p>
                A população protestante (a maioria é descendente de britânicos),
                pretendia preservar os laços e o domínio da Grã-Bretanha. Do
                outro lado estiveram os católicos, que, em sua maioria, eram a
                favor da independência da Irlanda do Norte, que, como sabemos,
                não aconteceu.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'breve_historia',
      title: 'Breve História',
      icon: 'fa-book',
      content: reactElementToJSXString(
        <div>
          <p>
            A história da Irlanda é rica em conflitos, e muitos foram os
            acontecimentos de ordem ideológica e religiosa que determinaram os
            rumos do país.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Período Celta',
          content: reactElementToJSXString(
            <div>
              <p>
                Segundo dados históricos, no ano de 300 a.C., a ilha teria sido
                ocupada pelo povo Celta. Além da nova cultura, os Celtas
                inseriram uma nova língua, que deu origem a língua Gaélica.
              </p>
              <p>
                Durante séculos de domínio Celta, a religião pagã foi cultuada
                na Irlanda, até que no século V d.C., o missionário São Patrício
                começou a missão de evangelização. Aos poucos, a religião cristã
                se instalou na ilha, substituindo os ritos pagãos.
              </p>
              <p>
                A partir do século VIII d.C. a Irlanda foi governada pelos
                Vikings, e no ano de 1169 d.C. ocorreu a invasão normanda. Os
                Vikings foram expulsos e os irlandeses dominados. Neste período
                os normandos construíram grandes castelos e igrejas. O domínio
                inglês durou 700 anos.
              </p>
            </div>
          )
        },
        {
          title: 'Período protestante',
          content: reactElementToJSXString(
            <div>
              <p>
                Durante um longo período, a convivência dos irlandeses com os
                ingleses foi pacífica. Mas, com a coroação de Henrique VIII na
                Inglaterra, começaram os conflitos devido à religião. Os
                irlandeses católicos não aceitaram a religião protestante
                imposta pela Inglaterra. Como retaliação, o direito dos
                irlandeses a posse das terras foi negado. A divisão religiosa se
                originou a partir desses acontecimentos.
              </p>
            </div>
          )
        },
        {
          title: 'Período Governo Britânico',
          content: reactElementToJSXString(
            <div>
              <p>
                Os ingleses mantiveram o poder sobre a Irlanda durante vários
                anos. No ano de 1613 a maioria católica no parlamento irlandês
                foi derrubada, aumentando o poder da Inglaterra nas decisões em
                relação à Irlanda. Em 1791, jovens irlandeses se reuniram para
                tentar diminuir a influência britânica. Uma rebelião foi
                organizada por esses jovens, mas em 1798 foram vencidos pelos
                ingleses.
              </p>
            </div>
          )
        },
        {
          title: 'Período da Grande Fome',
          content: reactElementToJSXString(
            <div>
              <p>
                A partir do ano de 1845 uma praga assolou a Irlanda. Toda a
                produção de batata, que era a base da alimentação do povo foi
                destruída. O governo britânico, que ainda exercia controle
                comercial sobre a Irlanda, nada fez para auxiliar os irlandeses.
                Isso propiciou a emigração e a morte de milhares de irlandeses.
              </p>
            </div>
          )
        },
        {
          title: 'Proclamação da República',
          content: reactElementToJSXString(
            <div>
              <p>
                Em 24 de abril de 1916, dois grupos nacionalistas declararam a
                República da Irlanda independente da Inglaterra. A guerra civil
                se espalhou pelo país e os rebeldes foram derrotados.
              </p>
            </div>
          )
        },
        {
          title: 'Guerra da Independência',
          content: reactElementToJSXString(
            <div>
              <p>
                O período de 1919 a 1921 foi marcado pelo confronto do exército
                irlandês com o exército britânico. Em 1921 foi assinado um
                tratado que deu independência à Irlanda. A Irlanda foi dividida
                em Estado Livre Irlandês (26 condados), e a Irlanda do Norte (6
                condados).
              </p>
              <p>
                A Irlanda do Norte de maioria protestante e a República da
                Irlanda, de maioria católica. Em 1937 a República da Irlanda
                aprovou sua constituição como independente, e a Irlanda do Norte
                continuou a integrar o Reino Unido.
              </p>
            </div>
          )
        },
        {
          title: 'Situação atual',
          content: reactElementToJSXString(
            <div>
              <p>
                Mesmo com a separação, as disputas continuaram, principalmente
                entre o IRA (Exército Republicano Irlandês) e os movimentos
                unionistas. Em 1994 foi assinado um Tratado de Paz pela Irlanda
                do Norte e a República da Irlanda. Atualmente a situação está
                menos tensa entre os dois países.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'cultura',
      title: 'Cultura',
      icon: 'fa-hand-spock',
      content: reactElementToJSXString(
        <div>
          <p>
            Existe uma grande preocupação do povo irlandês, em preservar os
            aspectos da cultura nacional. O país é rico em tradições históricas
            e sua identidade é única.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Dia de São Patrício',
          content: reactElementToJSXString(
            <div>
              <p>
                Dia 17 de março é o dia de São Patrício ou Saint Patrick’s Day,
                o padroeiro da Irlanda. É uma verdadeira festa para os
                irlandeses que saem às ruas vestidos com as cores verde, branco
                e laranja. Normalmente as comemorações duram cerca de uma
                semana, com muitas apresentações de artistas locais e
                acompanhada da tradicional cerveja irlandesa.
              </p>
              <p>
                Segundo a história, o britânico Maewyn Succat foi capturado por
                piratas e escravizado. Vivendo nessa condição, se aproximou da
                religião e prometeu que se conseguisse escapar se tornaria
                missionário. Bem, ele conseguiu escapar, adotou o nome de
                Patrick e iniciou a missão de evangelização na Irlanda.
              </p>
              <p>
                Nas suas pregações ele adotou o trevo para explicar a Santíssima
                Trindade. Devido a isso, o trevo passou a ser visto como símbolo
                da sorte em todo o mundo. Outro feito atribuído a ele, foi a
                expulsão das cobras existentes na ilha.
              </p>
            </div>
          )
        },
        {
          title: 'Duendes',
          content: reactElementToJSXString(
            <div>
              <p>
                No dia de São Patrício é muito comum encontrar imagens de
                duendes espalhados nas cidades. No folclore irlandês, os duendes
                desempenham papel importante. Acredita-se que eles vivem no país
                bem antes da chegada dos celtas.
              </p>
              <p>
                Segundo a lenda, eles se escondem e protegem potes de ouro. São
                espertos e quem consegue capturá-los tem a chance de fazer três
                pedidos.
              </p>
            </div>
          )
        },
        {
          title: 'Música',
          content: reactElementToJSXString(
            <div>
              <p>
                A música tem extrema importância para o povo irlandês, não é a
                toa que a harpa é o símbolo oficial da Irlanda. É comum
                encontrar cantores fazendo apresentações nas ruas e nos muitos
                pubs espalhados pelo país.
              </p>
              <p>
                É muito forte a influência celta na variedade de estilos
                musicais irlandeses, que são executados nos vários festivais de
                música pelo país. Para amantes da música, a Irlanda é a escolha
                mais acertada!
              </p>
            </div>
          )
        },
        {
          title: 'Pubs',
          content: reactElementToJSXString(
            <div>
              <p>
                Frequentar um Pub na Irlanda é muito mais do que apenas sentar e
                beber. Os pubs são pontos de encontro onde os irlandeses se
                reúnem para confraternizar e colocar a conversa em dia. A
                cerveja irlandesa mais conhecida é a Guinness. Desde o ano de
                1759 ela é produzida e considerada um símbolo no país.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'simbolos',
      title: 'Símbolos',
      icon: 'fa-shapes',
      content: reactElementToJSXString(
        <div>
          <p>
            Além da bandeira da Irlanda, são muitos os símbolos da cultura
            irlandesa.
          </p>
        </div>
      )
    },
    {
      key: 'fauna_e_flora',
      title: 'Fauna e Flora',
      icon: 'fa-paw',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda tem grande variedade de aves e peixes. Entre os mamíferos,
            há camundongos, lebres e arminhos (animais semelhantes a doninhas).
            O único réptil existente é um tipo de lagarto.{' '}
          </p>
          <p>
            Gramíneas, urze e pastagens cobrem a maior parte do país. Musgos e
            liquens crescem por toda a ilha. A Irlanda tem poucas árvores, pois
            as florestas originais foram abatidas há muito tempo para a extração
            de madeira e para dar lugar à agricultura.
          </p>
        </div>
      )
    },
    {
      key: 'relevo',
      title: 'Relevo',
      icon: 'fa-mountain',
      content: reactElementToJSXString(
        <div>
          <p>
            A costa ocidental da Irlanda consiste principalmente de arribas,
            colinas e montanhas baixas (o ponto mais elevado é o Carrauntoohil,
            com 1 041 m). O interior do país é predominantemente composto por
            terras agrícolas relativamente planas, atravessadas por rios como o
            Shannon e ponteado por vários lagos grandes, os loughs. O centro do
            país faz parte da bacia hidrográfica do rio Shannon, e contém
            grandes áreas de paul, usados para a produção de turfa.
          </p>
        </div>
      )
    }
  ]
}

export default irlanda
