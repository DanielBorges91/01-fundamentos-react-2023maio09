import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post 
        author="Daniel Borges"
        content="Um novo post muito legal."
      />
    </div>
  )
}