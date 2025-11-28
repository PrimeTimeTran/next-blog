import { glossary } from '../components/GlossaryData'

export default function Glossary() {
  return (
    <div>
      <h1>Glossary</h1>
      <br></br>
      {glossary.map((entry) => (
        <div key={entry.term}>
          <h2
            className="text-2xl font-semibold text-white"
            id={entry.term.toLowerCase().replace(/\s+/g, '-')}
          >
            {entry.term}
          </h2>
          <p>
            <p>{entry.definition}</p>
          </p>
        </div>
      ))}
    </div>
  )
}
