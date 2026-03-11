import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-preview-component',
  imports: [],
  templateUrl: './project-preview-component.html',
  styleUrl: './project-preview-component.scss',
})
export class ProjectPreviewComponent {
  @Input({required: true}) projectPreview!: Project;
}
