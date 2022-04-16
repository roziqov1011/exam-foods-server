const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4000
const modules = require('./modules')

app.get('/', (_, res) => res.send("Menman"))

const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
})

const httpServer = http.createServer(app)
server.applyMiddleware({ app })

httpServer.listen({ port: PORT}, () => {
    console.log(PORT + server.graphqlPath)
})