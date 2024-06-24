import { Component } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  standalone: true,
  imports: [],
  templateUrl: './worldmap.component.html',
  styleUrl: './worldmap.component.css'
})
export class WorldmapComponent {
  ngOnInit(): void {
    let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {

      svgCountry.addEventListener('mouseover', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = 'green';
      });

      svgCountry.addEventListener('mouseleave', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = '';
      });
      
      svgCountry.addEventListener('click', () => {
       this.loadCountryData(svgCountry);
      });
    });
  }

  async loadCountryData(svgCountry: SVGPathElement){
    let api: string = 'https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json';
    let response: Response = await fetch(api);
    let data: any = await response.json();
    let dataPath: any = data[1];

    let name: string = dataPath[0].name;
    document.getElementById('name')!.innerText = name;


  }
}
