import { useEffect, useState } from 'react'
import './App.css'
import data from "../data.json"
import Card from "./Card"
console.log(data)

function App() {
  const [tagList, setTagList] = useState<Array<string>>([])


  return (
    <main>
      <div className="taglist">
        {tagList.map((tag) => <span>{tag}&nbsp;</span>)}
      </div>
      {data.map((item) => {
        return <Card {...item} key={item.id} setter={tagSetter} />
      })}
    </main>
  )

  function tagSetter(tag: string): void {
    if (tagList.includes(tag)) {
      return
    }
    setTagList([...tagList, tag])
  }
}

export default App
