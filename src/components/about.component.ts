import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">About FitTrack Pro</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
              FitTrack Pro is your ultimate companion for achieving your fitness goals.
              Our intuitive application helps you track workouts, monitor progress,
              and stay motivated throughout your fitness journey.
            </p>
            <p style="font-size: 1.1rem;">
              With features like workout logging, progress tracking, and goal setting,
              FitTrack Pro makes it easy to maintain a consistent fitness routine and
              see real results.
            </p>
          </div>
          <div style="text-align: center;">
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800"
              alt="Fitness Tracking"
              style="border-radius: 10px; max-width: 100%;"
            >
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}