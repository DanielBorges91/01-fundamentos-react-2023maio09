import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Excepturi, architecto laudantium ea eum
        magni sed veritatis non eos, sequi neque minima voluptatibus cumque
        maiores sint debitis doloribus perspiciatis numquam. Sunt."
      />
      <Post 
        author="Daniel Borges"
        content="Um novo post muito legal."
      />
    </>
  )
}