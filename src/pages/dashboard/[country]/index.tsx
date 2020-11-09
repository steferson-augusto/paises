import { useCallback, useEffect, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
// import axios from 'axios'
import useSWR from '../../../hooks/useSWR'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import dynamic from 'next/dynamic'

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
  ContainerContent
} from '../../../styles/components/[country]'
import replaceSpecialChars from '../../../utils/replaceSpecialChars'
import Checkbox from '../../../styles/components/Checkbox'

const Editor = dynamic(() => import('../../../styles/components/CKEditor'), {
  ssr: false
})

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
  const imgTopHeightInputRef = useRef<HTMLInputElement>(null)
  const imgTopWidthInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef({ value: '' })
  const [icon, setIcon] = useState('')
  const [imageTop, setImageTop] = useState(false)

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

  const handleChangeTopImage = useCallback(() => {
    console.log(contentRef.current.value)
    if (imageTop) {
      imgTopWidthInputRef.current.value = ''
      imgTopHeightInputRef.current.value = ''
    }
    setImageTop(prev => !prev)
  }, [])

  const handleContentChange = useCallback((event, editor) => {
    contentRef.current.value = editor.getData()
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
            <ContainerContent>
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
            </ContainerContent>
            <ContainerContent>
              <Checkbox
                title="Imagem Superior"
                onChange={handleChangeTopImage}
                checked={imageTop}
              />
              <Input
                ref={imgTopWidthInputRef}
                name="imgtop-width"
                label="Largura"
                type="number"
                pattern=".+"
                error={false}
                message=""
                disabled={!imageTop}
              />
              <Input
                ref={imgTopHeightInputRef}
                name="imgtop-height"
                label="Altura"
                type="number"
                pattern=".+"
                error={false}
                message=""
                disabled={!imageTop}
              />
            </ContainerContent>

            <Editor handleChange={handleContentChange} />
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
