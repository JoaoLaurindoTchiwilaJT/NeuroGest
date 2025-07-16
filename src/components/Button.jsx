function Button(props) {
  return (
    <button className=" gap-5 w-1xs p-4 ml-1 cursor-pointer rounded-md text-white px-5 py-2 font-bold text-center items-center flex ">
      {...props.children}
    </button>
  );
}

export default Button;
