import styles from './styles.module.css';
import Modal from './modal';
import React, { useState, useEffect } from 'react';
import Collection from './collection';
import RoomOpened from '../Rooms/Open';
import { roomsSelectors } from '../../redux/rooms';
import { useSelector } from 'react-redux';
import { fetchCollections } from '../../services/collections-api';

export default function Collections(props) {
    const [show, setShow] = useState(false);
    const [collections, setCollections] = useState([]);

    const [currentCollection, setCurrentCollection] = useState([]);

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

    const closeModal = () => {
        setShow(false);
    };

    useEffect(() => {
        (async function () {
            const { data } = await fetchCollections();
            setCurrentCollection(data[0]);
            setCollections(data);
        })();
    }, [props]);

    useEffect(() => {
        if (show) {
            const showClick = e => {
                console.log('click event works ...');
                if (e.target.id === 'modal') {
                    setShow(false);
                }
            };
            const close = e => {
                console.log('keycode event works ...');
                if (e.keyCode === 27) {
                    setShow(false);
                }
            };
            window.addEventListener('keydown', close);
            window.addEventListener('click', showClick);
            return () => {
                window.removeEventListener('keydown', close);
                window.removeEventListener('click', showClick);
            };
        }
    }, [show]);
    return roomOpened ? (
        <RoomOpened />
    ) : (
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
            <Modal
                show={show}
                onClose={closeModal}
                movies={currentCollection && currentCollection.parts}
            />
        </div>
    );
}
