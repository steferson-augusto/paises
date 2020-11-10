/* eslint-disable indent */
import { useCallback } from 'react'
// import axios from 'axios'
import { mutate } from 'swr'

import { IconButton } from '..'
// import Input from '../Input'
import {
  Container,
  Content,
  Page,
  Topic,
  SlugProps,
  ContainerButtons
  // ModalContent
} from './styles'
// import replaceSpecialChars from '../../../utils/replaceSpecialChars'
// import Button from '../Button'

export interface Image {
  id?: number
  pageId?: number
  topicId?: number
  pathway: string
  position: 'top' | 'bottom'
  width: string
  height: string
  label?: string
}

export interface Page {
  id?: number
  countryId: number
  slug: string
  icon: string
  subtitle: string
  content: string
  countTopics?: number
  topics?: any
  imageTop?: Image
  imageBottom?: Image
}

interface PagesProps {
  pages: Page[]
  error: any
  loading: boolean
}

const Slug: React.FC<SlugProps> = ({ count }) => {
  return (
    <Topic count={count}>
      {count === 0
        ? 'sem tópicos'
        : count === 1
        ? `${count} tópico`
        : `${count} tópicos`}
    </Topic>
  )
}

const Pages: React.FC<PagesProps> = ({ pages, error, loading }) => {
  // const [values, setValues] = useState<Page>(null)
  // const modalRef = useRef<ModalProps>(null)

  // const handleOpenModal = useCallback((value: Page) => {
  //   setValues(value)
  //   modalRef.current.openModal()
  // }, [])

  // const handleChangeInput = useCallback(
  //   e =>
  //     setValues(prev => {
  //       const title = e.target.value
  //       const slug = replaceSpecialChars(title.toLowerCase())
  //       return { ...prev, title, slug }
  //     }),
  //   []
  // )

  // const handleSaveEdition = useCallback(() => {
  //   if (values?.id) {
  //     axios.put('/api/country/', values)
  //     const updatedCountries = countries?.map(country => {
  //       if (country.id === values?.id) return values
  //       return country
  //     })
  //     mutate('/api/country', updatedCountries, false)
  //     modalRef.current.closeModal()
  //   }
  // }, [values, countries])

  const handleDelete = useCallback(
    (id: number) => {
      if (id) {
        // axios.delete('/api/country/', { params: { id } })
        const updatedCountries = pages.filter(page => page.id !== id)
        mutate(`/api/page?country=${id}`, updatedCountries, false)
      }
    },
    [pages]
  )

  if (error) return <p>falha na requisição</p>
  if (loading) return <p>carregando...</p>
  if (pages.length === 0) return <p>Sem páginas</p>
  return (
    <Container className="custom-scrollbar">
      {pages.map(({ slug, icon, countTopics, subtitle, id }) => (
        <Page key={slug}>
          <i className={`fa fa-${icon}`} />
          <Content>
            <h3>{subtitle}</h3>
            <Slug count={countTopics ?? 0} />
          </Content>
          <ContainerButtons>
            <IconButton color="#fbc02d">
              <i className="fa fa-pen" />
            </IconButton>
            <IconButton color="#d32f2f" onClick={() => handleDelete(id)}>
              <i className="fa fa-trash" />
            </IconButton>
          </ContainerButtons>
        </Page>
      ))}

      {/* <Modal ref={modalRef}>
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
      </Modal> */}
    </Container>
  )
}

export default Pages
