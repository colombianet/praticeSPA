import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  teams: Team[] = [];
  busqueda: string = '';

  constructor( private activatedRoute: ActivatedRoute, private team: TeamService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp => {
      // Obtengo el parametro de la URL(termino a buscar) para usarlo en el metodo del servicio
      this.busqueda = resp.busqueda;
      this.teams = this.team.searchTeam(this.busqueda);
    });
  }

}
