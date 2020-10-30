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
      ),
      topics: [
        {
          title: 'A Harpa irlandesa',
          content: reactElementToJSXString(
            <div>
              <p>Um dos símbolos mais importantes da cultura celta.</p>
              <p>
                Estampado no passaporte irlandês, em logos governamentais, na
                moeda (euro) e até mesmo como logo da cerveja Guinness, e no
                logo da Ryanair (companhia aérea irlandesa).
              </p>
              <p>
                <b>A harpa é um símbolo nacional da Irlanda</b>
              </p>
              <p>
                Ninguém sabe muito bem quando esse símbolo surgiu, reza a lenda
                que foi por causa do rei irlandês Brian Boru mas desde do século
                18 esse símbolo já representava a Irlanda e sua luta por
                independência, contra o domínio britânico.
              </p>
              <p>
                <b>Curiosidade sobre esse símbolo</b>
              </p>
              <p>
                A cerveja Guinness é a verdadeira detentora dos direitos de
                imagem da harpa de Brian Boru.
              </p>
              <p>
                Assim o governo irlandês não podendo usar essa imagem foi
                obrigado a espelhar a imagem da harpa em seu passaporte para
                diferenciar do logo da cerveja Guinness.
              </p>
            </div>
          )
        },
        {
          title: 'O Shamrock',
          imageTop: '/images/irlanda/shamrock.jpg/',
          content: reactElementToJSXString(
            <div>
              <p>
                Mundialmente considerado como o símbolo da sorte, o trevo na
                Irlanda tem três folhas e se chama shamrock.
              </p>
              <p>
                O shamrock ficou conhecido como um símbolo irlandês depois que o
                São Patrício o usou para explicar a sagrada trindade (pai, filho
                e espírito santo, cada um sendo representado por uma folha).
              </p>
              <p>Convertendo assim, os irlandeses em cristãos.</p>
              <p>
                As folhas do shamrock também podem significar fé, esperança e
                amor.
              </p>
            </div>
          )
        },
        {
          title: 'Leprechaun',
          content: reactElementToJSXString(
            <div>
              <p>
                O leprechaun é um símbolo do folclore irlandês, conhecido no
                brasil por duende.
              </p>
              <p>
                Reza a lenda que o leprechaun é mágico e esconde potes de ouro
                no final do arco íris.
              </p>
              <p>
                Mas cuidado, se encontrar um enquanto você estiver aqui na
                Irlanda saiba que os leprechaun não são seres tão bonzinhos
                assim, e podem usar também seus poderes para o mal se não forem
                com a sua cara.
              </p>
            </div>
          )
        },
        {
          title: 'Cruz Celta',
          content: reactElementToJSXString(
            <div>
              <p>
                Esse é um símbolo que caracteriza os celtas e é um dos
                principais símbolos artísticos da cultura céltica.
              </p>
              <p>
                Apesar de parecer um símbolo cristão, a cruz celta surgiu antes
                do cristianismo.
              </p>
              <p>É comum ver essa cruz em cemitérios na Irlanda.</p>
            </div>
          )
        },
        {
          title: 'Anel de Claddagh',
          imageTop: '/images/irlanda/anel.jpg',
          content: reactElementToJSXString(
            <div>
              <p>
                O anel de Claddagh é na Irlanda um símbolo que representa o
                verdadeiro amor e a amizade.
              </p>
              <p>
                A história desse anel surgiu em na aldeia de Claddagh, por isso
                o anel levou esse nome.
              </p>
              <p>
                É possível encontrar esse anel em qualquer joalheria na Irlanda,
                e o uso dele tem diferentes significados.
              </p>
              <ul>
                <li>
                  Na mão direita com a coroa para fora significa que você está
                  comprometido;
                </li>
                <li>
                  Na mão direita com a coroa para dentro, significa que seu
                  coração está disponível;
                </li>
                <li>
                  Na mão esquerda com a coroa para fora significa que você tem
                  um amor sem fim por uma pessoa e esse amor é correspondido.
                </li>
              </ul>
            </div>
          )
        }
      ]
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
            O único réptil existente é um tipo de lagarto.
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
    },
    {
      key: 'religiao',
      title: 'Religião',
      icon: 'fa-church',
      content: reactElementToJSXString(
        <div>
          <p>
            Em termos de religião, o catolicismo corresponde a 92% da população,
            enquanto a Igreja Anglicana da Irlanda representa 2%.
          </p>
        </div>
      )
    },
    {
      key: 'mulheres',
      title: 'Mulheres',
      icon: 'fa-female',
      content: reactElementToJSXString(
        <div>
          <p>
            Na antiga cultura celta, berço do povo irlandês, a mulher tinha um
            papel fundamental na sociedade. Ela podia ser líder religiosa
            (druida), rainha e participar de atividades militares.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Exames Preventivos',
          content: reactElementToJSXString(
            <div>
              <p>
                Mulheres entre 25 e 60 anos podem fazer o exame de papanicolau
                gratuitamente, mas apenas a cada três anos. Já a mamografia é
                gratuita a cada dois anos para mulheres entre 50 e 64 anos.
              </p>
            </div>
          )
        },
        {
          title: 'Vestuário',
          content: reactElementToJSXString(
            <div>
              <p>
                As irlandesas não têm medo nem de cores nem de estampas
                coloridas, e muitas amam maquiagem pesada com muito brilho. Como
                a maioria tem pele pálida, o bronzeamento artificial vive em
                alta por aqui, seja por meio de câmeras artificiais ou cremes
                auto-bronzeantes. A aplicação desses produtos não é das mais
                simples, então não é raro ver nas ruas mulheres em tons meio
                laranja, estilo Ooompa Loompa.
              </p>
            </div>
          )
        },
        {
          title: 'Esportes',
          content: reactElementToJSXString(
            <div>
              <p>
                As mulheres destacam-se em diversos esportes na Irlanda, desde
                os tradicionais esportes gaélicos (futebol gaélico e hurling) e
                os internacionais futebol e boxe. Nestes dois, duas irlandesas
                estiveram na mídia recentemente: Katie Taylor, campeã olímpica
                de boxe na categoria peso-leve; e Stephanie Roche, que levou o
                segundo lugar no prêmio da FIFA de melhor gol do ano de 2014,
                deixando para trás o jogador do Manchester United, Robin van
                Persie.
              </p>
            </div>
          )
        },
        {
          title: 'Noivado',
          content: reactElementToJSXString(
            <div>
              <p>
                Noivado é coisa séria e tradicional na Irlanda, com direito a
                anel de diamante e pedido de joelhos. E no ano bissexto (Leap
                Year), as mais corajosas saem à luta e fazem o pedido elas
                mesmas no dia 29 de fevereiro, seguindo um antigo costume
                teoricamente nascido na Ilha Esmeralda.
              </p>
            </div>
          )
        },
        {
          title: 'Casamento',
          content: reactElementToJSXString(
            <div>
              <p>
                Casamento é uma grande tradição na Irlanda. A festa pode durar
                um dia inteiro, com direito a casamento na igreja, jantar
                formal, discursos e bebidas até o sol raiar. As mulheres
                costumam vestir branco, mas os vestidos podem ser bem discretos.
                Já o casamento entre duas mulheres não é permitido na Irlanda,
                apenas a união civil.
              </p>
            </div>
          )
        },
        {
          title: 'Divórcio',
          content: reactElementToJSXString(
            <div>
              <p>
                Divórcio por aqui é algo trabalhoso, e pode levar até 4 anos
                para sair. Muito diferente do que era garantido por uma antiga
                lei irlandesa, que dava o direito à mulher de pedir o divórcio e
                tomar posse dos bens do marido, caso este não fosse capaz de
                exercer seu papel como esperado, fosse isso causado por
                impotência (!), obesidade(!!), homossexualismo (!!!) ou por ter
                uma amante (!!!!). Ah, se essa lei voltasse…
              </p>
            </div>
          )
        },
        {
          title: 'Contraceptivos',
          content: reactElementToJSXString(
            <div>
              <p>
                Ilegais até 1980, contraceptivos orais só podem ser adquiridos
                com receita médica (e tem que apresentar mesmo). Só a camisinha
                pode ser adquirida sem restrições em qualquer farmácia ou
                supermercado.
              </p>
            </div>
          )
        },
        {
          title: 'Aborto',
          content: reactElementToJSXString(
            <div>
              <p>
                Esse tema tem sido foco de muitas discussões por aqui, desde que
                uma gestante veio a falecer no hospital por conta de algo que
                talvez pudesse ter sido evitado em um aborto assistido. Após
                esse episódio, o aborto continua ilegal, mas passou a ser
                permitido caso haja risco real para a gestante – isso inclui
                mulheres à beira do suicídio.
              </p>
              <p>
                No entanto, não é considerado crime dirigir-se a outro país para
                realizar o procedimento, e o vizinho Reino Unido é o destino da
                maioria. Certas instituições também têm permissão para fornecer
                informações sobre as opções disponíveis mundo afora, ainda que
                de maneira discreta, supervisionada e sem incentivo à realização
                do procedimento.
              </p>
            </div>
          )
        },
        {
          title: 'Gravidez',
          content: reactElementToJSXString(
            <div>
              <p>
                A Irlanda divide com a França a maior taxa de fertilidade da
                Europa: 2.01 filhos por mulher (a média europeia é de 1.58). Em
                geral, elas começam a ter filhos perto dos 30 anos de idade, e
                ainda é comum encontrar famílias com 4 ou 5 crianças.
              </p>
            </div>
          )
        },
        {
          title: 'Licença-maternidade',
          content: reactElementToJSXString(
            <div>
              <p>
                Gestantes têm direito à 26 semanas pagas de licença-maternidade.
                Além disso, podem optar por mais 16 semanas, só que estas sem
                pagamento. Mas, o valor oferecido pelo governo é baixo, e muita
                gente reclama disso. Licença-paternidade também não é garantida,
                e depende da permissão do empregador.
              </p>
            </div>
          )
        },
        {
          title: 'Amamentação',
          content: reactElementToJSXString(
            <div>
              <p>
                As mulheres irlandesas não são muito chegadas a amamentar seus
                filhos, ao que parece. O país tem uma das taxas mais baixas do
                mundo nesse quesito: pouco mais da metade (56% ) das mulheres
                amamentam seus bebês. E mesmo assim, por poucos meses.
              </p>
            </div>
          )
        },
        {
          title: 'Creches',
          content: reactElementToJSXString(
            <div>
              <p>
                Não há creche pública gratuita na Irlanda, e o serviço nem é
                barato, nem é maravilhoso. Muitas mães optam por ficar em casa e
                cuidar dos filhos até que estes possam ir para a escola, aos 4,
                5 anos de idade, e contratar um serviço do tipo apenas para o
                período da tarde.
              </p>
            </div>
          )
        },
        {
          title: 'Trabalho',
          content: reactElementToJSXString(
            <div>
              <p>
                Nesse quesito as coisas melhoraram muito, mas ainda podem
                melhorar mais. Hoje, mulheres recebem um salário anual que
                representa 94% do ganho por homens na mesma função, o que
                significa cerca de 7 semanas de trabalho “gratuito” por ano. Um
                terço das mulheres trabalham em profissões tipicamente
                femininas, no setor educacional e de saúde, mas são menos da
                metade nos níveis de gerenciamento dessas mesmas instituições.
                Nem mesmo o fato de serem a maioria (55,3%) com nível superior
                muda essa realidade.
              </p>
            </div>
          )
        },
        {
          title: 'Escolas Separadas',
          content: reactElementToJSXString(
            <div>
              <p>
                Ainda hoje, muitas escolas irlandesas são exclusivas para
                meninos ou para meninas. Ou seja, muitos só enfrentam uma sala
                mista na faculdade. Como a imensa maioria das escolas é
                católica, as meninas ainda vestem longas saias, meias de cano
                longo e camisas de manga comprida – como no tempo das nossas
                mães no Brasil.tipo de violência psicológica de um parceiro, e
                15% revelaram abusos físicos ou sexuais – este número sobe para
                26% se não parceiros forem incluídos.
              </p>
            </div>
          )
        },
        {
          title: 'Violência Contra a Mulher',
          content: reactElementToJSXString(
            <div>
              <p>
                Os números irlandeses são bem mais baixos em relação a outros
                países da Europa, mas nem por isso animadores. Segundo dados da
                Agência Europeia de Direitos Fundamentais, 31% das mulheres
                irlandesas já sofreram algum tipo de violência psicológica de um
                parceiro, e 15% revelaram abusos físicos ou sexuais – este
                número sobe para 26% se não parceiros forem incluídos.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'mitos',
      title: 'Mitos',
      icon: 'fa-broom',
      content: reactElementToJSXString(
        <div>
          <p>
            A mitologia da Irlanda pré-cristã não sobreviveu inteiramente à
            conversão ao cristianismo, mas boa parte dela foi preservada,
            removido o seu significado religioso, na literatura medieval
            irlandesa, a qual representa o mais abrangente e o mais bem
            preservado de todos os ramos da mitologia celta.
          </p>
        </div>
      ),
      topics: [
        {
          title: 'Banshee',
          content: reactElementToJSXString(
            <div>
              <p>
                O Banshee era uma mulher que carregava com ela um presságio de
                morte . Às vezes vista como uma velha vestida de trapos, outras
                vezes, como um bela jovem e, até mesmo como uma mulher com a
                roupa sangrenta. Sempre que vista, solta um grito horrível e diz
                a lenda que este grito traz a morte para qualquer família que a
                ouve.
              </p>
            </div>
          )
        },
        {
          title: 'Changeling',
          content: reactElementToJSXString(
            <div>
              <p>
                Como diz a lenda, fadas fêmeas dão a luz a crianças deformadas,
                mas como elas preferem visualmente bebês agradáveis, eles iriam
                para o mundo mortal e seriam trocados por um ser humano
                saudável, deixando para trás um changeling. O changeling só fica
                feliz quando a desgraça ou tristeza acontece na casa. A lenda
                changeling tem durado por séculos.{' '}
              </p>
            </div>
          )
        },
        {
          title: 'Os Filhos de Lir',
          content: reactElementToJSXString(
            <div>
              <p>
                A história dos Filhos de Lir vem do irlandês do ciclo
                mitológico. Lir era o senhor do mar. Ele tinha uma esposa e
                quatro filhos. Quando a mulher de Lir morreu, ele casou com a
                irmã de sua esposa, Aoife. Aoife tinha ciúmes dos filhos de Lir
                e queria se livrar deles. Um dia Aoife levou as crianças a um
                lago. Enquanto eles estavam nadando ela realizou um feitiço
                sobre eles e os transformou em cisnes. Sob o feitiço as crianças
                deveriam permanecer cisnes até que ouvissem o som de um sino
                cristão.
              </p>
            </div>
          )
        },
        {
          title: 'Fadas',
          content: reactElementToJSXString(
            <div>
              <p>
                Fadas existem de alguma forma na mitologia em todo o mundo, mas
                têm uma importância especial para os irlandeses. Uma fada
                irlandesa pode assumir qualquer forma que desejar, mas
                geralmente escolhe uma forma humana. Dizem ser bonita, poderosa
                e difícil de resistir, o que é lamentável porque a maioria das
                fadas na Irlanda ao invés de amor, trazem desgraça e má sorte
                para os mortais que se aproximam delas.
              </p>
            </div>
          )
        },
        {
          title: 'Leprechaun',
          content: reactElementToJSXString(
            <div>
              <p>
                O leprechaun é um símbolo do folclore irlandês, conhecido no
                brasil por duende. Reza a lenda que o leprechaun é mágico e
                esconde potes de ouro no final do arco íris.
              </p>
              <p>
                Mas cuidado, se encontrar um enquanto você estiver aqui na
                Irlanda saiba que os leprechaun não são seres tão bonzinhos
                assim, e podem usar também seus poderes para o mal se não forem
                com a sua cara.
              </p>
            </div>
          )
        },
        {
          title: 'Osín de Tirnanoge',
          content: reactElementToJSXString(
            <div>
              <p>
                Na mitologia irlandesa, Tir na nÓg ou Tirnanoge é uma ilha onde
                o tempo parece às vezes parar. Se o nome significa “Terra da
                Juventude” e é o lugar onde a tribo dos deuses (os Tuatha Dé
                Danann) viveu depois de deixar a Irlanda. Dizem que é uma ilha
                quase inacessível , só é possível chegar após um longo caminho
                ou, a convite de uma fada.
              </p>
              <p>
                Foi descrito como um lugar bonito, onde não há doenças e para o
                qual chegaram monges e heróis de diferentes épocas. Um deles era
                Osi, filho do mítico guerreiro Fionn Mac Cumhaill, convidado por
                Niamh Chinn Óir. Dizem que Osin passou três anos em Tir na nög
                e, quando retornou à Irlanda andando a cavalo, descobriu que
                seus cabelos e pele estavam subitamente velhos: trezentos anos
                se passaram desde sua partida. Ele foi encontrado por São
                Patrício, a quem contou suas aventuras na Terra da Juventude.
              </p>
            </div>
          )
        },
        {
          title: 'A conversão de Macaldus',
          content: reactElementToJSXString(
            <div>
              <p>
                Dizem que alguns bandidos queriam fazer uma piada sobre St.
                Patrick. Um deles, chamado Macaldus, finge estar morto e os
                outros pedem ao santo que o ressuscite, sem sucesso. Quando eles
                tentam reviver Macaldus, os bandidos percebem que ele estava
                realmente morto. Naquele momento, eles correm atrás de São
                Patrício para pedir-lhe, desta vez seriamente, para
                ressuscitá-lo.
              </p>
              <p>
                O santo decide ajudá-los, mas também lhes impõe uma punição:
                envolve Macaldus acorrentado com um cadeado, joga a chave no mar
                e o envia em um barco solitário . Eventualmente, o barco chega
                ao porto de Man, onde os moradores resgatam Macaldus. Enquanto
                estava na ilha, o bandido recebe treinamento para ser padre, e
                no dia da ordenação chega um dos cozinheiros, que trouxe uma
                chave que ele acabara de encontrar dentro de um peixe. Com
                prazer, Macaldus reconhece que é a chave que finalmente o
                libertaria de suas correntes.
              </p>
            </div>
          )
        },
        {
          title: 'Cabeça de Hag',
          content: reactElementToJSXString(
            <div>
              <p>
                Perto da região de Burren, na Irlanda, existem os penhascos de
                Moher, um lugar famoso por seus castelos, cavernas e mitologia.
                Nestas falésias há um conjunto de rochas dispostas de maneira
                peculiar. É uma formação rochosa que parece ser o rosto de uma
                pessoa de frente para o mar.
              </p>
              <p>
                Eles dizem que é a cabeça da velha bruxa Mal, que se apaixonou
                por Cu Chulainn (herói irlandês). Depois de persegui-lo pelas
                florestas e castelos irlandeses, um dia Cú Chulainn pulou do
                penhasco. Mal faz o mesmo, mas não consegue: bateu no penhasco e
                sua cabeça foi retratada para sempre nas rochas.
              </p>
            </div>
          )
        },
        {
          title: 'As Festas do Fogo',
          content: reactElementToJSXString(
            <div>
              <p>
                Dizem que no condado de Westmeath, na cidade de Uisneach, você
                encontrará a porta de entrada para o ultra-mundo. É o lugar onde
                reis e rainhas estão enterrados. Cercada por um lago, no topo de
                uma colina, esta cidade é sede de algumas festas conhecidas como
                “festas do fogo”. Dizem que nesse lugar a vida de Lugh, o deus
                do sol, terminou. No entanto, ele continuou a existir na forma
                de comentários que se assemelham a cada maio na mesma área. Por
                esse motivo, danças, música e fogo são oferecidas em festas de
                incêndio.
              </p>
            </div>
          )
        },
        {
          title: 'Fantasma de Malahide',
          content: reactElementToJSXString(
            <div>
              <p>
                Perto de Dublin, há um castelo chamado Malahide. Diz a lenda que
                nesta sala o espírito de um homem chamado Anthony vagueia. Na
                vida, ele era o homem encarregado de proteger a filha de Richard
                Talbot, um conde irlandês do século XV. Uma noite, a filha do
                conde sofreu um ataque, que o tribunal culpou injustamente
                Anthony. Apesar de não ter se encontrado no local da agressão, o
                homem foi condenado a enforcar. Dizem que, a partir desse dia,
                Anthony aparece no castelo e arredores , buscando perdão e
                justiça pelo seu caso.
              </p>
            </div>
          )
        },
        {
          title: 'Tara Hill',
          content: reactElementToJSXString(
            <div>
              <p>
                Tara Hill é o local pré-histórico da tribo dos deuses irlandeses
                (Tuatha Dé Danaan). Esses deuses foram capazes de controlar a
                luz do sol e eram descendentes diretos dos deuses criativos. Com
                o tempo, historiadores e arqueólogos estudaram o que se encontra
                abaixo deste templo.
              </p>
              <p>
                Entre outras coisas, um monumento oval de mais de 100 metros de
                largura foi descoberto dentro da colina de Tara. Ao redor da
                referida estrutura, e como se fosse uma coroa, existem 300
                buracos com 2 metros de largura cada. Isso sugere que havia uma
                vez 300 colunas ao redor da colina , e não apenas isso, mas no
                subsolo deve haver tesouros para descobrir.
              </p>
            </div>
          )
        },
        {
          title: 'Oweynagat - A Caverna dos Gatos',
          content: reactElementToJSXString(
            <div>
              <p>
                No Condado de Roscommon, é famosa pelas cadeias rochosas que o
                cercam. Historicamente, esse lugar é reconhecido como parte da
                capital do reino Connacht, um local que abrigava personagens do
                Ciclo Ulster, como a rainha Maeve e Ailiill de Connacht. Eles
                dizem que uma das cavernas, chamada Oweynagat ou caverna dos
                gatos, foi usada como uma conexão entre o mundo dos humanos e o
                dos deuses . Eles também dizem que algumas criaturas destrutivas
                entraram na terra por esta porta.
              </p>
            </div>
          )
        },
        {
          title: 'O Herói Cuchulainn',
          content: reactElementToJSXString(
            <div>
              <p>
                Diz a lenda que, um dia, o guerreiro Crunn chegou à capital do
                reino de Conchobor para ver uma corrida de cavalos presidida
                pelo rei. Durante a corrida, Crunn disse que sua esposa era mais
                rápida do que alguns dos concorrentes, mesmo quando estava
                grávida. O rei de Conchobor pediu à esposa para provar isso e,
                para surpresa de todos, ele o fez. Mais tarde, ele deu à luz
                dois filhos, um deles foi chamado Cuchulainn.
              </p>
              <p>
                Apesar de ter crescido com a expectativa de estar sempre na
                sombra dos outros, muito jovem, Cuchulainn conseguiu matar um
                animal que ninguém poderia derrotar . Desde então, ele é
                conhecido como um herói vitorioso em todas as batalhas e é o
                portador das melhores armas. De fato, em torno da lenda do herói
                Cuchulainn, muitas outras histórias se desenvolveram.
              </p>
            </div>
          )
        }
      ]
    },
    {
      key: 'curiosidades',
      title: 'Curiosidades',
      icon: 'fa-lightbulb',
      content: reactElementToJSXString(
        <div>
          <p>
            A Irlanda é um dos destinos mais procurados pelos intercambistas. E
            grande parte dessa procura é por conta da permissão de trabalho que
            o país concede para quem vai estudar por lá. Mas não é só de estudo
            e trabalho que a Irlanda é feita. A seguir, vamos mostrar algumas
            curiosidades sobre esse país incrível!
          </p>
        </div>
      ),
      topics: [
        {
          title: 'A Cerveja irlandesa é Pop',
          content: reactElementToJSXString(
            <div>
              <p>
                Estima-se que TODOS OS DIAS 10 milhões de copos da cerveja
                irlandesa Guinness são bebidas no mundo todo. Veja quais são as
                <a
                  href="https://www.eurodicas.com.br/comidas-tipicas-da-irlanda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  comidas e bebidas típicas da Irlanda.
                </a>
              </p>
            </div>
          )
        },
        {
          title: 'Só 10% dos irlandeses são ruivos',
          content: reactElementToJSXString(
            <div>
              <p>
                Os irlandeses costumam ser associados a pessoas bonitas e de
                cabelos ruivos. Mas seremos obrigados a romper esse estereótipo
                com ajuda das estatísticas, segundo as quais apenas 10% dos
                irlandeses possuem cabelos naturalmente avermelhados.
              </p>
            </div>
          )
        },
        {
          title:
            'Todas as placas da Irlanda são escritas em inglês e em gaélico',
          imageTop: '/images/irlanda/placas.jpg',
          content: reactElementToJSXString(
            <div>
              <p>
                Gaélico é um idioma nativo que ainda é falado por muitos
                irlandeses (principalmente no interior do país).
              </p>
            </div>
          )
        },
        {
          title: 'Batata é o “arroz e feijão” dos irlandeses',
          content: reactElementToJSXString(
            <div>
              <p>Simples assim.</p>
            </div>
          )
        },
        {
          title: 'Portas Coloridas',
          imageBottom: '/images/irlanda/portas.jpg',
          content: reactElementToJSXString(
            <div>
              <p>
                Uma das explicações seria porque as cores chamativas
                facilitariam a vida de quem bebeu demais na hora de achar a
                porta de casa.
              </p>
              <p>
                Outra teoria diz que as portas coloridas existem por causa de
                uma rixa que existe entre a Irlanda e o Reino Unido. Na terra da
                rainha as portas geralmente são pretas, então os irlandeses
                resolveram pintar as portas de casa com cores vibrantes só para
                ser diferente.
              </p>
            </div>
          )
        },
        {
          title: 'Não existem cobras na Irlanda',
          content: reactElementToJSXString(
            <div>
              <p>
                Ao contrário do que dizem – que o padroeiro da Irlanda St.
                Patrick’s foi o responsável pelo extermínio dos répteis – o fato
                se dá simplesmente porque o clima irlandês nunca foi favorável
                para as cobras se reproduzirem e continuarem no país.
              </p>
            </div>
          )
        },
        {
          title: 'Máquina de lavar roupas na cozinha',
          imageBottom: '/images/irlanda/cozinha.jpg',
          content: reactElementToJSXString(
            <div>
              <p>
                Uma das curiosidades sobre a Irlanda é que a maior parte das
                casas não possui área de serviço com tanque como estamos
                acostumados no Brasil.
              </p>
              <p>
                Além disso, as máquinas também são secadoras, já que o tempo é
                muito úmido e é impossível deixar as roupas secando no varal
                fora de casa, pela falta de sol e excesso de chuva.
              </p>
            </div>
          )
        },
        {
          title: 'Not too bad',
          content: reactElementToJSXString(
            <div>
              <p>
                Sabe quando cumprimentamos alguém e falamos “Oi, tudo bem”? Na
                Irlanda, é bem comum os irlandeses responderem “Not too bad”,
                que traduzindo, literalmente, significa “Não tão mal”.
              </p>
              <p>
                E isso não quer dizer que não está tudo bem, é só o jeito deles
                de dizer que está tudo OK. Apesar de serem simpáticos, os
                irlandeses são um pouco mais fechados e, diferente dos
                brasileiros, demoram um pouco mais para criar laços de amizades
                com as pessoas que não conhecem.
              </p>
            </div>
          )
        },
        {
          title: 'Menino ou menina?',
          content: reactElementToJSXString(
            <div>
              <p>
                Entre as curiosidade da Irlanda, está a existência da tradição
                em que os pais não devem contar para ninguém o sexo do bebê
                antes de nascer. Dizem as pessoas mais velhas que isso dá azar,
                e em alguns casos inclusive nem os pais ficam sabendo se é
                menina ou menino.
              </p>
              <p>
                Mas essa é uma tradição que já está perdendo espaço entre os
                pais mais jovens, que já não acreditam mais na superstição.
              </p>
            </div>
          )
        },
        {
          title: 'Chá com leite',
          content: reactElementToJSXString(
            <div>
              <p>
                Os irlandeses são tomadores assíduos de chá, tanto quanto os
                ingleses. Faça frio ou não, é com certeza a bebida preferida.
                Além disso, eles tomam o chá preto (conhecido como breakfast tea
                ou black tea), com leite. Para eles colocar leite no chá é tão
                natural quanto colocar leite no café.
              </p>
            </div>
          )
        },
        {
          title: 'Chove dia sim, dia também',
          content: reactElementToJSXString(
            <div>
              <p>
                Sim, a Irlanda é um país que chove muito e venta mais ainda. Os
                dias são mais cinzas e o sol é um fenômeno quase que raro
                (inclusive, quando sai um solzinho, todo mundo corre para os
                parques e praças para aproveitar).
              </p>
            </div>
          )
        },
        {
          title: 'Bebida alcoólica depois das 10h e antes das 22h',
          content: reactElementToJSXString(
            <div>
              <p>
                Apesar de ser conhecido com um dos países que mais consome
                cerveja no mundo, uma das curiosidades sobre a Irlanda é que lá
                tem horário delimitado para comprar bebida alcoólica nos
                supermercados e conveniências.
              </p>
              <p>
                Antes das 10 horas da manhã e depois das 22 horas, não é
                possível comprar nada! O único lugar onde você vai encontrar
                bebida alcoólica após esse horário é nos bares.
              </p>
            </div>
          )
        },
        {
          title: 'Irish Breakfast',
          imageBottom: '/images/irlanda/breakfast.jpg',
          content: reactElementToJSXString(
            <div>
              <p>
                Um dos pratos mais famosos da Irlanda é o café da manhã
                Irlandês, que para eles nada mais é do que uma forma de se
                recuperar da bebedeira no dia anterior.
              </p>
              <p>
                O prato inclui: ovos fritos ou mexidos, torrada, tomate, bacon,
                feijão (o feijão deles é diferente, com um molho de tomate e um
                pouco adocicado), morcela e em alguns lugares uma tortinha de
                batata e até cogumelos.
              </p>
            </div>
          )
        },
        {
          title: 'Desculpe-me',
          content: reactElementToJSXString(
            <div>
              <p>
                O “sorry” é utilizado em todos os momentos, para se desculpar,
                pedir licença e mesmo se você fez algo que a culpa não é sua, é
                bem comum pedir desculpas.
              </p>
            </div>
          )
        },
        {
          title: 'Interruptor da luz fora do banheiro',
          content: reactElementToJSXString(
            <div>
              <p>
                Imagine a cena: você está tomando banho e, de repente, a luz
                apaga. Isso pode acontecer frequentemente, já que o interruptor
                é do lado de fora do banheiro!
              </p>
              <p>
                Como normalmente os brasileiros dividem casa, é bem comum alguém
                fazer uma gracinha para sacanear quem está lá dentro ou até
                mesmo sem querer. Além disso, não há tomadas nos banheiros, já
                que a umidade é muito grande e pode ser perigoso.
              </p>
            </div>
          )
        },
        {
          title: 'Sacolas plásticas pagas',
          content: reactElementToJSXString(
            <div>
              <p>
                Cada sacola plástica custa em média 20 centavos de Euro e as
                maiores até 1 Euro. É bem comum a reutilização de sacolas e até
                mesmo o uso de sacolas ecológicas.
              </p>
              <p>
                Isso porque o governo sancionou uma lei que proíbe a
                distribuição gratuita, em prol do meio ambiente. Nas lojas de
                roupas normalmente as sacolas são de papelão.
              </p>
            </div>
          )
        },
        {
          title: 'Bares fechados às 3h',
          content: reactElementToJSXString(
            <div>
              <p>
                Entre as curiosidades da Irlanda está o fato de que os bares
                fecham cedo. Diferente de nós, que costumamos ir para a festa
                após a meia-noite, os irlandeses começam a beber lá pelas 18h e,
                por isso terminam a noitada mais cedo também.
              </p>
            </div>
          )
        },
        {
          title: 'Drácula tem raízes irlandesas',
          content: reactElementToJSXString(
            <div>
              <p>
                Muita gente sabe que a inspiração para o romance
                &#34;Drácula&#34;, de Bram Stoker, era um homem de verdade, Vlad
                III Tepes (Vlad, o Empalador, príncipe da Valáquia, território
                da atual Romênia), que viveu no século XV. No entanto, alguns
                historiadores afirmam que Stocker (nascido e criado em Dublin)
                construiu a imagem do famoso sugador de sangue a partir do
                folclore irlandês.
              </p>
              <p>
                Segundo uma lenda, Abhartach era o chefe de um destacamento de
                soldados, baixinho e muito pálido. Ele aterrorizava seus
                súditos, que o temiam e o consideravam um feiticeiro. Um dia, a
                paciência deles acabou e todos pediram a um guerreiro que
                matasse seu amo.
              </p>
              <p>
                O guerreiro matou o feiticeiro duas vezes, mas ele sempre
                levantava do túmulo exigindo de seus súditos infiéis o pagamento
                de um tributo na forma de um copo cheio de sangue daquelas
                pessoas. Abhartach deixou de voltar à vida somente quando o
                guerreiro seguiu o conselho de um druida e primeiro cortou a
                cabeça do feiticeiro com uma espada de cinzas, enterrando-o com
                os pés para cima, colocando uma enorme pedra sobre o túmulo.
              </p>
            </div>
          )
        },
        {
          title: 'Rainha dos piratas',
          content: reactElementToJSXString(
            <div>
              <p>
                Granuaile, ou Grace O&#39;Malley, filha de um líder de clã, era
                uma rebelde irlandesa que agitava os mares do norte. Ela viveu
                no século XVI, e após a morte de seu pai, venceu seu irmão numa
                batalha justa para ocupar o lugar de líder daquele grupo.
                Dedicava-se à pirataria, manejava a espada à perfeição, lutava
                na linha de frente ao lado dos homens, era corajosa e ousada,
                dona de uma natureza apaixonada e, ao mesmo tempo, uma
                estrategista reconhecida. Além disso, tinha talento para a
                política.
              </p>
              <p>
                Segundo uma das lendas, um dia após dar à luz, a brava Grace já
                estava envolvida em uma luta no mar contra piratas argelinos,
                inspirando seu povo ao dizer que &#34;dar à luz era pior do que
                lutar&#34;.
              </p>
            </div>
          )
        },
        {
          title: 'Escovar os dentes',
          content: reactElementToJSXString(
            <div>
              <p>
                Escovar os dentes depois das refeições não é um hábito irlandês
                e ninguém olha feio quando eles almoçam e seguem com a vida.
              </p>
              <p>
                Por não escovarem os dentes depois do almoço existem gomas de
                mascar cujos slogan são coisas do tipo: &#34;perfeito pra depois
                do almoço&#34;. E eles usam.
              </p>
            </div>
          )
        },
        {
          title: 'Roupas',
          content: reactElementToJSXString(
            <div>
              <p>
                Como roupas aqui são bem mais baratas (obrigado por existir
                Penneys), as pessoas andam muito bem vestidas o tempo todo e eu
                acho que todo mundo é rico.
              </p>
              <p>
                Por outro lado eles gostam muito de conforto, então é bem comum
                ver gente usando moletom 2x maior do que o corpo só pra ficar
                bem confortável.
              </p>
              <p>
                Bem comum os meninos usarem moletom sem cueca, porque
                né…conforto em primeiro lugar!
              </p>
            </div>
          )
        },
        {
          title: 'Novelas',
          content: reactElementToJSXString(
            <div>
              <p>
                As novelas deles duram anos e eles se apegam mesmo aos
                personagens. A mais longa no ar já tem 16 anos (é do Reino
                Unido) e eles já não sabem mais diferenciar os atores dos
                personagens.
              </p>
            </div>
          )
        }
      ]
    }
  ]
}

export default irlanda
