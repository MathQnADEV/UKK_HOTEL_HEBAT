export const MENU_LIST = [
    {
        menu: 'Home',
        path: '/'
    },
    {
        menu: 'Kamar',
        path: '/kamar'
    },
    {
        menu: 'Fasilitas',
        path: '/fasilitas'
    },
]

export const ADMIN_LIST = [
    {
        menu: 'kamar',
        path: '/adminkamar'
    },
    {
        menu: 'fasilitas kamar',
        path: '/adminfasilitaskamar'
    },
    {
        menu: 'fasilitas hotel',
        path: '/adminfasilitashotel'
    },
    {
        menu: 'Back to Home',
        path: '/'
    }
]

export const RESEPSIONIS_LIST = [
    {
        menu: 'admin',
      path: '/admin'
    },
    {
        menu: 'Back to Home',
        path: '/'
    }
]

export const JUMLAH_KAMAR = [
  {
    TipeKamar: "Superior",
    JumlahKamar: 32,
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
  {
    TipeKamar: "Deluxe",
    JumlahKamar: 40,
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
];

export const FASILITAS_KAMAR = [
  {
    TipeKamar: "Superior",
    Fasilitas: "TV 32 Inch",
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
  {
    TipeKamar: "Deluxe",
    Fasilitas: "Bath Tub",
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
  {
    TipeKamar: "Deluxe",
    Fasilitas: "Tv 40 inch",
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
  {
    TipeKamar: "Deluxe",
    Fasilitas: "Coffe Maker",
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    ),
  },
];

export const FASILITAS_HOTEL = [
  {
    Fasilitas: "Kolam Renang",
    Keterangan: "Berada di lantai 3 dengan luas 50m persegi",
    image: "",
    Aksi: (
      <div className="flex justify-start items-center">
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300 mr-5">
          ubah
        </button>
        <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
          lihat
        </button>
      </div>
    )
  }
]

export const RESEPSIONIS_CHECK = [
  {
    NamaTamu: "Mr X",
    TanggalCheckIn: "15-01-2022",
    TanggalCheckOut: "17-01-2022",
    Aksi: (
      <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
        Cek In
      </button>
    )
  },
  {
    NamaTamu: "Mr y",
    TanggalCheckIn: "16-01-2022",
    TanggalCheckOut: "17-01-2022",
    Aksi: (
      <button className="bg-purple-300 p-2 rounded-lg text-white hover:bg-purple-700 hover:text-purple-300 ease-in-out duration-300">
        Cek In
      </button>
    )
  },
]