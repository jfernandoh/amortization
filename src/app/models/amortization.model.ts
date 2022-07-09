export interface Amortization {
    number: number;
    initialBalance: number;
    quota: number;
    interests: number;
    capitalPayment: number;
    finalBalance: number;
}

export interface Simulation {
    amount: number;
    rate: number;
    time: number;
}
