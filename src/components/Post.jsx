import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime='2022-05-11 08:13:30' >Publicado a 1h</time>
      </header>

      <div className={styles.content} >
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return.</p>
        <p><a href="">jane.design/doctcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.conmentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

    </article>
  )
}