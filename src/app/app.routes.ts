import { Route } from '@angular/router';

export const appRoutes: Route[] = [ 
    {
        path: 'register',
        loadChildren: () => import('./auth/auth.routes').then((m) => m.registerRoutes),
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
    },
    {
        path: '',
        loadChildren: () => import('../app/globalFeed/globalFeed.routes').then((m) => m.routes),
    },
    {
        path: 'feed',
        loadChildren: () => import('../app/yourFeed/yourFeed.routes').then((m) => m.routes),
    },
    {
        path: 'tags/:slug',
        loadChildren: () => import('../app/tagFeed/tagFeed.routes').then((m) => m.routes),
    },
    {
        path: 'articles/new',
        loadChildren: () => import('../app/createArticle/createArticle.routes').then((m) => m.routes),
    },
    {
        path: 'articles/:slug',
        loadChildren: () => import('../app/article/article.routes').then((m) => m.routes),
    }

]  