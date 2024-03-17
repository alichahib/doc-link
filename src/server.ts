import express from 'express';
import addHealthcareProfessionalRoute from '../src/routes/healthcareProfessionalRoute';

const app = express();

// Use the route file for adding healthcare professionals
app.use('/healthcare-professionals', addHealthcareProfessionalRoute);

// Other route files...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
