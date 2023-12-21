let url: string = "https://dummyjson.com/products/5";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

// without strict typing of the response
const getData = async (url: string): Promise<any> => {
  await fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

//getData(url);

// with strict typing of the response
async function getData2(url: string): Promise<Product> {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((json) => json);

  return data;
}

console.log(getData2(url));
