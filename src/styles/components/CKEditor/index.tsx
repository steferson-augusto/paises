import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/pt-br'

import { Container } from './styles'

interface EditorProps {
  handleChange: (event: any, editor: any) => void
}

const Editor: React.FC<EditorProps> = ({ handleChange }) => {
  return (
    <Container>
      <CKEditor
        editor={ClassicEditor}
        onChange={handleChange}
        config={{
          toolbar: [
            'bold',
            'italic',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            '|',
            'undo',
            'redo'
          ],
          language: 'pt-br'
        }}
      />
    </Container>
  )
}

export default Editor
