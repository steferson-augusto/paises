import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import parse from 'html-react-parser'

import data, { Page } from '../../data'

import Structure, { Menu } from '../../styles/components/Structure'
import ConditionalComponent from '../../styles/components/ConditionalComponent'
import Topics from '../../styles/components/Topics'
import { Body, Title, ContainerImages } from '../../styles/components'

interface Props {
  page: Page
  menu: Menu[]
  title: string
  toogleTheme: () => void
}

export default function Irlanda({
  page,
  menu,
  title,
  toogleTheme
}: Props): JSX.Element {
  const { content, topics } = page
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={`/images/${title.toLowerCase()}/favicon.ico`} />
      </Head>

      <main>
        <Structure
          title={title}
          menu={menu}
          toogleTheme={toogleTheme}
          subtitle={page.title}
        >
          <Body className="container">
            <Title>{page.title}</Title>
            <ConditionalComponent content={page.imageTop}>
              <ContainerImages>
                <Image src={page.imageTop} height="200" width="300" />
              </ContainerImages>
            </ConditionalComponent>

            {parse(content)}
            <ConditionalComponent content={page.imageBottom}>
              <ContainerImages className="check-img">
                <Image src={page.imageBottom} height="200" width="300" />
              </ContainerImages>
            </ConditionalComponent>

            <Topics topics={topics} />
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = data.pages.map(({ key }) => ({ params: { key } }))
  const paths = []
  data.map(({ key: country, pages }) =>
    pages.map(({ key }) => {
      paths.push({ params: { country, key } })
    })
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { key, country } = context.params

  const nation = data.find(land => land.key === country)
  const page = nation.pages.find(pag => pag.key === key)
  const menu = nation.pages?.map(({ title, icon, key }) => ({
    title,
    icon,
    key
  }))

  return {
    props: { page, menu, title: nation.title }
  }
}
