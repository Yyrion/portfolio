import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { projects } from '../../data/projects.data';
import { ProjectPreviewComponent } from '../project-preview-component/project-preview-component';
import { Project } from '../../interfaces/project.interface';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-projects',
  imports: [ProjectPreviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projectsList: Project[] = projects;
  visibleProjects: Project[] = [];
  currentPageIndex: number = 0;
  swiperBreakpoints: Record<number, { slidesPerView: number; spaceBetween: number }> = {
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  };

  constructor() {
    this.visibleProjects = this.projectsList.slice(0, 3);
  }

  onSwiperSlideChange(event: Event): void {
    const customEvent = event as CustomEvent<[{ activeIndex?: number }] | undefined>;
    const swiperInstance = customEvent.detail?.[0];

    this.currentPageIndex = swiperInstance?.activeIndex ?? 0;
  }
}
