/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database
  })
  console.log('criate')

  switch (request.method) {
    case 'GET': {
      const countries = await db.all('SELECT * FROM countries')
      console.log('All Countries', JSON.stringify(countries, null, 2))

      response.json(countries)
      break
    }
    case 'POST': {
      console.log('POOOOOOOOOOST')
      const { title, slug } = request.body
      const statement = await db.prepare(
        'INSERT INTO countries (slug, title) VALUES (?, ?)'
      )
      const result = await statement.run(slug, title)
      const values = await result.stmt.finalize()
      console.log(values)
      response.status(201).json({ message: 'Adicionado' })
      break
    }
    default:
      response.json({ message: 'Apenas métodos GET e POST são aceitos' })
      break
  }
}
