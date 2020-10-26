import React from "react";
import styled from "styled-components";

const LogoStyle = styled.svg`
  fill: var(--forestgreen);
  width: 150px;
  height: auto;
  margin: 0;
`;

const Logotype = () => (
  <LogoStyle viewBox="0 0 140 140">
    <path
      d="M125.6,11.4c-1.3-2.5-2.5-4.7,0.5-7.7c0.5-0.5,1.2-0.4,1.7,0c0.4,0.5,0.4,1.2,0,1.6c-1.8,1.8-1,3.2-0.1,4.9
	c1.3,2.5,2.9,5.3,0.3,9.8c-0.3,0.6-1,0.8-1.6,0.5s-0.8-1-0.5-1.6c0,0,0,0,0,0C127.8,15.6,126.6,13.4,125.6,11.4z M104.3,18.9
	c-0.3,0.6-0.1,1.3,0.4,1.6c0.6,0.3,1.3,0.2,1.6-0.4c2.6-4.5,1.1-7.3-0.3-9.8c-0.9-1.7-1.7-3.1,0.1-4.9c0.4-0.5,0.4-1.2,0-1.6
	c-0.5-0.5-1.2-0.5-1.7,0c-3,3-1.8,5.2-0.5,7.7C105,13.4,106.2,15.6,104.3,18.9z M138.8,25.1C138.8,25.1,138.8,25.1,138.8,25.1
	c0,0.1,0,0.1,0,0.1c-0.3,6.7-1.9,12.6-5.1,17.4c-3.3,4.8-8.2,8.5-15.1,10.7l-0.1,0v3.3c0,0.3-0.2,0.5-0.5,0.5H97.4
	c-0.3,0-0.6-0.3-0.6-0.6v-3.2c-0.1,0-0.1-0.1-0.2-0.1c-6.4-3-10.9-7-13.9-11.7c-3-5-4.6-10.6-4.7-16.4c0-0.6,0.4-1.1,1-1.2
	c0,0,0,0,0,0h0v0h5.8L72,12.9c-0.1-0.1-0.1-0.1-0.2-0.2v0c-1.2-1.3-1.5-3.2-1-4.9c0.3-0.7,0.7-1.4,1.3-2c2-1.9,5.1-1.9,7.1-0.1l0,0
	L100.4,24h37.3C138.3,24,138.8,24.5,138.8,25.1z M88.2,23.8h8.7l-19-16.3l0,0c-0.8-0.8-2-1-3-0.7C74.4,7,74,7.2,73.6,7.5
	c-0.3,0.3-0.6,0.7-0.7,1.1c-0.3,0.9-0.1,1.9,0.5,2.7L88.2,23.8z M136.6,26.3H80.3c0.2,5,1.7,9.8,4.3,14l0,0
	c3.1,4.8,7.6,8.5,12.8,10.9h20.7c6.4-2.1,10.9-5.4,13.8-9.8C134.8,37.2,136.2,32.2,136.6,26.3z M122.3,45.3c0.4-0.4,0.8-0.8,1.1-1.3
	s0.7-0.9,1.1-1.4c0.3-0.4,0.2-0.9-0.2-1.2s-0.9-0.2-1.2,0.2v0c-0.3,0.5-0.7,0.9-1,1.3c-0.3,0.4-0.7,0.8-1.1,1.2c0,0,0,0-0.1,0.1
	c-0.3,0.3-0.3,0.9,0.1,1.2S122,45.6,122.3,45.3z M125,40.4c0.4,0.2,0.9,0.1,1.1-0.3c0.6-1.1,1.1-2.1,1.6-3.3
	c0.5-1.1,0.9-2.3,1.2-3.5c0.1-0.4-0.1-0.9-0.6-1c-0.4-0.1-0.9,0.1-1,0.6c-0.3,1.1-0.7,2.2-1.2,3.3c-0.4,1.1-1,2.1-1.5,3.1
	C124.5,39.7,124.6,40.2,125,40.4z M114.8,8.3c1,1.9,2.2,4.2,0.3,7.5c-0.3,0.6-0.1,1.3,0.4,1.6c0.6,0.3,1.3,0.2,1.6-0.4
	c2.6-4.5,1.1-7.3-0.3-9.8C116,5.5,115.2,4,117,2.2c0,0,0,0,0,0c0.5-0.5,0.5-1.2,0-1.7c-0.5-0.5-1.2-0.5-1.7,0l0,0
	C112.3,3.6,113.4,5.7,114.8,8.3z M9.3,56c-2.2,0-4.1-0.7-5.5-2s-2.1-3-2.1-5.1c0-2.2,0.7-4,2.1-5.2c1.4-1.2,3.2-2,5.5-2.3l6.4-0.8
	c0.9-0.1,1.5-0.5,1.9-1.2c0.2-0.4,0.3-0.9,0.3-1.6c0-1.4-0.5-2.4-1.5-3c-1-0.6-2.4-0.9-4.2-0.9c-2.1,0-3.6,0.6-4.5,1.7
	c-0.5,0.6-0.8,1.6-1,2.8H3c0.1-3,1-5,2.9-6.2c1.8-1.2,4-1.7,6.4-1.7c2.8,0,5.1,0.5,6.9,1.6c1.8,1.1,2.6,2.8,2.6,5v13.9
	c0,0.4,0.1,0.8,0.3,1c0.2,0.3,0.5,0.4,1.1,0.4c0.2,0,0.4,0,0.6,0c0.2,0,0.5-0.1,0.7-0.1v3c-0.6,0.2-1.1,0.3-1.4,0.3
	c-0.3,0-0.8,0.1-1.3,0.1c-1.4,0-2.4-0.5-3-1.5c-0.3-0.5-0.6-1.3-0.7-2.2c-0.8,1.1-2,2-3.5,2.8C12.8,55.6,11.1,56,9.3,56z M7.2,51.6
	c0.9,0.7,1.9,1,3,1c1.4,0,2.8-0.3,4.1-1c2.2-1.1,3.4-2.9,3.4-5.4V43c-0.5,0.3-1.1,0.6-1.9,0.8c-0.8,0.2-1.5,0.4-2.3,0.5l-2.4,0.3
	c-1.5,0.2-2.6,0.5-3.3,0.9c-1.3,0.7-1.9,1.8-1.9,3.4C5.9,50,6.3,50.9,7.2,51.6z M9.6,26.7c-0.9-0.9-1.4-2-1.4-3.3s0.5-2.4,1.4-3.3
	c0.9-0.9,2-1.4,3.3-1.4c1.3,0,2.4,0.5,3.3,1.4c0.9,0.9,1.4,2,1.4,3.3s-0.5,2.4-1.4,3.3c-0.9,0.9-2,1.4-3.3,1.4
	C11.6,28.1,10.5,27.6,9.6,26.7z M10.1,23.4c0,0.8,0.3,1.4,0.8,2c0.6,0.6,1.2,0.8,2,0.8c0.8,0,1.4-0.3,2-0.8c0.6-0.6,0.8-1.2,0.8-2
	s-0.3-1.4-0.8-2c-0.6-0.6-1.2-0.8-2-0.8c-0.8,0-1.4,0.3-2,0.8C10.4,21.9,10.1,22.6,10.1,23.4z M31.8,55.6c0.6,0,1.1,0,1.6-0.1
	c0.5-0.1,1-0.2,1.4-0.3V52c-0.3,0-0.6,0.1-0.8,0.1s-0.4,0-0.6,0c-0.7,0-1.3-0.1-1.6-0.2C31.3,51.5,31,51,31,50.1V34.4h3.8v-3.3H31
	v-6.7h-4.1v6.7h-3.3v3.3h3.3v15.9c0,1.5,0.3,2.8,1,3.8C28.6,55.1,29.9,55.6,31.8,55.6z M39,50.4c0,1.5,0.3,2.8,1,3.8
	c0.7,1,2,1.4,3.8,1.4c0.6,0,1.1,0,1.6-0.1c0.5-0.1,1-0.2,1.4-0.3V52c-0.3,0-0.6,0.1-0.8,0.1s-0.4,0-0.6,0c-0.7,0-1.3-0.1-1.6-0.2
	c-0.6-0.3-0.9-0.8-0.9-1.7V34.4h3.8v-3.3h-3.8v-6.7H39v6.7h-3.3v3.3H39V50.4z M64.1,39.5c0.2-0.4,0.3-0.9,0.3-1.6
	c0-1.4-0.5-2.4-1.5-3c-1-0.6-2.4-0.9-4.2-0.9c-2.1,0-3.6,0.6-4.5,1.7c-0.5,0.6-0.8,1.6-1,2.8h-3.8c0.1-3,1-5,2.9-6.2
	c1.8-1.2,4-1.7,6.4-1.7c2.8,0,5.1,0.5,6.9,1.6c1.8,1.1,2.6,2.8,2.6,5v13.9c0,0.4,0.1,0.8,0.3,1c0.2,0.3,0.5,0.4,1.1,0.4
	c0.2,0,0.4,0,0.6,0c0.2,0,0.5-0.1,0.7-0.1v3c-0.6,0.2-1.1,0.3-1.4,0.3c-0.3,0-0.8,0.1-1.3,0.1c-1.4,0-2.4-0.5-3-1.5
	c-0.3-0.5-0.6-1.3-0.7-2.2c-0.8,1.1-2,2-3.5,2.8c-1.5,0.8-3.2,1.2-5.1,1.2c-2.2,0-4.1-0.7-5.5-2s-2.1-3-2.1-5.1c0-2.2,0.7-4,2.1-5.2
	c1.4-1.2,3.2-2,5.5-2.3l6.4-0.8C63.1,40.5,63.7,40.1,64.1,39.5z M64.2,43c-0.5,0.3-1.1,0.6-1.9,0.8c-0.8,0.2-1.5,0.4-2.3,0.5
	l-2.4,0.3c-1.5,0.2-2.6,0.5-3.3,0.9c-1.3,0.7-1.9,1.8-1.9,3.4c0,1.2,0.4,2.1,1.3,2.8c0.9,0.7,1.9,1,3,1c1.4,0,2.8-0.3,4.1-1
	c2.2-1.1,3.4-2.9,3.4-5.4V43z M24.5,74.7c-1-0.7-3-1.3-6-2L15.8,72c-1.2-0.3-2.1-0.6-2.7-1c-1.1-0.6-1.6-1.5-1.6-2.5
	c0-1,0.4-1.7,1.2-2.3s2-0.9,3.6-0.9c2.3,0,4,0.5,4.9,1.6c0.6,0.7,0.9,1.6,1,2.5H26c0-1.6-0.5-3-1.5-4.4c-1.6-2.1-4.3-3.2-7.9-3.2
	c-2.8,0-5,0.7-6.7,2.1c-1.7,1.4-2.5,3.2-2.5,5.5c0,1.9,0.9,3.4,2.6,4.5c1,0.6,2.5,1.2,4.6,1.7l3.3,0.8c1.8,0.4,2.9,0.8,3.5,1.1
	c0.9,0.5,1.4,1.3,1.4,2.4c0,1.4-0.6,2.4-1.7,3c-1.2,0.7-2.5,1-4,1c-2.6,0-4.4-0.7-5.4-2c-0.6-0.7-0.9-1.8-1-3.1H6.7
	c0.1,2.4,0.9,4.4,2.4,6c1.5,1.6,4.1,2.4,7.7,2.4c3.4,0,5.9-0.8,7.5-2.3c1.6-1.6,2.5-3.4,2.5-5.5C26.8,77.3,26,75.7,24.5,74.7z
	 M47.2,64.8c2.1,2.1,3.2,5.1,3.2,9.1c0,3.9-0.9,7.1-2.8,9.6c-1.9,2.5-4.8,3.8-8.7,3.8c-3.3,0-5.9-1.1-7.8-3.4
	c-1.9-2.2-2.9-5.2-2.9-9c0-4,1-7.3,3.1-9.6c2-2.4,4.8-3.6,8.2-3.6C42.5,61.7,45.1,62.8,47.2,64.8z M46.2,74.1c0-2.2-0.4-4.1-1.1-5.5
	c-1.1-2.2-3.1-3.3-5.8-3.3c-2.4,0-4.2,0.9-5.3,2.8s-1.7,4.2-1.7,6.8c0,2.6,0.6,4.7,1.7,6.4s2.9,2.6,5.3,2.6c2.6,0,4.5-1,5.5-3
	S46.2,76.6,46.2,74.1z M71.7,65c1.9,2.1,2.9,5.1,2.9,9c0,5.2-1.4,9-4.1,11.2c-1.7,1.4-3.8,2.1-6.1,2.1c-1.8,0-3.3-0.4-4.6-1.2
	c-0.7-0.4-1.5-1.2-2.4-2.3v12.3h-4V62.6h4v3.2c0.8-1.1,1.7-1.9,2.7-2.5c1.4-0.9,3-1.3,4.8-1.3C67.5,61.9,69.8,62.9,71.7,65z
	 M70.4,74.3c0-1.9-0.3-3.6-0.8-4.9c-1.1-2.7-3-4-5.8-4c-2.8,0-4.7,1.4-5.8,4.2c-0.6,1.5-0.8,3.4-0.8,5.7c0,1.9,0.3,3.4,0.8,4.7
	c1.1,2.5,3,3.7,5.8,3.7c1.9,0,3.5-0.8,4.7-2.4C69.8,79.8,70.4,77.5,70.4,74.3z M95.8,65c1.9,2.1,2.9,5.1,2.9,9c0,5.2-1.4,9-4.1,11.2
	c-1.7,1.4-3.8,2.1-6.1,2.1c-1.8,0-3.3-0.4-4.6-1.2c-0.7-0.4-1.5-1.2-2.4-2.3v12.3h-4V62.6h4v3.2c0.8-1.1,1.7-1.9,2.7-2.5
	c1.4-0.9,3-1.3,4.8-1.3C91.5,61.9,93.9,62.9,95.8,65z M94.5,74.3c0-1.9-0.3-3.6-0.8-4.9c-1.1-2.7-3-4-5.8-4c-2.8,0-4.7,1.4-5.8,4.2
	c-0.6,1.5-0.8,3.4-0.8,5.7c0,1.9,0.3,3.4,0.8,4.7c1.1,2.5,3,3.7,5.8,3.7c1.9,0,3.5-0.8,4.7-2.4C93.8,79.8,94.5,77.5,94.5,74.3z
	 M119.3,64.8c2.1,2.1,3.2,5.1,3.2,9.1c0,3.9-0.9,7.1-2.8,9.6s-4.8,3.8-8.7,3.8c-3.3,0-5.9-1.1-7.8-3.4c-1.9-2.2-2.9-5.2-2.9-9
	c0-4,1-7.3,3.1-9.6c2-2.4,4.8-3.6,8.2-3.6C114.5,61.7,117.1,62.8,119.3,64.8z M118.2,74.1c0-2.2-0.4-4.1-1.1-5.5
	c-1.1-2.2-3.1-3.3-5.8-3.3c-2.4,0-4.2,0.9-5.3,2.8s-1.7,4.2-1.7,6.8c0,2.6,0.6,4.7,1.7,6.4s2.9,2.6,5.3,2.6c2.7,0,4.5-1,5.5-3
	S118.2,76.6,118.2,74.1z M136,61.9c-1.6,0-3,0.6-4.2,1.7c-1.2,1.2-2,2.1-2.3,3v-4.2h-3.8v24.1h4V72.7c0-1.7,0.5-3.2,1.6-4.5
	c1.1-1.3,2.7-2,4.7-2c0.2,0,0.5,0,0.7,0c0.2,0,0.4,0,0.7,0.1V62c-0.4,0-0.7-0.1-0.9-0.1S136.1,61.9,136,61.9z"
    />
    />
  </LogoStyle>
);

export default Logotype;
