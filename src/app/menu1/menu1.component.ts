import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu1x',
  templateUrl: './menu1.component.html',
})
export class Menu1Component {
  constructor(private router: Router) {
    // Executamos o modulo (2) - passando a variavel
    this.router.navigate(['menu2'], {
      queryParams: {
        page: 'v_racao_integral',
      },
    });
  }

  onClickMenu3() {
    this.router.navigate(['/menu3']);
  }
}
