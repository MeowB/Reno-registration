import cors from 'cors'
import express from 'express'
import db from './db/db.js'
import pingRoute from './routes/ping.js'
import registerAgentRoute from './routes/auth/register/agent.js'
import registerMerchantRoute from './routes/auth/register/merchant.js'
import loginRoute from './routes/auth/login.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use(pingRoute)
app.use('/api', registerAgentRoute)
app.use('/api', registerMerchantRoute)
app.use('/api', loginRoute)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})