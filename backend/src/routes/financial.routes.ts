import { Router } from 'express';
import { calculateLoanCapability, calculateDTIForProperty } from '../services/financial.service';

const router = Router();

router.post('/calculate-budget', (req, res) => {
    const { monthlyIncome, savings, interestRate } = req.body;

    if (!monthlyIncome || savings === undefined) {
        return res.status(400).json({ error: 'monthlyIncome and savings are required' });
    }

    const result = calculateLoanCapability(
        Number(monthlyIncome),
        Number(savings),
        interestRate ? Number(interestRate) : undefined
    );

    res.json(result);
});

router.post('/check-property-safety', (req, res) => {
    const { monthlyIncome, savings, propertyPrice, interestRate } = req.body;

    if (!monthlyIncome || savings === undefined || !propertyPrice) {
        return res.status(400).json({ error: 'monthlyIncome, savings, and propertyPrice are required' });
    }

    const result = calculateDTIForProperty(
        Number(monthlyIncome),
        Number(savings),
        Number(propertyPrice),
        interestRate ? Number(interestRate) : undefined
    );

    res.json(result);
});

export default router;
