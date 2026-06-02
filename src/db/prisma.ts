import { PrismaClient } from '../../generated/prisma'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.DATABASE_URL || ''
const connectionUrl = url.includes('?') 
  ? url + '&pgbouncer=true&connection_limit=1&prepared_statements=false'
  : url + '?pgbouncer=true&connection_limit=1&prepared_statements=false'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionUrl,
    },
  },
})

export default prisma