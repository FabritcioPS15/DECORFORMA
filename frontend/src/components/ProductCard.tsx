import { useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_MESSAGE, WA_NUMBER } from '../data/site';

type ProductCardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  tags?: string[];
  priceFrom?: number;
  colorVariants?: {
    name: string;
    hex: string;
    image: string;
  }[];
};

export default function ProductCard({
  title,
  subtitle,
  image,
  tags,
  priceFrom,
  colorVariants,
}: ProductCardProps) {
  const priceText = useMemo(() => {
    if (typeof priceFrom !== 'number') return null;
    const formatted = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(priceFrom);
    return `Desde S/ ${formatted}`;
  }, [priceFrom]);

  const variants = useMemo(() => {
    if (colorVariants?.length) return colorVariants;
    return [];
  }, [colorVariants]);

  const [activeVariant, setActiveVariant] = useState(0);
  const activeImage = variants[activeVariant]?.image ?? image;

  return (
    <div className="product-card group relative rounded-2xl bg-white p-1 shadow-[rgba(100,100,111,0.2)_0px_50px_30px_-20px] transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="product-card__image relative w-full h-[170px] rounded-xl rounded-tr-[3rem] overflow-hidden mb-4 bg-[#F4F8FC]">
        {activeImage ? (
          <img
            src={activeImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#F4F8FC]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="product-card__badge absolute left-3 bottom-3 bg-white/95 text-[#0B2545] font-extrabold text-xs px-3 py-2 rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_0px_15px_0px]">
          A medida
        </div>

        {priceText ? (
          <div className="absolute right-3 bottom-3 bg-white/95 text-[#1A8FBB] font-extrabold text-xs px-3 py-2 rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_0px_15px_0px]">
            {priceText}
          </div>
        ) : null}
      </div>

      <label className="product-card-fav absolute top-3 right-3 w-[20px] h-[20px] cursor-pointer">
        <input type="checkbox" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
        </svg>
      </label>

      <div className="px-4 pb-4">
        <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
          Decorforma
        </div>
        <div className="mt-1 text-sm font-extrabold text-[#0B2545] leading-tight">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-1 text-xs text-gray-500 leading-relaxed">
            {subtitle}
          </div>
        ) : null}

        {tags?.length ? (
          <div className="mt-4">
            <div className="text-[11px] font-bold uppercase text-gray-400">Detalles</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E8F6FB] text-[#0F6E95]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {variants.length ? (
          <div className="mt-4">
            <div className="text-[11px] font-bold uppercase text-gray-400">Color</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {variants.map((v, idx) => {
                const selected = idx === activeVariant;

                return (
                  <button
                    key={v.name}
                    type="button"
                    className={`h-6 w-6 rounded-full border-2 transition-all duration-200 ${selected
                      ? 'border-[#0B2545] scale-[1.02]'
                      : 'border-black/20 hover:border-black/40'
                      }`}
                    style={{ backgroundColor: v.hex }}
                    aria-label={`Color ${v.name}`}
                    onClick={() => setActiveVariant(idx)}
                  />
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex gap-2">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-[1.1rem] rounded-b-xl bg-[#1A8FBB] hover:bg-[#0F6E95] text-white font-extrabold text-sm py-2.5 transition-colors group"
          >
            <FaWhatsapp size={18} className="group-hover:rotate-12 transition-transform" />
            Cotiza
          </a>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[46px] inline-flex items-center justify-center rounded-[1.1rem] rounded-b-xl bg-[#25D366] hover:bg-[#1fba57] transition-colors group"
            aria-label="Cotizar por WhatsApp"
          >
            <FaWhatsapp size={18} className="text-white group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
