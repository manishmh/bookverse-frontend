const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20">
      <circle
        fill="#7D55CD"
        stroke="#7D55CD"
        stroke-width="2"
        r="7"
        cx="20"
        cy="10"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle
        fill="#7D55CD"
        stroke="#7D55CD"
        stroke-width="2"
        r="7"
        cx="50"
        cy="10"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle
        fill="#7D55CD"
        stroke="#7D55CD"
        stroke-width="2"
        r="7"
        cx="80"
        cy="10"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
};

export default Loader;
