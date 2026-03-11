import { Component, inject } from '@angular/core';
import { ChevronsDown, LucideAngularModule } from 'lucide-angular';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private navigationService = inject(NavigationService);
  readonly chevronDownIcon = ChevronsDown;

  scrollToProjects(): void {
    this.navigationService.scrollToSection('projects');
  }
}
