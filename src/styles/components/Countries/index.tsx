/* eslint-disable indent */
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import axios from 'axios'
import { mutate } from 'swr'

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
import Link from 'next/link'

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
        ? `${count} página`
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
        const slug = replaceSpecialChars(title.toLowerCase())
        return { ...prev, title, slug }
      }),
    []
  )

  const handleSaveEdition = useCallback(() => {
    if (values?.id) {
      axios.put('/api/country/', { values })
      const updatedCountries = countries?.map(country => {
        if (country.id === values?.id) return { ...country, ...values }
        return country
      })
      mutate('/api/country', updatedCountries, false)
      modalRef.current.closeModal()
    }
  }, [values, countries])

  const handleDelete = useCallback(
    (id: number) => {
      if (id) {
        axios.delete('/api/country/', { params: { id } })
        const updatedCountries = countries.filter(country => country.id !== id)
        mutate('/api/country', updatedCountries, false)
      }
    },
    [countries]
  )

  if (error) return <p>falha na requisição</p>
  if (loading) return <p>carregando...</p>
  if (countries.length === 0) return <p>Sem conteúdo</p>
  return (
    <Container className="custom-scrollbar">
      {countries.map(({ title, slug, id, countPages }) => (
        <Country key={slug}>
          <Image src={`/images/${slug}/bandeira.svg`} width="70" height="40" />
          <Content>
            <h3>{title}</h3>
            <Slug count={countPages} />
          </Content>
          <ContainerButtons>
            <Link href={`/dashboard/${slug}`}>
              <IconButton color="#3f51b5">
                <i className="fa fa-sitemap" />
              </IconButton>
            </Link>
            <IconButton
              color="#fbc02d"
              onClick={() => handleOpenModal({ id, title, slug })}
            >
              <i className="fa fa-pen" />
            </IconButton>
            <IconButton color="#d32f2f" onClick={() => handleDelete(id)}>
              <i className="fa fa-trash" />
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
