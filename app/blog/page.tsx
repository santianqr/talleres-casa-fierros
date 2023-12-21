import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Blog() {
  return (
    <main className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%]">
        <p>BLOG</p>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
