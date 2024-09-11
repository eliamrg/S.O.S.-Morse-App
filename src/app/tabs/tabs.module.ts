import { IonicModule, IonTabs } from '@ionic/angular';
import { NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule implements OnInit {
  
  tabSeleccionada: string = 'tab1';

  ngOnInit() {
    
  }
}
