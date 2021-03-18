import styles from './styles.module.css'
import Modal from './modal'
import React, { useState } from 'react'
import Collection from './collection'

export default function Collections() {
    const initialCollections = [
       { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4"},{title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4"},{title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4"},{title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4"},{title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4"}]},
        { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{ title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4" }] },
        { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{ title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4" }] },
        { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{ title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4" }] },
        { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{ title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4" }] },
        { id: 1, title: "One", url: "https://www.fillmurray.com/640/360", movies: [{ title: "one", year: "2020", genres: ["hello", "world"], coverUrl: "https://www.fillmurray.com/640/360", rating: "6.4", duration: "6.4" }] },
       ]
    const [show, setShow] = useState(false)
    const [collections, setCollections] = useState(initialCollections)

 const [currentCollection, setCurrentCollection] = useState(initialCollections[0])


    const openModalWithCollection = (collection=false) => {
        setShow(true)
        if (collection) {
            setCurrentCollection(collection)
        }
    }
    console.log(collections)
    return (
        <>
        <div className={styles.collections}>
            <h2 className={styles.collectionTitle}>Выберите коллекцию фильмов для голосования</h2>
                <ul className={styles.collectionsList}>
                    {collections.map((collection, index) => 
                        <li key={index} onClick={() => { openModalWithCollection(collection) }} className={styles.collectionItem}>
                            <Collection collection={collection} />
                        </li>)}
            </ul>
            </div>
            <Modal show={show} onClose={() => { setShow(false) }} collection={currentCollection}/>
        </>
    )
}