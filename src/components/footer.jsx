//dependency
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-gray-800">
            <div className="container mx-auto p-2 flex">
                <div className="flex-auto text-gray-500 text-sm text-center">
                    <p>Created by Linh Vũ. <span>&copy;</span> 2022</p>
                </div>
            </div>
        </div>
    )
}