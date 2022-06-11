import React from 'react'
import { useApp } from 'app/context/AppContext'

const WordleBoard: React.FC = () => {
    const { wordOfTheDay } = useApp()

    return <div>{wordOfTheDay}</div>
}

export default WordleBoard
