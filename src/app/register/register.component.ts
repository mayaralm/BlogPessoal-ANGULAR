import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(private authService: AuthService,
  private router: Router) { }

  ngOnInit() {

    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }
  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }
  cadastrar() {
    this.user.tipo = this.tipoUsuario
    if (this.user.senha != this.confirmarSenha) {
      alert('Senhas estão incorretas')
    } else {
        console.log(this.user)
      this.authService.cadastrar(this.user).subscribe((resp:User)=>{
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })

    }

  }

}