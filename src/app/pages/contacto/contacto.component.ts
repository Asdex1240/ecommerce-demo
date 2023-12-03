import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  sociales: Social[] = [
    {
      icon: 'facebook',
      link: 'www.fb.com'
    },
    {
      icon: 'instagram',
      link: 'instagram.com'
    },
    {
      icon: 'tiktok',
      link: 'tiktok.com'
    },
    {
      icon: 'youtube',
      link: 'youtube.com'
    },
    {
      icon: 'x',
      link: 'x.com'
    },
  ]

}

interface Social {
  icon: string;
  link: string
}
