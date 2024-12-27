import express from 'express';
// @ts-ignore
import Route_Index from './index.js';

const router = express.Router();

router.get('/hello', Route_Index);

export default router;