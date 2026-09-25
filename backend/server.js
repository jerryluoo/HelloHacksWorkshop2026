const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Fetch a Pokémon type by its numeric ID or name, for example /api/type/10 or /api/type/fire.
app.get('/api/type/:idOrName', async (req, res) => {
  const { idOrName } = req.params

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${encodeURIComponent(idOrName)}`)

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Pokémon type not found' })
    }

    const typeData = await response.json()
    const { damage_relations: damageRelations } = typeData

    return res.json({
      half_damage_to: damageRelations.half_damage_to.map((type) => type.name),
      double_damage_from: damageRelations.double_damage_from.map((type) => type.name),
    })
  } catch (error) {
    console.error('Unable to fetch Pokémon type:', error.message)
    return res.status(502).json({ error: 'Unable to reach PokeAPI' })
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
