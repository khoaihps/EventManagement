const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose")

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

// Event manager route
const eventManagerRoutes = require('./routes/manager/event.manager.routes');
app.use('/manager/event', eventManagerRoutes);
const taskManagerRoutes = require('./routes/manager/task.manager.routes');
app.use('/manager/task', taskManagerRoutes);
const managerProfileRoutes = require('./routes/manager/profile.manager.routes');
app.use('/manager/profile', managerProfileRoutes);


// Team member route
const employeeProfileRoutes = require("./routes/team-member/profile.team-member.routes");
app.use('/employee/profile', employeeProfileRoutes);
const eventTeamMemeberRoutes = require('./routes/team-member/event.team-member.routes');
app.use('/employee/event', eventTeamMemeberRoutes);
const taskTeamMemeberRoutes = require('./routes/team-member/task.team-member.routes');
app.use('/employee/task', taskTeamMemeberRoutes);


const customerRoutes = require('./routes/customer/customer.routes');
app.use('/customer/profile', customerRoutes);
const eventCustomer = require('./routes/customer/event.customer.routes');
app.use('/customer/event', eventCustomer);
