import { BsFillArrowLeftCircleFill as BackArrowIcon } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackArrow = ({ path, onClick }) => {
    return (
        <>
            <Link to={path} onClick={onClick} className=" h-full w-full" >
                <BackArrowIcon className=" fixed pt-2 pl-2 z-30 hover:scale-110 transition-all ease-in-out duration-200" size={40} />
            </Link>
        </>
    )
}

export default BackArrow