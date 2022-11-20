import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  skills: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '100'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '100'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '100'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '100'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '100'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '100'
    }
  ];

}
