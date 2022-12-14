// next
import Link from "next/link"

const HeaderAlt = ({ title }) => {
  return (
    <header className="alt">
      <div className="wrapper">
        <a/>
        <span>{ title }</span>
        <Link href="/"><a accessKey="X" aria-label="return to home page" /></Link>
      </div>
    </header>
  )
}
 
export default HeaderAlt