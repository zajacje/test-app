import Link from 'next/link'

const Article = ({ title, author, preview }) => (
  <div>
    <h3>{title}</h3>
    <p>By {author}</p>
  </div>
)

export default () => (
  <main>
    <h1>Articles</h1>
    <Article title="Hello BIGRED//HACKS!" author="@zajacje" />
    <Article title="Workshops are cool" author="@zajacje" />
    <Article title="Super cool article" author="@zajacje" />
    <Link href="/shopping">
      <a>Let's go shopping</a>
    </Link>
    <style jsx>{`
      h1 {
        color: magenta; 
      }
    `}</style>
  </main>
)