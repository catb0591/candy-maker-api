/* eslint-disable no-console */
const models = require('../models')

const getAllManufacturersWithProducts = async (request, response) => {
  try {
    const allManufacturersWithProducts = await models.manufacturers.findAll({ include: [{ model: models.products }] })

    return response.send(allManufacturersWithProducts)
  } catch (error) {
    console.log(error)
  }
}

const getManufacturerByIdentifierWithProducts = async (request, response) => {
  try {
    const { identifier } = request.params

    const manufacturerWithProducts = await models.manufacturers.findOne({
      where: {
        [models.Op.or]: [
          { id: { [models.Op.like]: `%${identifier}%` } },
          { name: { [models.Op.like]: `%${identifier}%` } }]
      },

      include: [{ model: models.products }],
    })

    return manufacturerWithProducts
      ? response.send(manufacturerWithProducts)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to get Manufacturer, please try again')
  }
}

module.exports = { getAllManufacturersWithProducts, getManufacturerByIdentifierWithProducts }
