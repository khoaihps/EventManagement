const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const { authenticateManager } = require('./middlewares/auth.middleware');

require('dotenv').config()

// express app
const app = express()

app.use(cors());  // Enable CORS
app.use(express.json());  // JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful MongoDB connection
        app.listen(process.env.PORT, () => {
        console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

// Home route
app.get('/', (req, res) => {
    res.send('Listening on port 4000');
});

// Login route
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

// Register route
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

// Event route for manager
// const eventManagerRoute = require('./routes/eventManager');
// app.use('/manager/event', authenticateManager, eventManagerRoute);

const eventManagerRoutes = require('./routes/manager/event.manager.routes');
app.use('/manager/event', eventManagerRoutes);
const eventTeamMemeberRoutes = require('./routes/team-member/event.team-member.routes');
app.use('/team-member/event', eventTeamMemeberRoutes)

const eventCustomerRoutes = require("./routes/customer/event.customer.routes");
app.use('/event/customer', eventCustomerRoutes)