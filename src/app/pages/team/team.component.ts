import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamService } from 'src/app/services/team.service';

import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: [
  ]
})
export class TeamComponent implements OnInit {
  
  myTeam: Team | undefined;

  constructor( private activatedRouter: ActivatedRoute, private team: TeamService, private location: Location ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.team.getHeroeById(id).subscribe(t => {
      this.myTeam = t;
    })
  }

  goBack() {
    this.location.back();
  }

}
