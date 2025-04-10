import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header style="background-color: var(--primary-color); padding: 20px 0;">
      <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <h1 style="color: white; font-size: 24px;">FitTrack Pro</h1>
        <ul style="display: flex; gap: 20px; list-style: none;">
          <li><a href="#about" style="color: white; text-decoration: none;">About</a></li>
          <li><a href="#features" style="color: white; text-decoration: none;">Features</a></li>
          <li><a href="#contact" style="color: white; text-decoration: none;">Get Started</a></li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {}