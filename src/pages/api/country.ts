/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import { Sequelize, Model, DataTypes } from 'sequelize'

import { Country as CountryInterface } from '../../styles/components/Countries'

export const openDB = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })

  return sequelize
}

export const models = async sequelize => {
  class Country extends Model {}
  Country.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      slug: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Country', timestamps: false }
  )

  class Page extends Model {}
  Page.init(
    {
      countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: Country,
          key: 'id'
        }
      },
      subtitle: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      slug: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      icon: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Page', timestamps: false }
  )

  class Topic extends Model {}
  Topic.init(
    {
      pageId: {
        type: DataTypes.INTEGER,
        references: {
          model: Page,
          key: 'id'
        }
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Topic', timestamps: false }
  )

  class Image extends Model {}
  Image.init(
    {
      pageId: {
        type: DataTypes.INTEGER,
        references: {
          model: Page,
          key: 'id'
        }
      },
      topicId: {
        type: DataTypes.INTEGER,
        references: {
          model: Topic,
          key: 'id'
        }
      },
      pathway: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      position: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      width: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      height: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Image', timestamps: false }
  )

  return { Country, Page, Topic, Image }
}

export const findAll = async (): Promise<CountryInterface[]> => {
  const sequelize = openDB()
  const { Country } = await models(sequelize)

  const countries = await Country.findAll({
    attributes: {
      include: [
        [
          Sequelize.literal(
            '(SELECT COUNT(*) FROM pages WHERE pages.countryId = Country.id)'
          ),
          'countPages'
        ]
      ]
    }
  })

  sequelize.close()
  return (countries as unknown) as CountryInterface[]
}

export const findBySlug = async (slug = '') => {
  const sequelize = openDB()
  const { Country } = await models(sequelize)

  const country = await Country.findOne({ where: { slug } })
  sequelize.close()

  return country.toJSON()
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const sequelize = openDB()
  const { Country } = await models(sequelize)

  switch (request.method) {
    case 'GET': {
      const countries = await findAll()
      // console.log('All Countries', JSON.stringify(countries, null, 2))
      sequelize.close()
      return response.json(countries)
    }
    case 'POST': {
      const { values } = request.body
      await Country.create(values)
      sequelize.close()
      return response.status(201).json({ message: 'Adicionado' })
    }
    case 'PUT': {
      const { values } = request.body
      const { id } = values
      await Country.update(values, { where: { id } })
      sequelize.close()
      return response.status(200).json({ message: 'Atualizado' })
    }
    case 'DELETE': {
      const { id } = request.query
      await Country.destroy({ where: { id } })
      sequelize.close()
      return response.status(200).json({ message: 'Deletado' })
    }
    default:
      sequelize.close()
      return response.json({
        message: 'Apenas métodos GET, POST, PUT e DELETE são aceitos'
      })
  }
}
