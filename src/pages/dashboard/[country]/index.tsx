import { useCallback, useRef } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
// import axios from 'axios'
import useSWR from '../../../hooks/useSWR'

import { AddButton, Body } from '../../../styles/components'
import Structure from '../../../styles/components/Structure'
import { findAll, findBySlug } from '../../api/country'
import { Country } from '../../../styles/components/Countries'
import Pages, { Page } from '../../../styles/components/Pages'
import FullModal, { ModalProps } from '../../../styles/components/FullModal'

interface Props {
  country: Country
  toogleTheme: () => void
}

const CountryPages: React.FC<Props> = ({ toogleTheme, country }) => {
  const { data, error, loading } = useSWR<Page[]>(
    `/api/page?country=${country.id}`
  )
  const modalRef = useRef<ModalProps>(null)

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div>
      <Head>
        <title>{country.title} - páginas</title>
      </Head>

      <main>
        <Structure
          title={`${country.title} - PÁGINAS`}
          menu={[]}
          toogleTheme={toogleTheme}
        >
          <Body>
            <Pages pages={data} loading={loading} error={error} />

            <AddButton onClick={() => handleOpenModal()}>
              <i className="fas fa-plus" />
            </AddButton>
          </Body>
          <FullModal ref={modalRef} title="ADICIONAR PÁGINA">
            <p>modal</p>
          </FullModal>
        </Structure>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await findAll()

  const paths = data?.map(({ slug }) => ({ params: { country: slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { country } = context.params

  const data = await findBySlug(country as string)

  return {
    props: { country: data }
  }
}

export default CountryPages
