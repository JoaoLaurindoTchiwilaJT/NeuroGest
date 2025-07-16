function Button(props) {
  return (
    <button className="bg-white gap-5 w-1xs p-4 ml-1 cursor-pointer rounded-md text-green-300 px-15 py-2 font-bold text-center items-center flex ">
      {...props.children}
    </button>
  );
}

export default Button;
