import styles from './styles.module.css';
import Modal from './modal';
import React, { useState, useEffect } from 'react';
import Collection from './collection';
import { roomsSelectors } from '../../redux/rooms';
import { useSelector } from 'react-redux';
import { fetchCollections } from '../../services/collections-api';

export default function Collections(props) {
    const [show, setShow] = useState(false);
    const [collections, setCollections] = useState([]);

    const [currentCollection, setCurrentCollection] = useState([]);

    // redirect when room is opened
    const roomOpened = useSelector(roomsSelectors.getIsOpen);

    if (roomOpened) {
        window.location = '/rooms/open';
    }

    const openModalWithCollection = (collection = false) => {
        setShow(true);
        if (collection) {
            setCurrentCollection(collection);
        }
    };
    useEffect(() => {
        (async function () {
            const collections = await fetchCollections();
            // setCurrentCollection(collections[0]);
            setCollections(collections);
            console.log(collections);
        })();
    }, []);

    // import { Route, Redirect } from 'react-router-dom';
    // <Redirect to={redirectTo} />;

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
