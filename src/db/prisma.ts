import { PrismaClient } from '../../generated/prisma'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + '?pgbouncer=true&connection_limit=1&prepared_statements=false',
    },
  },
})

export default prisma