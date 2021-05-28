import { useDispatch, useSelector } from 'react-redux';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';

export default function LoginView() {
    const roomOpened = useSelector(roomsSelectors.getIsOpen);

    if (!roomOpened) {
        window.location = '/collections';
    }
    const dispatch = useDispatch();
    const handleExit = () => {
        dispatch(roomsOperations.exit());
    };

    return (
        <>
            <div>
                <button onClick={handleExit}>Закрыть комнату</button>
            </div>
        </>
    );
}
