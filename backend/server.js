import express from 'express'
import db from './db/db.js'
import pingRoute from './routes/ping.js'
import registerRoute from './routes/auth/register.js'
import loginRoute from './routes/auth/login.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(pingRoute)
app.use('/api', registerRoute)
app.use('/api', loginRoute)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})