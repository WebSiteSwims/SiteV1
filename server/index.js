import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // In a real application, you would:
  // 1. Validate the input
  // 2. Save to a database
  // 3. Send an email notification
  // 4. Maybe integrate with a CRM
  
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Simulate processing time
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  }, 1000);
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});