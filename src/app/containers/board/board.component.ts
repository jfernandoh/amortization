import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Amortization, Simulation } from '../../models/amortization.model';
import { AmortizationService } from '../../services/amortization.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    dataAmortization!: Amortization[];
    displayModal!: boolean;
    cities!: any[];

    constructor(private readonly amortizationService: AmortizationService, private readonly activatedRoute: ActivatedRoute) {

        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params as Simulation;

        this.dataAmortization = this.amortizationService.calculate(+params.amount, +params.time, +params.rate)
    }


    showModalDialog() {
        this.displayModal = true;
    }
}
