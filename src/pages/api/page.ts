/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

import { openDB, models } from './country'
import { Page } from '../../styles/components/Pages'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const sequelize = openDB()
  const { Page, Image, Topic } = await models(sequelize)

  switch (request.method) {
    case 'GET': {
      const { country: countryId } = request.query
      if (countryId) {
        const pages = await Page.findAll({
          where: { countryId }
        })
        // console.log('All pages:', JSON.stringify(pages, null, 2))
        return response.json(pages)
      }
      return response.json([])
    }
    case 'POST': {
      const { values, imageBottomValues, imageTopValues } = request.body

      const { id: pageId } = ((await Page.create(values)) as unknown) as Page

      if (imageBottomValues) {
        await Image.create({ ...imageBottomValues, pageId })
      }

      if (imageTopValues) {
        await Image.create({ ...imageTopValues, pageId })
      }

      return response.status(201).json({ message: 'Adicionado' })
    }
    case 'PUT': {
      console.log('put')

      return response.status(201).json({ message: 'Editado' })
    }
    case 'DELETE': {
      const { id } = request.query
      await Image.destroy({ where: { pageId: id } })
      await Topic.destroy({ where: { pageId: id } })
      await Page.destroy({ where: { id } })
      sequelize.close()

      return response.status(200).json({ message: 'Apagado' })
    }
    default:
      return response.json({
        message: 'Apenas métodos GET, POST, PUT e DELETE são aceitos'
      })
  }
}
