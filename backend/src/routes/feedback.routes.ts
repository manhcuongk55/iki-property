import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// POST /api/feedback — Create new feedback (public)
router.post('/', async (req, res) => {
    try {
        const { type, content, email, rating, currentPage, currentSection, appVersion, userAgent } = req.body;

        if (!type || !content || !currentPage || !appVersion) {
            return res.status(400).json({
                error: 'Missing required fields: type, content, currentPage, appVersion'
            });
        }

        // Validate type
        if (!['BUG', 'SUGGESTION', 'PRAISE'].includes(type)) {
            return res.status(400).json({ error: 'Invalid feedback type' });
        }

        // Validate rating if provided
        if (rating !== undefined && (rating < 1 || rating > 5)) {
            return res.status(400).json({ error: 'Rating must be between 1 and 5' });
        }

        const feedback = await prisma.feedback.create({
            data: {
                type,
                content,
                email: email || null,
                rating: rating || null,
                currentPage,
                currentSection: currentSection || null,
                appVersion,
                userAgent: userAgent || null,
            },
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback,
        });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
});

// GET /api/feedback — List all feedback (for admin)
router.get('/', async (req, res) => {
    try {
        const { type, page = '1', limit = '20' } = req.query;

        const where: Record<string, unknown> = {};
        if (type && typeof type === 'string') {
            where.type = type;
        }

        const pageNum = parseInt(page as string, 10) || 1;
        const limitNum = parseInt(limit as string, 10) || 20;

        const [feedbacks, total] = await Promise.all([
            prisma.feedback.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: (pageNum - 1) * limitNum,
                take: limitNum,
            }),
            prisma.feedback.count({ where }),
        ]);

        res.json({
            feedbacks,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum),
            },
        });
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).json({ error: 'Failed to fetch feedbacks' });
    }
});

// GET /api/feedback/stats — Feedback statistics
router.get('/stats', async (req, res) => {
    try {
        const [total, byType, avgRating] = await Promise.all([
            prisma.feedback.count(),
            prisma.feedback.groupBy({
                by: ['type'],
                _count: { id: true },
            }),
            prisma.feedback.aggregate({
                _avg: { rating: true },
                where: { rating: { not: null } },
            }),
        ]);

        const typeStats = byType.reduce((acc, item) => {
            acc[item.type] = item._count.id;
            return acc;
        }, {} as Record<string, number>);

        res.json({
            total,
            byType: typeStats,
            averageRating: avgRating._avg.rating
                ? Math.round(avgRating._avg.rating * 10) / 10
                : null,
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({ error: 'Failed to fetch feedback stats' });
    }
});

export default router;
