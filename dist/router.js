import express from 'express';
// @ts-ignore
import Route_Index from './routes/index';
const router = express.Router();
router.get('/hello', Route_Index);
export default router;
//# sourceMappingURL=router.js.map