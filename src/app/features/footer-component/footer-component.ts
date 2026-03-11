import { Component } from '@angular/core';
import { Github, Linkedin, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer-component',
  imports: [LucideAngularModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  readonly githubIcon = Github;
  readonly linkedinIcon = Linkedin;
}
