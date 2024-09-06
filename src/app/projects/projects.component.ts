import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
