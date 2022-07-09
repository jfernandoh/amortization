import { Injectable } from '@angular/core';
import { Amortization, Simulation } from '../models/amortization.model';

@Injectable({
    providedIn: 'root'
})
export class AmortizationService {

    private simulation!: Simulation;

    constructor() { }

    get simulationValue(): Simulation {
        return this.simulation;
    }

    set simulationValue(value: Simulation) {
        this.simulation = value;
    }

    approximateQuota(amount: number, months: number, rate: number): number {
        const mer = this.annualRateToMonthlyRate(rate, 12);
        const quota = (amount * (mer * (1 + mer) ** months)) / ((1 + mer) ** months - 1);
        return quota;
    }

    calculate(amount: number, months: number, rate: number): Amortization[] {
        const mer = this.annualRateToMonthlyRate(rate, 12); // Monthly Effective Rate
        const quota = (amount * (mer * (1 + mer) ** months)) / ((1 + mer) ** months - 1);

        const amortization = [];
        for (let i = 0; i < months; i++) {
            const interests = amount * mer;
            const capitalPayment = quota - interests;
            const finalBalance = amount - capitalPayment;
            const element = {
                number: i + 1,
                initialBalance: amount,
                quota,
                interests,
                capitalPayment,
                finalBalance
            };
            amortization.push(element);
            amount = finalBalance;
        }
        return amortization;
    }

    private annualRateToMonthlyRate(annualRate: number, month: number): number {
        const pctAnnualRate = annualRate / 100;
        return ((1 + pctAnnualRate) ** (1 / month)) - 1;
    }
}

// https://www.bbva.pe/blog/mis-finanzas/financiamiento/-como-calcular-la-cuota-para-un-prestamo-.html
// Cuota = [Monto * (TEM x (1 + TEM) ^ n)] / [(1 + TEM) ^ n) – 1] 
// =D11 * (D9 * (1 + D9) ^ D10)
// =(1 + D9) ^ D10 - 1
// =D18/D19
