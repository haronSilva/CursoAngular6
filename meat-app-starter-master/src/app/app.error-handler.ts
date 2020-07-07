import {Observable, throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
export class ErrorHandler{
    static errorHandler(error: HttpErrorResponse){
        let errorMessage: string;        
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`        
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}