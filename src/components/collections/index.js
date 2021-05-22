import styles from './styles.module.css';
import Modal from './modal';
import React, { useState, useEffect } from 'react';
import Collection from './collection';
import { fetchCollection } from './api';

export default function Collections() {
    const [show, setShow] = useState(false);
    const [collections, setCollections] = useState([]);

    const [currentCollection, setCurrentCollection] = useState([]);

    const openModalWithCollection = (collection = false) => {
        setShow(true);
        if (collection) {
            setCurrentCollection(collection);
        }
    };
    useEffect(() => {
        (async function () {
            const collection = await fetchCollection(10);
            setCurrentCollection(collection);
            setCollections([collection]);
        })();
    }, []);

    return (
        <div>
            <div className={styles.collections}>
                <h2 className={styles.collectionTitle}>
                    Выберите коллекцию фильмов для голосования
                </h2>
                <ul className={styles.collectionsList}>
                    {collections &&
                        collections.map((collection, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    openModalWithCollection(collection);
                                }}
                                className={styles.collectionItem}
                            >
                                <Collection collection={collection} />
                            </li>
                        ))}
                </ul>
            </div>
            <Modal
                show={show}
                onClose={() => {
                    setShow(false);
                }}
                movies={currentCollection.parts}
            />
        </div>
    );
}
