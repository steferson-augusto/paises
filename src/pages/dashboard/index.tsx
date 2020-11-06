/* eslint-disable multiline-ternary */
import { FormEvent, useCallback, useRef, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import useSWR from '../../hooks/useSWR'
import { AddButton, Body, Container, Form } from '../../styles/components'
import Input from '../../styles/components/InputRef'
import Structure from '../../styles/components/Structure'
import replaceSpecialChars from '../../utils/replaceSpecialChars'
import Countries, { Country } from '../../styles/components/Countries'
import Modal, { ModalProps } from '../../styles/components/Modal'
import Button from '../../styles/components/Button'

interface Props {
  toogleTheme: () => void
}

const Create: React.FC<Props> = ({ toogleTheme }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const { data, error, loading, mutate } = useSWR<Country[]>('/api/country')
  const countryInputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<ModalProps>(null)

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const title = countryInputRef.current?.value
      const slug = replaceSpecialChars(title.toLocaleLowerCase())

      const exists = data.some(country => country.slug === slug)

      if (exists) {
        setErrorMessage('Este país já foi adicionado')
      } else {
        setErrorMessage('')
        const values = { title, slug }
        axios.post('/api/country/', values)

        mutate([...data, values], false)
        modalRef.current?.closeModal()
        countryInputRef.current.value = ''
      }
    },
    [data]
  )

  return (
    <div>
      <Head>
        <title>Dashboard - Criar Página</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Structure title="Dashboard" menu={[]} toogleTheme={toogleTheme}>
          <Body>
            <h2>Países</h2>
            <Countries countries={data} error={error} loading={loading} />

            <AddButton onClick={handleOpenModal}>
              <i className="fas fa-plus" />
            </AddButton>

            {/* <Input
              name="country"
              label="País"
              type="text"
              pattern=".+"
              required
            /> */}

            <Modal ref={modalRef}>
              <div className="modal-body">
                <h2 className="modal-title">ADICIONAR PAÍS</h2>
                <Container>
                  <Form onSubmit={handleSubmit}>
                    <Input
                      ref={countryInputRef}
                      name="country"
                      label="País"
                      type="text"
                      pattern=".+"
                      error={errorMessage.length > 0}
                      message={errorMessage}
                      required
                    />
                    <Button primary={true} icon="plus" type="submit">
                      Adicionar
                    </Button>
                  </Form>
                </Container>
              </div>
            </Modal>
          </Body>
        </Structure>
      </main>
    </div>
  )
}

export default Create
