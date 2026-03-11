import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationMenu } from "./features/navigation-menu/navigation-menu";
import { Home } from "./features/home-component/home";
import { Projects } from "./features/projects-components/projects";
import { Contact } from "./features/contact-component/contact";
import { FooterComponent } from "./features/footer-component/footer-component";
import { SkillsComponent } from "./features/skills-component/skills-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationMenu, Home, Projects, Contact, FooterComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
