import { BsFillArrowLeftCircleFill as BackArrowIcon } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackArrow = ({ path }) => {
    return (
        <>
            <Link to={path} className=" h-full w-full" >
                <BackArrowIcon className=" fixed pt-2 pl-2 z-30 hover:scale-110 transition-all ease-in-out duration-200" size={40} />
            </Link>
        </>
    )
}

export default BackArrow