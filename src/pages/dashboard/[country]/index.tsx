import { useCallback, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'
import useSWR from '../../../hooks/useSWR'
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
  ContainerContent,
  Form
} from '../../../styles/components/[country]'
import replaceSpecialChars from '../../../utils/replaceSpecialChars'
import Checkbox from '../../../styles/components/Checkbox'
import Button from '../../../styles/components/Button'

const Editor = dynamic(() => import('../../../styles/components/CKEditor'), {
  ssr: false
})

interface Props {
  country: Country
  toogleTheme: () => void
}

const CountryPages: React.FC<Props> = ({ toogleTheme, country }) => {
  const { data, error, loading, mutate } = useSWR<Page[]>(
    `/api/page?country=${country.id}`
  )
  const modalRef = useRef<ModalProps>(null)
  const subtitleInputRef = useRef<HTMLInputElement>(null)
  const slugInputRef = useRef<HTMLInputElement>(null)
  const imgTopHeightInputRef = useRef<HTMLInputElement>(null)
  const imgTopWidthInputRef = useRef<HTMLInputElement>(null)
  const imgTopPathInputRef = useRef<HTMLInputElement>(null)
  const imgBottomHeightInputRef = useRef<HTMLInputElement>(null)
  const imgBottomWidthInputRef = useRef<HTMLInputElement>(null)
  const imgBottomPathInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef({ value: '' })
  const [icon, setIcon] = useState('')
  const [imageTop, setImageTop] = useState(false)
  const [imageBottom, setImageBottom] = useState(false)

  const resetImageTop = useCallback(() => {
    imgTopWidthInputRef.current.value = ''
    imgTopHeightInputRef.current.value = ''
    imgTopPathInputRef.current.value = ''
  }, [])

  const resetImageBottom = useCallback(() => {
    imgBottomWidthInputRef.current.value = ''
    imgBottomHeightInputRef.current.value = ''
    imgBottomPathInputRef.current.value = ''
  }, [])

  const resetForm = useCallback(() => {
    resetImageBottom()
    resetImageTop()
    setImageBottom(false)
    setImageTop(false)
    subtitleInputRef.current.value = ''
    slugInputRef.current.value = ''
    contentRef.current.value = ''
    setIcon('')
  }, [])

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
    if (imageTop) resetImageTop()
    setImageTop(prev => !prev)
  }, [imageTop])

  const handleChangeBottomImage = useCallback(() => {
    if (imageBottom) resetImageBottom()
    setImageBottom(prev => !prev)
  }, [imageBottom])

  const handleContentChange = useCallback(value => {
    contentRef.current.value = value
  }, [])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      // eslint-disable-next-line prefer-const
      let value: Page = {
        countryId: country.id,
        subtitle: subtitleInputRef.current.value,
        slug: slugInputRef.current.value,
        content: contentRef.current.value,
        icon
      }

      if (imageTop) {
        value.imageTop = {
          pathway: imgTopPathInputRef.current.value,
          position: 'top',
          width: imgTopWidthInputRef.current.value,
          height: imgTopHeightInputRef.current.value
        }
      }

      if (imageBottom) {
        value.imageBottom = {
          pathway: imgBottomPathInputRef.current.value,
          position: 'bottom',
          width: imgBottomWidthInputRef.current.value,
          height: imgBottomHeightInputRef.current.value
        }
      }

      axios.post('/api/page/', { page: value })
      const updatedPages = [...data, value]
      mutate(updatedPages, false)
      modalRef.current.closeModal()
      resetForm()
    },
    [icon, imageTop, imageBottom, data, mutate]
  )

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
            <Pages
              pages={data}
              country={country.id}
              loading={loading}
              error={error}
            />

            <AddButton onClick={() => handleOpenModal()}>
              <i className="fas fa-plus" />
            </AddButton>
          </Body>
          <FullModal ref={modalRef} title="ADICIONAR PÁGINA">
            <Form onSubmit={handleSubmit}>
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
                  ref={imgTopPathInputRef}
                  name="imgtop-path"
                  label="Endereço"
                  type="text"
                  pattern=".+"
                  error={false}
                  message=""
                  disabled={!imageTop}
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
                  width="100px"
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
                  width="100px"
                />
              </ContainerContent>

              <Editor
                data={contentRef.current.value}
                handleChange={handleContentChange}
              />

              <ContainerContent>
                <Checkbox
                  title="Imagem Inferior"
                  onChange={handleChangeBottomImage}
                  checked={imageBottom}
                />
                <Input
                  ref={imgBottomPathInputRef}
                  name="imgbottom-path"
                  label="Endereço"
                  type="text"
                  pattern=".+"
                  error={false}
                  message=""
                  disabled={!imageBottom}
                />
                <Input
                  ref={imgBottomWidthInputRef}
                  name="imgbottom-width"
                  label="Largura"
                  type="number"
                  pattern=".+"
                  error={false}
                  message=""
                  disabled={!imageBottom}
                  width="100px"
                />
                <Input
                  ref={imgBottomHeightInputRef}
                  name="imgbottom-height"
                  label="Altura"
                  type="number"
                  pattern=".+"
                  error={false}
                  message=""
                  disabled={!imageBottom}
                  width="100px"
                />
              </ContainerContent>

              <Button primary={true} icon="plus" type="submit">
                Adicionar
              </Button>
            </Form>
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
