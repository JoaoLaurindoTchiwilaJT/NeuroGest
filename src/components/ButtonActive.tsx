function Button(props) {
  return (
    <button className="bg-white w-70 h-13  justify-evenly cursor-pointer rounded-r-lg text-lg font-medium text-green-300  text-center items-center flex ">
      {...props.children}
    </button>
  );
}

export default Button;
