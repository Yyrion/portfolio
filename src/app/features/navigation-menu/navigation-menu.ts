import { Component, inject, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-menu',
  imports: [],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
})
export class NavigationMenu implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private navigationService = inject(NavigationService);

  readonly isDesktop = signal(false);
  readonly isNavigationMenuOpen = signal(false);

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        this.isDesktop.set(result.matches);
      });
  }

  toggleNavigationMenu() {
    this.isNavigationMenuOpen.update((open) => !open);
  }

  navigateTo(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
    this.isNavigationMenuOpen.set(false);
  }
}
