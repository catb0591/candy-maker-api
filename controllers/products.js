/* eslint-disable no-console */
const models = require('../models')

const getAllProductsWithManufacturers = async (request, response) => {
  try {
    const allProductsWithManufacturers = await models.products.findAll({ include: [{ model: models.manufacturers }] })

    return response.send(allProductsWithManufacturers)
  } catch (error) {
    console.log(error)
  }
}

const getProductByIdentifierWithManufacturer = async (request, response) => {
  try {
    const { identifier } = request.params

    const productWithManufacturer = await models.products.findOne({
      // attributes: ['id', 'name', 'manufacturedID'] << this will allow only certain values(attributes) to come back from get
      where: {
        [models.Op.or]: [
          { id: { [models.Op.like]: `%${identifier}%` } },
          { name: { [models.Op.like]: `%${identifier}%` } }]
      },
      include: [{ model: models.manufacturers }], /* Can also have in the include where: attributes: include: etc..*/
    })

    return productWithManufacturer
      ? response.send(productWithManufacturer)
      : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get Manufacturer, please try again')
  }
}

module.exports = { getAllProductsWithManufacturers, getProductByIdentifierWithManufacturer }

// If there is a linked table then we would handle like this

