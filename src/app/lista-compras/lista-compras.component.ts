import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../interfaces/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  items: Item[] = [];
  
  // Método para agregar un nuevo elemento a la lista
  insertItem () {
    let item : Item = {
      id: this.items.length + 1,
      nome: this.item,
      comprado: false
    };
    this.items.push(item);
    // Limpiar el campo de entrada después de agregar el elemento
    this.item = '';

    // console.table(this.items);
  }

  riscarItem (item: Item) {
    item.comprado = !item.comprado;
  }

  limparLista() {
    this.items = [];
  }

}
