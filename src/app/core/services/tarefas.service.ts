import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardTarefasResponse } from "../models/dashboard-tarefas.response";

@Injectable({
    providedIn: 'root'
})
export class TarefasService {

    //Atributos da classe
    private url = environment.apiTarefas;
    private http = inject(HttpClient);

    //Método para consultar o dashboard de tarefas
    obterDashboard(): Observable<DashboardTarefasResponse[]> {
        return this.http.get<DashboardTarefasResponse[]>(`${this.url}/dashboard`);
    }
}


