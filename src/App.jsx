// Rendering Lists

import { recipes } from "./data.js";

// export default function App() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => {
//         const { id, name, ingredients } = recipe;
//         return (
//           <div key={id}>
//             <h2>{name}</h2>
//             <ul>
//               {ingredients.map((ingredient) => (
//                 <li key={ingredient}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const Recipe = ({ id, name, ingredients }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

// 부모 -> 자식
const App = () => {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => {
        return <Recipe {...recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default App;
