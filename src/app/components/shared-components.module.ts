import { IonicModule } from "@ionic/angular";
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FootComponent } from "./foot/foot.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [ModalBaseComponent, HeaderComponent, FootComponent, FooterComponent],
    exports: [
        ModalBaseComponent,
        HeaderComponent,
        FootComponent,
        FooterComponent
    ],
    imports: [CommonModule, IonicModule]
})

export class SharedComponentsModule { }