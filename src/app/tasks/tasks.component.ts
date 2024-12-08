import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tasks',
    imports: [AsyncPipe, CommonModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
  firestore: Firestore = inject(Firestore);
  tasks: Observable<any[]>
  taskCollection = collection(this.firestore, "tasks");

  updateTaskState(taskId: string, taskState: boolean) {
    updateDoc(doc(this.firestore, "tasks", taskId), {
      isCompleted: !taskState,
    });
  }

  deleteTask(taskId: string) {
    deleteDoc(doc(this.firestore, "tasks", taskId));
  }

  constructor () {
    const tasksQuery = query(this.taskCollection, orderBy("date", "asc"))
    this.tasks = collectionData(tasksQuery, { idField: "id" });
  }
}
