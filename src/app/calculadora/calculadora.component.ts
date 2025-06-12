import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operacao } from '../interfaces/operacao';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacao?: number;

  operacoes: Operacao[] = [
    {label: 'Soma', value: 0},
    {label: 'Subtração', value: 1},
    {label: 'Multiplicação', value: 2},
    {label: 'Divisão', value: 3},
  ]

  calcularResultado() {
    if(this.operacao === 0) {
      this.resultado = this.numero1 + this.numero2;
    } else if(this.operacao === 1) {
      this.resultado = this.numero1 - this.numero2;
    } else if(this.operacao === 2) {
      this.resultado = this.numero1 * this.numero2;
    } else if(this.operacao === 3) {
      this.resultado = this.numero1 / this.numero2;
    }
  }

  onChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.operacao = Number(element.value);
  }
}
