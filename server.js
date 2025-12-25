// WorkFlowPro - Simple Starter Version
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. CONNECT TO DATABASE
mongoose.connect('mongodb://localhost:27017/workflowpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// 2. CREATE SIMPLE USER MODEL
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  role: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// 3. CREATE WORK ORDER MODEL
const workOrderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  serviceFee: Number,
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now }
});
const WorkOrder = mongoose.model('WorkOrder', workOrderSchema);

// 4. BASIC ROUTES
app.get('/', (req, res) => {
  res.json({ 
    message: '🎉 WorkFlowPro API is running!',
    status: 'OK',
    version: '1.0.0',
    date: new Date().toISOString()
  });
});

// Register a new user
app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ 
      success: true, 
      message: '✅ User registered successfully',
      user: user 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a work order
app.post('/api/workorders', async (req, res) => {
  try {
    const workOrder = new WorkOrder(req.body);
    await workOrder.save();
    res.json({ 
      success: true, 
      message: '📋 Work Order created successfully',
      workOrder: workOrder 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all work orders
app.get('/api/workorders', async (req, res) => {
  try {
    const workOrders = await WorkOrder.find().sort({ createdAt: -1 });
    res.json({ success: true, workOrders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 WorkFlowPro Server Started!`);
  console.log(`================================`);
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`✅ Database: MongoDB (localhost:27017)`);
  console.log(`\n📱 Test these URLs in your browser:`);
  console.log(`   1. API Status: http://localhost:${PORT}/`);
  console.log(`   2. View Users: http://localhost:${PORT}/api/users`);
  console.log(`   3. View Work Orders: http://localhost:${PORT}/api/workorders`);
  console.log(`\n💡 Press Ctrl+C to stop the server.`);
});