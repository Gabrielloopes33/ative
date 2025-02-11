import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';

const InteractiveBackground = () => (
  <div className="absolute inset-0 -z-10 min-h-full">
    <div className="absolute inset-0 bg-white">
      {/* Grade de linhas horizontais */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent" 
           style={{ backgroundSize: '100% 80px', backgroundImage: 'repeating-linear-gradient(0deg,rgb(255, 255, 255), #f0f0f0 1px, transparent 1px, transparent 50px)' }}>
      </div>
      
      {/* Grade de linhas verticais */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"
           style={{ backgroundSize: '80px 100%', backgroundImage: 'repeating-linear-gradient(90deg,rgb(255, 255, 255), #f0f0f0 1px, transparent 1px, transparent 50px)' }}>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <div className="relative">
        <Banner />
        <Companies />
        <Buyers />
        <Provide />
        <Why />
        <Clientsay />
        <Newsletter />
      </div>
    </main>
  );
}