const menu = [
  {
    category: "Cháo Lươn",
    emoji: "🍲",
    items: [
      {
        name: "Cháo Lươn Trắng",
        desc: "Cháo gạo tám nấu nhừ, lươn đồng phi thơm, hành lá, gừng tươi",
        price: "45.000đ",
      },
      {
        name: "Cháo Lươn Đậu Xanh",
        desc: "Cháo bổ dưỡng kết hợp đậu xanh bùi béo và lươn đồng tươi ngon",
        price: "50.000đ",
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
      },
      {
        name: "Miến Lươn Trộn",
        desc: "Miến trộn dầu phi hành, lươn chiên giòn, rau húng thơm, đậu phộng rang",
        price: "55.000đ",
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
        highlight: true,
      },
      {
        name: "Lươn Xào Lăn",
        desc: "Lươn cắt khúc xào lăn cùng riềng mẻ, mắm tôm Nghệ An đậm đà",
        price: "85.000đ",
      },
      {
        name: "Lươn Xào Măng",
        desc: "Lươn xào cùng măng tươi, lá lốt, ăn kèm bánh mì hoặc cơm trắng",
        price: "80.000đ",
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
      },
      {
        name: "Lươn Kho Tiêu",
        desc: "Lươn kho đậm vị, tiêu đen cay nồng, ăn kèm cơm nóng",
        price: "80.000đ",
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
        highlight: true,
      },
      {
        name: "Lươn Cuốn Lá Lốt Nướng",
        desc: "Lươn băm nhuyễn trộn gia vị cuốn lá lốt, nướng thơm, ăn kèm bún và rau sống",
        price: "90.000đ",
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
        highlight: true,
      },
      {
        name: "Canh Chua Lươn",
        desc: "Canh chua nấu me, cà chua, giá đỗ và lươn tươi, chua thanh mát",
        price: "75.000đ",
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

export default function Home() {
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
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className={`rounded-2xl p-5 flex justify-between gap-4 ${
                        item.highlight
                          ? "bg-amber-800 text-amber-50 shadow-lg"
                          : "bg-white text-stone-800 shadow-sm"
                      }`}
                    >
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
                  ))}
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
    </div>
  );
}
