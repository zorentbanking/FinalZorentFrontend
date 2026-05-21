import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm!: FormGroup;

  successMessage = '';

  errorMessage = '';

  loading = false;

  apiUrl =
    'https://localhost:7085/api/auth/forgot-password';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.forgotPasswordForm =
      this.fb.group({

        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ]

      });

  }

  onSubmit(): void {

    if (this.forgotPasswordForm.invalid) {

      this.forgotPasswordForm.markAllAsTouched();

      return;

    }

    this.loading = true;

    const body = {

      email:
        this.forgotPasswordForm.value.email

    };

    this.http.post<any>(
      this.apiUrl,
      body
    ).subscribe({

      next: (response) => {

        this.successMessage =
          response.message || 'Reset link sent';

        this.errorMessage = '';

        this.loading = false;

        this.forgotPasswordForm.reset();

      },

      error: (error) => {

        this.errorMessage =
          error.error?.message ||
          'Password reset failed';

        this.successMessage = '';


      }

    });

  }

}
