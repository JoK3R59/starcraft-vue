import Acceuil from './components/Acceuil/Acceuil';
import Combat from './components/Combat/Combat';
import Factions from './components/Factions/Factions';
import Commander from './components/Factions/Commander';
import Regles from './components/Regles/Regles';

export default [
    {path: '/', component: Acceuil},
    {path: '/combat', component: Combat},
    {path: '/factions', component: Factions},
    {path: '/factions/:name', component: Commander},
    {path: '/regles', component: Regles}
]
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Post from './components/Post';

// export default [
//     {path: '/', component: Acceuil},
//     {path: '/page1', component: Page1},
//     {path: '/page2', component: Page2},
//     {path: '/blogpost/:id', component: Post},
// ]

// FOR EXEMPLE