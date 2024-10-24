"use client";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
	const [zoomedImage, setZoomedImage] = useState<string | null>(null);

	const openZoomedImage = (imageUrl: string) => {
		setZoomedImage(imageUrl);
	};

	const closeZoomedImage = () => {
		setZoomedImage(null);
	};
	return (
		<div>
			<Carousel>
				<CarouselContent>
					{images.map((image) => (
						<CarouselItem key={image}>
							<Image
								src={image}
								width={1200}
								height={100}
								alt="image"
								onClick={() => openZoomedImage(image)}
								className="cursor-zoom-in"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			{zoomedImage && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex items-center justify-center"
					onKeyDown={closeZoomedImage}
				>
					<Image
						src={zoomedImage}
						width={1500}
						height={100}
						alt="Zoomed Image"
						onClick={closeZoomedImage}
						className="cursor-zoom-out"
					/>
				</div>
			)}
		</div>
	);
};
