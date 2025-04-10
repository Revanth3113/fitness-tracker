import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="features" class="section" style="background-color: var(--light-bg);">
      <div class="container">
        <h2 class="section-title">Key Features</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" alt="Workout Tracking" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 20px;">
              <h3 style="margin-bottom: 10px;">Workout Tracking</h3>
              <p>Log your exercises, sets, reps, and weights with our intuitive workout tracker.</p>
            </div>
          </div>
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800" alt="Progress Monitoring" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 20px;">
              <h3 style="margin-bottom: 10px;">Progress Monitoring</h3>
              <p>Track your progress with detailed charts and analytics to visualize your improvements.</p>
            </div>
          </div>
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800" alt="Goal Setting" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 20px;">
              <h3 style="margin-bottom: 10px;">Goal Setting</h3>
              <p>Set and track your fitness goals with customizable targets and reminders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}