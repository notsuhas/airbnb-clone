import Image from "next/dist/client/image";

function MediumCard({ img, title }) {
	return (
		<div className="cursor-pointer hover:scale-105 transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image
					src={img}
					layout="fill"
					objectFit="contain"
					className="rounded-xl"
				/>
			</div>
			<h2 className="text-2xl mt-3">{title}</h2>
		</div>
	);
}

export default MediumCard;
