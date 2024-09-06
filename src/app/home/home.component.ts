import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Asegúrate de que esté configurado correctamente
})

export class HomeComponent {}
