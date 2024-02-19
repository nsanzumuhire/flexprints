import '../global.css';

import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import LowerFooter from '../../components/shared/LowerFooter';


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className=''>
				<Header/>
				<div className="p-2 w-full mx-0 xl:mx-auto">
          {children}
        </div>
				<Footer/>
        <LowerFooter/>
		</div>
	);
}
