import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sis-frontend';

  navegations(index: number) {
    let itemsIds: any = document.getElementsByClassName('itemMenu');

    if(itemsIds) {
      for(let i=0; i < itemsIds.length; i++) {
        if(itemsIds[i].id == index.toString()) {
          itemsIds[i].classList.add('item-select')
        } else {
          itemsIds[i].classList.remove('item-select');
        }
      };
    }
  };
}
