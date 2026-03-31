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
    this.visibleProjects = this.projectsList.slice(0, 4);
  }

  onSwiperSlideChange(event: Event): void {
    const customEvent = event as CustomEvent<[{ activeIndex?: number }] | undefined>;
    const swiperInstance = customEvent.detail?.[0];

    this.currentPageIndex = swiperInstance?.activeIndex ?? 0;
  }

  prev(): void {
    const el = document.querySelector('swiper-container.swiper-container') || document.querySelector('swiper-container');
    const swiperEl: any = el as any;
    if (!swiperEl) return;
    try {
      if (swiperEl.swiper && typeof swiperEl.swiper.slidePrev === 'function') {
        swiperEl.swiper.slidePrev();
        return;
      }
      if (typeof swiperEl.slidePrev === 'function') {
        swiperEl.slidePrev();
        return;
      }
      if (swiperEl.getSwiper && typeof swiperEl.getSwiper === 'function') {
        const s = swiperEl.getSwiper();
        if (s && typeof s.slidePrev === 'function') s.slidePrev();
        return;
      }
      // fallback: dispatch keyboard event to try to trigger default navigation
      const keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      document.dispatchEvent(keyboardEvent);
    } catch (e) {
      // silent
    }
  }

  next(): void {
    const el = document.querySelector('swiper-container.swiper-container') || document.querySelector('swiper-container');
    const swiperEl: any = el as any;
    if (!swiperEl) return;
    try {
      if (swiperEl.swiper && typeof swiperEl.swiper.slideNext === 'function') {
        swiperEl.swiper.slideNext();
        return;
      }
      if (typeof swiperEl.slideNext === 'function') {
        swiperEl.slideNext();
        return;
      }
      if (swiperEl.getSwiper && typeof swiperEl.getSwiper === 'function') {
        const s = swiperEl.getSwiper();
        if (s && typeof s.slideNext === 'function') s.slideNext();
        return;
      }
      const keyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      document.dispatchEvent(keyboardEvent);
    } catch (e) {
      // silent
    }
  }
}
