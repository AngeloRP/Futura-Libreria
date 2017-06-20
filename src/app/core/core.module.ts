import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SideBarComponent, SideNavComponent, LayoutComponent],
  exports: [SideBarComponent, SideNavComponent, LayoutComponent]
})
export class CoreModule { }
