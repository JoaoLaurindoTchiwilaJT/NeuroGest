function Button(props: { children: React.ReactNode }) {
  return (
    <button className=" gap-5 w-70 h-13 p-4 ml-1 cursor-pointer rounded-r-lg text-white px-5 py-2 font-bold text-center items-center flex ">
      {props.children}
    </button>
  );
}

export default Button;
