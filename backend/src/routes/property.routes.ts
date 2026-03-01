import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// Get all properties
router.get('/', async (req, res) => {
    try {
        const properties = await prisma.property.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});

// Get a single property
router.get('/:id', async (req, res) => {
    try {
        const property = await prisma.property.findUnique({
            where: { id: req.params.id }
        });
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch property' });
    }
});

export default router;
