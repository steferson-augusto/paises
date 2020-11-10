import { useCallback, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/pt-br'

import { Container } from './styles'

interface EditorProps {
  data: string
  handleChange: (value: string) => void
}

const Editor: React.FC<EditorProps> = ({ data, handleChange }) => {
  // const [data, setData] = useState('')

  const handleEditorChange = useCallback((event, editor) => {
    const value = editor.getData()
    // setData(value)
    handleChange(value)
  }, [])

  return (
    <Container>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={handleEditorChange}
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
