import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private activateroute: ActivatedRoute) {}
  prams: any;
  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((p) => {
      this.prams = p.get('username');
    });
  }
}
