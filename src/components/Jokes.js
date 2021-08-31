import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import { getJokes } from './api/jokeData'


function Jokes() {
    // const classes = useStyles();
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        (async () => {
            const results = await getJokes();
            console.log(results);
            setJokes(results);
        })()
    }, [setJokes]);

    return (
        <>
            <QuoteCard data={jokes}/>
        </>
    )
}

export default Jokes;
