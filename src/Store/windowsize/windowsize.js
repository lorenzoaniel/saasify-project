import { createSlice } from "@reduxjs/toolkit";

export const windowSizeSlice = createSlice({
	name: "windowsize",
	initialState: {
		dynamicWidth: window.innerWidth,
		dynamicHeight: window.innerHeight,
  },
  reducers: {
    changeWidth: (state) => {
      useEffect(() => {
				window.addEventListener("resize", setDimension);

				return () => {
					window.removeEventListener("resize", setDimension);
				};
			}, [screenSize]);
    },
  }
});
