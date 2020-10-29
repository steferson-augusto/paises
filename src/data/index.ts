import irlanda from './irlanda'

export interface Topic {
  title: string
  content: string
  imageTop?: string
  imageBottom?: string
}

export interface Page {
  key: string
  title: string
  content?: string
  icon: string
  imageTop?: string
  imageBottom?: string
  topics?: Topic[]
}

export interface Data {
  title: string
  key: string
  pages?: Page[]
}

const data: Data[] = [irlanda]

export default data
