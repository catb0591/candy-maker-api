/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express')
const { getAllManufacturersWithProducts, getManufacturerByIdentifierWithProducts } = require('./controllers/manufacturers')
const { getProductByIdentifierWithManufacturer, getAllProductsWithManufacturers } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:identifier', getManufacturerByIdentifierWithProducts)

app.get('/products', getAllProductsWithManufacturers)

app.get('/products/:identifier', getProductByIdentifierWithManufacturer)

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337...')
})
