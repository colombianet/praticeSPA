import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Team } from '../models/team.model';

import { TEAMS } from './../pages/home/mock-teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  myTeam: any;
  
  constructor( ) { }
  
  getHeroes(): Observable<Team[]> {
    return of(TEAMS);
  }
  
  getHeroeById( id: any ): Observable<Team | undefined>{
    return of(TEAMS.find(team => team.id == id));
  }
  
  searchTeam(termino: string): Team[] {
    
    let teams: Team[] = [];
    termino = termino.toLowerCase();

    TEAMS.forEach(t => {
      let nombre = t.nombre.toLowerCase();
      // Si el nombre del equipo actual contiene el termino de busqueda, agregue todo este equipo(Team) al array
      if ( nombre.indexOf( termino ) >= 0 ) {
        teams.push(t);
      }
    });
    
    return teams;
  }
}
