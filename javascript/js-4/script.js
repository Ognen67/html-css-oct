console.log("-----------------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);

console.log(fruits);
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits.toString());
// "Banana,Orange,Apple,Mango"

console.log(fruits[2]);
// console.log(fruits.at(3));

console.log(fruits.join("*&"));

// const poppedFruit = fruits.pop();
// console.log(`We removed ${poppedFruit}`);
// console.log(fruits);

const newFruits = ["Kiwi", "Pear"];

const fruitsDeleted = fruits.splice(1, 1);
console.log(fruits);

// console.log("deleted fruits: ", fruitsDeleted);

const poppedFruit = fruits.pop();
console.log(`Go poppnavme ${poppedFruit}`);
console.log(fruits);

fruits.push("Kiwi", "Pear");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Mango");

console.log("-------------");
console.log(fruits);

const fruits2 = ["Orange", "Banana"];
console.log(fruits2);
const mergedFruits = fruits.concat(fruits2);

console.log(mergedFruits);

console.log("-----------COLORS-------------");

const colors = ["blue", "red", "orange"];
const colors2 = ["purple", "yellow"];

const deletedEl = colors.splice(1, 1, colors2);

console.log(colors);
const flatArr = colors.flat();

const nestedArr = [
  1,
  32,
  [542, 123, [54, 1223, 12], 12, [131214, 65]],
  24,
  4,
  [9],
  [7, 6],
];
console.log(nestedArr);
const flattenedArray = nestedArr.flat(1);
console.log(flattenedArray);

const coords = [
  [123123, 66354],
  [3213, 6345],
  [3123, 2452],
];

const boi = ["blue", "red", "orange", "purple", "yellow"];
// forEach

function printColor(boja, index) {
  console.log(`${index}: ${boja}`);
}

boi.forEach((boja, index) => printColor(boja, index));

boi.forEach((boja, index) => {
  console.log(`${index}: ${boja}`);
});

const dolzini = boi
  .filter((boja) => boja.length !== 6)
  .map((boja) => {
    return boja.length;
  });

console.log(dolzini);

const nums = [312, 12, 463, 123, 635, 213, 6, 15, 98, 61];

const numsBig = nums.filter((x) => x);
console.log(numsBig);

const items = [
  {
    price: {
      amount: "47980.0000",
      formatted: "47.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 47980,
        formatted: "47.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "47980.0000",
      formatted: "47.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 47980,
        formatted: "47.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    brand: "Acer",
    id: 743067914,
    name: 'Notebook Dell Latitude 5540 i5-1335U/16GB/512GB SSD/15.6" FHD/FRP/BacklitKB/Ubu',
    slug: "notebook-dell-latitude-5540-i51335u16gb512gb-ssd156-fhdfrpbacklitkbubu-7914",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 38016,
      filename: "79a822430610ae67ad9be01221be484f.jpg",
      path: "https://www.anhoch.com/storage/media/79a822430610ae67ad9be01221be484f.jpg",
    },
    formatted_price: "47.980,00 ден.",
    rating_percent: 0,
    is_in_stock: false,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 38016,
        filename: "79a822430610ae67ad9be01221be484f.jpg",
        path: "https://www.anhoch.com/storage/media/79a822430610ae67ad9be01221be484f.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067914,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067914,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743067914,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "17480.0000",
      formatted: "17.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 17480,
        formatted: "17.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "17480.0000",
      formatted: "17.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 17480,
        formatted: "17.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067661,
    name: 'Notebook Asus Vivobook Go 15 i3-N305/8GB/128GB SSD/15.6" FHD/Win11/Black',
    slug: "notebook-asus-vivobook-go-15-i3n3058gb128gb-ssd156-fhdwin11black-7661",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58288,
      filename: "e1504ga-wb31.jpg",
      path: "https://www.anhoch.com/storage/media/e1504ga-wb31.jpg",
    },
    formatted_price: "17.480,00 ден.",
    rating_percent: 0,
    is_in_stock: false,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58288,
        filename: "e1504ga-wb31.jpg",
        path: "https://www.anhoch.com/storage/media/e1504ga-wb31.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747067661,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067661,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "19480.0000",
      formatted: "19.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 19480,
        formatted: "19.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "19480.0000",
      formatted: "19.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 19480,
        formatted: "19.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068186,
    name: 'Notebook Lenovo IdeaPad Slim 3 i3-1315U/8GB/512GB/15.6" FHD/Arctic Grey',
    slug: "notebook-lenovo-ideapad-slim-3-i31315u8gb512gb156-fhdarctic-grey-8186",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 47758,
      filename: "3-1.jpg",
      path: "https://www.anhoch.com/storage/media/3-1.jpg",
    },
    formatted_price: "19.480,00 ден.",
    rating_percent: 0,
    is_in_stock: false,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 47758,
        filename: "3-1.jpg",
        path: "https://www.anhoch.com/storage/media/3-1.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068186,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "18480.0000",
      formatted: "18.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 18480,
        formatted: "18.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "18480.0000",
      formatted: "18.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 18480,
        formatted: "18.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068187,
    name: 'Notebook Lenovo IdeaPad Slim 3 Ryzen 3 7320U/8GB/512GB/15.6" FHD/Cloud Grey',
    slug: "notebook-lenovo-ideapad-slim-3-ryzen-3-7320u8gb512gb156-fhdcloud-grey-8187",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 47761,
      filename: "82vg00s1rm.jpg",
      path: "https://www.anhoch.com/storage/media/82vg00s1rm.jpg",
    },
    formatted_price: "18.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 47761,
        filename: "82vg00s1rm.jpg",
        path: "https://www.anhoch.com/storage/media/82vg00s1rm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068187,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "59980.0000",
      formatted: "59.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 59980,
        formatted: "59.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "59980.0000",
      formatted: "59.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 59980,
        formatted: "59.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068189,
    name: 'Notebook Lenovo LOQ Gaming Ryzen 5 220 AI/16GB/512GB/RTX 5050 8GB/15.6" FHD IPS G-Sync',
    slug: "notebook-lenovo-loq-gaming-ryzen-5-220-ai16gb512gbrtx-5050-8gb156-fhd-ips-gsync-8189",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 47763,
      filename: "83jg0029rm.jpg",
      path: "https://www.anhoch.com/storage/media/83jg0029rm.jpg",
    },
    formatted_price: "59.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 47763,
        filename: "83jg0029rm.jpg",
        path: "https://www.anhoch.com/storage/media/83jg0029rm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743068189,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068189,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068190,
    name: 'Notebook Acer Extensa EX215-57 i5-13420H/16GB/512GB/15.6" FHD IPS/No OS',
    slug: "notebook-acer-extensa-ex21557-i513420h16gb512gb156-fhd-ipsno-os-8190",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 47740,
      filename: "nx-ejbex-005-2.jpg",
      path: "https://www.anhoch.com/storage/media/nx-ejbex-005-2.jpg",
    },
    formatted_price: "27.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 47740,
        filename: "nx-ejbex-005-2.jpg",
        path: "https://www.anhoch.com/storage/media/nx-ejbex-005-2.jpg",
      },
    ],
    reviews: [],
    actions: [],
  },
  {
    price: {
      amount: "37980.0000",
      formatted: "37.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 37980,
        formatted: "37.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "37980.0000",
      formatted: "37.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 37980,
        formatted: "37.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067937,
    name: 'Notebook Lenovo IdeaPad Slim 5 Intel Core 5 210H/16GB/512GB/14" WUXGA IPS/BacklitKB',
    slug: "notebook-lenovo-ideapad-slim-5-intel-core-5-210h16gb512gb14-wuxga-ipsbacklitkb-7937",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 40979,
      filename: "83j0002prm.jpg",
      path: "https://www.anhoch.com/storage/media/83j0002prm.jpg",
    },
    formatted_price: "37.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 40979,
        filename: "83j0002prm.jpg",
        path: "https://www.anhoch.com/storage/media/83j0002prm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067937,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067937,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743067937,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067937,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "46980.0000",
      formatted: "46.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 46980,
        formatted: "46.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "46980.0000",
      formatted: "46.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 46980,
        formatted: "46.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067943,
    name: 'Notebook Lenovo IdeaPad 5 2-in1 Ryzen AI 5 340/16GB/512GB/14" WUXGA IPS Touch/Pen/BacklitKB',
    slug: "notebook-lenovo-ideapad-5-2in1-ryzen-ai-5-34016gb512gb14-wuxga-ips-touchpenbacklitkb-7943",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41007,
      filename: "ideapad_5_2_in_1_14akp10_ct1_07.jpg",
      path: "https://www.anhoch.com/storage/media/ideapad_5_2_in_1_14akp10_ct1_07.jpg",
    },
    formatted_price: "46.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41007,
        filename: "ideapad_5_2_in_1_14akp10_ct1_07.jpg",
        path: "https://www.anhoch.com/storage/media/ideapad_5_2_in_1_14akp10_ct1_07.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067943,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067943,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743067943,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067943,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "32480.0000",
      formatted: "32.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 32480,
        formatted: "32.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "32480.0000",
      formatted: "32.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 32480,
        formatted: "32.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067945,
    name: 'Notebook Acer Extensa EX215-57 i7-13620H/16GB/512GB/15.6" FHD/USB-C',
    slug: "notebook-acer-extensa-ex21557-i713620h16gb512gb156-fhdusbc-7945",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41028,
      filename: "nx.ejbex.00m-16gb.jpg",
      path: "https://www.anhoch.com/storage/media/nx.ejbex.00m-16gb.jpg",
    },
    formatted_price: "32.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41028,
        filename: "nx.ejbex.00m-16gb.jpg",
        path: "https://www.anhoch.com/storage/media/nx.ejbex.00m-16gb.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067945,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067945,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "46480.0000",
      formatted: "46.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 46480,
        formatted: "46.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "46480.0000",
      formatted: "46.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 46480,
        formatted: "46.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067697,
    name: 'Notebook Lenovo LOQ Gaming i5-12450HX/16GB/512GB/RTX 4050 6GB/15.6" FHD IPS 144Hz/DOS',
    slug: "notebook-lenovo-loq-gaming-i512450hx16gb512gbrtx-4050-6gb156-fhd-ips-144hzdos-7697",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 39423,
      filename: "83lk001yrm.jpg",
      path: "https://www.anhoch.com/storage/media/83lk001yrm.jpg",
    },
    formatted_price: "46.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 39423,
        filename: "83lk001yrm.jpg",
        path: "https://www.anhoch.com/storage/media/83lk001yrm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067697,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067697,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067697,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "29980.0000",
      formatted: "29.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 29980,
        formatted: "29.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "29980.0000",
      formatted: "29.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 29980,
        formatted: "29.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068212,
    name: 'Notebook HP Pavilion 15 i5-1335U/16GB/512GB/15.6" FullHD IPS/Silver/DOS',
    slug: "notebook-hp-pavilion-15-i51335u16gb512gb156-fullhd-ipssilverdos-8212",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 30432,
      filename: "8c9n6ea.jpg",
      path: "https://www.anhoch.com/storage/media/8c9n6ea.jpg",
    },
    formatted_price: "29.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 30432,
        filename: "8c9n6ea.jpg",
        path: "https://www.anhoch.com/storage/media/8c9n6ea.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068212,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067706,
    name: 'Notebook Lenovo IdeaPad Slim 3 i5-13420H/16GB/512GB/15.3" WUXGA IPS/No OS',
    slug: "notebook-lenovo-ideapad-slim-3-i513420h16gb512gb153-wuxga-ipsno-os-7706",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 39629,
      filename: "83k10091rm.jpg",
      path: "https://www.anhoch.com/storage/media/83k10091rm.jpg",
    },
    formatted_price: "27.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 39629,
        filename: "83k10091rm.jpg",
        path: "https://www.anhoch.com/storage/media/83k10091rm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067706,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067706,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743067706,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067706,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "30980.0000",
      formatted: "30.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 30980,
        formatted: "30.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "30980.0000",
      formatted: "30.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 30980,
        formatted: "30.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067707,
    name: 'Notebook Lenovo IdeaPad Slim 3 Ryzen 7 7730U/16GB/512GB/16" WUXGA IPS/No OS',
    slug: "notebook-lenovo-ideapad-slim-3-ryzen-7-7730u16gb512gb16-wuxga-ipsno-os-7707",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 39628,
      filename: "82xr002lrm.jpg",
      path: "https://www.anhoch.com/storage/media/82xr002lrm.jpg",
    },
    formatted_price: "30.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 39628,
        filename: "82xr002lrm.jpg",
        path: "https://www.anhoch.com/storage/media/82xr002lrm.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067707,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067707,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067707,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "24480.0000",
      formatted: "24.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 24480,
        formatted: "24.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "24480.0000",
      formatted: "24.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 24480,
        formatted: "24.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068242,
    name: 'Notebook Acer Aspire Lite AL16-52P i5-1334U/16GB/512GB/16" FHD IPS/No OS',
    slug: "notebook-acer-aspire-lite-al1652p-i51334u16gb512gb16-fhd-ipsno-os-8242",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 47960,
      filename: "nx.j5sex.001(2).jpg",
      path: "https://www.anhoch.com/storage/media/nx.j5sex.001(2).jpg",
    },
    formatted_price: "24.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 47960,
        filename: "nx.j5sex.001(2).jpg",
        path: "https://www.anhoch.com/storage/media/nx.j5sex.001(2).jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743068242,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068242,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "23980.0000",
      formatted: "23.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23980,
        formatted: "23.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "23980.0000",
      formatted: "23.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23980,
        formatted: "23.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067229,
    name: 'Notebook Lenovo IdeaPad Slim 3 i5-12450H/16GB/512GB/15.6" FHD/DOS/UltraSlim/Gray',
    slug: "notebook-lenovo-ideapad-slim-3-i512450h16gb512gb156-fhddosultraslimgray-7229",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 31569,
      filename: "ideapad_slim_3_15iru8_ct1_06.jpg",
      path: "https://www.anhoch.com/storage/media/ideapad_slim_3_15iru8_ct1_06.jpg",
    },
    formatted_price: "23.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 31569,
        filename: "ideapad_slim_3_15iru8_ct1_06.jpg",
        path: "https://www.anhoch.com/storage/media/ideapad_slim_3_15iru8_ct1_06.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067229,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067229,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743067229,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743067229,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "18480.0000",
      formatted: "18.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 18480,
        formatted: "18.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "18480.0000",
      formatted: "18.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 18480,
        formatted: "18.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067742,
    name: 'Notebook Asus VivoBook 14 X1404ZA i3-1215U/8GB/128GB/14" FHD IPS/FP/BT/Win11/Blue',
    slug: "notebook-asus-vivobook-14-x1404za-i31215u8gb128gb14-fhd-ipsfpbtwin11blue-7742",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58296,
      filename: "x1404va-i38128.jpg",
      path: "https://www.anhoch.com/storage/media/x1404va-i38128.jpg",
    },
    formatted_price: "18.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58296,
        filename: "x1404va-i38128.jpg",
        path: "https://www.anhoch.com/storage/media/x1404va-i38128.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067742,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "26980.0000",
      formatted: "26.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 26980,
        formatted: "26.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "26980.0000",
      formatted: "26.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 26980,
        formatted: "26.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068255,
    name: 'Notebook HP Laptop 15 Intel Core 5 120U/16GB/512GB/15.6" FullHD IPS/FreeDOS',
    slug: "notebook-hp-laptop-15-intel-core-5-120u16gb512gb156-fullhd-ipsfreedos-8255",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 48025,
      filename: "c59hnea.jpg",
      path: "https://www.anhoch.com/storage/media/c59hnea.jpg",
    },
    formatted_price: "26.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 48025,
        filename: "c59hnea.jpg",
        path: "https://www.anhoch.com/storage/media/c59hnea.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743068255,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068255,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "23480.0000",
      formatted: "23.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23480,
        formatted: "23.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "23480.0000",
      formatted: "23.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23480,
        formatted: "23.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067745,
    name: 'Notebook Asus VivoBook 14 X1404VA i5-1334U/12GB/256GB/14" FHD IPS/FP/BT/Win11/Blue',
    slug: "notebook-asus-vivobook-14-x1404va-i51334u12gb256gb14-fhd-ipsfpbtwin11blue-7745",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58296,
      filename: "x1404va-i38128.jpg",
      path: "https://www.anhoch.com/storage/media/x1404va-i38128.jpg",
    },
    formatted_price: "23.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58296,
        filename: "x1404va-i38128.jpg",
        path: "https://www.anhoch.com/storage/media/x1404va-i38128.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747067745,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067745,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "27980.0000",
      formatted: "27.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27980,
        formatted: "27.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068002,
    name: 'Notebook Acer Extensa EX215-57 i5-13420H/16GB/512GB/15.6" FHD/USB-C',
    slug: "notebook-acer-extensa-ex21557-i513420h16gb512gb156-fhdusbc-8002",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41028,
      filename: "nx.ejbex.00m-16gb.jpg",
      path: "https://www.anhoch.com/storage/media/nx.ejbex.00m-16gb.jpg",
    },
    formatted_price: "27.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41028,
        filename: "nx.ejbex.00m-16gb.jpg",
        path: "https://www.anhoch.com/storage/media/nx.ejbex.00m-16gb.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743068002,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743068002,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "17480.0000",
      formatted: "17.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 17480,
        formatted: "17.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "17480.0000",
      formatted: "17.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 17480,
        formatted: "17.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067746,
    name: 'Notebook Lenovo IdeaPad Slim 3 i3-N305/8GB/128GB SSD/15.6" FHD/Win11/Grey',
    slug: "notebook-lenovo-ideapad-slim-3-i3n3058gb128gb-ssd156-fhdwin11grey-7746",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 31569,
      filename: "ideapad_slim_3_15iru8_ct1_06.jpg",
      path: "https://www.anhoch.com/storage/media/ideapad_slim_3_15iru8_ct1_06.jpg",
    },
    formatted_price: "17.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 31569,
        filename: "ideapad_slim_3_15iru8_ct1_06.jpg",
        path: "https://www.anhoch.com/storage/media/ideapad_slim_3_15iru8_ct1_06.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747067746,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067746,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "26980.0000",
      formatted: "26.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 26980,
        formatted: "26.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "26980.0000",
      formatted: "26.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 26980,
        formatted: "26.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068006,
    name: 'Notebook HP Pavilion 15 Ryzen 7 7730U/16GB/512GB/15.6" FullHD IPS/DOS/Ceramic White',
    slug: "notebook-hp-pavilion-15-ryzen-7-7730u16gb512gb156-fullhd-ipsdosceramic-white-8006",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41264,
      filename: "b36ftea.jpg",
      path: "https://www.anhoch.com/storage/media/b36ftea.jpg",
    },
    formatted_price: "26.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41264,
        filename: "b36ftea.jpg",
        path: "https://www.anhoch.com/storage/media/b36ftea.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743068006,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743068006,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068006,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "27480.0000",
      formatted: "27.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27480,
        formatted: "27.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "27480.0000",
      formatted: "27.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 27480,
        formatted: "27.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067758,
    name: 'Notebook Acer Aspire 3 Ryzen 7 7730U/16GB/512GB SSD/15.6" FHD IPS/Backlit Kb/DOS',
    slug: "notebook-acer-aspire-3-ryzen-7-7730u16gb512gb-ssd156-fhd-ipsbacklit-kbdos-7758",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58298,
      filename: "zn.n01si.03t.jpg",
      path: "https://www.anhoch.com/storage/media/zn.n01si.03t.jpg",
    },
    formatted_price: "27.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58298,
        filename: "zn.n01si.03t.jpg",
        path: "https://www.anhoch.com/storage/media/zn.n01si.03t.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747067758,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067758,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "25980.0000",
      formatted: "25.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 25980,
        formatted: "25.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "25980.0000",
      formatted: "25.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 25980,
        formatted: "25.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068280,
    name: 'Notebook HP 15 Ryzen 5 7520U/16GB/1TB/15.6" FullHD IPS/USB-C',
    slug: "notebook-hp-15-ryzen-5-7520u16gb1tb156-fullhd-ipsusbc-8280",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 48141,
      filename: "rf5aaxp7rx.jpg",
      path: "https://www.anhoch.com/storage/media/rf5aaxp7rx.jpg",
    },
    formatted_price: "25.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 48141,
        filename: "rf5aaxp7rx.jpg",
        path: "https://www.anhoch.com/storage/media/rf5aaxp7rx.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743068280,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068280,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "49980.0000",
      formatted: "49.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 49980,
        formatted: "49.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "49980.0000",
      formatted: "49.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 49980,
        formatted: "49.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067777,
    name: 'Notebook Acer Nitro 5 Intel Core 5 210H/16GB/512GB/RTX 3050 6GB/15.6" FHD IPS 165Hz Slim/Thunderbolt',
    slug: "notebook-acer-nitro-5-intel-core-5-210h16gb512gbrtx-3050-6gb156-fhd-ips-165hz-slimthunderbolt-7777",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 40223,
      filename: "acer5463.jpg",
      path: "https://www.anhoch.com/storage/media/acer5463.jpg",
    },
    formatted_price: "49.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 40223,
        filename: "acer5463.jpg",
        path: "https://www.anhoch.com/storage/media/acer5463.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067777,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067777,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "56980.0000",
      formatted: "56.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 56980,
        formatted: "56.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "56980.0000",
      formatted: "56.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 56980,
        formatted: "56.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743067778,
    name: 'Notebook Acer Nitro 5 Intel Core 5 210H/16GB/512GB/RTX 4050 6GB/15.6" FHD IPS 165Hz Slim/Thunderbolt',
    slug: "notebook-acer-nitro-5-intel-core-5-210h16gb512gbrtx-4050-6gb156-fhd-ips-165hz-slimthunderbolt-7778",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 40221,
      filename: "14052025104230acer5463.jpg",
      path: "https://www.anhoch.com/storage/media/14052025104230acer5463.jpg",
    },
    formatted_price: "56.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 40221,
        filename: "14052025104230acer5463.jpg",
        path: "https://www.anhoch.com/storage/media/14052025104230acer5463.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743067778,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743067778,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "23480.0000",
      formatted: "23.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23480,
        formatted: "23.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "23480.0000",
      formatted: "23.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 23480,
        formatted: "23.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068034,
    name: 'Notebook Acer Aspire Go 15 Ryzen 5 5625U/16GB/512GB/15.6" FHD IPS/Pure Silver',
    slug: "notebook-acer-aspire-go-15-ryzen-5-5625u16gb512gb156-fhd-ipspure-silver-8034",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41436,
      filename: "nx.j7xex.00d-16gb.jpg",
      path: "https://www.anhoch.com/storage/media/nx.j7xex.00d-16gb.jpg",
    },
    formatted_price: "23.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41436,
        filename: "nx.j7xex.00d-16gb.jpg",
        path: "https://www.anhoch.com/storage/media/nx.j7xex.00d-16gb.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743068034,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743068034,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "34980.0000",
      formatted: "34.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 34980,
        formatted: "34.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "34980.0000",
      formatted: "34.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 34980,
        formatted: "34.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068306,
    name: 'Notebook HP OmniBook 5  i5-1334U/16GB/512GB/16" 2K (1920x1200) IPS/No OS',
    slug: "notebook-hp-omnibook-5--i51334u16gb512gb16-2k-1920x1200-ipsno-os-8306",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58235,
      filename: "omni5.jpg",
      path: "https://www.anhoch.com/storage/media/omni5.jpg",
    },
    formatted_price: "34.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58235,
        filename: "omni5.jpg",
        path: "https://www.anhoch.com/storage/media/omni5.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 743068306,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 743068306,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "42980.0000",
      formatted: "42.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 42980,
        formatted: "42.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "42980.0000",
      formatted: "42.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 42980,
        formatted: "42.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747067796,
    name: 'Notebook MSI Thin 15 i5-13420H/16GB/512GB/RTX3050 4GB/15.6" FHD 144Hz/Backlit Kb/Win11',
    slug: "notebook-msi-thin-15-i513420h16gb512gbrtx3050-4gb156-fhd-144hzbacklit-kbwin11-7796",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 58284,
      filename: "b13ve-3023us.jpg",
      path: "https://www.anhoch.com/storage/media/b13ve-3023us.jpg",
    },
    formatted_price: "42.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 58284,
        filename: "b13ve-3023us.jpg",
        path: "https://www.anhoch.com/storage/media/b13ve-3023us.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747067796,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747067796,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "44980.0000",
      formatted: "44.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 44980,
        formatted: "44.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: "vouchers",
    selling_price: {
      amount: "44980.0000",
      formatted: "44.980,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 44980,
        formatted: "44.980,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 747066522,
    name: 'Notebook Gigabyte A16 Gaming i5-13420H/16GB/512GB SSD/RTX 4050 6GB/16.0" FHD+ 165Hz IPS/Type-C/DOS',
    slug: "notebook-gigabyte-a16-gaming-i513420h16gb512gb-ssdrtx-4050-6gb160-fhd-plus--165hz-ipstypecdos-6522",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 39939,
      filename: "cmhh2ee893sd.jpg",
      path: "https://www.anhoch.com/storage/media/cmhh2ee893sd.jpg",
    },
    formatted_price: "44.980,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 39939,
        filename: "cmhh2ee893sd.jpg",
        path: "https://www.anhoch.com/storage/media/cmhh2ee893sd.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 747066522,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 747066522,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1324,
        campaign_name:
          "Студентски Ваучери 2025, предрезервации - AVTOMATSKI SINK SO voucher products",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_right",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:23:03.000000Z",
        updated_at: "2025-11-04T16:24:36.000000Z",
        action_image: {
          id: 58398,
          filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
          path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1324",
        pivot: {
          product_id: 747066522,
          flash_sale_id: 1324,
        },
        files: [
          {
            id: 58398,
            filename: "150x150_Studentski_Vacuheri_2025_Bedz.png",
            path: "https://www.anhoch.com/storage/media/FO3831wFQ0FrLL1qBvqXO529kpKPRzaoe8WyZC7O.png",
          },
        ],
      },
      {
        id: 1325,
        campaign_name: "Laptopi Predrezervacii, vaucheri",
        start_date: "2025-11-03 00:00:00",
        end_date: "2025-12-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-11-03T15:49:13.000000Z",
        updated_at: "2025-11-03T15:49:34.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1325",
        pivot: {
          product_id: 747066522,
          flash_sale_id: 1325,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
          {
            id: 58399,
            filename: "StudentskI_VoucherI_Category_banner_2025.png",
            path: "https://www.anhoch.com/storage/media/BgEeXDmtm2j9FTj0lOzYMZO08KanKNUYB14ndGHW.png",
          },
        ],
      },
    ],
  },
  {
    price: {
      amount: "25480.0000",
      formatted: "25.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 25480,
        formatted: "25.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price: null,
    special_price_type: null,
    selling_price: {
      amount: "25480.0000",
      formatted: "25.480,00 ден.",
      currency: "MKD",
      inCurrentCurrency: {
        amount: 25480,
        formatted: "25.480,00 ден.",
        currency: "MKD",
      },
    },
    special_price_start: null,
    special_price_end: null,
    options_count: 0,
    id: 743068062,
    name: 'Notebook Acer Aspire Go 15 Ryzen 7 5825U/16GB/512GB/15.6" FHD IPS/Pure Silver',
    slug: "notebook-acer-aspire-go-15-ryzen-7-5825u16gb512gb156-fhd-ipspure-silver-8062",
    in_stock: true,
    manage_stock: true,
    qty: 10,
    new_from: null,
    new_to: null,
    base_image: {
      id: 41436,
      filename: "nx.j7xex.00d-16gb.jpg",
      path: "https://www.anhoch.com/storage/media/nx.j7xex.00d-16gb.jpg",
    },
    formatted_price: "25.480,00 ден.",
    rating_percent: 0,
    is_in_stock: true,
    is_out_of_stock: false,
    is_new: false,
    has_percentage_special_price: false,
    special_price_percent: null,
    files: [
      {
        id: 41436,
        filename: "nx.j7xex.00d-16gb.jpg",
        path: "https://www.anhoch.com/storage/media/nx.j7xex.00d-16gb.jpg",
      },
    ],
    reviews: [],
    actions: [
      {
        id: 1232,
        campaign_name: "Tableti i Laptopi",
        start_date: "2025-08-12 00:00:00",
        end_date: "2027-05-31 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-08-12T07:18:54.000000Z",
        updated_at: "2025-08-12T07:19:09.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1232",
        pivot: {
          product_id: 743068062,
          flash_sale_id: 1232,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
      {
        id: 1256,
        campaign_name: "Цела понуда на лаптопи",
        start_date: "2025-09-03 00:00:00",
        end_date: "2026-04-30 23:59:59",
        image_position: "top_left",
        bonus: 0,
        installments: 0,
        created_at: "2025-09-03T13:16:18.000000Z",
        updated_at: "2025-09-03T13:16:18.000000Z",
        action_image: {
          id: 33580,
          filename: "1024px-Blank1x1.svg.png",
          path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
        },
        action_url: "https://www.anhoch.com/products/actions/1256",
        pivot: {
          product_id: 743068062,
          flash_sale_id: 1256,
        },
        files: [
          {
            id: 33580,
            filename: "1024px-Blank1x1.svg.png",
            path: "https://www.anhoch.com/storage/media/DurXJS0EThDoatJ6Y9p7NjkWy4lUQJT58XTsgmLV.png",
          },
        ],
      },
    ],
  },
];

const filteredProducts = items.filter(
  (product) => product.price.amount > 40000
);

const arrAcer = items.filter(item => item.brand === "Acer").filter().filter()

console.log(filteredProducts.length);

const productNames = items.map((product) => product.name);
console.log(productNames);

// mappedProducts.forEach((product) => {
//   let inStock;
//   if (product.dostapnost === true) {
//     inStock = "DOSTAPEN";
//   } else {
//     inStock = "NEDOSTAPEN";
//   }
//   console.log(
//     `Produktot so ime ${product.ime}, cini ${product.cena} ${product.valuta} i e ${inStock} for marketite na Anhoch ili online`
//   );
// });

const mappedProducts = items;

const arr = items
  .filter((laptop) => laptop.ime.includes("Lenovo"))
  .map((product) => {
    return {
      ime: product.name,
      dostapnost: product.is_in_stock,
      cena: product.price.amount,
      valuta: product.price.currency,
    };
  })
  .forEach((product) =>
    console.log(
      `Produktot so ime ${product.ime}, cini ${product.cena} ${
        product.valuta
      } i e ${
        product.dostapnost === true ? "DOSTAPEN" : "NEDOSTAPEN"
      } for marketite na Anhoch ili online`
    )
  );

//   console.log(arr);
// console.log(mappedProducts);

// spread operator ...

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [7, 8, 9];

nums1.push(...nums2, ...nums3);

console.log(nums1);

const numsCopy = [...nums1];

console.log(`numsCopy: ${numsCopy}`);

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...nums3));

const car = {
  brand: "Toyota",
  year: 2020,
};
const carCopy = { ...car, condition: "good", year: 1989 };

car.year = 2025;
console.log("car", car);
console.log("carCopy", carCopy);

// Destrukturiranje
const { condition, year } = carCopy;
console.log(year);

// Homework
// Print na site elementi od niza so forEach
// Mapiranje na niza od iminja vo iminja so uppercase
// Filter na elementi vo niza pogolemi od x
// Kombinacija na filter i map so koristenje na kompleksni objekti

// BONUS Homework
// (Kako primerot so Anhoch) ekstrahiranje na json niza od objekti, izvrsuvanje na filter, map i forEach vrz niv
// fetch public api
// reading: reduce
