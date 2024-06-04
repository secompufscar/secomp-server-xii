import express, {Express, Request, Response} from 'express'
import { PORT } from './secrets'
import rootRouter from './routes'
import { PrismaClient } from '@prisma/client';
import categoryRoutes from './routes/categories';
import activityRoutes from './routes/activities'
import authRoutes from './routes/auth';
import bodyParser from 'body-parser';
import errorHandler from './middlewares/errorHandler'; 


const app:Express = express()

app.use(express.json())
app.use(bodyParser.json());

app.use('/api', rootRouter);
app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/activities', activityRoutes);

app.use(errorHandler);


export const prismaClient = new PrismaClient({
    log: ['query']
})

app.listen(PORT, () => (console.log('App working')))

