import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from '../hero/hero.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [HeroComponent, NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  canSubmit: boolean = true;
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.checkSubmitStatus();
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (this.canSubmit) {
        const formData = this.contactForm.value;
        const emailBody = `Nombre: ${formData.name}\nCorreo Electrónico: ${formData.email}\nMensaje: ${formData.message}\nPhone:${formData.phone}`;

        const templateParams = {
          to_email: 'ivanfigueredo.et@gmail.com',
          from_name: formData.name,
          reply_to: formData.email,
          message: emailBody
        };

        emailjs.send(
          'service_k8f06ef',
          'template_3lnj9vc',
          templateParams,
          'pYWrqljqLd111v_zT'
        ).then((response) => {
          console.log('Correo enviado con éxito!', response.status, response.text);

          // Mostrar el modal de éxito
          this.showSuccessModal = true;
          this.contactForm.reset();

          if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const now = new Date();
            localStorage.setItem('lastSubmitTime', now.toString());
          }

          this.canSubmit = false;
        }).catch((error) => {
          console.error('Error al enviar el correo', error);
          alert('Error al enviar el correo. Inténtalo de nuevo más tarde.');
        });
      } else {
        // Mostrar el modal de advertencia
        this.showWarningModal = true;
      }
    }
  }

  checkSubmitStatus(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const lastSubmitTime = localStorage.getItem('lastSubmitTime');
      if (lastSubmitTime) {
        const lastSubmitDate = new Date(lastSubmitTime);
        const now = new Date();
        const hoursSinceLastSubmit = Math.abs(now.getTime() - lastSubmitDate.getTime()) / (1000 * 60 * 60);

        if (hoursSinceLastSubmit < 24) {
          this.canSubmit = false;
        } else {
          this.canSubmit = true;
          localStorage.removeItem('lastSubmitTime');
        }
      }
    }
  }

  // Métodos para cerrar los modales
  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  closeWarningModal(): void {
    this.showWarningModal = false;
  }
}
