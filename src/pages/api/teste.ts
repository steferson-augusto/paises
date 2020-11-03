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

  await db.migrate({ force: true })
  console.log('migrate')

  const countries = await db.all('SELECT * FROM countries')
  console.log(request.method)
  console.log('All Countries', JSON.stringify(countries, null, 2))

  response.json(countries)
}
