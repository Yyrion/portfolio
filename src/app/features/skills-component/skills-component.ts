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
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly skillsCategories: SkillsCategory[] = [
    {
      title: 'Front-End',
      ariaLabel: 'Competences Front-End',
      reverse: false,
      speed: 5200,
      skills: ['jQuery', 'React', 'Angular', 'TypeScript', 'SCSS', 'Tailwind CSS'],
    },
    {
      title: 'Back-End',
      ariaLabel: 'Competences Back-End',
      reverse: true,
      speed: 5600,
      skills: ['NestJS', 'Symfony', 'Laravel', 'Node.js', 'REST API'],
    },
    {
      title: 'Developpement Desktop',
      ariaLabel: 'Competences Developpement Desktop',
      reverse: false,
      speed: 5000,
      skills: ['C# MAUI', 'C# WCF', 'C# WPF', 'Rust'],
    },
    {
      title: 'Jeux Video',
      ariaLabel: 'Competences Jeux Video',
      reverse: true,
      speed: 3200,
      skills: ['Unity', 'Godot Engine'],
    },
    {
      title: 'Autres',
      ariaLabel: 'Autres competences',
      reverse: false,
      speed: 5400,
      skills: ['Git', 'UX Design', 'Responsive Design', 'Agile'],
    },
  ];

  protected getLoopedSkills(skills: string[]): string[] {
    return [...skills, ...skills];
  }

}
