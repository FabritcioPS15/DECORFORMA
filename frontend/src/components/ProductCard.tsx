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
    <div className="product-card group relative rounded-none bg-white border border-gray-100 transition-all duration-500 ease-in-out hover:shadow-xl">
      <div className="product-card__image relative w-full h-[250px] rounded-none overflow-hidden mb-4 bg-gray-50 border-b border-gray-100">
        {activeImage ? (
          <img
            src={activeImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-50" />
        )}

        <div className="absolute inset-0 bg-decor-navy/5 group-hover:bg-transparent transition-colors duration-500" />

        <div className="product-card__badge absolute left-0 top-4 bg-white text-decor-navy font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-none shadow-md border border-gray-100 border-l-0">
          A medida
        </div>

        {priceText ? (
          <div className="absolute right-0 bottom-4 bg-decor-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-none shadow-md">
            {priceText}
          </div>
        ) : null}
      </div>

      <div className="px-6 pb-6 pt-2 text-center sm:text-left flex flex-col items-center sm:items-start">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-decor-accent mb-2">
          Decorforma
        </div>
        <div className="mt-1 text-lg font-serif text-decor-navy leading-tight group-hover:text-decor-accent transition-colors">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-2 text-sm text-gray-500 leading-relaxed font-light">
            {subtitle}
          </div>
        ) : null}

        {tags?.length ? (
          <div className="mt-5 flex flex-col items-center sm:items-start w-full">
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none border border-gray-200 text-gray-500 group-hover:border-decor-accent/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {variants.length ? (
          <div className="mt-5 flex flex-col items-center sm:items-start w-full">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Color</div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {variants.map((v, idx) => {
                const selected = idx === activeVariant;

                return (
                  <button
                    key={v.name}
                    type="button"
                    className={`h-5 w-5 rounded-none border transition-all duration-200 ${selected
                      ? 'border-decor-navy scale-110'
                      : 'border-gray-200 hover:border-gray-400'
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

        <div className="mt-6">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE + ' Me interesa el producto: ' + title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 rounded-none border border-decor-navy bg-white hover:bg-decor-navy hover:text-white text-decor-navy font-bold text-[11px] uppercase tracking-[0.2em] py-4 transition-all group/btn"
          >
            <FaWhatsapp size={16} className="group-hover/btn:scale-110 transition-transform" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
