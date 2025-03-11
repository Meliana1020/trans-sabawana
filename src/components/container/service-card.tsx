import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  onClick,
}) => {
  return (
    <Card className="w-full max-w-[400px] min-h-[300px] md:min-h-[350px] lg:min-h-[400px] p-4 bg-zinc-800 border-none shadow-white shadow-sm flex flex-col hover:scale-[1.02] transition-transform duration-300 mx-auto">
      <CardHeader className="p-0 mb-2">
        <div className="w-full h-48 md:h-56 lg:h-60 relative">
          <Image
            src={imageSrc}
            alt="Card Header Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardHeader>

      <div className="flex flex-col flex-grow px-2 mt-2">
        <CardTitle className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-400 flex-grow text-sm md:text-base line-clamp-4 md:line-clamp-5">
          {description}
        </CardDescription>
      </div>

      <CardFooter className="p-0 mt-2 border-t border-zinc-600 pt-3">
        {onClick ? (
          <button
            type="button"
            onClick={onClick}
            className="w-full text-center text-sm md:text-base text-blue-500 hover:text-blue-400 
            transition-colors duration-200 font-medium p-1"
          >
            Lihat Selengkapnya →
          </button>
        ) : (
          <Link
            href={link || "#"}
            className="w-full text-center text-sm md:text-base text-blue-500 hover:text-blue-400 
            transition-colors duration-200 font-medium p-1"
          >
            Lihat Selengkapnya →
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;