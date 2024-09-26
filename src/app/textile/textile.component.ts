import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-textile',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './textile.component.html',
  styleUrl: './textile.component.css'
})
export class TextileComponent {

}
