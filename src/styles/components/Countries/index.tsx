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

const Countries: React.FC<CountriesProps> = ({ countries, error, loading }) => {
  if (error) return <p>falha na requisição</p>
  if (loading) return <p>carregando...</p>
  if (countries.length === 0) return <p>Sem conteúdo</p>
  return (
    <div>
      {countries.map(({ title, slug }) => (
        <p key={slug}>{title}</p>
      ))}
    </div>
  )
}

export default Countries
