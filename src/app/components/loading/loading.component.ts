import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadmanageService } from '../../services/loadmanage.service';


@Component({
  standalone: true,
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  imports: [CommonModule],
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  public loadState = this.loadManageService.loadingState$

  constructor(private loadManageService: LoadmanageService) { }
}