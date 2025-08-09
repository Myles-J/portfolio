"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
	const [zoomedImage, setZoomedImage] = useState<string | null>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const previousFocusRef = useRef<HTMLElement | null>(null);

	const openZoomedImage = (imageUrl: string) => {
		previousFocusRef.current = document.activeElement as HTMLElement;
		setZoomedImage(imageUrl);
	};

	const closeZoomedImage = () => {
		setZoomedImage(null);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") {
			closeZoomedImage();
		}
	};

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			closeZoomedImage();
		}
	};

	// Manage focus when overlay opens/closes
	useEffect(() => {
		if (zoomedImage && overlayRef.current) {
			overlayRef.current.focus();
		} else if (previousFocusRef.current) {
			previousFocusRef.current.focus();
		}
	}, [zoomedImage]);

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
					ref={overlayRef}
					role="dialog"
					aria-modal="true"
					aria-label="Zoomed image view"
					tabIndex={-1}
					className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
					onKeyDown={handleKeyDown}
					onClick={handleBackdropClick}
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
