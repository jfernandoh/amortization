import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './containers/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IMaskModule } from 'angular-imask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { SpeedDialModule } from 'primeng/speeddial';
import { SimulatorComponent } from './containers/simulator/simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IMaskModule,
    OverlayPanelModule,
    ListboxModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    SpeedDialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
