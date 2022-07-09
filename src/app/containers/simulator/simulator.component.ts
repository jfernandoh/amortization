import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { maskConfigAmount, maskConfigInitial } from '../board/board.config';
import { AmortizationService } from '../../services/amortization.service';
import { Simulation } from '../../models/amortization.model';

@Component({
    selector: 'app-simulator',
    templateUrl: './simulator.component.html',
    styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

    formGroup!: FormGroup;
    imaskAmount: any;
    imaskInitial: any;
    quotaValue!: number;

    constructor(private readonly router: Router, private readonly amortizationService: AmortizationService) {
        this.imaskAmount = maskConfigAmount;
        this.imaskInitial = maskConfigInitial;

        const simulation = this.amortizationService.simulationValue;
        console.log(simulation);
        this.formGroup = new FormGroup({
            amount: new FormControl(simulation?.amount || null, Validators.required),
            time: new FormControl(simulation?.time || null, Validators.required),
            rate: new FormControl(simulation?.rate || null, Validators.required),
        });
    }

    ngOnInit(): void {
    }

    amortizationTable(): void {
        if (this.formGroup.valid) {
            const value = this.simulatorValue();
            this.router.navigate(['amortizacion', value.amount, value.time, value.rate]);
        }
    }

    calculate(): void {
        if (this.formGroup.valid) {
            const value = this.simulatorValue();
            this.quotaValue = this.amortizationService.approximateQuota(value.amount, value.time, value.rate);
        }
    }

    simulatorValue(): Simulation {
        const value = this.formGroup.value;
        value.amount = +String(value.amount).replace(/\D/g, '');
        value.rate = +value.rate;
        const simulation = value as Simulation;
        this.amortizationService.simulationValue = simulation;
        return simulation;
    }

}
