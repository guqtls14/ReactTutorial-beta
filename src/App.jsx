// // Rendering Lists

// import { recipes } from "./data.js";

// // export default function App() {
// //   return (
// //     <div>
// //       <h1>Recipes</h1>
// //       {recipes.map((recipe) => {
// //         const { id, name, ingredients } = recipe;
// //         return (
// //           <div key={id}>
// //             <h2>{name}</h2>
// //             <ul>
// //               {ingredients.map((ingredient) => (
// //                 <li key={ingredient}>{ingredient}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// const Recipe = ({ id, name, ingredients }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((ingredient) => {
//           return <li key={ingredient}>{ingredient}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// // 부모 -> 자식
// const App = () => {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => {
//         return <Recipe {...recipe} key={recipe.id} />;
//       })}
//     </div>
//   );
// };

// export default App;

// Rendering Lists 4
import React, { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}
