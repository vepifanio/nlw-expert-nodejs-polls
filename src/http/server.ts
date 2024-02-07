import fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import z from "zod"
import cookie from "@fastify/cookie"
import { prisma } from "../lib/prisma"
import { createPoll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"
import { voteOnPoll } from "./routes/vote-on-poll"

const app = fastify()
app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest'
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running!')
})