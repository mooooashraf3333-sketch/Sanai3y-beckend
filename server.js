const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ربط قاعدة البيانات بالسيرفر
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
    if (err) {
        console.error('❌ فشل الاتصال بقاعدة البيانات يا بطل! السبب:', err.message);
    } else {
        console.log('✅ متصل بقاعدة البيانات Sanai3y_db بنجاح كبير!');
    }
});
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// صفحة اختبار السيرفر الأساسية
app.get('/', (req, res) => {
    res.send('سيرفر صنايعي دوت كوم يعمل بنجاح وكله تمام! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 السيرفر شغال دلوقتي ومنور على بورت ${PORT}`);
});
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);