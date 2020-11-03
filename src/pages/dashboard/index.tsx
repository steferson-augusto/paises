/* eslint-disable multiline-ternary */
import { FormEvent, useCallback, useRef } from 'react'
import Head from 'next/head'
import useSWR from '../../hooks/useSWR'

import { AddButton, Body, Container, Form } from '../../styles/components'
import Input from '../../styles/components/Input'
import Structure from '../../styles/components/Structure'
import replaceSpecialChars from '../../utils/replaceSpecialChars'
import Countries, { Country } from '../../styles/components/Countries'
import Modal from '../../styles/components/Modal'
import Button from '../../styles/components/Button'

interface Props {
  toogleTheme: () => void
}

const Create: React.FC<Props> = ({ toogleTheme }) => {
  const { data, error, loading } = useSWR<Country[]>('/api/teste')
  const countryInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    console.log(replaceSpecialChars(countryInputRef.current?.value))
  }, [])

  return (
    <div>
      <Head>
        <title>Dashboard - Criar Página</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Structure title="Dashboard" menu={[]} toogleTheme={toogleTheme}>
          <Body>
            <Countries countries={data} error={error} loading={loading} />

            <AddButton href="#modal">
              <i className="fas fa-plus" />
            </AddButton>

            {/* <Input
              name="country"
              label="País"
              type="text"
              pattern=".+"
              required
            /> */}

            <Modal>
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
                      required
                    />
                    <Button primary={true} type="submit">
                      <i className="fa fa-plus" />
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
