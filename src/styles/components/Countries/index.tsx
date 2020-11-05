/* eslint-disable indent */
import Image from 'next/image'
import { useRef } from 'react'

import { IconButton } from '..'
import Modal, { ModalProps } from '../Modal'
import {
  Container,
  Content,
  Country,
  Pages,
  SlugProps,
  ContainerButtons
} from './styles'

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
  const modalRef = useRef<ModalProps>(null)

  if (error) return <p>falha na requisição</p>
  if (loading) return <p>carregando...</p>
  if (countries.length === 0) return <p>Sem conteúdo</p>
  return (
    <Container className="custom-scrollbar">
      {countries.map(({ title, slug }) => (
        <Country key={slug}>
          <Image src={`/images/${slug}/bandeira.svg`} width="70" height="40" />
          <Content>
            <h3>{title}</h3>
            <Slug count={3} />
          </Content>
          <ContainerButtons>
            <IconButton color="#fbc02d">
              <i className="fa fa-pen" />
            </IconButton>

            <IconButton color="#3f51b5">
              <i className="fa fa-sitemap" />
            </IconButton>
          </ContainerButtons>
        </Country>
      ))}

      <Modal ref={modalRef}>
        <p>modal</p>
      </Modal>
    </Container>
  )
}

export default Countries
