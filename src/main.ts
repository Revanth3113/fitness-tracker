import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class App {
  name = 'Portfolio';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});