import styles from './styles.module.css';
import ModalCollection from './ModalCollection';
import React, { useState, useEffect } from 'react';
import { createRoom } from './api';

export default function Modal({ show, onClose, movies }) {
    if (!show) {
        return null;
    }

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
                        onClick={() => createRoom(movies)}
                        className={styles.modalNext}
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
}
