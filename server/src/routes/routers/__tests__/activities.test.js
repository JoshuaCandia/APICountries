/* eslint-disable no-undef */
const request = require('supertest')
const server = require('../../../server')
const { Activity } = require('../../../db')
const { Op } = require('sequelize')

describe('Activity Routes', () => {
  beforeEach(async () => {
    // Crear las actividades de prueba solo si no existen previamente
    await Activity.findOrCreate({
      where: { name: 'Activity 1' },
      defaults: { difficulty: 3, duration: 60, season: 'Summer' }
    })

    await Activity.findOrCreate({
      where: { name: 'Activity 2' },
      defaults: { difficulty: 2, duration: 45, season: 'Spring' }
    })

    // Crear la actividad de ejemplo
    await Activity.findOrCreate({
      where: { name: 'Example Activity' },
      defaults: { difficulty: 3, duration: 60, season: 'Summer' }
    })
  })

  afterEach(async () => {
    // Eliminar todas las actividades de prueba después de cada prueba
    await Activity.destroy({
      where: {
        name: {
          [Op.in]: ['Activity 1', 'Activity 2', 'Example Activity']
        }
      }
    })
  })

  it('should create a new activity', async () => {
    const response = await request(server).post('/activities').send({
      name: 'Example Activity',
      difficulty: 3,
      duration: 60,
      season: 'Summer'
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe('Example Activity')
    expect(response.body.difficulty).toBe(3)
    expect(response.body.duration).toBe(60)
    expect(response.body.season).toBe('Summer')
  })

  it('should get all activities', async () => {
    const response = await request(server).get('/activities')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(4)

    expect(response.body[0].name).toBe('Activity 1')
    expect(response.body[0].difficulty).toBe(3)
    expect(response.body[0].duration).toBe(60)
    expect(response.body[0].season).toBe('Summer')

    expect(response.body[1].name).toBe('Activity 2')
    expect(response.body[1].difficulty).toBe(2)
    expect(response.body[1].duration).toBe(45)
    expect(response.body[1].season).toBe('Spring')

    expect(response.body[2].name).toBe('Example Activity')
    expect(response.body[2].difficulty).toBe(3)
    expect(response.body[2].duration).toBe(60)
    expect(response.body[2].season).toBe('Summer')
  })
})
