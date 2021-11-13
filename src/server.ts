import express from 'express';

import { categoriesRoutes } from './routes/categoriesRoutes';
import { specificationsRoutes } from './routes/SpecificationRoutes';


const app = express();

app.use(express.json());


//Rotas
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes)

app.listen(3333, () => console.log("Server is running!"));

