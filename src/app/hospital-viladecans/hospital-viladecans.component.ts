import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hospital-viladecans',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, FooterComponent],
  templateUrl: './hospital-viladecans.component.html',
  styleUrl: './hospital-viladecans.component.scss'
})
export class HospitalViladecansComponent {

}
