
import { ShoppingCart } from '@/practices'
import S from './style.module.css'
import { DerivedState } from '@/components'

export default function App() {
  return (
    <div className={S.container}>
      <ShoppingCart />
    </div>
  )
}
