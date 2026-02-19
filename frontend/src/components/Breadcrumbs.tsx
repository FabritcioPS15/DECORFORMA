import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
    items: {
        label: string;
        to?: string;
    }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link
                to="/"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
                <Home size={14} />
                <span>Inicio</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-white/30" />
                    {item.to ? (
                        <Link
                            to={item.to}
                            className="hover:text-white transition-colors capitalize"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white font-medium capitalize">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
