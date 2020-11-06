/* eslint-disable indent */
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

import { IconButton } from '..'
import Modal, { ModalProps } from '../Modal'
import Input from '../Input'
import {
  Container,
  Content,
  Country,
  Pages,
  SlugProps,
  ContainerButtons,
  ModalContent
} from './styles'
import replaceSpecialChars from '../../../utils/replaceSpecialChars'
import Button from '../Button'

export interface Country {
  id?: number
  slug: string
  title: string
  countPages?: number
}

interface CountriesProps {
  countries: Country[]
  error: any
  loading: boolean
}

const Slug: React.FC<SlugProps> = ({ count }) => {
  return (
    <Pages count={count}>
      {count === 0
        ? 'sem páginas'
        : count === 1
        ? `${count} páginas`
        : `${count} páginas`}
    </Pages>
  )
}

const Countries: React.FC<CountriesProps> = ({ countries, error, loading }) => {
  const [values, setValues] = useState<Country>(null)
  const modalRef = useRef<ModalProps>(null)

  const handleOpenModal = useCallback((value: Country) => {
    setValues(value)
    modalRef.current.openModal()
  }, [])

  const handleChangeInput = useCallback(
    e =>
      setValues(prev => {
        const title = e.target.value
        const slug = replaceSpecialChars(title)
        return { ...prev, title, slug }
      }),
    []
  )

  const handleSaveEdition = useCallback(() => {
    console.log(values)
  }, [values])

  if (error) return <p>falha na requisição</p>
  if (loading) return <p>carregando...</p>
  if (countries.length === 0) return <p>Sem conteúdo</p>
  return (
    <Container className="custom-scrollbar">
      {countries.map(({ title, slug, id }) => (
        <Country key={slug}>
          <Image src={`/images/${slug}/bandeira.svg`} width="70" height="40" />
          <Content>
            <h3>{title}</h3>
            <Slug count={3} />
          </Content>
          <ContainerButtons>
            <IconButton
              color="#fbc02d"
              onClick={() => handleOpenModal({ id, title, slug })}
            >
              <i className="fa fa-pen" />
            </IconButton>

            <IconButton color="#3f51b5">
              <i className="fa fa-sitemap" />
            </IconButton>
          </ContainerButtons>
        </Country>
      ))}

      <Modal ref={modalRef}>
        <div className="modal-body">
          <h2 className="modal-title">EDITAR PAÍS</h2>
          <ModalContent>
            <Input
              name="country"
              label="País"
              type="text"
              pattern=".+"
              value={values?.title}
              onChange={handleChangeInput}
              error={false}
              message=""
              required
            />

            <Input
              name="slug"
              label="Slug"
              type="text"
              pattern=".+"
              value={values?.slug}
              error={false}
              message=""
              required
              disabled
            />
            {values?.id && (
              <Button primary icon="save" onClick={handleSaveEdition}>
                Salvar
              </Button>
            )}
          </ModalContent>
        </div>
      </Modal>
    </Container>
  )
}

export default Countries
