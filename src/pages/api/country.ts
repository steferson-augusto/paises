/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export const findAll = async () => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database
  })

  const countries = await db.all(
    'SELECT *, (SELECT COUNT(*) FROM pages WHERE pages.countryId = countries.id) as countPages FROM countries'
  )
  return countries
}

export const findBySlug = async (slug = '') => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database
  })

  const [country] = await db.all(
    `SELECT * FROM countries WHERE slug = "${slug}"`
  )
  return country
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database
  })

  switch (request.method) {
    case 'GET': {
      // const { slug } = request.query

      // if (slug) {
      //   const country = await findBySlug(slug as string)
      //   return response.json(country)
      // }
      const countries = await findAll()
      // console.log('All Countries', JSON.stringify(countries, null, 2))

      return response.json(countries)
    }
    case 'POST': {
      const { title, slug } = request.body
      const statement = await db.prepare(
        'INSERT INTO countries (slug, title) VALUES (?, ?)'
      )
      const result = await statement.run(slug, title)
      await result.stmt.finalize()

      return response.status(201).json({ message: 'Adicionado' })
    }
    case 'PUT': {
      const { title, slug, id } = request.body
      const statement = await db.prepare(
        'UPDATE countries SET slug = ?, title = ? WHERE id = ?'
      )
      const result = await statement.run(slug, title, id)
      await result.stmt.finalize()

      return response.status(200).json({ message: 'Atualizado' })
    }
    case 'DELETE': {
      const { id } = request.query
      const statement = await db.prepare('DELETE FROM countries WHERE id = ?')
      const result = await statement.run(id)
      await result.stmt.finalize()

      return response.status(200).json({ message: 'Deletado' })
    }
    default:
      return response.json({
        message: 'Apenas métodos GET, POST, PUT e DELETE são aceitos'
      })
  }
}
