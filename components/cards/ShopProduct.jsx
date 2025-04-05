import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { shopping } from "@/models/shopping"
import Link from 'next/link'

const ShopProduct = () => {
  return (
    <>
      {
        shopping.map((item, index) => (
          <Card className="w-96" key={index}>
            <CardHeader shadow={false} floated={false} className="h-64">
              <img
                src={item.img}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                {item.Header}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                 {item.rates}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {item.Description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link href={item.Linktobuy}>
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      }
    </>
  );
}

export default ShopProduct
