import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CategoriesComponent } from "../categories/categories.component";
import { BannersComponent } from '../banners/banners.component';
import { FooterComponent } from "../footer/footer.component";
import { PaletteComponent } from "../palette/palette.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, CategoriesComponent, BannersComponent, FooterComponent, HomeComponent, PaletteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
