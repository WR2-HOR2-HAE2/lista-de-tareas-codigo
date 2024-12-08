import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, TasksComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
