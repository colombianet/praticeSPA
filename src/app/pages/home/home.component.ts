import { Component, OnInit } from '@angular/core';

import { Team } from 'src/app/models/team.model';

import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  teams: Team[] = [];

  constructor( private _teams: TeamService ) { }

  ngOnInit(): void {
    this._teams.getHeroes().subscribe(resp => {
      this.teams = resp;
    });
  }

}
