import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

interface SkillsCategory {
  title: string;
  ariaLabel: string;
  reverse: boolean;
  speed: number;
  skills: string[];
}

@Component({
  selector: 'app-skills-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills-component.html',
  styleUrls: ['./skills-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly skillsCategories: SkillsCategory[] = [
    {
      title: 'Front-End',
      ariaLabel: 'Compétences Front-End',
      reverse: false,
      speed: 5200,
      skills: ['jQuery', 'React', 'Angular', 'TypeScript', 'SCSS', 'Tailwind CSS'],
    },
    {
      title: 'Back-End',
      ariaLabel: 'Compétences Back-End',
      reverse: true,
      speed: 5600,
      skills: ['NestJS', 'Symfony', 'Laravel', 'Node.js', 'REST API'],
    },
    {
      title: 'Development Desktop',
      ariaLabel: 'Compétences Development Desktop',
      reverse: false,
      speed: 5000,
      skills: ['C# MAUI', 'C# WCF', 'C# WPF', 'Rust', 'Electron', 'Tauri'],
    },
    {
      title: 'Game Development',
      ariaLabel: 'Compétences Game Development',
      reverse: true,
      speed: 3200,
      skills: ['Unity', 'Godot Engine'],
    },
    {
      title: 'Autres',
      ariaLabel: 'Autres compétences',
      reverse: false,
      speed: 5400,
      skills: ['Git', 'UX Design', 'Responsive Design', 'Agile'],
    },
  ];

  private readonly iconMap: Record<string, string> = {
    'jQuery': 'jquery-svgrepo-com.svg',
    'React': 'react-logo-svgrepo-com.svg',
    'Angular': 'angular-svgrepo-com.svg',
    // TypeScript: no logo in public/logos -> fallback
    'SCSS': 'scss-svgrepo-com.svg',
    'Tailwind CSS': 'tailwindcss-mark.96ee6a5a.svg',
    'NestJS': 'nestjs-svgrepo-com.svg',
    'Symfony': 'symfony_black_03.svg',
    'Laravel': 'laravel-svgrepo-com.svg',
    'Node.js': 'node-16-svgrepo-com.svg',
    // REST API: no specific logo in public/logos -> fallback
    'C# MAUI': 'c-sharp-svgrepo-com.svg',
    'C# WCF': 'c-sharp-svgrepo-com.svg',
    'C# WPF': 'c-sharp-svgrepo-com.svg',
    'Rust': 'rust-logo.svg',
    'Electron': 'electron-svgrepo-com.svg',
    'Tauri': 'tauri_logo_icon_249441.svg',
    'Unity': 'unity-svgrepo-com.svg',
    'Godot Engine': 'godot-svgrepo-com.svg',
    'Git': 'git-svgrepo-com.svg',
    // UX Design / Responsive Design / Agile: no dedicated logos -> fallback
  };

  protected getIconPath(skill: string): string | null {
    const file = this.iconMap[skill];
    return file ? `/logos/${file}` : null;
  }

  protected getIconInitials(skill: string): string {
    const map: Record<string, string> = {
      'jQuery': 'jQ',
      'React': 'R',
      'Angular': 'NG',
      'TypeScript': 'TS',
      'SCSS': 'SC',
      'Tailwind CSS': 'TW',
      'NestJS': 'NJ',
      'Symfony': 'SF',
      'Laravel': 'LV',
      'Node.js': 'ND',
      'REST API': 'API',
      'C# MAUI': 'MA',
      'C# WCF': 'WC',
      'C# WPF': 'WP',
      'Rust': 'RS',
      'Electron': 'EL',
      'Tauri': 'TA',
      'Unity': 'U',
      'Godot Engine': 'GD',
      'Git': 'G',
      'UX Design': 'UX',
      'Responsive Design': 'RWD',
      'Agile': 'AG',
    };

    const key = (skill || '').trim();
    if (map[key]) return map[key];
    const parts = key.split(/\s+/).filter(Boolean);
    const initials = parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
    return initials || key.slice(0, 2).toUpperCase();
  }

}
