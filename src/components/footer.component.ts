import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background-color: var(--primary-color); color: white; padding: 40px 0; margin-top: 60px;">
      <div class="container" style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <a href="#" target="_blank" style="color: white; margin: 0 10px;">Download App</a>
          <a href="#" target="_blank" style="color: white; margin: 0 10px;">Privacy Policy</a>
          <a href="#" target="_blank" style="color: white; margin: 0 10px;">Terms of Service</a>
        </div>
        <p>&copy; Revanth Reddy Mandala.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
