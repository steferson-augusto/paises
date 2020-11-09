import { useCallback, useRef, useState } from 'react'
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
import Input from '../../../styles/components/InputRef'
import InputState from '../../../styles/components/Input'
import {
  ContainerIcon,
  ContainerTitle
} from '../../../styles/components/[country]'
import replaceSpecialChars from '../../../utils/replaceSpecialChars'

interface Props {
  country: Country
  toogleTheme: () => void
}

const CountryPages: React.FC<Props> = ({ toogleTheme, country }) => {
  const { data, error, loading } = useSWR<Page[]>(
    `/api/page?country=${country.id}`
  )
  const modalRef = useRef<ModalProps>(null)
  const subtitleInputRef = useRef<HTMLInputElement>(null)
  const slugInputRef = useRef<HTMLInputElement>(null)
  const [icon, setIcon] = useState('')

  const handleSubtitleChange = useCallback(() => {
    const subtitle = subtitleInputRef.current?.value?.toLowerCase()
    slugInputRef.current.value = replaceSpecialChars(subtitle)
  }, [subtitleInputRef.current?.value])

  const handleIconChange = useCallback(e => {
    setIcon(e.target.value)
  }, [])

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
            <ContainerTitle>
              <Input
                ref={subtitleInputRef}
                name="subtitle"
                label="Título"
                type="text"
                pattern=".+"
                error={false}
                message=""
                onChange={handleSubtitleChange}
                required
              />
              <Input
                ref={slugInputRef}
                name="slug"
                label="Slug"
                type="text"
                pattern=".+"
                error={false}
                message=""
                required
                disabled
              />
              <ContainerIcon>
                <i
                  className={`fa fa-${
                    icon.length ? icon : 'exclamation-triangle'
                  }`}
                />
                <InputState
                  name="icon"
                  label="Ícone"
                  type="text"
                  pattern=".+"
                  value={icon}
                  onChange={handleIconChange}
                  error={false}
                  message=""
                  required
                />
              </ContainerIcon>
            </ContainerTitle>
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
