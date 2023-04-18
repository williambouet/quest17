import { Injectable } from  '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
        console.log(req.urlWithParams); // J'affiche l'url avec les params
        console.log('je suis dans interceptor');
        const start = Date.now();
        // Je passe la requête à la suite des interceptors cachés d'angular
        // Et je retourne ce résultat pour que la requête ait bien lieu
       // pipe permet d'ajouter des actions à effectuer quand l'observable est résolue
    return next.handle(req).pipe(
        // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
          tap((response) => {
             // On s'assure qu'il s'agit bien d'une réponse http
              if (response instanceof HttpResponse) {
                // Ici sera le code exécuté à la réponse du serveur
               // Dans le cas où tout s'est bien passé
                  const end = Date.now();
                  console.log('temps passé :');
                  console.log(end - start);
              }
             }));
      }
}