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
      const { page } = request.body
      const {
        countryId,
        subtitle,
        slug,
        icon,
        content,
        imageTop,
        imageBottom
      } = page

      const statement = await db.prepare(
        'INSERT INTO pages (countryId, subtitle, slug, icon, content) VALUES (?, ?, ?, ?, ?)'
      )
      const result = await statement.run(
        countryId,
        subtitle,
        slug,
        icon,
        content
      )
      await result.stmt.finalize()

      const pageId = result.lastID
      if (imageBottom) {
        const { pathway, position, width, height } = imageBottom
        const imageBottomStt = await db.prepare(
          'INSERT INTO images (pageId, pathway, position, width, height) VALUES (?, ?, ?, ?, ?)'
        )
        const imageBottomResult = await imageBottomStt.run(
          pageId,
          pathway,
          position,
          width,
          height
        )
        await imageBottomResult.stmt.finalize()
      }

      if (imageTop) {
        const { pathway, position, width, height } = imageTop
        const imageTopStt = await db.prepare(
          'INSERT INTO images (pageId, pathway, position, width, height) VALUES (?, ?, ?, ?, ?)'
        )
        const imageTopResult = await imageTopStt.run(
          pageId,
          pathway,
          position,
          width,
          height
        )
        await imageTopResult.stmt.finalize()
      }

      return response.status(201).json({ message: 'Adicionado' })
    }
    case 'PUT': {
      console.log('put')

      return response.status(201).json({ message: 'Editado' })
    }
    case 'DELETE': {
      // const { id } = request.query
      console.log('delete')

      return response.status(200).json({ message: 'Apagado' })
    }
    default:
      return response.json({
        message: 'Apenas métodos GET, POST, PUT e DELETE são aceitos'
      })
  }
}
