import express from 'express';
import addHealthcareProfessionalRoute from './routes/healthcareProfessionalRoute';

const app = express();

// Définir une route pour la racine de votre application
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the route file for adding healthcare professionals
app.use('/healthcare-professionals', addHealthcareProfessionalRoute);

// Other route files...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
