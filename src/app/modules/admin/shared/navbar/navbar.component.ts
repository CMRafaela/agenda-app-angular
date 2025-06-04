import { Component, inject } from '@angular/core';
import { AuthHelper } from '../../../../core/helpers/auth.helper';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //Injeções de dependência
  authHelper = inject(AuthHelper);

  //Atributos
  nomeUsuario: string = '';

  //Função executada ao abrir a página
  ngOnInit() {
    //capturar o nome do usuário autenticado
    this.nomeUsuario = this.authHelper.get()?.name as string;
  }

  logout() {
    if (confirm('Deseja realmente sair do sistema?')) {
      this.authHelper.remove(); //apagar os dados do usuário autenticado na sessão
      location.reload(); //recarregar a página
    }
  }
}




