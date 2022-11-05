import { ProgressBar } from 'react-loader-spinner'
import style from './Loader.module.css'

export const Loader = () => {
    return <div className={style.loader}>
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'
            visible={true}
        />
    </div>
};

export const RouteLoader = () => {
    return <div className={style.routeLoader}>
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'
            visible={true}
        />
    </div>
};