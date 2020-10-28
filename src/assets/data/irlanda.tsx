import reactElementToJSXString from 'react-element-to-jsx-string'

import { Data } from '.'

const irlanda: Data = {
  title: 'Irlanda',
  key: 'irlanda',
  content: `A Irlanda, por vezes chamada (de maneira não oficial, para diferenciá-la da ilha de mesmo nome, 
    que divide com a Irlanda do Norte) República da Irlanda é um estado soberano da Europa que ocupa cerca de 
    cinco sextos da ilha homônima. É uma república constitucional governada como uma democracia parlamentar, 
    com um presidente eleito para servir como chefe de Estado. Considerada um país desenvolvido, a Irlanda tem 
    o terceiro maior Índice de Desenvolvimento Humano (IDH) do mundo, além de ótimas classificações em índices 
    que medem o grau de democracia e liberdades como a de imprensa, econômica e política. Além da União Europeia
    (UE), a Irlanda também é membro do Conselho da Europa, da Organização para a Cooperação e Desenvolvimento 
    Econômico (OCDE), da Organização Mundial do Comércio (OMC) e da Organização das Nações Unidas (ONU). 
    Sua capital é Dublin e a população do país é estimada em 4,8 milhões de habitantes.`,
  pages: [
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
      key: 'idioma',
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
      key: 'moeda',
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
            Hoje a{' '}
            <a
              href="https://www.eurodicas.com.br/moeda-da-irlanda/"
              target="_blank"
              rel="noreferrer"
            >
              moeda oficial na Irlanda
            </a>{' '}
            é o Euro, mas antes da entrada do país na União Europeia, a moeda
            oficial era a Libra Irlandesa.
          </p>
        </div>
      )
    },
    {
      key: 'capital',
      title: 'Dublin',
      icon: 'fa-city',
      content: reactElementToJSXString(
        <div>
          <p>
            A capital do país é a famosa{' '}
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
                Para quem aprecia a famosa cerveja Guiness, conhecer o{' '}
                <a
                  href="https://www.guinness-storehouse.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Guiness Storehouse
                </a>{' '}
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
                imperdíveis estão a visita a{' '}
                <a
                  href="https://www.stpatrickscathedral.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catedral de São Patrício
                </a>{' '}
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
                Outra atração é o lindo{' '}
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
    }
  ]
}

export default irlanda
