export default function convertAmountToNumber(formData: { amount: string; description: string }): { amount: number; description: string } {
    const amount = parseFloat(formData.amount);
    return {
        ...formData,
        amount: isNaN(amount) ? 0 : amount
    };
}