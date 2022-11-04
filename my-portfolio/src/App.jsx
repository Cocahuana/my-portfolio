import {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import getTestingText from "./services/actions/cart/index";
import Home from "./Pages/Home/Home";
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(getTestingText());
		};
	}, [dispatch]);

	const existText = useSelector((state) => state.cart.text);
	return (
		<div>
			{existText ? <h2>{existText}</h2> : <h2>Nop</h2>}
			<Home />
		</div>
	);
}

export default App;
