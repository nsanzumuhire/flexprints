import './global.css';
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import LowerFooter from './components/shared/LowerFooter';
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: 'Flexprints',
  description: `Flexprints is a leading company specializing in custom apparel printing, offering a wide range of services tailored to meet the unique needs of their clients. With cutting-edge technology and a commitment to quality, they ensure vibrant and durable prints on t-shirts and various clothing styles. Their dedication to customer satisfaction and attention to detail have made them a trusted choice for individuals and businesses alike seeking personalized garments. Whether it's for promotional events, team uniforms, or personal expression, Flexprints delivers exceptional results that make a lasting impression.`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="light">
			<body className={`${poppins.className}`} >
				{/* <Header/> */}
				<div className="p-2 w-full mx-0 xl:mx-auto">
        {children}
        </div>
				{/* <Footer/>
        <LowerFooter/> */}
			</body>
		</html>
	);
}
