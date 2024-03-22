import express from 'express';
import healthcareProfessionalRoute from './routes/healthcareProfessionalRoute';
import userRoute from './routes/userRoute';
import connectDB from './db';
import bodyParser  from 'body-parser';
//import cors from 'cors'; 

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
connectDB();
app.use(bodyParser.json());

// Définir une route pour la racine de votre application
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the route file for adding healthcare professionals
app.use('/user', userRoute);
app.use('/healthcare-professionals', healthcareProfessionalRoute);


// Other route files...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
