import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeroComponent } from "../hero/hero.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-tintin60cat-vr-experience',
  standalone: true,
  imports: [FooterComponent, HeroComponent, NavbarComponent],
  templateUrl: './tintin60cat-vr-experience.component.html',
  styleUrl: './tintin60cat-vr-experience.component.scss'
})
export class Tintin60catVrExperienceComponent {

}
