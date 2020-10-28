import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import data, { Data } from '../../assets/data'
import Structure, { Menu } from '../../styles/components/Structure'
import {
  Body,
  Title,
  Description,
  ContainerImages
} from '../../styles/components'

interface Props {
  page: Data
  menu: Menu[]
  toogleTheme: () => void
}

export default function Irlanda({
  page,
  menu,
  toogleTheme
}: Props): JSX.Element {
  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link
          rel="icon"
          href={`/images/${page.title.toLowerCase()}/favicon.ico`}
        />
      </Head>

      <main>
        <Structure title={page.title} menu={menu} toogleTheme={toogleTheme}>
          <Body>
            <Title>{page.title}</Title>
            <Description>{page.content}</Description>
            <ContainerImages>
              <img src={`/images/${page.title.toLowerCase()}/bandeira.svg`} />
              <img src={`/images/${page.title.toLowerCase()}/armas.svg`} />
            </ContainerImages>
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map(({ key: country }) => ({ params: { country } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { country } = context.params

  const page = data.find(land => land.key === country)
  const menu = page.pages?.map(({ title, icon, key }) => ({
    title,
    icon,
    key
  }))

  return {
    props: { page, menu }
  }
}
