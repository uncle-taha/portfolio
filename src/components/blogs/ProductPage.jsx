import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "AirPods 4",
    subtitle: "액티브 노이즈 캔슬링 모델",
    image: "/placeholder.svg?height=200&width=200",
    price: 269000,
    colors: [{ name: "White", value: "#ffffff" }],
    tag: "무료 각인",
  },
  {
    id: 2,
    name: "AirPods Pro 2",
    image: "/placeholder.svg?height=200&width=200",
    price: 349000,
    colors: [{ name: "White", value: "#ffffff" }],
    tag: "무료 각인",
  },
  {
    id: 3,
    name: "Powerbeats Pro 2",
    subtitle: "고성능 이어버드 — 일렉트릭 오렌지",
    image: "/placeholder.svg?height=200&width=200",
    price: 369000,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#888888" },
      { name: "Blue", value: "#4a90e2" },
      { name: "Orange", value: "#ff9500" },
    ],
    badge: "New",
  },
  {
    id: 4,
    name: "AirPods Max",
    subtitle: "미드나이트",
    image: "/placeholder.svg?height=200&width=200",
    price: 769000,
    colors: [
      { name: "Space Gray", value: "#333333" },
      { name: "Silver", value: "#e0e0e0" },
      { name: "Sky Blue", value: "#a0c4e2" },
      { name: "Pink", value: "#f7cbc6" },
      { name: "Green", value: "#b8c8b4" },
    ],
    tag: "무료 각인",
  },
  {
    id: 5,
    name: "Beats Solo 4",
    subtitle: "온이어 Wireless 헤드폰 — 클라우드 핑크",
    image: "/placeholder.svg?height=200&width=200",
    price: 269000,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#ffffff" },
      { name: "Blue", value: "#4a90e2" },
    ],
  },
  {
    id: 6,
    name: "Beats Studio Pro",
    subtitle: "스페이스 그레이",
    image: "/placeholder.svg?height=200&width=200",
    price: 219000,
    colors: [{ name: "Space Gray", value: "#333333" }],
  },
];

function ProductCard({ product }) {
  return (
    <div className="min-w-[250px] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex-shrink-0">
      <div className="relative pt-[100%] mb-4">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      {product.badge && (
        <span className="text-orange-500 text-sm mb-1 block">
          {product.badge}
        </span>
      )}
      {product.tag && (
        <span className="text-red-500 text-xs mb-1 block">{product.tag}</span>
      )}
      <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
      {product.subtitle && (
        <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
      )}
      <p className="font-bold text-gray-900 mt-auto">
        ₩{product.price.toLocaleString()}
      </p>
    </div>
  );
}

export default function ProductsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow px-2 py-1 rounded-full"
      >
        ◀
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 py-6 scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow px-2 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
