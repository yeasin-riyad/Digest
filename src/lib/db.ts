import { neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import * as Prisma from '@prisma/client'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
})
const PrismaClient = (Prisma as any).PrismaClient

export const prisma = new PrismaClient({ adapter })
