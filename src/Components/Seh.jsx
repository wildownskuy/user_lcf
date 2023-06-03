export default function Seh() {
  return (
    <div className="bg-white ">
      <div className=" py-0 mx-auto rounded-lg  grid max-w-2xl grid-rows-1 grid-flow-col gap-8 gap-y-16  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight pb-5 border-b-8  border-yellow-600 text-textColor sm:text-4xl">
            Wisata Kuliner Yoyakarta
          </h2>
          <p className="mt-16 text-gray-500 text-start text-lg">
            <strong>Y</strong>ogyakarta.Selain dikenal sebagai kota pelajar,
            kota ini juga memiliki segudang kuliner yang dapat kita temui.
            <br />
            Salah satunya adalah Gudeg.Makanan yang terbuat dari buah nangka itu
            menjadi makanan khas Yogyakarta, dan masih banyak lagi.
            <br />
            Berikut adalah kumpulan kuliner khas jogja yang menurut tim Madang
            ombe menarik untuk di coba.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 row-span-3 gap-4  sm:gap-10 lg:gap-112  ">
          <img
            src="g1.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-bl-3xl rounded-3xl   "
          />
        </div>
      </div>
    </div>
  );
}
