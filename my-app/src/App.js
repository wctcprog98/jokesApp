import React from 'react'
import Jokes from './components/Jokes'
import jokesData from './jokesData'
import Joke from './components/Joke'

function App() {
    const jokeComponents = jokesData.map(
        joke =>
            <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
            
    return (
        <div>
            <Jokes
                question="Why did the chicken cross the road"
                punchline = "To get to the other side"
            />
            <Jokes
                 question="Why did the chicken cross the road"
                punchline="To get to the other side"
            />
            <Jokes
                question="Why did the chicken cross the road"
                punchline = "To get to the other side"
            />
            <Jokes
                question="Why did the chicken cross the road"
                punchline = "To get to the other side"
            />
            <Jokes
                 question="Why did the chicken cross the road"
                punchline = "To get to the other side"
            />

            {/* Example with Array from */}
            {jokeComponents}
            
        </div>
    )
}

export default App; 