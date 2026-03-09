import styles from './footer.module.css'

export default function footer(){
  return (
     <footer className={styles.footer}>
        <small>
          COPYRIGHT RESERVED. © <abbr title="이듬(EUID)">EUID</abbr>. "완벽보다
          완주를!"
        </small>
      </footer>
  )
}