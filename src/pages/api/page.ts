/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database
  })

  switch (request.method) {
    case 'GET': {
      const { country } = request.query
      if (country) {
        const query = `SELECT * FROM pages WHERE countryId = "${country}"`
        const pages = await db.all(query)
        // country.pages = await db.all(
        //   `SELECT * FROM pages WHERE countryId = ${country.id}`
        // )
        return response.json(pages)
      }
      return response.json([])
    }
    case 'POST': {
      console.log('post')

      return response.status(201).json({ message: 'Adicionado' })
    }
    case 'PUT': {
      console.log('put')

      return response.status(201).json({ message: 'Editado' })
    }
    case 'DELETE': {
      console.log('delete')

      return response.status(200).json({ message: 'Apagado' })
    }
    default:
      return response.json({
        message: 'Apenas métodos GET, POST, PUT e DELETE são aceitos'
      })
  }
}
