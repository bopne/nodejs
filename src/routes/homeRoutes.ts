import { Router } from 'express';
import path from 'path';
import { Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

export default router; // ✅ Export router để có thể import vào index.ts
