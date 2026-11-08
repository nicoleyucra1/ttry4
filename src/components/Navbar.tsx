import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isAbsolute } from 'path';

const APP_NAME = 'Sparkyroll';
const HOME = '/animes';
const LINKS = [
    { to: '/albums', label: 'Albums' },
    { to: '/favorites', label: 'Favoritos' },
]

export default function NavBar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bgindigo-500 hover:text-white'
        }`;

    return (
        <nav className="bg-indigo-600 shadow">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justifybetween">
                <Link to={HOME} className="text-xl font-bold text-white">{APP_NAME}
                </Link>
                <div className="flex items-center gap-1">
                    {LINKS.map((l) => (
                        <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}
                        </NavLink>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="ml-3 px-3 py-2 rounded-lg text-sm font-medium bgwhite/10 text-white hover:bg-white/20"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )

}