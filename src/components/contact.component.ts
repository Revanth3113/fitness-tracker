import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Start Your Fitness Journey</h2>
        <div style="max-width: 600px; margin: 0 auto;">
          <form (ngSubmit)="onSubmit()" style="display: grid; gap: 20px;">
            <div>
              <label for="name" style="display: block; margin-bottom: 5px;">Name</label>
              <input
                type="text"
                id="name"
                [(ngModel)]="formData.name"
                name="name"
                style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"
              >
            </div>
            <div>
              <label for="email" style="display: block; margin-bottom: 5px;">Email</label>
              <input
                type="email"
                id="email"
                [(ngModel)]="formData.email"
                name="email"
                style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"
              >
            </div>
            <div>
              <label for="fitnessGoal" style="display: block; margin-bottom: 5px;">Fitness Goal</label>
              <select
                id="fitnessGoal"
                [(ngModel)]="formData.fitnessGoal"
                name="fitnessGoal"
                style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="general-fitness">General Fitness</option>
              </select>
            </div>
            <div>
              <label for="message" style="display: block; margin-bottom: 5px;">Additional Information</label>
              <textarea
                id="message"
                [(ngModel)]="formData.message"
                name="message"
                rows="5"
                style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"
              ></textarea>
            </div>
            <button type="submit" class="btn" style="width: 100%;">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    fitnessGoal: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      fitnessGoal: '',
      message: ''
    };
    alert('Thank you for your interest! We will contact you soon.');
  }
}