
import S from './style.module.css'
import { TodosCrudWithImmer } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <TodosCrudWithImmer />
    </div>
  )
}
