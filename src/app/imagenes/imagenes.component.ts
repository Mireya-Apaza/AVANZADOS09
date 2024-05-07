import { Component, OnInit } from '@angular/core';

interface Imagen {
  url: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  imagenes: Imagen[] = [];
  mostrarImagenes: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  listar(): void {
    this.imagenes = [
      {
        url: 'https://content.elmueble.com/medio/2023/01/03/gato-gigante-de-raza-maine-coon_d2eb0c4b_230103105112_900x900.jpg',
        titulo: ' Gato Maine Coon',
        descripcion: 'Raza de gato domesticado. Tiene una apariencia física distintiva y valiosas habilidades de caza. Es una de las razas naturales más antiguas de América del Norte. La raza se originó en el estado de Maine.'
      },
      {
        url: 'https://gatosyrespeto.org/wp-content/uploads/2023/01/cat.jpg',
        titulo: 'Gato Atigrado',
        descripcion: 'Raza con un distintivo pelaje de rayas y manchas características. Estos gatos pueden poseer ojos verdes, dorados o azules y un pelaje de color gris, naranja, marrón o negroque puede presentarse solo.'
      },
      {
        url: 'https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Birma.1.jpg?itok=MkjxgJwQ',
        titulo: 'Gato Birmano',
        descripcion: 'Raza de gato de pelo semilargo. Se caracteriza por sus guantes que han de ser de un color blanco inmaculado, sus ojos azul zafiro, su pelo de color claro con zonas de tonalidades más oscuras.'
      }
    ];
    this.mostrarImagenes = true;
  }

  ocultarImagenes(): void {
    this.mostrarImagenes = false;
  }
}
