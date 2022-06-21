import { Status } from "./Status";
import active from '../../assets/rocketActive.svg'
import destroyed from '../../assets/rocketDeactivate.svg'
import unknown from '../../assets/rocketUnknown.svg'

export const StatusComponent = () => {
    return (
        <>
            <h2 style={{ color: "#5A5A5A" }}>Capsules Status:</h2>
            <div style={{ margin: "20px", display: 'flex', justifyContent: 'space-evenly' }}>
                <Status img={active} txt={'Active'} gradient={{ backgroundImage: 'linear-gradient(to bottom, #CE9FFC, #7367F0)' }}></Status>
                <Status img={destroyed} txt={'Destroyed'} gradient={{ backgroundImage: 'linear-gradient(to bottom, #65799b, #5e2563)' }}></Status>
                <Status img={unknown} txt={'Unknown'} gradient={{ backgroundImage: 'linear-gradient(to bottom, #7117ea, #ea6060)' }}></Status>
            </div>
        </>
    );
}
