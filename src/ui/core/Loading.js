import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Loading() {
    return (
        <FontAwesomeIcon icon={faCircleNotch} spin />
    );
}

export default Loading;