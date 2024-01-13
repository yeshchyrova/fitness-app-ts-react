interface IHText {
  children: React.ReactNode;
}

const HText = ({ children }: IHText) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">{children}</h2>
  );
};

export default HText;
