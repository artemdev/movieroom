import { roomsOperations } from '../../redux/rooms';
import { useDispatch } from 'react-redux';
export default function Results() {
    const dispatch = useDispatch();
    const closeRoom = () => {
        console.log('closing room');
        dispatch(roomsOperations.close());
    };
    return (
        <>
            <p> Movies are finished! Time to see the results </p>
            <button onClick={closeRoom}>CLOSE</button>
        </>
    );
}
