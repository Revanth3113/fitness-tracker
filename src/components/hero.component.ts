import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section style="background-color: var(--light-bg); padding: 100px 0;">
      <div class="container" style="text-align: center;">
        <h1 style="font-size: 3.5rem; margin-bottom: 20px;">FitTrack Pro</h1>
        <p style="font-size: 1.5rem; margin-bottom: 30px;">Track Your Fitness Journey | Set Goals | Achieve Results</p>
        <a href="#features" class="btn">Explore Features</a>
      </div>
    </section>
  `
})
export class HeroComponent {}