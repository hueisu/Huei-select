import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Base from "@/layout/base";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: "product" }).then(({ items }) => {
      setProducts(items);
    });
  }, []);

  return (
    <Base>
      {products &&
        products.map(({ fields }) => {
          return (
            <Fragment key={fields.id}>
              <div className="product-container">
                <Image
                  src={"https:" + fields.image.fields.file.url}
                  alt={fields.image.fields.title}
                  fill={true}
                  placeholder="blur"
                  blurDataURL="/blur.jpg"
                />
                <div>{fields.name}</div>
              </div>
            </Fragment>
          );
        })}
    </Base>
  );
}
