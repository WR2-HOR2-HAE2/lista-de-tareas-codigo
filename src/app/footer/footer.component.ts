import { Component, inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  firestore: Firestore = inject(Firestore);
  task_description="";
  
  addTaskToCollection() {
    addDoc(collection(this.firestore, "tasks"), {
      text: this.task_description,
      isCompleted: false,
    });
  }
}
