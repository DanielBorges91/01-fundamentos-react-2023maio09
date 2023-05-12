import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Siderbar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post 
          author="Daniel Borges"
          content="Um novo post muito legal."
          />
        </main>
      </div>
    </div>
  )
}