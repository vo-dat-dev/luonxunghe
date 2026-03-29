"use client";

import { useState } from "react";

const menu = [
  {
    category: "Cháo Lươn",
    emoji: "🍲",
    items: [
      {
        name: "Cháo Lươn Trắng",
        desc: "Cháo gạo tám nấu nhừ, lươn đồng phi thơm, hành lá, gừng tươi",
        price: "45.000đ",
        priceNum: 45000,
      },
      {
        name: "Cháo Lươn Đậu Xanh",
        desc: "Cháo bổ dưỡng kết hợp đậu xanh bùi béo và lươn đồng tươi ngon",
        price: "50.000đ",
        priceNum: 50000,
      },
    ],
  },
  {
    category: "Miến Lươn",
    emoji: "🍜",
    items: [
      {
        name: "Miến Lươn Nước",
        desc: "Miến dong trong vắt, nước dùng ngọt từ xương heo, lươn xào sả ớt",
        price: "55.000đ",
        priceNum: 55000,
      },
      {
        name: "Miến Lươn Trộn",
        desc: "Miến trộn dầu phi hành, lươn chiên giòn, rau húng thơm, đậu phộng rang",
        price: "55.000đ",
        priceNum: 55000,
      },
    ],
  },
  {
    category: "Lươn Xào",
    emoji: "🥘",
    items: [
      {
        name: "Lươn Xào Sả Ớt",
        desc: "Đặc sản xứ Nghệ – lươn xào khô với sả, ớt tươi, nghệ vàng thơm lừng",
        price: "85.000đ",
        priceNum: 85000,
        highlight: true,
      },
      {
        name: "Lươn Xào Lăn",
        desc: "Lươn cắt khúc xào lăn cùng riềng mẻ, mắm tôm Nghệ An đậm đà",
        price: "85.000đ",
        priceNum: 85000,
      },
      {
        name: "Lươn Xào Măng",
        desc: "Lươn xào cùng măng tươi, lá lốt, ăn kèm bánh mì hoặc cơm trắng",
        price: "80.000đ",
        priceNum: 80000,
      },
    ],
  },
  {
    category: "Lươn Um & Kho",
    emoji: "🍛",
    items: [
      {
        name: "Lươn Um Chuối Đậu",
        desc: "Lươn um mềm rục cùng chuối xanh, đậu phụ, nước dùng mắm tôm thơm nức",
        price: "90.000đ",
        priceNum: 90000,
      },
      {
        name: "Lươn Kho Tiêu",
        desc: "Lươn kho đậm vị, tiêu đen cay nồng, ăn kèm cơm nóng",
        price: "80.000đ",
        priceNum: 80000,
      },
    ],
  },
  {
    category: "Lươn Nướng",
    emoji: "🔥",
    items: [
      {
        name: "Lươn Nướng Than Hoa",
        desc: "Lươn tươi ướp mắm, mật ong, sả nướng trên than hoa, chấm muối ớt chanh",
        price: "95.000đ",
        priceNum: 95000,
        highlight: true,
      },
      {
        name: "Lươn Cuốn Lá Lốt Nướng",
        desc: "Lươn băm nhuyễn trộn gia vị cuốn lá lốt, nướng thơm, ăn kèm bún và rau sống",
        price: "90.000đ",
        priceNum: 90000,
      },
    ],
  },
  {
    category: "Súp & Canh",
    emoji: "🥣",
    items: [
      {
        name: "Súp Lươn",
        desc: "Súp lươn trứ danh xứ Nghệ, nước dùng sánh mịn, hành phi vàng ươm",
        price: "50.000đ",
        priceNum: 50000,
        highlight: true,
      },
      {
        name: "Canh Chua Lươn",
        desc: "Canh chua nấu me, cà chua, giá đỗ và lươn tươi, chua thanh mát",
        price: "75.000đ",
        priceNum: 75000,
      },
    ],
  },
];

const highlights = [
  { icon: "🌾", title: "Lươn Đồng Tươi", desc: "Lươn đồng chọn lọc tươi sống mỗi ngày từ các vùng quê xứ Nghệ" },
  { icon: "🌶️", title: "Gia Vị Xứ Nghệ", desc: "Tương Nam Đàn, mắm tôm Nghệ An, ớt xiêm đặc trưng miền Trung" },
  { icon: "👨‍🍳", title: "Bếp Truyền Thống", desc: "Công thức gia truyền hơn 30 năm, giữ trọn hương vị quê hương" },
  { icon: "🏡", title: "Không Gian Ấm Cúng", desc: "Thiết kế theo phong cách làng quê Nghệ An, ấm áp và thân thiện" },
];

// Flatten all items for lookup
const allItems = menu.flatMap((s) => s.items);

function formatPrice(num: number) {
  return num.toLocaleString("vi-VN") + "đ";
}

export default function Home() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartEntries = Object.entries(cart).filter(([, qty]) => qty > 0);

  const totalPrice = cartEntries.reduce((sum, [name, qty]) => {
    const item = allItems.find((i) => i.name === name);
    return sum + (item ? item.priceNum * qty : 0);
  }, 0);

  function add(name: string) {
    setCart((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  }

  function remove(name: string) {
    setCart((prev) => {
      const qty = (prev[name] ?? 0) - 1;
      if (qty <= 0) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return { ...prev, [name]: qty };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function buildZaloMessage() {
    const lines = cartEntries.map(([name, qty]) => {
      const item = allItems.find((i) => i.name === name)!;
      return `- ${name} x${qty} = ${formatPrice(item.priceNum * qty)}`;
    });
    return [
      "Xin chào, tôi muốn đặt món:",
      ...lines,
      `Tổng: ${formatPrice(totalPrice)}`,
      phone ? `SĐT: ${phone}` : "",
      email ? `Email: ${email}` : "",
      note ? `Ghi chú: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleCallZalo() {
    const msg = encodeURIComponent(buildZaloMessage());
    window.open(`https://zalo.me/0967300515?text=${msg}`, "_blank");
  }

  function resetOrder() {
    setCart({});
    setPhone("");
    setEmail("");
    setNote("");
    setSubmitted(false);
    setShowModal(false);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐍</span>
            <span className="font-bold text-lg tracking-wide">Lươn Xứ Nghệ</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-amber-300 transition-colors">Giới thiệu</a>
            <a href="#menu" className="hover:text-amber-300 transition-colors">Thực đơn</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-amber-50 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Đặc Sản Miền Trung
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Lươn Xứ Nghệ
          </h1>
          <p className="text-amber-100 text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Hương vị chân thật của vùng đất xứ Nghệ – nơi những con lươn đồng
            tươi ngon gặp gỡ gia vị truyền thống đậm đà.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-amber-400 text-amber-900 font-bold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors"
            >
              Xem thực đơn
            </a>
            <a
              href="#contact"
              className="border border-amber-400 text-amber-300 font-semibold px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
            >
              Đặt bàn ngay
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-center text-stone-500 mb-12 max-w-xl mx-auto">
            Chúng tôi mang đến trải nghiệm ẩm thực xứ Nghệ chân thực nhất, từ nguyên liệu đến cách chế biến.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="text-center p-6 rounded-2xl bg-amber-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-bold text-amber-900 mb-2">{h.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-6 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Thực Đơn
          </h2>
          <p className="text-center text-stone-500 mb-14 max-w-xl mx-auto">
            Các món lươn đặc sản được chế biến theo công thức gia truyền xứ Nghệ,
            giữ trọn hương vị quê hương.
          </p>
          <div className="space-y-14">
            {menu.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{section.emoji}</span>
                  <h3 className="text-2xl font-bold text-amber-800">
                    {section.category}
                  </h3>
                  <div className="flex-1 h-px bg-amber-200 ml-2" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.items.map((item) => {
                    const qty = cart[item.name] ?? 0;
                    return (
                      <div
                        key={item.name}
                        className={`rounded-2xl p-5 flex flex-col gap-3 ${
                          item.highlight
                            ? "bg-amber-800 text-amber-50 shadow-lg"
                            : "bg-white text-stone-800 shadow-sm"
                        }`}
                      >
                        <div className="flex justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-base">{item.name}</h4>
                              {item.highlight && (
                                <span className="text-xs bg-amber-400 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                                  Đặc biệt
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-sm leading-relaxed ${
                                item.highlight ? "text-amber-200" : "text-stone-500"
                              }`}
                            >
                              {item.desc}
                            </p>
                          </div>
                          <div
                            className={`font-bold text-base shrink-0 ${
                              item.highlight ? "text-amber-300" : "text-amber-700"
                            }`}
                          >
                            {item.price}
                          </div>
                        </div>

                        {/* Add to order controls */}
                        <div className="flex items-center gap-3">
                          {qty === 0 ? (
                            <button
                              onClick={() => add(item.name)}
                              className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
                                item.highlight
                                  ? "bg-amber-400 text-amber-900 hover:bg-amber-300"
                                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                              }`}
                            >
                              + Thêm vào đơn
                            </button>
                          ) : (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => remove(item.name)}
                                className={`w-8 h-8 rounded-full font-bold text-lg flex items-center justify-center transition-colors ${
                                  item.highlight
                                    ? "bg-amber-700 text-amber-200 hover:bg-amber-600"
                                    : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                                }`}
                              >
                                −
                              </button>
                              <span className={`font-bold text-base w-5 text-center ${item.highlight ? "text-amber-50" : "text-stone-800"}`}>
                                {qty}
                              </span>
                              <button
                                onClick={() => add(item.name)}
                                className={`w-8 h-8 rounded-full font-bold text-lg flex items-center justify-center transition-colors ${
                                  item.highlight
                                    ? "bg-amber-400 text-amber-900 hover:bg-amber-300"
                                    : "bg-amber-500 text-white hover:bg-amber-600"
                                }`}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-amber-900 text-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tìm Chúng Tôi</h2>
          <p className="text-amber-200 mb-12 text-lg">
            Đặt bàn trước để có trải nghiệm tốt nhất. Chúng tôi luôn sẵn sàng phục vụ bạn!
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold mb-1">Địa chỉ</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=93FJ%2B3J+Vung+Tau%2C+Ho+Chi+Minh%2C+Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 text-sm hover:text-amber-300 underline underline-offset-2 transition-colors"
              >
                F7 Bến Đình 3, Bến Đình<br />Vũng Tàu, Hồ Chí Minh
              </a>
            </div>
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold mb-1">Điện thoại</h3>
              <p className="text-amber-200 text-sm">0967.300.515<br />0366.374.576</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-semibold mb-1">Giờ mở cửa</h3>
              <p className="text-amber-200 text-sm">Thứ 2 – Chủ nhật<br />06:00 – 22:00</p>
            </div>
          </div>
          <a
            href="tel:0967300515"
            className="inline-block bg-amber-400 text-amber-900 font-bold px-10 py-3 rounded-full hover:bg-amber-300 transition-colors"
          >
            Gọi đặt bàn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-400 text-sm py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Lươn Xứ Nghệ. Hương vị quê hương, mãi trong tim.</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=93FJ%2B3J+Vung+Tau%2C+Ho+Chi+Minh%2C+Vietnam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <span>📍</span>
            <span>F7 Bến Đình 3, Bến Đình, Vũng Tàu, Hồ Chí Minh 70000</span>
          </a>
        </div>
      </footer>

      {/* Floating cart button */}
      {totalItems > 0 && (
        <button
          onClick={() => { setSubmitted(false); setShowModal(true); }}
          className="fixed bottom-6 right-6 z-40 bg-amber-500 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:bg-amber-400 transition-colors flex items-center gap-3"
        >
          <span className="text-lg">🛒</span>
          <span>{totalItems} món</span>
          <span className="bg-amber-700 px-2 py-0.5 rounded-full text-sm">{formatPrice(totalPrice)}</span>
        </button>
      )}

      {/* Order modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-4">
          <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-stone-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-amber-900">
                {submitted ? "Đặt hàng thành công!" : "Xác nhận đơn hàng"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-stone-400 hover:text-stone-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="px-6 pb-6 pt-4">
              {submitted ? (
                /* Success state */
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-stone-700 mb-2 font-semibold">Cảm ơn bạn đã đặt hàng!</p>
                  <p className="text-stone-500 text-sm mb-6">
                    Chúng tôi sẽ liên hệ xác nhận qua số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất.
                  </p>
                  <div className="bg-amber-50 rounded-2xl p-4 text-left mb-6 text-sm text-stone-700 space-y-1">
                    {cartEntries.map(([name, qty]) => {
                      const item = allItems.find((i) => i.name === name)!;
                      return (
                        <div key={name} className="flex justify-between">
                          <span>{name} × {qty}</span>
                          <span className="text-amber-700 font-medium">{formatPrice(item.priceNum * qty)}</span>
                        </div>
                      );
                    })}
                    <div className="border-t border-amber-200 pt-2 mt-2 flex justify-between font-bold text-amber-900">
                      <span>Tổng cộng</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleCallZalo}
                      className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-400 transition-colors"
                    >
                      Nhắn tin Zalo để xác nhận
                    </button>
                    <button
                      onClick={resetOrder}
                      className="w-full border border-stone-200 text-stone-600 font-semibold py-3 rounded-full hover:bg-stone-50 transition-colors"
                    >
                      Đặt đơn mới
                    </button>
                  </div>
                </div>
              ) : (
                /* Order form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Order summary */}
                  <div>
                    <h3 className="font-semibold text-stone-700 mb-3">Món đã chọn</h3>
                    <div className="space-y-2">
                      {cartEntries.map(([name, qty]) => {
                        const item = allItems.find((i) => i.name === name)!;
                        return (
                          <div key={name} className="flex items-center gap-3 bg-amber-50 rounded-xl px-4 py-2">
                            <div className="flex-1 text-sm font-medium text-stone-800">{name}</div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                type="button"
                                onClick={() => remove(name)}
                                className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-600 font-bold hover:bg-stone-100 transition-colors flex items-center justify-center"
                              >
                                −
                              </button>
                              <span className="w-5 text-center font-bold text-stone-800">{qty}</span>
                              <button
                                type="button"
                                onClick={() => add(name)}
                                className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors flex items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-amber-700 font-semibold text-sm w-20 text-right shrink-0">
                              {formatPrice(item.priceNum * qty)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between font-bold text-amber-900 px-4 pt-3 border-t border-amber-100 mt-3">
                      <span>Tổng cộng</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-stone-700">Thông tin liên hệ</h3>
                    <div>
                      <label className="block text-sm text-stone-600 mb-1" htmlFor="phone">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912 345 678"
                        className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-stone-600 mb-1" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-stone-600 mb-1" htmlFor="note">
                        Ghi chú
                      </label>
                      <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Yêu cầu đặc biệt, dị ứng thực phẩm..."
                        rows={2}
                        className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white font-bold py-3.5 rounded-full hover:bg-amber-400 transition-colors text-base"
                  >
                    Gửi đơn hàng
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
