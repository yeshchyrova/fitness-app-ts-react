import { IClass } from "@/shared/types";

const Class = ({ name, description, image }: IClass) => {
  const overlayStyles = `p-5 absolute z-29 flex h-[353px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[353px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} className="w-full h-full"/>
    </li>
  );
};

export default Class;
