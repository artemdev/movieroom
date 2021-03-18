import styles from './styles.module.css'
import Modal from './modal'
import React, { useState } from 'react'

export default function Collections() {
    const [show, setShow] = useState(false)
    const [collections, setCollections] = useState([
        { id: 1, title: "hello" },
         {id: 2, title: "world"}
    ])

   const artem = [
        { id: 1, title: "Artem" },
         {id: 2, title: "Hello"}
    ]

    const openModalWithCollection = (collections=false) => {
        setShow(true)
        if (collections) {
            setCollections(collections)
        }
    }

    return (
        <>
        <div className={styles.collections}>
            <h2 className={styles.collectionTitle}>Выберите коллекцию фильмов для голосования</h2>
                <ul className={styles.collectionsList}>
                <li onClick={()=> openModalWithCollection(artem)} className={styles.collectionItem}>
                    <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                    <p className={styles.collectionText}>
                        Романтические комедии
                    </p>
                </li>
                <li className={styles.collectionItem}>   
                    <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                    <p className={styles.collectionText}>
                        Романтические комедии
                    </p>
                </li>
                <li className={styles.collectionItem}>
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                <li className={styles.collectionItem}>
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                                <li className={styles.collectionItem}>
                    
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                                                <li className={styles.collectionItem}>
                    
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                                                <li className={styles.collectionItem}>
                    
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                                                <li className={styles.collectionItem}>
                    
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
                                                <li className={styles.collectionItem}>
                    
                        <img className={styles.collectionImage} src="https://www.fillmurray.com/640/360" alt="" />
                        <p className={styles.collectionText}>
                            Романтические комедии
                        </p>
                </li>
            </ul>
            </div>
            <Modal show={show} onClose={() => { setShow(false) }} collections={collections}/>
        </>
    )
}