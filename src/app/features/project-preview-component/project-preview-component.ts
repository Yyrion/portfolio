import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-preview-component',
  imports: [],
  templateUrl: './project-preview-component.html',
  styleUrl: './project-preview-component.scss',
})
export class ProjectPreviewComponent {
  @Input({ required: true }) projectPreview!: Project;

  private readonly iconMap: Record<string, string> = {
    'JQuery': 'jquery-svgrepo-com.svg',
    'React': 'react-logo-svgrepo-com.svg',
    'Angular': 'angular-svgrepo-com.svg',
    'SCSS': 'scss-svgrepo-com.svg',
    'Tailwind CSS': 'tailwindcss-mark.96ee6a5a.svg',
    'NestJS': 'nestjs-svgrepo-com.svg',
    'Symfony': 'symfony_black_03.svg',
    'Laravel': 'laravel-svgrepo-com.svg',
    'Node.js': 'node-16-svgrepo-com.svg',
    'C# MAUI': 'c-sharp-svgrepo-com.svg',
    'C# WCF': 'c-sharp-svgrepo-com.svg',
    'C# WPF': 'c-sharp-svgrepo-com.svg',
    'C#': 'c-sharp-svgrepo-com.svg',
    'Rust': 'rust-logo.svg',
    'Electron': 'electron-svgrepo-com.svg',
    'Tauri': 'tauri_logo_icon_249441.svg',
    'Unity 2D': 'unity-svgrepo-com.svg',
    'Godot Engine': 'godot-svgrepo-com.svg',
    'Git': 'git-svgrepo-com.svg',
    'Python': 'python-logo-only.svg',
    'Prisma': 'prisma-2.svg',
    'MySQL': 'logo-mysql.eps',
    'PostgreSQL': 'PostgreSQL_logo.3colors.svg',
    'MongoDB': 'MongoDB_Logomark_SlateBlue.svg',
    'Supabase': 'supabase-logo-icon.svg',
    'Docker': 'docker-mark-ocean-blue.svg',
  };

  protected getIconPath(skill: string): string | null {
    const file = this.iconMap[skill];
    return file ? `/logos/${file}` : null;
  }

  protected getIconInitials(skill: string): string {
    const map: Record<string, string> = {
      'JQuery': 'jQ',
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
      'MySQL': 'MY',
      'PostgreSQL': 'PG',
      'MongoDB': 'MDB',
      'Supabase': 'SB',
    };

    const key = (skill || '').trim();
    if (map[key]) return map[key];
    const parts = key.split(/\s+/).filter(Boolean);
    const initials = parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
    return initials || key.slice(0, 2).toUpperCase();
  }
}
