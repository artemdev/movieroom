import styles from './styles.module.css';
import ModalCollection from './modalCollection';
import React, { useState, useEffect } from 'react';
import fetchCollection from './api';
// require('dotenv').config();
// console.log(process.env.MOVIES_API_KEY); undefined :(

export default function Modal({ show, onClose, movies }) {
    if (!show) {
        return null;
    }
    console.log(movies);
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalBody}>
                    {movies &&
                        movies.map((movie, i) => (
                            <div key={i} className={styles.modalCollectionBody}>
                                <ModalCollection movie={movie} />
                            </div>
                        ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.modalClose}>
                        Отмена
                    </button>
                    <button
                        onClick={fetchCollection}
                        className={styles.modalNext}
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
}
