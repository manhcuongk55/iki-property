export const calculateLoanCapability = (
    monthlyIncome: number,
    savings: number,
    interestRate: number = 8.5 // 8.5% default mock rate
) => {
    // Max safe Debt-to-Income (DTI) ratio is 50%
    const maxMonthlyPayment = monthlyIncome * 0.5;

    // Simple present value calculation for a 20-year loan (240 months)
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numPeriods = 240;

    // Max loan amount = P * (1 - (1 + r)^-n) / r
    const maxLoanAmount = maxMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numPeriods)) / monthlyInterestRate;

    const totalSafeBudget = maxLoanAmount + savings;

    // Determine DTI based on a hypothetical property purchase
    // We'll give them their DTI if they borrow maxLoanAmount
    const dti = 50; // It's 50 by definition of this max safe calculation

    return {
        maxMonthlyPayment,
        maxLoanAmount,
        totalSafeBudget,
        dti,
        isSafe: dti <= 50,
    };
};

export const calculateDTIForProperty = (
    monthlyIncome: number,
    savings: number,
    propertyPrice: number,
    interestRate: number = 8.5
) => {
    const loanNeeded = Math.max(0, propertyPrice - savings);

    if (loanNeeded === 0) {
        return {
            monthlyPayment: 0,
            dti: 0,
            isSafe: true,
            message: 'No loan needed. Completely safe.',
            loanAmount: 0
        };
    }

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numPeriods = 240; // 20 years

    // P = L * (r / (1 - (1 + r)^-n))
    const monthlyPayment = loanNeeded * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numPeriods)));
    const dti = (monthlyPayment / monthlyIncome) * 100;

    return {
        monthlyPayment,
        dti,
        isSafe: dti <= 50,
        message: dti > 50
            ? 'Warning: Purchasing this property pushes your DTI over 50%. This is considered financially unsafe based on Basao guidelines.'
            : 'Safe: The loan payment is within 50% of your income.',
        loanAmount: loanNeeded
    };
}
