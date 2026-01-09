// enterprise-payment.js

/**
 * Enterprise Refund Processor
 * Handles high-value transaction reversals
 */
async function processClientRefund(adminId, transactionAmount) {
    // 1. TRIGGER: Attack Simulator (Numeric SQL Injection)
    // The simulator will detect the insecure " + adminId" and inject "OR 1=1"
    // to prove it can bypass the admin check.
    const query = "UPDATE transactions SET status = 'REFUNDED' WHERE authorized_by = " + adminId;

    // 2. TRIGGER: PCI Auditor (Real Credit Card Logic)
    // This is a mathematically valid Visa number (passes Luhn Check).
    // Your engine will flag this as "Unencrypted PAN Data".
    const corporateCard = "4532 7151 1283 0369";

    // 3. TRIGGER: PCI Auditor (Sensitive Logging)
    // Your engine will catch "Secret" and "CVV" in the logs.
    console.log("DEBUG: Admin Secret used for refund:", "sk_live_51234");
    console.log("DEBUG:Refund processed for CVV:", "999");

    // Execute the vulnerable query
    await database.execute(query);

    return {
        success: true,
        refund_ref: corporateCard
    };
}
