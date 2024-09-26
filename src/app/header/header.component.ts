import { CategoriesComponent } from './../categories/categories.component';
import { Component, OnInit} from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BannersComponent } from "../banners/banners.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CarouselComponent, CategoriesComponent, RouterLink, BannersComponent, FooterComponent, RouterOutlet, ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  
}
