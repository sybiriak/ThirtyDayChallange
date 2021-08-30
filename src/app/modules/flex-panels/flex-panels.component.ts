import { Panel } from './flex-panels.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-panels',
  templateUrl: './flex-panels.component.html',
  styleUrls: ['./flex-panels.component.scss']
})
export class FlexPanelsComponent implements OnInit {

  readonly panels: Panel[] = [
    {
      first: 'Hey',
      second: 'Let\'s',
      third: 'Dance',
      active: false
    },
    {
      first: 'Give',
      second: 'Take',
      third: 'Receive',
      active: false
    },
    {
      first: 'Experience',
      second: 'It',
      third: 'Today',
      active: false
    },
    {
      first: 'Give',
      second: 'All',
      third: 'You can',
      active: false
    },
    {
      first: 'Life',
      second: 'In',
      third: 'Motion',
      active: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
